import { Fragment } from 'react'

import { Projects } from './components/projects'
import { Hero } from './components/hero'
import { PortfolioView as IPortfolioView } from '@/payload-types'

export const PortfolioView = ({ content }: { content: IPortfolioView }) => {
  return (
    <Fragment>
      <Hero content={content.hero} />
      <Projects content={content.projects} />
    </Fragment>
  )
}
