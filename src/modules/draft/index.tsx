import { Fragment } from 'react'

import { Hero } from './components/hero'
import { About } from './components/about'
import { CTA } from './components/cta'

export const DraftView = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <CTA />
    </Fragment>
  )
}
