import LogoLoop from '@/components/common/logo-loop'
import { HomeView } from '@/payload-types'

const data = [
  { node: '', title: 'We Design' },
  { node: '', title: 'We Design' },
  { node: '', title: 'We Design' },
  { node: '', title: 'We Design' },
  { node: '', title: 'We Design' },
  { node: '', title: 'We Design' },
  { node: '', title: 'We Design' },
  { node: '', title: 'We Design' },
]

export const Work = ({ content }: { content: HomeView['work'] }) => {
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
