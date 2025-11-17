import { Fragment } from 'react'

import { Hero } from './components/hero'
import { Work } from './components/work'
import { About } from './components/about'
import { CTA } from './components/cta'

export const HomeView = () => {
  return (
    <Fragment>
      <Hero />
      <Work />
      <About />
      <CTA />
    </Fragment>
  )
}
