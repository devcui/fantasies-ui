import { defineCollection, z } from '@nuxt/content'

const schema = z.object({
  category: z.array(z.string()).optional(),
  module: z.string().optional(),
  navigation: z.object({
    title: z.string().optional()
  }),
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    to: z.string(),
    target: z.string().optional()
  }))
})

export const collections = {
  content: defineCollection({
    type: 'page',
    source: [{ include: '**/*' }].filter(Boolean),
    schema
  })
}
