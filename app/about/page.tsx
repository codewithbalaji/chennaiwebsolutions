import React from 'react'
import About from '@/components/about/About'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Chennai Web Solutions',
  description: 'Learn about Chennai Web Solutions, our mission, values, and the team behind our success.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + '/about'
  }
}

export default function AboutPage() {
  return (
    <About />
  )
}
