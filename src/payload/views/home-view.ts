import { GlobalConfig } from 'payload'

export const HomeView: GlobalConfig = {
  slug: 'home-view',
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

    // Work
    {
      name: 'work',
      type: 'array',
      required: true,
      fields: [{ name: 'icon', type: 'text', required: true }],
    },

    // About
    {
      name: 'about',
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
