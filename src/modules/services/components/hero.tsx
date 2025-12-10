import { Button } from '@/components/ui/button'
import Dither from '@/components/common/dither'
import { ServiceView } from '@/payload-types'
import Link from 'next/link'

export const Hero = ({ content }: { content: ServiceView['hero'] }) => {
  return (
    <section className="relative pt-44 pb-20 2xl:pt-52 2xl:pb-44">
      <div className="main-container pointer-events-none relative z-10 size-full">
        <h1 className="pointer-events-auto max-w-[900px] text-3xl font-bold text-[#D9D7D3] lg:text-5xl xl:text-6xl">
          {content.title}
        </h1>

        <p className="pointer-events-auto mt-4 mb-6 max-w-[900px] text-sm font-light text-white lg:mt-6 lg:mb-10 lg:text-xl xl:text-2xl">
          {content.subtitle}
        </p>

        <Button className="pointer-events-auto rounded-none rounded-r-3xl" variant="secondary">
          <Link href="/portfolio">{content.btn}</Link>
        </Button>
      </div>

      <div className="absolute inset-0 z-0 size-full">
        <Dither
          enableMouseInteraction={true}
          waveColor={[0.2, 0, 0.7]}
          disableAnimation={false}
          waveAmplitude={0.19}
          waveFrequency={5.1}
          mouseRadius={0}
          waveSpeed={0}
          colorNum={2.5}
        />
      </div>
    </section>
  )
}
