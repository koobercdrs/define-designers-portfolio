import { ReactNode } from 'react'

import { ThemeProvider } from '@/modules/home/context/theme-context'

import { Footer } from './footer'
import { Navbar } from './navbar'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </ThemeProvider>
  )
}
