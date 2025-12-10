'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { LiquidGlassCard } from '@/components/common/liquid-glass-card'
import { routes } from '@/configs/routes'
import { cn } from '@/library/utils'

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <LiquidGlassCard
      draggable={false}
      blurIntensity="sm"
      shadowIntensity="sm"
      borderRadius="0px 32px 32px 0px"
      className="rounded-0 pointer-events-auto hidden h-10 w-full max-w-[430px] rounded-r-4xl p-0 px-8 lg:flex"
    >
      <nav className="relative z-30">
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
    </LiquidGlassCard>
  )
}
