import LiquidChrome from '@/components/common/liquid-chrome'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="relative h-[70dvh] lg:h-dvh">
      <div className="main-container pt-32 lg:pt-60">
        <h1 className="text-3xl font-bold text-[#D9D7D3] lg:text-5xl xl:text-6xl">
          Projects That Define Us.
        </h1>

        <p className="mt-4 mb-6 text-sm font-light text-white lg:mt-6 lg:mb-10 lg:text-xl xl:text-2xl">
          We build identities that move — brands that speak through design, motion, and story. Each
          project is a new language, shaped by strategy, instinct, and bold visual thinking.
        </p>

        <Button variant="secondary">See More</Button>
      </div>

      <LiquidChrome
        className="absolute inset-0 -z-10"
        baseColor={[0, 0, 0.1]}
        interactive={true}
        amplitude={0.6}
        speed={1}
      />
    </section>
  )
}
