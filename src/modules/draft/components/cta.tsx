import { Button } from '@/components/ui/button'
import { DraftView } from '@/payload-types'
import Link from 'next/link'

export const CTA = ({ content }: { content: DraftView['cta'] }) => {
  return (
    <section className="main-container my-24 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-medium text-white lg:text-[32px] xl:text-[40px]">
          {content.title}
        </h1>

        <p className="text-sm font-light text-white lg:text-xl xl:text-2xl">{content.subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        <Button asChild>
          <Link href="/contact">{content.primary_btn}</Link>
        </Button>

        <Button asChild variant="secondary">
          <Link href="/portfolio">{content.secondary_btn}</Link>
        </Button>
      </div>
    </section>
  )
}
