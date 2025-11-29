import SpotlightCard from '@/components/common/spotlight-card'
import { DraftView } from '@/payload-types'
import Image from 'next/image'

export const Hero = ({ content }: { content: DraftView['hero'] }) => {
  return (
    <section className="main-container z-10 size-full h-[50dvh] pt-32 lg:h-[70dvh] lg:pt-60">
      <SpotlightCard className="h-full" spotlightColor="rgba(187, 74, 247, 0.6)">
        <div className="relative flex items-center justify-between gap-10">
          <div className="flex max-w-[570px] flex-col gap-4">
            <h1 className="pointer-events-auto text-3xl font-bold text-[#D9D7D3] lg:text-5xl xl:text-6xl">
              {content.title}
            </h1>

            <p className="pointer-events-auto text-sm font-light text-white lg:mt-6 lg:mb-10 lg:text-xl xl:text-2xl">
              {content.subtitle}
            </p>
          </div>

          <Image
            className="absolute top-14 right-0 w-40"
            src="/objects/3.png"
            height={230}
            alt="object"
            width={160}
          />
        </div>
      </SpotlightCard>
    </section>
  )
}
