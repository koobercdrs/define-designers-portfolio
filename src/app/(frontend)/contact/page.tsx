import { getPayload } from '@/library/payload'
import { ContactView } from '@/modules/contact'
import { notFound } from 'next/navigation'
import { cache } from 'react'

const getData = cache(async () => {
  try {
    const payload = await getPayload()

    const data = await payload.findGlobal({ slug: 'contact-view' })

    return data
  } catch (_) {
    return null
  }
})

export default async function Contact() {
  const content = await getData()

  if (!content) return notFound()

  return <ContactView content={content} />
}
