import type { CmsClient, CmsProviderId } from './types'
import { jsonCms } from './providers/json'

function getProviderId(): CmsProviderId {
  const raw = (import.meta.env.VITE_CMS_PROVIDER as string | undefined) ?? 'json'
  const v = raw.trim().toLowerCase()
  if (v === 'decap' || v === 'sanity' || v === 'wordpress' || v === 'json') return v
  return 'json'
}

function createCmsClient(provider: CmsProviderId): CmsClient {
  switch (provider) {
    case 'json':
      return jsonCms

    /**
     * CMS swap guidance:
     * - Decap CMS: git-based, great for small teams and simple editorial flow; deploy-friendly on Netlify.
     * - Sanity: structured content + strong editor, good for scale; requires Sanity project + API tokens.
     * - Headless WordPress (REST): familiar editing UI; requires hosting + caching considerations.
     *
     * To switch providers, set `VITE_CMS_PROVIDER` and implement the corresponding client in
     * `src/lib/cms/providers/`.
     */
    case 'decap':
    case 'sanity':
    case 'wordpress':
    default:
      return jsonCms
  }
}

export const cms = createCmsClient(getProviderId())

