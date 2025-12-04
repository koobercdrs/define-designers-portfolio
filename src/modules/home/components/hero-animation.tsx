'use client'
import dynamic from 'next/dynamic'

import GradientBlinds from '@/components/common/gradient-blinds'
import ColorBends from '@/components/common/color-bends'
import { useTheme } from '../context/theme-context'
import DotGrid from '@/components/common/dot-grid'
import Dither from '@/components/common/dither'

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
        blindCount={20}
        noise={0.3}
        angle={0}
      />
    )
  }

  if (theme === 'ColorBends') {
    return (
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
    )
  }

  if (theme == 'Dither') {
    return (
      <div className="absolute! inset-0 z-0 size-full">
        <Dither
          enableMouseInteraction={true}
          waveColor={[0.4, 0.3, 0.5]}
          disableAnimation={false}
          waveAmplitude={0.3}
          mouseRadius={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
          colorNum={4}
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-0 size-full">
      <DotGrid
        dotSize={4}
        baseColor="#271e37"
        activeColor="#7507cf"
        proximity={200}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        gap={15}
      />
    </div>
  )
}
