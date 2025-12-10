import localFont from 'next/font/local'
import { Metadata } from 'next'
import React, { cache } from 'react'

import { Layout } from '@/components/layout'

import '@/styles/styles.css'
import { cn } from '@/library/utils'
import { getPayload } from '@/library/payload'

const overused = localFont({
  src: '../../fonts/OverusedGrotesk.ttf',
  variable: '--font-primary',
})

export const metadata: Metadata = {
  title: 'Define',
  icons: { icon: '/icons/logo.png' },
  description: 'A blank template using Payload in a Next.js app.',
}

const getData = cache(async () => {
  try {
    const payload = await getPayload()

    const data = await payload.findGlobal({ slug: 'layout-view' })

    return data
  } catch (_) {
    return null
  }
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const content = await getData()

  return (
    <html lang="en" className={cn(overused.variable, 'overflow-x-hidden scroll-smooth')}>
      <body className="overflow-x-hidden scroll-smooth bg-black">
        <Layout content={content}>{children}</Layout>
      </body>
    </html>
  )
}
// OverusedGrotesk.ttf
