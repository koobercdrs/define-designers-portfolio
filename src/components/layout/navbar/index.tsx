'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { ThemeSelector } from './theme-selector'
import { Button } from '@/components/ui/button'
import { MobileMenu } from './mobile-menu'
import { Navigation } from './navigation'
import SpotlightCard from '@/components/common/spotlight-card'

export const Navbar = () => {
  const pathname = usePathname()

  const isHome = pathname === '/'

  return (
    <header className="pointer-events-none absolute top-5 z-50 w-full lg:top-8">
      <div className="main-container flex items-center justify-between gap-4">
        <div className="flex flex-col gap-8">
          <Link className="pointer-events-auto" href="/">
            <Image
              className="lg:w-[78px]"
              src="/icons/logo.png"
              height={27}
              width={70}
              alt="logo"
            />
          </Link>

          <Navigation />
        </div>

        <div className="pointer-events-auto flex items-center gap-6">
          {!isHome ? (
            <Button className="bg-[#D8D4CA] text-black">
              <Link href="/contact">Get started</Link>
            </Button>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <h1 className="hidden text-center text-xl font-bold text-[#D8D4CA] lg:flex xl:max-w-[120px]">
                CHANGE DESIGN
              </h1>

              <ThemeSelector />
            </div>
          )}

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
