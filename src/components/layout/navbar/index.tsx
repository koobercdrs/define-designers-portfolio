import Image from 'next/image'

import { ColorsSelector } from './colors-selector'
import { MobileMenu } from './mobile-menu'

export const Navbar = () => {
  return (
    <header className="main-container fixed top-5 z-50">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Image src="/icons/logo.png" alt="logo" width={70} height={27} />

          <Navigation />
        </div>

        <div className="flex items-center gap-6">
          <ColorsSelector />

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

const Navigation = () => {
  return <nav></nav>
}
