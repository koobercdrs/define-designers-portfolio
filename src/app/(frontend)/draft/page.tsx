import { getPayload } from '@/library/payload'
import { DraftView } from '@/modules/draft'
import { notFound } from 'next/navigation'
import { cache } from 'react'

const getData = cache(async () => {
  try {
    const payload = await getPayload()

    const data = await payload.findGlobal({ slug: 'draft-view' })

    return data
  } catch (_) {
    return null
  }
})

export default async function Draft() {
  const content = await getData()

  if (!content) return notFound()

  return <DraftView content={content} />
}
