import React from 'react'

import { Layout } from '@/components/layout'

import './styles.css'

export const metadata = {
  title: 'Define',
  description: 'A blank template using Payload in a Next.js app.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
