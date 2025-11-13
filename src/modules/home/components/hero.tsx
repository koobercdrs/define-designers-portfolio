import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="relative h-[550px] w-full">
      <div className="main-container absolute top-1/3 z-10 flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-white">Where Vision Becomes an action.</h1>

        <p className="text-sm font-light text-white">
          We build brands, design experiences, and turn creative ideas into impact.
        </p>

        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href="/contact">Design With Us</Link>
          </Button>

          <Button asChild>
            <Link href="/portfolio">See Our Work</Link>
          </Button>
        </div>
      </div>

      <Animation />
    </section>
  )
}

const Animation = () => {
  return (
    <video
      loop
      muted
      autoPlay
      width="320"
      height="240"
      preload="auto"
      className="absolute inset-0 size-full object-cover object-left"
    >
      <source src="/videos/hero1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    // <LiquidEther
    //   colors={['#5227FF', '#FF9FFC', '#B19EEF']}
    //   mouseForce={50}
    //   cursorSize={100}
    //   isViscous={false}
    //   viscous={30}
    //   iterationsViscous={64}
    //   iterationsPoisson={32}
    //   resolution={0.5}
    //   isBounce={false}
    //   autoDemo={true}
    //   autoSpeed={1}
    //   autoIntensity={3}
    //   takeoverDuration={0.25}
    //   autoResumeDelay={3000}
    //   autoRampDuration={0.6}
    // />
  )
}
