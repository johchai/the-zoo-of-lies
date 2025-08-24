import { showRoutes } from "hono/dev";
import { trimTrailingSlash } from "hono/trailing-slash";
import { createApp } from "honox/server";

// server entry file
const app = createApp();

// middleware to handle trailing slash redirects
app.use(trimTrailingSlash());

showRoutes(app);

export default app;
