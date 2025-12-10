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
        gradientColors={['#ac11a7', '#5227ff']}
        mouseDampening={0.1}
        spotlightRadius={0.9}
        spotlightSoftness={1}
        shineDirection="right"
        spotlightOpacity={0.6}
        blindMinWidth={40}
        distortAmount={0}
        blindCount={33}
        noise={0.22}
        angle={18}
      />
    )
  }

  if (theme === 'ColorBends') {
    return (
      <ColorBends
        className="absolute! inset-0 z-0 size-full"
        colors={['#d30ee1']}
        mouseInfluence={0.85}
        warpStrength={0.95}
        rotation={-180}
        parallax={1.05}
        autoRotate={0}
        frequency={1}
        speed={0.48}
        scale={1.7}
        noise={0}
      />
    )
  }

  if (theme == 'Dither') {
    return (
      <div className="absolute! inset-0 z-0 size-full">
        <Dither
          enableMouseInteraction={true}
          waveColor={[0.2, 0, 0.7]}
          disableAnimation={false}
          waveAmplitude={0.19}
          waveFrequency={5.1}
          mouseRadius={0}
          waveSpeed={0}
          colorNum={2.5}
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-0 size-full">
      <DotGrid
        dotSize={2}
        baseColor="#6a23e7"
        activeColor="#ffffff"
        proximity={50}
        shockRadius={50}
        shockStrength={1}
        resistance={100}
        returnDuration={0.1}
        gap={12}
      />
    </div>
  )
}
