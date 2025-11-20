import Link from 'next/link'

import LiquidEther from '@/components/common/liquid-ether'
import MetaBalls from '@/components/common/meta-balls'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="relative h-[550px] w-full lg:h-[80dvh] xl:h-dvh">
      <div className="main-container flex h-full flex-col gap-5 pt-20 lg:pt-60">
        <h1 className="max-w-[800px] text-3xl font-bold text-white lg:text-5xl xl:text-6xl">
          Where Vision Becomes an action.
        </h1>

        <p className="max-w-[550px] text-sm font-light text-white lg:text-xl xl:text-2xl">
          We build brands, design experiences, and turn creative ideas into impact.
        </p>

        <div className="flex items-center gap-3">
          <Button asChild className="flex items-center justify-center">
            <Link href="/contact">Design With Us</Link>
          </Button>

          <Button asChild className="flex items-center justify-center">
            <Link href="/portfolio">See Our Work</Link>
          </Button>
        </div>
      </div>

      <Blob />
      <Animation />
    </section>
  )
}

const Animation = () => {
  return (
    <LiquidEther
      className="absolute! inset-0 -z-10 size-full"
      colors={['#5227FF', '#FF9FFC', '#B19EEF']}
      takeoverDuration={0.25}
      iterationsPoisson={32}
      autoResumeDelay={3000}
      iterationsViscous={64}
      autoRampDuration={0.6}
      autoIntensity={3}
      isViscous={false}
      cursorSize={100}
      isBounce={false}
      resolution={0.5}
      mouseForce={50}
      autoDemo={true}
      autoSpeed={0}
      viscous={30}
    />
  )
}

const Blob = () => {
  return (
    <div className="absolute right-0 bottom-0 size-1/2">
      <MetaBalls
        enableMouseInteraction={false}
        enableTransparency={true}
        cursorBallColor="#CBCBCB"
        className="size-full"
        hoverSmoothness={1}
        cursorBallSize={2}
        animationSize={40}
        clumpFactor={1.2}
        color="#CBCBCB"
        ballCount={60}
        speed={0.5}
      />
    </div>
  )
}
