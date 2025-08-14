import { Hono } from "hono";
import { Page } from "./page";

export const routeClient = new Hono();

routeClient.get("/", (c) => {
  return c.render(Page());
});
