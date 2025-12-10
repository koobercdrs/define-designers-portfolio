import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    formatOptions: {
      format: 'webp',
      options: { quality: 90 },
    },
    resizeOptions: {
      width: 1920,
      height: 1080,
    },
  },
  access: { read: () => true },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
