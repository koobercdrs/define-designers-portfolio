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

export const BentoGridItem = ({ className, url }: { className?: string; url: string }) => {
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
