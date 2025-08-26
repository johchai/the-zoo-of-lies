import { Hono } from "hono";

type AppType = {
  Variables: {
    rateLimit: boolean;
  };
  Bindings: {
    FACTS: KVNamespace;
    RATE_LIMITER: RateLimit;
  };
};

const app = new Hono<AppType>();

// middleware to handle rate limiting - lazy import AND only in prod since this will not be used in dev
if (process.env.NODE_ENV === "production") {
  const { cloudflareRateLimiter } = await import(
    "@hono-rate-limiter/cloudflare"
  );

  app.use(
    cloudflareRateLimiter<AppType>({
      rateLimitBinding: (c) => c.env.RATE_LIMITER,
      keyGenerator: (c) => c.req.header("cf-connecting-ip") ?? "",
      handler: (c) =>
        c.json(
          {
            error: "Rate limit exceeded. Please try again later.",
            count: 0
          },
          429
        )
    })
  );
}

// GET /the-zoo-of-lies/api/
app.get("/", async (c) => {
  const countParam = c.req.query("count");
  const count = Math.max(1, Math.min(10, parseInt(countParam || "1"))); // clamp to 1–10

  try {
    const list = await c.env.FACTS.list();
    const keys = list.keys.map((k) => k.name);

    if (!keys.length) {
      return c.json({ facts: [], count: 0, error: "No facts available" }, 404);
    }

    // shuffle + pick
    const shuffledKeys = [...keys].sort(() => 0.5 - Math.random());
    const selectedKeys = shuffledKeys.slice(0, Math.min(count, keys.length));

    const facts = await Promise.all(
      selectedKeys.map(async (id) => {
        const fact = await c.env.FACTS.get(id);
        return fact ? { id, fact } : null;
      })
    );

    const validFacts = facts.filter(Boolean) as { id: string; fact: string }[];

    return c.json({
      facts: validFacts,
      count: validFacts.length
    });
  } catch (error) {
    return c.json(
      { facts: [], count: 0, error: "Failed to fetch random facts" },
      500
    );
  }
});

// GET /the-zoo-of-lies/api/:id
app.get("/:id", async (c) => {
  const id = c.req.param("id");

  if (!id?.trim()) {
    return c.json({ facts: [], count: 0, error: "Invalid fact ID" }, 400);
  }

  try {
    const fact = await c.env.FACTS.get(id);

    if (!fact) {
      return c.json({ facts: [], count: 0, error: "Fact not found" }, 404);
    }

    return c.json({
      facts: [{ id, fact }],
      count: 1
    });
  } catch (error) {
    return c.json({ facts: [], count: 0, error: "Failed to fetch fact" }, 500);
  }
});

export default app;
