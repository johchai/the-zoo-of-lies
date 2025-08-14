import { Hono } from "hono";
import { renderer } from "./renderer";
import { routeAPI } from "./api";
import { routeClient } from "./client";

// this is the main entry point for the application

type CloudflareBindings = {
  QUOTE: KVNamespace;
};
const app = new Hono<{ Bindings: CloudflareBindings }>();

// use the renderer for all routes
app.use(renderer);

// return client
app.route("/", routeClient);

// return API
app.route("/api", routeAPI);

export default app;
