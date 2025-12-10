import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { resendAdapter } from '@payloadcms/email-resend'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import path from 'path'

import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'

import { PortfolioView } from './payload/views/portfolio-view'
import { ServiceView } from './payload/views/services-view'
import { HomeView } from './payload/views/home-view'
import { ContactView } from './payload/views/contact-view'
import { DraftView } from './payload/views/draft-view'
import { LayoutView } from './payload/views/layout-view'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  sharp,
  plugins: [
    uploadthingStorage({
      enabled: true,
      collections: { media: true },
      options: { token: process.env.UPLOADTHING_TOKEN, acl: 'public-read' },
    }),
  ],
  defaultDepth: 2,
  collections: [Users, Media],
  globals: [HomeView, ServiceView, PortfolioView, ContactView, DraftView, LayoutView],
  email: resendAdapter({
    defaultFromAddress: 'Acme <onboarding@resend.dev>',
    apiKey: process.env.RESEND_API || '',
    defaultFromName: 'Define',
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  db: mongooseAdapter({ url: process.env.DATABASE_URL || '' }),
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  admin: { user: Users.slug, importMap: { baseDir: path.resolve(dirname) } },
})
