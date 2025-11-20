import localFont from 'next/font/local'
import { Metadata } from 'next'
import React from 'react'

import { Layout } from '@/components/layout'

import '@/styles/styles.css'
import { cn } from '@/library/utils'

const overused = localFont({
  src: '../../fonts/OverusedGrotesk.ttf',
  variable: '--font-primary',
})

export const metadata: Metadata = {
  title: 'Define',
  icons: { icon: '/icons/logo.png' },
  description: 'A blank template using Payload in a Next.js app.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={cn(overused.variable, 'scroll-smooth')}>
      <body className="overflow-x-hidden scroll-smooth bg-black">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
// OverusedGrotesk.ttf
