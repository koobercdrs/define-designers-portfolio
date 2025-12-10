import { GlobalConfig } from 'payload'

export const HomeView: GlobalConfig = {
  slug: 'home-view',
  fields: [
    // Hero
    {
      name: 'hero',
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
      fields: [
        { name: 'text', type: 'text' },
        { name: 'href', type: 'text' },
        { name: 'icon', type: 'upload', relationTo: 'media' },
        {
          name: 'type',
          type: 'select',
          required: true,
          defaultValue: 'text',
          options: ['icon', 'text'],
        },
      ],
    },

    // About
    {
      name: 'about',
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
          type: 'upload',
          required: true,
          name: 'first_img',
          relationTo: 'media',
        },
        {
          type: 'upload',
          required: true,
          name: 'second_img',
          relationTo: 'media',
        },
      ],
    },

    // CTA
    {
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
