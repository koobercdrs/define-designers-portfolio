import { Fragment } from 'react'

import { Hero } from './components/hero'
import { Work } from './components/work'
import { About } from './components/about'
import { CTA } from './components/cta'

import { HomeView as IHomeView } from '@/payload-types'

export const HomeView = ({ content }: { content: IHomeView }) => {
  return (
    <Fragment>
      <Hero content={content.hero} />
      <Work content={content.work} />
      <About content={content.about} />
      <CTA content={content.cta} />
    </Fragment>
  )
}
