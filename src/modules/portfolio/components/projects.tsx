import { BentoGrid, BentoGridImage } from '@/components/common/bento-grid'
import { getMedia } from '@/library/payload'
import { PortfolioView } from '@/payload-types'

export const getSizeClass = (index: number) => {
  const patterns = [
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-1',

    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',

    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-2',
    'col-span-2 row-span-1',
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
          return (
            <BentoGridImage
              src={getMedia(item.image).url}
              className={getSizeClass(i)}
              link={item.link}
              key={i}
            />
          )
        })}
      </BentoGrid>
    </section>
  )
}
