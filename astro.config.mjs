import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/edge';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  experimental: {
    assets: true
   },
  integrations: [tailwind()],
  adapter: vercel({
    imageService: true,
  }),
});
