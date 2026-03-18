import type { CmsClient, ListEventsParams } from '../types'
import type { EventItem, NewsPost } from '../../models'
import eventsData from '../../../data/events.json'
import newsData from '../../../data/news.json'

function normalize(s: string) {
  return s.trim().toLowerCase()
}

function byDateAsc(a: EventItem, b: EventItem) {
  return new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime()
}

function byDateDesc(a: NewsPost, b: NewsPost) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
}

function isUpcoming(event: EventItem, now: Date) {
  const end = event.endsAt ? new Date(event.endsAt).getTime() : new Date(event.startsAt).getTime()
  return end >= now.getTime()
}

function matchesEvent(event: EventItem, params: ListEventsParams) {
  const q = params.query ? normalize(params.query) : ''
  const tag = params.tag ? normalize(params.tag) : ''
  const location = params.location ? normalize(params.location) : ''

  if (q) {
    const hay = normalize(
      [
        event.title,
        event.summary,
        event.locationName,
        event.locationCity,
        event.locationRegion,
        event.detailsMarkdown,
      ]
        .filter(Boolean)
        .join(' '),
    )
    if (!hay.includes(q)) return false
  }

  if (tag) {
    const has = (event.tags ?? []).some((t) => normalize(t.slug) === tag || normalize(t.label) === tag)
    if (!has) return false
  }

  if (location) {
    const hay = normalize([event.locationCity, event.locationRegion].filter(Boolean).join(' '))
    if (!hay.includes(location)) return false
  }

  return true
}

export const jsonCms: CmsClient = {
  async listEvents(params) {
    const now = params?.now ?? new Date()
    return (eventsData as EventItem[])
      .filter((e) => isUpcoming(e, now))
      .filter((e) => (params ? matchesEvent(e, params) : true))
      .slice()
      .sort(byDateAsc)
  },

  async getEventBySlug(slug) {
    const found = (eventsData as EventItem[]).find((e) => e.slug === slug)
    return found ?? null
  },

  async listNews() {
    return (newsData as NewsPost[]).slice().sort(byDateDesc)
  },

  async getNewsPostBySlug(slug) {
    const found = (newsData as NewsPost[]).find((p) => p.slug === slug)
    return found ?? null
  },
}

