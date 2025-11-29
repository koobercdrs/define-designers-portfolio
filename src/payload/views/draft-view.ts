import { GlobalConfig } from 'payload'

export const DraftView: GlobalConfig = {
  slug: 'draft-view',
  fields: [
    // Hero
    {
      required: true,
      type: 'group',
      name: 'hero',
      fields: [
        {
          required: true,
          name: 'title',
          type: 'text',
        },
        {
          required: true,
          name: 'subtitle',
          type: 'textarea',
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
