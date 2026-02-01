import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    category: z.enum(['professional', 'personal', 'academic']),
    github: z.string().optional(),
    demo: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { projects };