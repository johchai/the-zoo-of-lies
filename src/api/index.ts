import { Hono } from "hono";

const app = new Hono();

export const routeAnimals = app.get("/", (c) => {
  return c.json([
    { id: 1, name: "Lion" },
    { id: 2, name: "Tiger" },
    { id: 3, name: "Bear" },
  ]);
});
