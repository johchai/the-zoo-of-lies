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

We have to bind a KV namespace to the worker in `wrangler.toml` file to read our content.

```toml
kv_namespaces = [
  { binding = "MY_KV", id = "your-kv-namespace-id", preview_id = "your-kv-namespace-preview-id" }
]
```
