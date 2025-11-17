import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const CTA = () => {
  return (
    <section className="main-container my-24 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-medium text-white lg:text-[32px] xl:text-[40px]">
          Let&apos;s Bring Your Design Idea to Life
        </h1>

        <p className="text-sm font-light text-white lg:text-xl xl:text-2xl">
          From concept to launch, our team&apos;s here to craft something you&apos;ll be proud of.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button asChild>
          <Link href="/">Design With Us</Link>
        </Button>

        <Button asChild variant="secondary">
          <Link href="/">See Our Work</Link>
        </Button>
      </div>
    </section>
  )
}
