```bash
npm install
npm run dev
```

```bash
npm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```bash
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>();
```

Run the worker to see the KV using Wrangler:

```bash
wrangler dev --remote
```

Deploy the worker using Wrangler:

```bash
wrangler deploy
```

We have bind a KV namespace to the worker in `wrangler.toml`:

There is "id" and "preview_id" for the KV namespace. The "id" is used for production and the "preview_id" is used for preview environments. To see them in the development, use `wrangler dev --remote` command. Deployment should use the "id" for production.

```toml
kv_namespaces = [
  { binding = "MY_KV", id = "your-kv-namespace-id", preview_id = "your-kv-namespace-preview-id" }
]
```
