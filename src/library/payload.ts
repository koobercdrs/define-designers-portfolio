import { getPayload as getPayloadFn } from 'payload'

import payloadConfig from '@/payload.config'
import { Media } from '@/payload-types'

export const getPayload = () => {
  return getPayloadFn({ config: payloadConfig })
}

export function getMedia(media: string | Media) {
  if (!media) return { url: '/empty', alt: 'no-alt' }

  if (typeof media === 'string') return { url: media, alt: 'no-alt' }

  return { url: `https://utfs.io/f/${media._key}`, alt: media.alt || 'no-alt' }
}
