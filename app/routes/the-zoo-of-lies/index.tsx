import { createRoute } from "honox/factory";
import Counter from "../../islands/counter";

export default createRoute((c) => {
  return c.render(
    <main class="flex h-screen items-center justify-center">
      <title>Homepage</title>
      <Counter />
    </main>
  );
});
