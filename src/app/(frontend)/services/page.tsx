import { ServicesView } from '@/modules/services'
import { getPayload } from '@/library/payload'
import { notFound } from 'next/navigation'
import { cache } from 'react'

const getData = cache(async () => {
  try {
    const payload = await getPayload()

    const data = await payload.findGlobal({ slug: 'service-view' })

    return data
  } catch (_) {
    return null
  }
})

export default async function Services() {
  const content = await getData()

  if (!content) return notFound()

  return <ServicesView content={content} />
}
