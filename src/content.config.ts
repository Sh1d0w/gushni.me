import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cats = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cats' }),
  schema: z.object({
    // Името на котето, показвано навсякъде по сайта
    name: z.string(),
    gender: z.enum(['мъжко', 'женско']),
    // Свободен текст, напр. "~2 месеца"
    age: z.string(),
    color: z.string(),
    // Кратки характеристики, показвани като етикети
    personality: z.array(z.string()).default([]),
    status: z.enum(['свободно', 'запазено', 'осиновено']).default('свободно'),
    // Път до снимка в /public, напр. "/images/cats/simba/cover.jpg"
    // Ако липсва, се показва placeholder илюстрация
    image: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    // По-малко число = по-напред в списъка
    order: z.number().default(0),
  }),
});

const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    // slug-овете на котетата (имената на файловете), за които се отнася новината
    relatedCats: z.array(z.string()).default([]),
  }),
});

export const collections = { cats, updates };
