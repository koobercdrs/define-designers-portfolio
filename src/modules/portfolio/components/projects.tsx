import { BentoGrid, BentoGridImage } from '@/components/common/bento-grid'
import { PortfolioView } from '@/payload-types'

export const getSizeClass = (index: number) => {
  const patterns = [
    // Row 1-2: Strong opening with large focal point
    'col-span-2 row-span-2', // 0: Large square
    'col-span-1 row-span-1', // 1: Small
    'col-span-2 row-span-1', // 2: Wide rectangle
    'col-span-1 row-span-2', // 3: Tall rectangle
    'col-span-2 row-span-1', // 4: Small

    // Row 3-4: Alternating rhythm
    'col-span-1 row-span-1', // 5: Small
    'col-span-1 row-span-2', // 6: Tall rectangle
    'col-span-2 row-span-1', // 7: Wide rectangle
    'col-span-1 row-span-1', // 8: Small
    'col-span-2 row-span-1', // 9: Small

    // Row 5-6: Another focal point
    'col-span-1 row-span-1', // 10: Small
    'col-span-1 row-span-1', // 11: Small
    'col-span-2 row-span-2', // 12: Large square
    'col-span-1 row-span-1', // 13: Small
    'col-span-2 row-span-1', // 14: Small

    // Row 7-8: Asymmetric balance
    'col-span-2 row-span-1', // 15: Wide rectangle
    'col-span-1 row-span-2', // 16: Tall rectangle
    'col-span-1 row-span-1', // 17: Small
    'col-span-1 row-span-1', // 18: Small
    'col-span-2 row-span-1', // 19: Wide rectangle
  ]

  return patterns[index % patterns.length]
}

// Function to determine aspect ratio based on size class
export const getAspectRatioClass = (sizeClass: string) => {
  if (sizeClass.includes('row-span-2') && sizeClass.includes('col-span-2')) {
    return 'aspect-square' // Large square images
  } else if (sizeClass.includes('row-span-2')) {
    return 'aspect-[3/4]' // Tall images
  } else if (sizeClass.includes('col-span-2')) {
    return 'aspect-[16/9]' // Wide images
  }
  return 'aspect-square' // Default small square
}

export const Projects = ({ content }: { content: PortfolioView['projects'] }) => {
  return (
    <section id="work" className="main-container my-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-[#D9D7D3]">{content.title}</h1>

        <p className="text-sm font-light text-[#D9D7D3]/90">{content.subtitle}</p>
      </div>

      <BentoGrid className="mt-20 gap-2">
        {content.list.map((item, i) => {
          return <BentoGridImage className={getSizeClass(i)} key={i} src={item.link} />
        })}
      </BentoGrid>
    </section>
  )
}
