import React from 'react'
import Works from '@/components/works/Works'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Works | Chennai Web Solutions',
  description: 'Explore our portfolio of web development and design projects at Chennai Web Solutions.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + '/works'
  }
}

export default function WorksPage() {
  return (
    <Works/>
  )
}
