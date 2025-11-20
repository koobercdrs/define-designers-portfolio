import { ReactNode } from 'react'
import Image from 'next/image'

import { cn } from '@/library/utils'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) => {
  return (
    <div className={cn('grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3', className)}>
      {children}
    </div>
  )
}

export const BentoGridImage = ({ className, url }: { className?: string; url: string }) => {
  return (
    <div
      className={cn(
        'shadow-input row-span-1 flex flex-col justify-between overflow-hidden rounded-xl',
        className,
      )}
    >
      <Image
        className="size-full object-cover"
        alt="project image"
        height={400}
        width={400}
        src={url}
      />
    </div>
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
    <div
      className={cn(
        'row-span-1 flex flex-col justify-between gap-12 rounded-2xl border border-white/10 p-4 backdrop-blur-lg',
        isPrimary ? 'bg-[#EEEEEE]' : 'bg-[#131218]',
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

        <div className={cn('text-2xl', isPrimary ? 'text-black' : 'text-white')}>{title}</div>
      </div>

      <div className={cn('text-base xl:text-lg', isPrimary ? 'text-black' : 'text-white')}>
        {description}
      </div>
    </div>
  )
}
