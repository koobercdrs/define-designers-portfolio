import { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache';

export const ContactView: GlobalConfig = {
  slug: 'contact-view',
    hooks: {
    afterChange: [
      async () => {
        revalidatePath('/', 'layout');
      },
    ],
  },
  fields: [
    {
      type: 'group',
      name: 'form',
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
  ],
}
