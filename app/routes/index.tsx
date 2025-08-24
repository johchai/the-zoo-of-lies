// app/routes/index.tsx

import { createRoute } from "honox/factory";

// Redirect root ("/") to BASE_URL so that the deployed app on Cloudflare Workers
// always starts from our intended base path (e.g. "/the-zoo-of-lies")
export default createRoute((c) => c.redirect("/the-zoo-of-lies/", 301));
