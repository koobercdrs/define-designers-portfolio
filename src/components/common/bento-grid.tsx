import { ReactNode } from 'react'

import { cn } from '@/library/utils'
import SpotlightCard from './spotlight-card'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) => {
  return (
    <div className={cn('grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-5', className)}>
      {children}
    </div>
  )
}

export const BentoGridImage = ({ className, src }: { className?: string; src: string }) => {
  return (
    <iframe
      src={src}
      loading="lazy"
      scrolling="no"
      allowFullScreen
      title="Embedded content"
      style={{ overflow: 'hidden' }}
      referrerPolicy="strict-origin-when-cross-origin"
      sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-forms"
      className={cn('shadow-input flex size-full flex-col overflow-hidden rounded-xl', className)}
      allow="clipboard-write; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  )
}

export const BentoGridItem = ({
  title,
  number,
  className,
  description,
}: {
  number: number
  className?: string
  description: string
  title: string | React.ReactNode
}) => {
  const isPrimary = number === 3
  const id = number > 3 ? number - 1 : number

  return (
    <SpotlightCard
      spotlightColor="rgba(187, 74, 247, 0.6)"
      className={cn(
        'row-span-1 flex flex-col justify-between gap-12 rounded-2xl border border-white/10 p-4 backdrop-blur-xs',
        isPrimary ? 'bg-[#EEEEEE]' : 'bg-[#131218]/10',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'flex size-10 shrink-0 items-center justify-center rounded-full p-2 text-xl font-semibold',
            isPrimary ? 'bg-black text-white' : 'bg-white text-black',
          )}
        >
          {id >= 10 ? id : `0${id}`}
        </div>

        <div
          className={cn('text-2xl md:text-lg xl:text-2xl', isPrimary ? 'text-black' : 'text-white')}
        >
          {title}
        </div>
      </div>

      <div className={cn('text-base xl:text-lg', isPrimary ? 'text-black' : 'text-white')}>
        {description}
      </div>
    </SpotlightCard>
  )
}
