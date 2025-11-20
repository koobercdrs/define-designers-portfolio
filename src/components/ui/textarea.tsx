import * as React from 'react'

import { cn } from '@/library/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input flex min-h-16 w-full bg-white/10 px-3 py-2 placeholder:text-base placeholder:text-[#D8D4CA]',
        'h-12 rounded-sm text-base text-[#F2F2F2] shadow-xs shadow-white outline outline-[#9B75FF]/50',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
