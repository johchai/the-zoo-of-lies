import { createRoute } from "honox/factory";
import { BASE_URL } from "../constants/meta";

// Redirect root ("/") to BASE_URL so that the deployed app on Cloudflare Workers
// always starts from our intended base path (e.g. "/the-zoo-of-lies")
export default createRoute((c) => c.redirect(BASE_URL));
