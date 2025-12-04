import ColorBends from '@/components/common/color-bends'
import { Button } from '@/components/ui/button'
import { PortfolioView } from '@/payload-types'

export const Hero = ({ content }: { content: PortfolioView['hero'] }) => {
  return (
    <section className="relative h-[40dvh] lg:h-[75dvh] 2xl:h-[60dvh]">
      <div className="main-container pointer-events-none relative z-10 size-full pt-32 lg:pt-48 2xl:pt-60">
        <h1 className="pointer-events-auto text-3xl font-bold text-[#D9D7D3] lg:text-5xl xl:text-6xl">
          {content.title}
        </h1>

        <p className="pointer-events-auto mt-4 mb-6 text-sm font-light text-white lg:mt-6 lg:mb-10 lg:text-xl xl:text-2xl">
          {content.subtitle}
        </p>

        <Button className="pointer-events-auto rounded-none rounded-r-3xl" variant="secondary">
          <a href="#work">{content.btn}</a>
        </Button>
      </div>

      <ColorBends
        className="absolute! inset-0 z-0 size-full"
        colors={['#7805ad', '#6c0bad', '#5c0bad']}
        rotation={0}
        speed={0.2}
        scale={1.5}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
        transparent
      />
    </section>
  )
}
