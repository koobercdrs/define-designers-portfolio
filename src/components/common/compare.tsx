'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'motion/react'

interface CompareProps {
  firstImage?: string
  secondImage?: string
  className?: string
  firstImageClassName?: string
  secondImageClassname?: string
  initialSliderPercentage?: number
  slideMode?: 'hover' | 'drag'
  showHandlebar?: boolean
  autoplay?: boolean
  autoplayDuration?: number
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Compare({
  firstImage = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
  secondImage = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = 'hover',
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage)
  const [isDragging, setIsDragging] = useState(false)

  const sliderRef = useRef<HTMLDivElement>(null)

  const [_, setIsMouseOver] = useState(false)

  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoplay = useCallback(() => {
    if (!autoplay) return

    const startTime = Date.now()
    const animate = () => {
      const elapsedTime = Date.now() - startTime
      const progress = (elapsedTime % (autoplayDuration * 2)) / autoplayDuration
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100

      setSliderXPercent(percentage)
      autoplayRef.current = setTimeout(animate, 16)
    }

    animate()
  }, [autoplay, autoplayDuration])

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [startAutoplay, stopAutoplay])

  function mouseEnterHandler() {
    setIsMouseOver(true)
    stopAutoplay()
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false)
    if (slideMode === 'hover') {
      setSliderXPercent(initialSliderPercentage)
    }
    if (slideMode === 'drag') {
      setIsDragging(false)
    }
    startAutoplay()
  }

  const handleStart = useCallback(
    (clientX: number) => {
      if (slideMode === 'drag') {
        setIsDragging(true)
      }
    },
    [slideMode],
  )

  const handleEnd = useCallback(() => {
    if (slideMode === 'drag') {
      setIsDragging(false)
    }
  }, [slideMode])

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return
      if (slideMode === 'hover' || (slideMode === 'drag' && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect()
        const x = clientX - rect.left
        const percent = (x / rect.width) * 100
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)))
        })
      }
    },
    [slideMode, isDragging],
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => handleStart(e.clientX),
    [handleStart],
  )
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd])
  const handleMouseMove = useCallback((e: React.MouseEvent) => handleMove(e.clientX), [handleMove])

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!autoplay) {
        handleStart(e.touches[0].clientX)
      }
    },
    [handleStart, autoplay],
  )

  const handleTouchEnd = useCallback(() => {
    if (!autoplay) {
      handleEnd()
    }
  }, [handleEnd, autoplay])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!autoplay) {
        handleMove(e.touches[0].clientX)
      }
    },
    [handleMove, autoplay],
  )

  return (
    <div
      ref={sliderRef}
      className={cn('h-[600px] w-full overflow-hidden', className)}
      style={{
        position: 'relative',
        cursor: slideMode === 'drag' ? 'grab' : 'col-resize',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <div className="pointer-events-none relative z-20 h-full w-full overflow-hidden">
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              className={cn(
                'absolute inset-0 z-20 h-full w-full shrink-0 overflow-hidden rounded-2xl select-none',
                firstImageClassName,
              )}
              style={{
                maskImage: `linear-gradient(to right, 
                  black 0%, 
                  black ${Math.max(0, sliderXPercent - 2)}%, 
                  transparent ${sliderXPercent}%, 
                  transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to right, 
                  black 0%, 
                  black ${Math.max(0, sliderXPercent - 2)}%, 
                  transparent ${sliderXPercent}%, 
                  transparent 100%)`,
              }}
              transition={{ duration: 0 }}
            >
              <img
                alt="first image"
                src={firstImage}
                className={cn(
                  'absolute inset-0 z-20 h-full w-full object-cover shrink-0 rounded-2xl select-none',
                  firstImageClassName,
                )}
                draggable={false}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            className={cn(
              'absolute top-0 left-0 z-10 h-full w-full object-cover rounded-2xl select-none',
              secondImageClassname,
            )}
            alt="second image"
            src={secondImage}
            draggable={false}
          />
        ) : null}
      </AnimatePresence>
    </div>
  )
}