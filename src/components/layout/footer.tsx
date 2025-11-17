import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#101010]">
      <div className="absolute -top-5 -left-16 h-[120px] w-[400px] bg-[#3E0A78] blur-[160px]"></div>

      <div className="main-container relative z-10 py-10">
        <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center lg:gap-10">
          <div>
            <Image src="/icons/footer-logo.png" alt="footer icon" width={156} height={18} />
          </div>

          <div className="mt-10 mb-4 h-px w-full rounded-md bg-white/30 lg:hidden"></div>

          <ul className="grid grid-cols-2 gap-x-20 gap-y-3 text-sm font-medium text-white md:grid-cols-4 lg:gap-8 xl:gap-24">
            <li>
              <Link href="/">Home page</Link>
            </li>
            <li>
              <Link href="/">Portfolio</Link>
            </li>
            <li>
              <Link href="/">Services offered</Link>
            </li>
            <li>
              <Link href="/">We Draft</Link>
            </li>
          </ul>
        </div>

        <div className="mt-4 mb-9 h-px w-full rounded-md bg-white/30 lg:my-10"></div>

        <div className="flex items-center justify-between gap-10">
          <ul className="flex flex-col gap-3 text-sm font-medium text-white">
            <li>34b Alexander Kazbegi ave, Tbilisi</li>
            <li>design@ddrafts.com</li>
            <li>557 544 700</li>
          </ul>

          <p className="hidden max-w-[800px] text-right text-base font-light text-white lg:block">
            Define Draft creates cohesive and modern brand identities. We design logos, visual
            systems, and brand guidelines. We craft digital and print layouts, and social media
            visuals. We also produce motion graphics and logo animations. Finally, we provide
            creative direction and brand storytelling to make your brand stand out.
          </p>
        </div>
      </div>

      <div className="absolute -right-16 -bottom-5 hidden h-[120px] w-[400px] bg-[#3E0A78] blur-[160px] lg:block"></div>
    </footer>
  )
}
