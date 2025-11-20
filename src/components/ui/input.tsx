import { ComponentProps } from 'react'
import { cn } from '@/library/utils'

function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'border-input w-full min-w-0 bg-white/10 px-3 py-1 placeholder:text-base placeholder:text-[#D8D4CA]',
        'h-12 rounded-sm text-base text-[#F2F2F2] shadow-xs shadow-white outline outline-[#9B75FF]/50',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
