export type Project = {
  path: string
  id: string
  anchor?: string
  name: string
  release: string
  image: string
  description: string
  role: string
  tags: string[]
  layout?: string
  featured?: boolean
  link?: string
  logo?: string
}
