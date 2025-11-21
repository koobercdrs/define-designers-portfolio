'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import SpotlightCard from '@/components/common/spotlight-card'
import { routes } from '@/configs/routes'
import { cn } from '@/library/utils'

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <SpotlightCard spotlightColor="rgba(187, 74, 247, 0.8)" className="pointer-events-auto p-0">
      <nav className="hidden h-10 w-full max-w-[421px] rounded-4xl border border-white/10 bg-linear-to-b from-[#101010]/10 to-white/10 px-8 backdrop-blur-lg lg:flex">
        <ul className="flex size-full items-center gap-6">
          {routes.map((route, index) => {
            const isActive = pathname === route.href
            return (
              <li
                key={index}
                className={cn(
                  'flex h-full items-center justify-center rounded-3xl px-3 text-sm font-light',
                  isActive
                    ? 'bg-black/20 text-[#BB7EFF]'
                    : 'text-white hover:bg-black/20 hover:text-[#BB7EFF]',
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
