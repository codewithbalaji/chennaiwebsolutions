import { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blogs'
import Blog from '@/components/blog/Blog'

export const metadata: Metadata = {
  title: 'Blog | Chennai Web Solutions',
  description: 'Read our latest articles and insights about web development, design, and digital solutions.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + '/blog'
  }
}

export default function BlogPage() {
  const posts = getAllBlogPosts()
  return <Blog posts={posts} />
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug
  }))
}
