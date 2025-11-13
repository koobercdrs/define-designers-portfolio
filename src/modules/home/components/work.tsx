import LogoLoop from '@/components/common/logo-loop'

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

export const Work = () => {
  return (
    <div>
      <LogoLoop
        fadeOut
        gap={40}
        speed={120}
        logos={data}
        scaleOnHover
        hoverSpeed={0}
        logoHeight={48}
        direction="left"
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      />
    </div>
  )
}
