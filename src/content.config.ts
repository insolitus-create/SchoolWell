import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    format: z.string(),
    time: z.string(),
    /** Exercises 17–23 of the Teacher's Guide have no stated goal. */
    goal: z.string().optional(),
    /** Device the SchoolWell app is shown on, for app-based exercises. */
    app: z.string().optional(),
    order: z.number().int().min(1).max(23),
  }),
});

export const collections = { activities };
