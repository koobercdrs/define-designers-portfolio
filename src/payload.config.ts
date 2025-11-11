import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import path from 'path'

import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  sharp,
  plugins: [],
  collections: [Users, Media],
  secret: process.env.PAYLOAD_SECRET || '',
  db: mongooseAdapter({ url: process.env.DATABASE_URL || '' }),
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  admin: { user: Users.slug, importMap: { baseDir: path.resolve(dirname) } },
})
