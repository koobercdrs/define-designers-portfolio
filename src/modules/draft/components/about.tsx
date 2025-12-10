import SpotlightCard from '@/components/common/spotlight-card'
import Image from 'next/image'

export const About = () => {
  return (
    <section className="lg:mt-12">
      <div className="main-container flex flex-col gap-4">
        <div className="aspect-21/9 h-[200px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/60 backdrop-blur-lg lg:h-auto">
          <video
            className="size-full object-cover"
            preload="true"
            height="240"
            width="320"
            controls
          >
            <source src="/videos/drafts.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="h-[200px] w-full rounded-2xl bg-white/40 backdrop-blur-lg lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              title="Google Map"
              style={{ border: 0 }}
              className="rounded-2xl"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.123456789!2d44.7427138!3d41.7221797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447310dca04119%3A0x6216685a43114f42!2s34b%20Alexander%20Kazbegi%20Ave%2C%20T'bilisi!5e0!3m2!1sen!2sge!4v1234567890123"
            />
          </div>

          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-4">
              {data.map((item, i) => (
                <SpotlightCard
                  className="flex items-center gap-5 rounded-lg border border-white/10 bg-[#ECECEC]/10 p-3 backdrop-blur-lg"
                  spotlightColor="rgba(187, 74, 247, 0.6)"
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
                </SpotlightCard>
              ))}
            </div>

            <div className="flex w-full flex-wrap items-center justify-between gap-4">
              {socials.map((item, i) => (
                <a
                  className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#7E7E7E]/10 backdrop-blur-lg lg:size-16"
                  href={item.href}
                  target="_blank"
                  key={i}
                >
                  <Image
                    className="size-8 lg:size-10"
                    alt="social icon"
                    src={item.icon}
                    height={40}
                    width={40}
                  />
                </a>
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
  {
    icon: '/icons/draft/instagram.svg',
    href: 'https://www.instagram.com/definedrafts/',
  },
  {
    icon: '/icons/draft/ball.svg',
    href: 'https://www.behance.net/definedrafts/projects',
  },
  {
    icon: '/icons/draft/be.svg',
    href: 'https://www.behance.net/definedrafts/projects',
  },
  {
    icon: '/icons/draft/linkedin.svg',
    href: 'https://www.linkedin.com/company/ddrafts/?viewAsMember=true',
  },
  {
    icon: '/icons/draft/fb.svg',
    href: 'https://www.facebook.com/people/Define-Drafts/61582156226398/',
  },
]
