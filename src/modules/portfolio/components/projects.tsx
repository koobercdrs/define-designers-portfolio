import { BentoGrid, BentoGridImage } from '@/components/common/bento-grid'
import { PortfolioView } from '@/payload-types'

export const Projects = ({ content }: { content: PortfolioView['projects'] }) => {
  return (
    <section id="work" className="main-container my-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-[#D9D7D3]">{content.title}</h1>

        <p className="text-sm font-light text-[#D9D7D3]/90">{content.subtitle}</p>
      </div>

      <BentoGrid className="mt-20 gap-2">
        {items.map((item, i) => {
          const colSpanClass = item.colSpan === 2 ? 'md:col-span-2' : ''
          const rowSpanClass = item.rowSpan === 2 ? 'md:row-span-2' : ''

          return (
            <BentoGridImage key={i} url={item.url} className={`${colSpanClass} ${rowSpanClass}`} />
          )
        })}
      </BentoGrid>
    </section>
  )
}

const items = [
  { url: '/images/project (1).png', colSpan: 2, rowSpan: 2 },
  { url: '/images/project (2).png', colSpan: 1, rowSpan: 1 },
  { url: '/images/project (3).png', colSpan: 1, rowSpan: 2 },
  { url: '/images/project (4).png', colSpan: 2, rowSpan: 1 },
  { url: '/images/project (5).png', colSpan: 1, rowSpan: 2 },
  { url: '/images/project (6).png', colSpan: 2, rowSpan: 2 },
  { url: '/images/project (7).png', colSpan: 2, rowSpan: 1 },
  { url: '/images/project (8).png', colSpan: 1, rowSpan: 1 },
]
