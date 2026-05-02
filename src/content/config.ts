import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    topic: z.enum(["AI", "Strategy", "Product", "Technology", "Life"]),
    draft: z.boolean().default(false),
  }),
});

const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    loomUrl: z.string().url().optional(),
    link: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, products };
