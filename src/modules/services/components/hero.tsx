import FloatingLines from '@/components/common/floating-lines'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="relative h-[70dvh] lg:h-dvh">
      <div className="main-container pointer-events-none relative z-10 size-full pt-32 lg:pt-60">
        <h1 className="pointer-events-auto text-3xl font-bold text-[#D9D7D3] lg:text-5xl xl:text-6xl">
          Our services turn your vision into visual poetry.
        </h1>

        <p className="pointer-events-auto mt-4 mb-6 text-sm font-light text-white lg:mt-6 lg:mb-10 lg:text-xl xl:text-2xl">
          We combine creativity, strategy, and design to craft cohesive, memorable, and impactful
          brand experiences across all platforms.
        </p>

        <Button className="pointer-events-auto" variant="secondary">
          <Link href="/portfolio">See Our Work</Link>
        </Button>
      </div>

      <div className="absolute inset-0 z-0 size-full">
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineDistance={[30, 35, 30]}
          lineCount={[20, 6, 20]}
          bendStrength={-0.5}
          interactive={true}
          bendRadius={5.0}
          parallax={true}
        />
      </div>
    </section>
  )
}
