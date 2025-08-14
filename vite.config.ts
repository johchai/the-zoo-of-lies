import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import ssrPlugin from "vite-ssr-components/plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [cloudflare(), ssrPlugin(), tailwindcss()],
  build: {
    rollupOptions: {
      input: ["./src/style/globals.css"],
      output: {
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
});
