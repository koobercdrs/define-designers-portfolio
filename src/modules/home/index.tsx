import { Fragment } from 'react'

import { Hero } from './components/hero'
import { Work } from './components/work'

export const HomeView = () => {
  return (
    <Fragment>
      <Hero />
      <Work />
    </Fragment>
  )
}
