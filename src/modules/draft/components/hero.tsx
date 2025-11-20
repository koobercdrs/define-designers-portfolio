import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="main-container z-10 size-full h-[50dvh] pt-32 lg:h-[70dvh] lg:pt-60">
      <h1 className="pointer-events-auto text-3xl font-bold text-[#D9D7D3] lg:text-5xl xl:text-6xl">
        We Draft
      </h1>

      <p className="pointer-events-auto mt-4 mb-6 text-sm font-light text-white lg:mt-6 lg:mb-10 lg:text-xl xl:text-2xl">
        Our work blends creativity with strategic insight to shape brands that inspire trust and
        connection
      </p>

      <Button variant="secondary" asChild>
        <Link href="/portfolio">See Our Work</Link>
      </Button>
    </section>
  )
}
