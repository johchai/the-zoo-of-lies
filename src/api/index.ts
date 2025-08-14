import { Hono } from "hono";
import { quotesRoutes } from "./quotes";

type CloudflareBindings = {
  QUOTES: KVNamespace;
};

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.route("/quotes", quotesRoutes);

app.get("/", (c) => {
  return c.json({
    message: "Quoutes API",
    endpoints: {
      random: "/quotes/random?count=1",
      specific: "/quotes/:id",
    },
  });
});

export { app as routeAPI };
