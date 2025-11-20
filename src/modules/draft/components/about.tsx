import Image from 'next/image'

export const About = () => {
  return (
    <section className="lg:mt-12">
      <div className="main-container flex flex-col gap-4">
        <div className="aspect-video h-[200px] w-full rounded-2xl bg-white/60 backdrop-blur-lg lg:h-auto"></div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="h-[200px] w-full rounded-2xl bg-white/40 backdrop-blur-lg lg:h-auto"></div>

          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-4">
              {data.map((item, i) => (
                <div
                  className="flex items-center gap-5 rounded-lg border border-white/10 bg-[#ECECEC]/10 p-3 backdrop-blur-lg"
                  key={i}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#E7E7E7]/20 backdrop-blur-lg">
                    <Image
                      className="size-7"
                      alt={item.title}
                      src={item.icon}
                      height={30}
                      width={30}
                    />
                  </div>

                  <h1 className="text-base font-medium text-white">{item.title}</h1>
                </div>
              ))}
            </div>

            <div className="flex w-full flex-wrap items-center justify-between gap-4">
              {socials.map((item, i) => (
                <div
                  className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#7E7E7E]/10 backdrop-blur-lg lg:size-16"
                  key={i}
                >
                  <Image
                    className="size-8 lg:size-10"
                    alt="social icon"
                    height={40}
                    src={item}
                    width={40}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const data = [
  {
    title: '34b Alexander Kazbegi ave, Tbilisi',
    icon: '/icons/draft/location.svg',
  },
  {
    title: 'design@ddrafts.com',
    icon: '/icons/draft/email.svg',
  },
  {
    title: '+995 557 544 700',
    icon: '/icons/draft/phone.svg',
  },
]

const socials = [
  '/icons/draft/instagram.svg',
  '/icons/draft/ball.svg',
  '/icons/draft/be.svg',
  '/icons/draft/linkedin.svg',
  '/icons/draft/fb.svg',
]
