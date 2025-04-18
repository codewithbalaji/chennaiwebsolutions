import React from 'react'
import Works from '@/components/works/Works'
import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import { getAllProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Our Works | Chennai Web Solutions',
  description: 'Explore our portfolio of web development and design projects at Chennai Web Solutions.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + '/works'
  }
}

export default function WorksPage() {
  const projects = getAllProjects()
  return <Works projects={projects} />
}

export async function generateStaticParams() {
  const worksDirectory = path.join(process.cwd(), 'md/works')
  const files = fs.readdirSync(worksDirectory)
  
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace('.md', '')
    }))
}
