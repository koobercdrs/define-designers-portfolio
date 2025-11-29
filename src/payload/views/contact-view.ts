import { GlobalConfig } from 'payload'

export const ContactView: GlobalConfig = {
  slug: 'contact-view',
  fields: [
    {
      required: true,
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
