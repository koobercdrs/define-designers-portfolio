import Compare from '@/components/common/compare'
import { HomeView, Media } from '@/payload-types'

export const About = ({ content }: { content: HomeView['about'] }) => {
  return (
    <section className="main-container mt-24 xl:mt-36">
      <div className="mb-20 flex flex-col items-center gap-5 text-center text-white xl:gap-12">
        <h1 className="text-2xl font-medium lg:text-[40px] xl:text-5xl">{content.title}</h1>

        <p className="text-sm font-light lg:text-xl xl:text-2xl">{content.subtitle}</p>
      </div>

      <Compare
        className="aspect-video h-auto max-h-[700px] min-h-[200px] w-full"
        secondImage={(content.second_img as Media)?.url || ''}
        firstImage={(content.first_img as Media)?.url || ''}
        initialSliderPercentage={2}
        slideMode="hover"
      />
    </section>
  )
}
