import { hero_variants } from '@/configs/hero'
import { cn } from '@/library/utils'

export const ColorsSelector = () => {
  return (
    <div className="flex items-center gap-2">
      {hero_variants.map((color, index) => (
        <div
          className={cn(
            'size-3.5 rounded-full',
            color == 'default' ? 'bg-white/20' : 'bg-white/10',
          )}
          key={index}
        ></div>
      ))}
    </div>
  )
}
