import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { GradientHeading } from '@/components/ui/gradient-heading'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blogs'

type Props = {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  const allPosts = getAllBlogPosts()
  
  if (!post) {
    notFound()
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString)
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-neutral-50/50 dark:from-slate-900 dark:to-slate-900 transition-colors duration-300">
      {/* Background dots pattern */}
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

      <div className="relative z-10 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Top Resource Tag and Date */}
          <div className="mb-6 flex items-center justify-center space-x-2">
            <span className="px-3 py-1 text-xs font-semibold bg-[#4361ee]/10 text-[#4361ee] rounded-full">Blog</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post.date)}</span>
          </div>
          
          {/* Title */}
          <div className="text-center mb-8">
            <GradientHeading variant="default" size="xxl" weight="bold" className="mb-6">
              {post.title}
            </GradientHeading>
            
            {/* Author */}
            <div className="flex items-center justify-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="font-medium">{post.author}</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Author</span>
              </div>
            </div>
          </div>
          
          {/* Main Image */}
          <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30" />
          </div>
          
          {/* Description */}
          {post.description && (
            <div className="mb-12">
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {post.description}
              </p>
            </div>
          )}
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <Markdown
              options={{
                overrides: {
                  h1: {
                    component: ({ children }) => (
                      <h1 className="text-3xl font-bold mt-12 mb-4 font-calendas">{children}</h1>
                    )
                  },
                  h2: {
                    component: ({ children }) => (
                      <h2 className="text-2xl font-bold mt-10 mb-4 font-calendas">{children}</h2>
                    )
                  },
                  h3: {
                    component: ({ children }) => (
                      <h3 className="text-xl font-bold mt-8 mb-4 font-calendas">{children}</h3>
                    )
                  },
                  h4: {
                    component: ({ children }) => (
                      <h4 className="text-lg font-bold mt-6 mb-4 font-calendas">{children}</h4>
                    )
                  },
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#4361ee] pl-4 italic my-6 text-neutral-600 dark:text-neutral-400">
                      {children}
                    </blockquote>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-neutral-600 dark:text-neutral-400">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-6 space-y-2 text-neutral-600 dark:text-neutral-400">{children}</ol>
                  ),
                  li: ({ children }) => <li>{children}</li>,
                  strong: ({ children }) => (
                    <strong className="font-semibold text-neutral-900 dark:text-white">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic">
                      {children}
                    </em>
                  ),
                  a: ({ children, href }) => (
                    <a 
                      href={href} 
                      className="text-[#4361ee] hover:underline"
                      target={href?.startsWith('http') ? '_blank' : undefined}
                      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  ),
                  code: ({ children }) => (
                    <code className="bg-neutral-100 dark:bg-zinc-800 rounded px-2 py-1 font-mono text-sm">
                      {children}
                    </code>
                  )
                }
              }}
            >
              {post.content}
            </Markdown>
          </div>
          
          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold font-calendas">{post.author}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Author</p>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          {allPosts.length > 1 && (
            <div className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold font-calendas mb-4">Related Posts</h2>
                <p className="text-neutral-600 dark:text-neutral-400">Discover more articles</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {allPosts
                  .filter(p => p.slug !== post.slug)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <Link 
                      key={relatedPost.slug} 
                      href={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            fill
                            alt={relatedPost.title}
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6 space-y-3">
                          <div className="flex items-center space-x-2">
                            <span className="px-3 py-1 text-xs font-semibold bg-[#4361ee]/10 text-[#4361ee] rounded-full">Blog</span>
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(relatedPost.date)}</span>
                          </div>
                          <h3 className="text-lg font-bold font-calendas group-hover:text-[#4361ee] transition-colors">
                            {relatedPost.title}
                          </h3>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{relatedPost.author.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">{relatedPost.author}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | Chennai Web Solutions`,
    description: post.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`
    }
  }
}