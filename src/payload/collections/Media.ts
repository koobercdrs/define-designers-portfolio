import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    disableLocalStorage: true,
    formatOptions: {
      format: 'webp',
      options: { quality: 100 },
    },
    resizeOptions: {
      width: 1920,
      height: 1080,
    },
  },
  admin: { description: 'Upload an media' },
  labels: { singular: 'ფაილი', plural: 'ფაილები' },
  fields: [{ name: 'alt', type: 'text', required: true, localized: true }],
}
