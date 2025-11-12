import { Fragment, ReactNode } from 'react'

import { Footer } from './footer'
import { Navbar } from './navbar'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </Fragment>
  )
}
