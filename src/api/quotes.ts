import { Hono } from "hono";

type CloudflareBindings = {
  QUOTES: KVNamespace;
};

export const quotesRoutes = new Hono<{ Bindings: CloudflareBindings }>();

// GET /quotes/random?count=5
quotesRoutes.get("/random", async (c) => {
  const countParam = c.req.query("count");
  const count = Math.max(1, Math.min(100, parseInt(countParam || "1")));

  try {
    // Get all quotes keys
    const list = await c.env.QUOTES.list();
    const keys = list.keys.map((k) => k.name);

    if (!keys.length) {
      return c.json({ error: "No quotes available" }, 404);
    }

    // Get random quotes
    const shuffledKeys = [...keys].sort(() => 0.5 - Math.random());
    const selectedKeys = shuffledKeys.slice(0, Math.min(count, keys.length));

    const quotes = await Promise.all(
      selectedKeys.map(async (id) => {
        const quote = await c.env.QUOTES.get(id);
        return quote ? { id, quote } : null;
      })
    );

    const validQuotes = quotes.filter(Boolean) as {
      id: string;
      quote: string;
    }[];

    return c.json({
      quotes: validQuotes,
      count: validQuotes.length,
    });
  } catch (error) {
    return c.json({ error: "Failed to fetch random quotes" }, 500);
  }
});

// GET /quotes/:id
quotesRoutes.get("/:id", async (c) => {
  const id = c.req.param("id");

  if (!id?.trim()) {
    return c.json({ error: "Invalid quote ID" }, 400);
  }

  try {
    const quotes = await c.env.QUOTES.get(id);

    if (!quotes) {
      return c.json({ error: "Quote not found" }, 404);
    }

    return c.json({ id, quotes });
  } catch (error) {
    return c.json({ error: "Failed to fetch quote" }, 500);
  }
});
