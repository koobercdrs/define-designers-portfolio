import { Fragment } from 'react'

import { Hero } from './components/hero'
import { About } from './components/about'
import { CTA } from './components/cta'

import { DraftView as IDraftView } from '@/payload-types'

export const DraftView = ({ content }: { content: IDraftView }) => {
  return (
    <Fragment>
      <Hero content={content.hero} />
      <About />
      <CTA content={content.cta} />
    </Fragment>
  )
}
