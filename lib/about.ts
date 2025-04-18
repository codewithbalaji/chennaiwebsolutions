import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type TeamMember = {
  name: string
  image: string
  role: string
  slug: string
  bio: string
}

export function getAllTeamMembers(): TeamMember[] {
  const aboutDirectory = path.join(process.cwd(), 'md/about')
  const files = fs.readdirSync(aboutDirectory)
  
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(aboutDirectory, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        name: data.name,
        image: data.image,
        role: data.role,
        bio: data.bio,
        slug: file.replace('.md', '')
      }
    })
}

export function getTeamMemberBySlug(slug: string): TeamMember | null {
  const aboutDirectory = path.join(process.cwd(), 'md/about')
  const filePath = path.join(aboutDirectory, `${slug}.md`)
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      name: data.name,
      image: data.image,
      role: data.role,
      bio: data.bio,
      slug
    }
  } catch (error) {
    console.error(`Error reading team member file: ${filePath}`, error)
    return null
  }
} 