import build from "@hono/vite-build/cloudflare-workers";
import adapter from "@hono/vite-dev-server/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    honox({
      devServer: { adapter },
      client: { input: ["./app/styles/globals.css"] },
      islandComponents: {
        reactApiImportSource: "hono/jsx"
      }
    }),
    tailwindcss(),
    build(),
    tsconfigPaths()
  ],
  build: {
    rollupOptions: {
      external: ["cloudflare:workers"]
    },
    target: "esnext"
  }
});
