// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      tags: z.string()
    })
});
const voiceCollection = defineCollection({
    type: 'content',
    schema: z.object({
      preview: z.string(),
      date: z.date(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  voice: voiceCollection,
};
