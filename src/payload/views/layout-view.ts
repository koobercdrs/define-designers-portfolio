import { GlobalConfig } from 'payload'

export const LayoutView: GlobalConfig = {
  slug: 'layout-view',
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
