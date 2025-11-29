import LogoLoop, { LogoItem } from '@/components/common/logo-loop'
import { HomeView, Media } from '@/payload-types'

const getData = (data: HomeView['work']) => {
  return data.map((item) => {
    const media = (item.icon as Media)?.url

    const logos: LogoItem = {
      text: item.text,
      type: item.type,
      href: item.href,
      icon: media,
    }

    return logos
  })
}

export const Work = ({ content }: { content: HomeView['work'] }) => {
  const data = getData(content)

  return (
    <section className="lg:mt-12">
      <LogoLoop
        fadeOut
        gap={40}
        speed={120}
        logos={data}
        hoverSpeed={0}
        logoHeight={48}
        direction="left"
        fadeOutColor="#000"
        ariaLabel="Technology partners"
        className="overflow-y-hidden py-2"
      />
    </section>
  )
}
