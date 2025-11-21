'use client'
import { cn } from '@/library/utils'
import { hero_themes, useTheme } from '@/modules/home/context/theme-context'

export const ThemeSelector = () => {
  const { selectTheme, theme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      {hero_themes.map((color, index) => (
        <div
          onClick={() => selectTheme(color)}
          className={cn(
            'size-3.5 cursor-pointer rounded-full border backdrop-blur-lg lg:size-6',
            color == theme ? 'border-white/30 bg-white/30' : 'border-white/10 bg-white/10',
          )}
          key={index}
        ></div>
      ))}
    </div>
  )
}
