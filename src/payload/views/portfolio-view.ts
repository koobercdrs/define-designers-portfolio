import { GlobalConfig } from 'payload'

export const PortfolioView: GlobalConfig = {
  slug: 'portfolio-view',
  fields: [
    // Hero
    {
      name: 'hero',
      type: 'group',
      required: true,
      fields: [
        {
          type: 'text',
          name: 'title',
          required: true,
        },
        {
          type: 'textarea',
          name: 'subtitle',
          required: true,
        },
        {
          type: 'text',
          name: 'btn',
          required: true,
        },
      ],
    },

    // Projects
    {
      name: 'projects',
      required: true,
      type: 'group',
      fields: [
        {
          type: 'text',
          name: 'title',
          required: true,
        },
        {
          type: 'textarea',
          name: 'subtitle',
          required: true,
        },
        {
          required: true,
          type: 'array',
          name: 'list',
          fields: [
            {
              name: 'image',
              type: 'upload',
              required: true,
              relationTo: 'media',
            },
            {
              type: 'text',
              name: 'link',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
