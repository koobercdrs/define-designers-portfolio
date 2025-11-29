export function getBentoGridClass(totalItems: number, index: number): string {
  const layouts: Record<number, string[]> = {
    1: ['lg:col-span-7'],

    2: [
      'lg:col-span-4', // Large left
      'lg:col-span-3', // Medium right
    ],

    3: [
      'lg:col-span-4', // Large left
      'lg:col-span-3', // Medium right top
      'lg:col-span-3', // Medium right bottom
    ],

    4: [
      'lg:col-span-3', // Left
      'lg:col-span-4', // Top right
      'lg:col-span-2', // Bottom left
      'lg:col-span-2', // Bottom right
    ],

    5: [
      'lg:col-span-3', // Left
      'lg:col-span-4', // Top right
      'lg:col-span-2', // Middle
      'lg:col-span-3', // Bottom left
      'lg:col-span-2', // Bottom right
    ],

    6: [
      'lg:col-span-3', // Row 1 left
      'lg:col-span-2', // Row 1 middle
      'lg:col-span-2', // Row 1 right
      'lg:col-span-3', // Row 2 left
      'lg:col-span-2', // Row 2 middle
      'lg:col-span-2', // Row 2 right
    ],

    7: [
      'lg:col-span-3', // Row 1
      'lg:col-span-2',
      'lg:col-span-2',
      'lg:col-span-2', // Row 2
      'lg:col-span-3',
      'lg:col-span-2',
      'lg:col-span-3', // Row 3
    ],

    8: [
      'lg:col-span-3',
      'lg:col-span-4',
      'lg:col-span-2',
      'lg:col-span-3',
      'lg:col-span-2',
      'lg:col-span-2',
      'lg:col-span-3',
      'lg:col-span-2',
    ],
  }

  // Default pattern for items not specifically configured
  const defaultPattern = ['lg:col-span-3', 'lg:col-span-4', 'lg:col-span-2']

  // Get the layout for the current total items
  const layout = layouts[totalItems]

  if (layout && index < layout.length) {
    return layout[index]
  }

  // Fallback: use repeating pattern for larger counts
  const patternIndex = index % defaultPattern.length
  return defaultPattern[patternIndex]
}

/**
 * Alternative: More organic/varied layout generator
 */
export function getBentoGridClassOrganic(totalItems: number, index: number): string {
  // Create varied but balanced layouts
  const patterns = [
    'lg:col-span-3', // Small-medium
    'lg:col-span-4', // Large
    'lg:col-span-2', // Small
    'lg:col-span-3', // Small-medium
    'lg:col-span-2', // Small
    'lg:col-span-4', // Large
    'lg:col-span-3', // Small-medium
  ]

  return patterns[index % patterns.length]
}
