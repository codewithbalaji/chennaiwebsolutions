import { client } from '@/sanity/lib/client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { PortableTextComponents } from '@portabletext/react'
import { Metadata } from 'next'
import { site } from '@/app/site'
import { Post } from '@/@types'


// Define custom components for the Portable Text renderer
const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-96 my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Author image'}
            fill
            className="object-contain"
          />
        </div>
      )
    }
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a 
          href={value.href} 
          rel={rel} 
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      )
    }
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-12 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-8 mb-4">{children}</h3>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>
  }
}

type Props = {
  params: {
    slug: string
  }
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Properly await the params object before accessing its properties
  const { slug } = await params;
  
  const query = `
    *[_type == 'author' && slug.current == $slug][0] {
      _id,
      name,
      image,
      "bio": content[0].children[0].text
    }
  `

  const author = await client.fetch(query, { slug })
  
  if (!author) {
    return {
      title: 'Author Not Found',
      description: 'The requested author profile could not be found'
    }
  }

  const title = `${author.name} - Author Profile | ${site.name}`
  const description = author.bio || `Read articles and learn more about ${author.name}`

  return {
    applicationName: site.name,
    creator: site.name,
    metadataBase: new URL(site.url),
    title,
    description,
    openGraph: {
      title,
      description,
      images: author.image ? urlFor(author.image).url() : '/images/default-author.jpg',
      type: 'profile',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: author.image ? urlFor(author.image).url() : '/images/default-author.jpg',
    },
    authors: [{ name: author.name }]
  }
}

async function getAuthor(slug: string) {
  const query = `
    *[ _type == 'author' && slug.current == $slug ][0] {
      _id,
      name,
      image,
      slug,
      content
    }
  `
  return await client.fetch(query, { slug })
}

async function getAuthorPosts(authorId: string) {
  const query = `
    *[_type == 'post' && author._ref == $authorId] | order(_createdAt desc) {
      _id,
      title,
      description,
      slug,
      _createdAt,
      image
    }
  `
  return await client.fetch(query, { authorId })
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

//@ts-expect-error some error
export default async function AboutPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const author = await getAuthor(slug)
  
  if (!author) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Profile not found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The profile you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link 
            href="/about" 
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            ← Back to Team
          </Link>
        </div>
      </div>
    )
  }

  const authorPosts = await getAuthorPosts(author._id)

  return (
    <div className="flex flex-col items-center w-full bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          {Array.from({ length: 20 }).map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex justify-around">
              {Array.from({ length: 30 }).map((_, colIndex) => (
                <div 
                  key={`dot-${rowIndex}-${colIndex}`} 
                  className="w-1 h-1 rounded-full bg-gray-400 dark:bg-white m-6"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 pt-12 pb-16">
        {/* Back Button */}
        <Link 
          href="/about" 
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          ← Back to Team
        </Link>

        {/* Author Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 bg-white dark:bg-[#002340] p-8 rounded-2xl shadow-lg">
          <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0">
            <Avatar className="w-full h-full border-4 border-white dark:border-[#002340] shadow-lg">
              <AvatarImage src={author.image ? urlFor(author.image).url() : ''} />
              <AvatarFallback className="text-4xl">{author.name?.substring(0, 2) || 'AU'}</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-calendas">{author.name}</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {author.content && (
                <PortableText 
                  value={author.content} 
                  components={ptComponents}
                />
              )}
              {!author.content && (
                <p className="text-gray-600 dark:text-gray-400">
                  Professional content creator and industry expert.
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* Author's Posts */}
        {authorPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-8 font-calendas">
              Articles by {author.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {authorPosts.map((post: Post) => (
                <Link 
                  key={post._id} 
                  href={`/blog/${post.slug.current}`}
                  className="group cursor-pointer"
                >
                  <div className="flex flex-col h-full bg-white dark:bg-[#002340] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={urlFor(post.image).url()}
                        fill
                        alt={post.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full">
                          Blog
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {formatDate(post._createdAt.toString())}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
