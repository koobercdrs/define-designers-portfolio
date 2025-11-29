import { ContactView as IContactView } from '@/payload-types'
import { ContactForm } from './components/contact-form'

export const ContactView = ({ content }: { content: IContactView }) => {
  return (
    <section className="relative py-40 lg:py-60">
      <div className="main-container">
        <div className="relative grid grid-cols-1 gap-10 overflow-hidden rounded-2xl border border-white/10 bg-[#090909]/40 p-3 backdrop-blur-lg lg:grid-cols-2 lg:p-5">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-extrabold text-[#D9D7D3] lg:text-5xl xl:text-6xl">
              {content.form.title}
            </h1>

            <ContactForm />
          </div>

          <div className="hidden h-full max-w-[400px] flex-col items-end justify-between place-self-end lg:flex">
            <p className="pt-20 text-end text-sm text-[#D9D7D3] lg:text-2xl">
              {content.form.subtitle}
            </p>

            <h1 className="text-3xl font-extrabold text-[#D9D7D3] xl:text-6xl">Get in touch.</h1>
          </div>

          <div className="absolute -top-[400px] -right-[400px] hidden h-[500px] w-[900px] bg-[#34177D] blur-[221px] lg:block" />
        </div>
      </div>
    </section>
  )
}
