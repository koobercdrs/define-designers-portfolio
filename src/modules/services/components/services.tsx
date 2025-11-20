import { BentoGrid, BentoGridItem } from '@/components/common/bento-grid'

export const Services = () => {
  return (
    <section>
      <div className="main-container">
        <div className="my-12">
          <h1 className="text-base text-white md:text-2xl">
            We help brands define themselves and stand out.
          </h1>
        </div>

        <BentoGrid className="md:auto-rows-[16rem] md:grid-cols-7">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              number={i + 1}
              title={item.title}
              className={item.className}
              description={item.description}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

const items = [
  {
    title: 'Branding',
    description:
      'We develop complete visual identity systems that bring consistency, clarity, and style to your brand. ',
    className: 'md:col-span-3',
  },
  {
    title: 'Illustration & Digital Collage',
    description:
      'We produce custom illustrations and digital collages that add character and uniqueness to your brand. These visuals enhance storytelling, add depth to campaigns, and make your brand instantly recognizable.',
    className: 'md:col-span-4',
  },
  {
    title: 'Logo Design',
    description: 'We craft meaningful and timeless logos that capture the essence of your brand. ',
    className: 'md:col-span-3',
  },
  {
    title: 'Draft. Define. Deliver.',
    description: 'We craft visuals that speak and strategies that deliver.',
    className: 'md:col-span-2',
  },
  {
    title: 'Where Vision Becomes Action',
    description: 'We turn ideas into meaningful experiences. ',
    className: 'md:col-span-2',
  },
]
