import Link from 'next/link'

import { HeroAnimation } from './hero-animation'
import { Button } from '@/components/ui/button'
import { HomeView } from '@/payload-types'

export const Hero = ({ content }: { content: HomeView['hero'] }) => {
  return (
    <section className="relative h-[550px] w-full lg:h-[80dvh] xl:h-dvh">
      <div className="main-container pointer-events-none relative z-10 flex h-full flex-col gap-5 pt-20 lg:pt-60">
        <h1 className="max-w-[800px] text-3xl font-bold text-white lg:text-5xl xl:text-6xl">
          {content.title}
        </h1>

        <p className="max-w-[550px] text-sm font-light text-white lg:text-xl xl:text-2xl">
          {content.subtitle}
        </p>

        <div className="pointer-events-auto flex items-center gap-3">
          <Button asChild className="flex items-center justify-center">
            <Link href="/contact">{content.primary_btn}</Link>
          </Button>

          <Button variant="secondary" asChild className="flex items-center justify-center">
            <Link href="/portfolio">{content.secondary_btn}</Link>
          </Button>
        </div>
      </div>

      <HeroAnimation />
    </section>
  )
}
