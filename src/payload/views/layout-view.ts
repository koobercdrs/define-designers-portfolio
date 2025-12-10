import { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache';

export const LayoutView: GlobalConfig = {
  slug: 'layout-view',
    hooks: {
    afterChange: [
      async () => {
        revalidatePath('/', 'layout');
      },
    ],
  },
  fields: [
    {
      name: 'media',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'info',
      type: 'text',
      required: true,
    },
  ],
}
