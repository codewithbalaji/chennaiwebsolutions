import React from 'react'
import About from '@/components/about/About'
import { Metadata } from 'next'
import { getAllTeamMembers } from '@/lib/about'

export const metadata: Metadata = {
  title: 'About Us | Chennai Web Solutions',
  description: 'Learn about our team of passionate developers and designers crafting digital experiences that make a difference.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + '/about'
  }
}

export default function AboutPage() {
  const teamMembers = getAllTeamMembers()
  return <About teamMembers={teamMembers} />
}

export async function generateStaticParams() {
  const teamMembers = getAllTeamMembers()
  return teamMembers.map((member) => ({
    slug: member.slug
  }))
}
