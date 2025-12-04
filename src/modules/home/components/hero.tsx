import Link from 'next/link'

import { HeroAnimation } from './hero-animation'
import { Button } from '@/components/ui/button'
import { HomeView } from '@/payload-types'

export const Hero = ({ content }: { content: HomeView['hero'] }) => {
  return (
    <section className="relative h-[50dvh] w-full lg:h-[75dvh] 2xl:h-[70dvh]">
      <div className="main-container pointer-events-none relative z-10 flex h-full flex-col gap-5 pt-20 lg:pt-44 2xl:pt-60">
        <h1 className="max-w-[800px] text-3xl font-bold text-white lg:text-5xl xl:text-6xl">
          {content.title}
        </h1>

        <p className="max-w-[550px] text-sm font-light text-white lg:text-xl xl:text-2xl">
          {content.subtitle}
        </p>

        <div className="pointer-events-auto flex items-center gap-3">
          <Button asChild>
            <Link className="rounded-none rounded-r-3xl" href="/contact">
              {content.primary_btn}
            </Link>
          </Button>

          <Button variant="secondary" asChild>
            <Link href="/portfolio">{content.secondary_btn}</Link>
          </Button>
        </div>
      </div>

      <HeroAnimation />
    </section>
  )
}
