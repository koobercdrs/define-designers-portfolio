import LiquidChrome from '@/components/common/liquid-chrome'
import { Button } from '@/components/ui/button'
import { PortfolioView } from '@/payload-types'

export const Hero = ({ content }: { content: PortfolioView['hero'] }) => {
  return (
    <section className="relative h-[70dvh] lg:h-dvh">
      <div className="main-container pointer-events-none relative z-10 size-full pt-32 lg:pt-60">
        <h1 className="pointer-events-auto text-3xl font-bold text-[#D9D7D3] lg:text-5xl xl:text-6xl">
          {content.title}
        </h1>

        <p className="pointer-events-auto mt-4 mb-6 text-sm font-light text-white lg:mt-6 lg:mb-10 lg:text-xl xl:text-2xl">
          {content.subtitle}
        </p>

        <Button className="pointer-events-auto" variant="secondary">
          <a href="#work">{content.btn}</a>
        </Button>
      </div>

      <LiquidChrome
        className="absolute inset-0 z-0 size-full"
        baseColor={[0, 0, 0.1]}
        interactive={true}
        amplitude={0.3}
        speed={0.2}
      />
    </section>
  )
}
