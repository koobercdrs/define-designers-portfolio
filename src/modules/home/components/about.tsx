import { Compare } from '@/components/common/compare'

export const About = () => {
  return (
    <section className="main-container mt-24 xl:mt-36">
      <div className="mb-20 flex flex-col items-center gap-5 text-center text-white xl:gap-12">
        <h1 className="text-2xl font-medium lg:text-[40px] xl:text-5xl">
          From draft to finished design.
        </h1>

        <p className="text-sm font-light lg:text-xl xl:text-2xl">
          At Define Draft, we take every idea through a complete creative journey. From initial
          concepts and sketches to full brand strategy, visual identity, digital and print design,
          and motion graphics, we ensure every element is impactful.
        </p>
      </div>

      <div>
        <Compare
          className="aspect-video h-auto max-h-[700px] min-h-[200px] w-full"
          secondImage="/images/secondImage.png"
          firstImage="/images/firstImage.png"
          initialSliderPercentage={2}
          slideMode="hover"
        />
      </div>
    </section>
  )
}
