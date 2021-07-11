import axios from 'axios'
import { get } from 'svelte/store'
import { langStore } from '../Store'
import { isBrowser } from '@easyroute/core/utils/isBrowser'

export async function fetchSlugMarkdown(slug) {
  const lang = get(langStore)
  const browser = isBrowser()
  const prefix = browser ? '' : 'http://localhost:3456'
  const requested = await axios.get(`${prefix}/texts/${lang}/${slug}.md`)
  return requested.data
}
