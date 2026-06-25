export type Article = {
  path: string
  title?: string
  description?: string
  image?: string
  tags?: string[]
  date: string
  readingTime?: string
}

export type MinArticle = { title: string, description: string, image: string, tags: string[], date: string, path: string, readingTime: string }
