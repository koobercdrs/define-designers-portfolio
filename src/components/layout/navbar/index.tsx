import Image from 'next/image'

import { ThemeSelector } from './theme-selector'
import { MobileMenu } from './mobile-menu'
import { Navigation } from './navigation'

export const Navbar = () => {
  return (
    <header className="fixed top-5 z-50 w-full lg:top-16">
      <div className="main-container flex items-center justify-between gap-4 lg:items-start">
        <div className="flex flex-col gap-8">
          <Image className="lg:w-[78px]" src="/icons/logo.png" alt="logo" width={70} height={27} />

          <Navigation />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="hidden text-center text-xl font-bold text-[#D8D4CA] lg:flex">
              CHANGE DESIGN
            </h1>

            <ThemeSelector />
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
