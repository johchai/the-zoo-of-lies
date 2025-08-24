import { createRoute } from "honox/factory";
import Counter from "../../islands/counter";
import { getConnInfo } from "hono/cloudflare-workers";

export default createRoute((c) => {
  const ip =
    // c.req.header("cf-connecting-ip") ||
    getConnInfo(c).remote.address || "unknown";

  return c.render(
    <main class="flex h-screen items-center justify-center">
      <title>Homepage</title>
      <div>Your IP is {ip}</div>
      <Counter />
    </main>
  );
});
