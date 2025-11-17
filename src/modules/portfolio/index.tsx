import { Fragment } from 'react'

import { Projects } from './components/projects'
import { Hero } from './components/hero'

export const PortfolioView = () => {
  return (
    <Fragment>
      <Hero />
      <Projects />
    </Fragment>
  )
}
