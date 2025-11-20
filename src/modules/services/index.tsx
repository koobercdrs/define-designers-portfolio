import { Fragment } from 'react'

import { Hero } from './components/hero'
import { Services } from './components/services'
import { CTA } from './components/cta'

export const ServicesView = () => {
  return (
    <Fragment>
      <Hero />
      <Services />
      <CTA />
    </Fragment>
  )
}
