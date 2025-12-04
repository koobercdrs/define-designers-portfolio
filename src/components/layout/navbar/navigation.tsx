'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import SpotlightCard from '@/components/common/spotlight-card'
import { routes } from '@/configs/routes'
import { cn } from '@/library/utils'

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <SpotlightCard
      spotlightColor="rgba(133, 35, 186, 1)"
      className="rounded-0 pointer-events-auto hidden rounded-r-4xl p-0 lg:flex"
    >
      <nav className="liquid-glass h-10 w-full max-w-[430px] border border-white/10 bg-linear-to-b from-[#101010]/10 to-white/10 px-8 backdrop-blur-lg">
        <ul className="flex size-full items-center gap-6">
          {routes.map((route, index) => {
            const isActive = pathname === route.href

            return (
              <li
                key={index}
                className={cn(
                  'flex h-full items-center justify-center rounded-3xl px-3 text-sm font-light',
                  isActive ? 'font-semibold text-[#BB7EFF]' : 'text-white/60 hover:text-white',
                )}
              >
                <Link href={route.href}>{route.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </SpotlightCard>
  )
}
