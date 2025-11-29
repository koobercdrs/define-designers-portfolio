import { GlobalConfig } from 'payload'

export const ServiceView: GlobalConfig = {
  slug: 'service-view',
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

    // Services
    {
      name: 'services',
      required: true,
      type: 'group',
      fields: [
        {
          type: 'text',
          name: 'title',
          required: true,
        },
        {
          name: 'list',
          type: 'array',
          required: true,
          fields: [
            {
              type: 'text',
              name: 'title',
              required: true,
            },
            {
              name: 'desc',
              required: true,
              type: 'textarea',
            },
          ],
        },
      ],
    },

    // CTA
    {
      required: true,
      type: 'group',
      name: 'cta',
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
          name: 'primary_btn',
          required: true,
        },
        {
          type: 'text',
          name: 'secondary_btn',
          required: true,
        },
      ],
    },
  ],
}
