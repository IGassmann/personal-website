type Post = {
  title: string
  slug: string
  publishedAt: string
  content: string
  summary?: string
  category?: string
  tags?: string[]
  ogImage?: string
}

export default Post
