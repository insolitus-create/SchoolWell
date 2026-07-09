import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    format: z.string(),
    time: z.string(),
    goals: z.array(z.string()).min(1),
    order: z.number().int().min(1).max(7),
  }),
});

export const collections = { activities };
