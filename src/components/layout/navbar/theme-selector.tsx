import { hero_themes } from '@/configs/themes'
import { cn } from '@/library/utils'

export const ThemeSelector = () => {
  return (
    <div className="flex items-center gap-2">
      {hero_themes.map((color, index) => (
        <div
          className={cn(
            'size-3.5 cursor-pointer rounded-full lg:size-6',
            color == 'default' ? 'bg-white/20' : 'bg-white/10',
          )}
          key={index}
        ></div>
      ))}
    </div>
  )
}
