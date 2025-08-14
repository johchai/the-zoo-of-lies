import { Hono } from "hono";

type CloudflareBindings = {
  FACTS: KVNamespace;
};

const app = new Hono<{ Bindings: CloudflareBindings }>();

export const routeAnimals = app.get("/", async (c) => {
  // Fetch animal facts from KV storage
  const facts = await c.env.FACTS.list();
  return c.json(facts);

  // For demonstration purposes, returning a static list of animals
  // return c.json([
  //   { id: 1, name: "Lion" },
  //   { id: 2, name: "Tiger" },
  //   { id: 3, name: "Bear" },
  // ]);
});
