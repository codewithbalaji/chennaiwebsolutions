import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Project = {
  title: string
  description: string
  heroImage: string
  services: string[]
  slug: string
}

export function getAllProjects(): Project[] {
  const worksDirectory = path.join(process.cwd(), 'md/works')
  const files = fs.readdirSync(worksDirectory)
  
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(worksDirectory, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        title: data.title,
        description: data.description,
        heroImage: data.heroImage,
        services: data.services,
        slug: file.replace('.md', '')
      }
    })
}

export function getProjectBySlug(slug: string) {
  const worksDirectory = path.join(process.cwd(), 'md/works')
  const filePath = path.join(worksDirectory, `${slug}.md`)
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      ...data,
      content
    }
  } catch (error) {
    console.error(`Error reading project file: ${filePath}`, error)
    return null
  }
} 