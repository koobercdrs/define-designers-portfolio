import { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache';

export const DraftView: GlobalConfig = {
  slug: 'draft-view',
    hooks: {
    afterChange: [
      async () => {
        revalidatePath('/', 'layout');
      },
    ],
  },
  fields: [
    // Hero
    {
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
