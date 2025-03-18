import React from 'react'
import Blog from '@/components/blog/Blog'
import { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Blog | Chennai Web Solutions',
  description: 'Read our latest articles and insights about web development, design, and digital solutions.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + '/blog'
  }
}


export default function BlogPage() {
  return (
    <Blog/>
  )
}
