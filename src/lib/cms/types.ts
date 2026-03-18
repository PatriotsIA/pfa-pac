import type { EventItem, NewsPost } from '../models'

export type CmsProviderId = 'json' | 'decap' | 'sanity' | 'wordpress'

export type ListEventsParams = {
  query?: string
  tag?: string
  location?: string
  now?: Date
}

export type CmsClient = {
  listEvents: (params?: ListEventsParams) => Promise<EventItem[]>
  getEventBySlug: (slug: string) => Promise<EventItem | null>
  listNews: () => Promise<NewsPost[]>
  getNewsPostBySlug: (slug: string) => Promise<NewsPost | null>
}

