import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  integrations: [tailwind(), mdx()],
  adapter: vercel({
    imageService: true,
  }),
});
