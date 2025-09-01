import type {} from "hono";

declare module "hono" {
  interface Env {
    Variables: {
      rateLimit: boolean;
    };
    Bindings: {
      API_URL: string;
      FACTS: KVNamespace;
      RATE_LIMITER: RateLimit;
    };
  }
}

// now you can export it explicitly
export type { Env };
