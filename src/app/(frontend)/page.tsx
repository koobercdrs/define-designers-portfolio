import { notFound } from 'next/navigation'
import { cache } from 'react'

import { getPayload } from '@/library/payload'
import { HomeView } from '@/modules/home'

const getData = cache(async () => {
  try {
    const payload = await getPayload()

    const data = await payload.findGlobal({ slug: 'home-view' })

    return data
  } catch (_) {
    return null
  }
})

export default async function Home() {
  const content = await getData()

  if (!content) return notFound()

  return <HomeView content={content} />
}
