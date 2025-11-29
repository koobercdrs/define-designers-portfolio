'use client'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'

import GradientBlinds from '@/components/common/gradient-blinds'
import MetaBalls from '@/components/common/meta-balls'
import { useTheme } from '../context/theme-context'

const LiquidChrome = dynamic(() => import('@/components/common/liquid-chrome'), { ssr: false })

export const HeroAnimation = () => {
  const { theme } = useTheme()

  if (theme === 'GradientBlinds') {
    return (
      <GradientBlinds
        className="absolute! inset-0 z-0 size-full"
        gradientColors={['#FF9FFC', '#5227FF']}
        mixBlendMode="lighten"
        mouseDampening={0.15}
        spotlightRadius={0.3}
        spotlightSoftness={1}
        shineDirection="left"
        spotlightOpacity={1}
        blindMinWidth={50}
        distortAmount={20}
        blindCount={12}
        noise={0.3}
        angle={0}
      />
    )
  }

  if (theme === 'FloatingLines') {
    return (
      <GradientBlinds
        className="absolute! inset-0 z-0 size-full"
        gradientColors={['#FF9FFC', '#5227FF']}
        mixBlendMode="lighten"
        mouseDampening={0.15}
        spotlightRadius={0.4}
        spotlightSoftness={1}
        shineDirection="left"
        spotlightOpacity={1}
        blindMinWidth={50}
        distortAmount={0}
        blindCount={12}
        noise={0.3}
        angle={0}
      />
    )
  }

  if (theme == 'LiquidChrome') {
    return (
      <LiquidChrome
        className="absolute inset-0 z-0 size-full"
        baseColor={[0, 0, 0.1]}
        interactive={true}
        amplitude={0.3}
        speed={0.2}
      />
    )
  }

  return (
    <Fragment>
      <Blob />

      <video
        className="absolute inset-0 -z-10 size-full object-cover object-left"
        preload="none"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>
    </Fragment>
  )
}

const Blob = () => {
  return (
    <div className="pointer-events-none absolute right-0 bottom-0 size-1/2">
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
