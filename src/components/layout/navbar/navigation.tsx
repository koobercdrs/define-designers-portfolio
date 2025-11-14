'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { routes } from '@/configs/routes'
import { cn } from '@/library/utils'

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className="h-10 w-full max-w-[421px] rounded-4xl bg-white/30 px-8 backdrop-blur-sm">
      <ul className="flex size-full items-center gap-6">
        {routes.map((route, index) => {
          const active = pathname === route.href

          return (
            <li
              key={index}
              className={cn(
                'flex h-full items-center justify-center rounded-3xl px-3 text-sm font-light',
                active ? 'bg-black/20 text-[#BB7EFF]' : 'text-white',
              )}
            >
              <Link href={route.href}>{route.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
