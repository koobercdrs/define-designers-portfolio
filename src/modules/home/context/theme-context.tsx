'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

export const hero_themes: ITheme[] = [
  'DotGrid',
  'ColorBends',
  'Dither',
  'GradientBlinds',
]
export type ITheme = 'DotGrid' | 'ColorBends' | 'Dither' | 'GradientBlinds'

const theme_name = 'home-hero-theme'

interface ThemeContextType {
  theme: ITheme
  selectTheme: (value: ITheme) => void
}

const themeContext = createContext<ThemeContextType>({
  theme: 'DotGrid',
  selectTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ITheme>(hero_themes[0])

  useEffect(() => {
    const selectedTheme = localStorage.getItem(theme_name)

    if (selectedTheme) setTheme(selectedTheme as ITheme)
  }, [])

  const selectTheme = (value: ITheme) => {
    setTheme(value)
    localStorage.setItem(theme_name, value)
  }

  return <themeContext.Provider value={{ theme, selectTheme }}>{children}</themeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(themeContext)

  return context
}
