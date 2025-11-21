import { BentoGrid, BentoGridItem } from '@/components/common/bento-grid'
import Image from 'next/image'

export const Services = () => {
  return (
    <section className="relative">
      <div className="absolute top-0 -left-[500px] -z-10 h-[1000px] w-[1000px] blur-[100px] lg:top-20">
        <div className="clip-custom h-full w-full bg-[#BB4AF7]" />
      </div>

      <div className="main-container">
        <div className="my-12 flex items-center justify-between lg:mt-20 lg:mb-40">
          <h1 className="text-base text-white md:text-2xl">
            We help brands define themselves and stand out.
          </h1>

          <Image
            className="absolute right-0 hidden w-[220px] lg:block"
            src="/objects/1.png"
            height={134}
            alt="object"
            width={220}
          />
        </div>

        <BentoGrid className="relative md:auto-rows-[16rem] lg:grid-cols-7">
          <Image
            className="absolute -top-32 left-10 hidden w-[220px] lg:block"
            src="/objects/2.png"
            height={180}
            alt="object"
            width={220}
          />

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

      <div className="absolute -right-[600px] bottom-0 -z-10 h-[1000px] w-[1000px] -rotate-90 blur-[100px] lg:top-20 lg:bottom-auto">
        <div className="clip-custom h-full w-full bg-[#BB4AF7]" />
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
