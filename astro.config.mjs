import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://stopinski.at",
  output: "server",
  adapter: cloudflare({
    runtime: {
      mode: "local",
    },
  }),
});
