'use client'
import dynamic from 'next/dynamic'

import { useTheme } from '../context/theme-context'
import GradientBlinds from '@/components/common/gradient-blinds'

const FloatingLines = dynamic(() => import('@/components/common/floating-lines'), { ssr: false })
const LiquidChrome = dynamic(() => import('@/components/common/liquid-chrome'), { ssr: false })
const LiquidEther = dynamic(() => import('@/components/common/liquid-ether'), { ssr: false })

export const HeroAnimation = () => {
  const { theme } = useTheme()

  if (theme === 'GradientBlinds') {
    return (
      <GradientBlinds
        className="absolute! inset-0 z-0 size-full"
        gradientColors={['#FF9FFC', '#5227FF']}
        mixBlendMode="lighten"
        mouseDampening={0.15}
        spotlightRadius={0.5}
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
