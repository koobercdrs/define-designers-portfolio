import { ReactNode } from 'react'

import { ThemeProvider } from '@/modules/home/context/theme-context'

import { Footer } from './footer'
import { Navbar } from './navbar'
import { LayoutView } from '@/payload-types'

export const Layout = ({
  children,
  content,
}: {
  children: ReactNode
  content: LayoutView | null
}) => {
  return (
    <ThemeProvider>
      <Navbar />

      <main>{children}</main>

      <Footer content={content} />
    </ThemeProvider>
  )
}
