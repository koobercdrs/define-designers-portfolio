import { Fragment } from 'react'

import { Hero } from './components/hero'
import { Work } from './components/work'
import { About } from './components/about'

export const HomeView = () => {
  return (
    <Fragment>
      <Hero />
      <Work />
      <About />
    </Fragment>
  )
}
