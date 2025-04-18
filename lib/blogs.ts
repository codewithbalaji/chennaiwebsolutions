import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogPost = {
  title: string
  description: string
  image: string
  author: string
  slug: string
  content: string
  date: string
}

export function getAllBlogPosts(): BlogPost[] {
  const blogsDirectory = path.join(process.cwd(), 'md/blogs')
  const files = fs.readdirSync(blogsDirectory)
  
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(blogsDirectory, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        title: data.title,
        description: data.description,
        image: data.image,
        author: data.author,
        slug: file.replace('.md', ''),
        content,
        date: data.date || new Date().toISOString()
      }
    })
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const blogsDirectory = path.join(process.cwd(), 'md/blogs')
  const filePath = path.join(blogsDirectory, `${slug}.md`)
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      title: data.title,
      description: data.description,
      image: data.image,
      author: data.author,
      slug,
      content,
      date: data.date || new Date().toISOString()
    }
  } catch (error) {
    console.error(`Error reading blog post file: ${filePath}`, error)
    return null
  }
} 