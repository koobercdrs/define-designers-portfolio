import Link from 'next/link'

import { routes } from '@/configs/routes'

export const Navigation = () => {
  return (
    <nav className="hidden h-10 w-full max-w-[421px] rounded-4xl border border-white/10 bg-linear-to-b from-[#101010]/10 to-white/10 px-8 backdrop-blur-lg lg:flex">
      <ul className="flex size-full items-center gap-6">
        {routes.map((route, index) => {
          return (
            <li
              key={index}
              className="flex h-full items-center justify-center rounded-3xl px-3 text-sm font-light text-white"
            >
              <Link href={route.href}>{route.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
