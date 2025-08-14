import { Hono } from "hono";
import { renderer } from "./renderer";
import { routeAnimals } from "./api";
import { routeClient } from "./client";

// this is the main entry point for the application
// it will serve a frontend and an API

const app = new Hono();

// use the renderer for all routes
app.use(renderer);

// return client
app.route("/", routeClient);

// return API
app.route("/animals", routeAnimals);

export default app;
