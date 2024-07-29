import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export type Project = ParsedContent & { _path: string, name: string, release: string, image: string, layout: string, featured: boolean, tags: string[], description: string}