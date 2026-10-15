import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every bug report must have these fields. If one is missing or misspelled,
// Astro shows an error, so a half-written report can never go live.
const bugs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bugs' }),
  schema: z.object({
    code: z.string(),
    title: z.string(),
    project: z.enum(['MUSÉA', 'Portfolio']),
    module: z.string(),
    severity: z.enum(['Critical', 'High', 'Medium', 'Low']),
    priority: z.enum(['Critical', 'High', 'Medium', 'Low']),
    status: z.enum(['Open', 'Fixed', 'Verified']),
    found: z.coerce.date(),
    environment: z.string(),
    steps: z.array(z.string()),
    expected: z.string(),
    actual: z.array(z.string()),
    cause: z.string().optional(),
    fix: z.string().optional(),
  }),
});

export const collections = { bugs };