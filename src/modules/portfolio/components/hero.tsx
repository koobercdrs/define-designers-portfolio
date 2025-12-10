import ColorBends from '@/components/common/color-bends'
import { Button } from '@/components/ui/button'
import { PortfolioView } from '@/payload-types'

export const Hero = ({ content }: { content: PortfolioView['hero'] }) => {
  return (
    <section className="relative h-[50dvh] lg:h-[75dvh] 2xl:h-[70dvh]">
      <div className="main-container pointer-events-none relative z-10 flex size-full flex-col items-start justify-center">
        <h1 className="pointer-events-auto text-3xl font-bold text-[#D9D7D3] lg:text-5xl xl:text-6xl">
          {content.title}
        </h1>

        <p className="pointer-events-auto mt-4 mb-6 text-sm font-light text-white lg:mt-6 lg:mb-10 lg:w-[70%] lg:text-xl xl:text-2xl">
          {content.subtitle}
        </p>

        <Button className="pointer-events-auto" variant="secondary">
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
