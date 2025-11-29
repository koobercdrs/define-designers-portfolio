import { Fragment } from 'react'

import { Hero } from './components/hero'
import { Services } from './components/services'
import { CTA } from './components/cta'

import { ServiceView } from '@/payload-types'

export const ServicesView = ({ content }: { content: ServiceView }) => {
  return (
    <Fragment>
      <Hero content={content.hero} />
      <Services content={content.services} />
      <CTA content={content.cta} />
    </Fragment>
  )
}
