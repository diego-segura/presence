import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  ""
);

const projectId = PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_DATASET;
// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    tailwind(),
    mdx(),
    sanity({
      projectId: projectId,
      dataset: dataset,
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
  ],
  adapter: vercel({
    imageService: true,
  }),
});
