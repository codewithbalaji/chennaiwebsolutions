'use client'
import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { Post } from '@/@types'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'
import { GradientHeading } from "@/components/ui/gradient-heading"

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = `*[_type == 'post'] | order(_createdAt desc) {
          ...,
          author->{
            _id,
            name,
            image,
            slug
          }
        }`
        
        const fetchedPosts = await client.fetch(query)
        setPosts(fetchedPosts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchPosts()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-12 h-12 rounded-full bg-[#4361ee]/20"
        />
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold">No posts found</h2>
          <p className="mt-2">Check back later for new content!</p>
        </div>
      </div>
    )
  }

  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

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

      <motion.div 
        className="relative z-10 py-20 md:py-28 px-6 md:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Blog Header */}
          <motion.div 
            className="text-center mb-16"
            variants={fadeInVariants}
          >
            <GradientHeading variant="default" size="xxl" weight="bold">
              Latest <span className="text-[#4361ee]">Blogs</span>
            </GradientHeading>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Stay updated with our latest insights, news, and industry trends
            </p>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              variants={itemVariants}
              className="mb-20"
            >
              <Link href={`/blog/${featuredPost.slug.current}`} className="block group">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <motion.div 
                      className="relative w-full md:w-1/2 h-80"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={urlFor(featuredPost.image).url()}
                        fill
                        alt={featuredPost.title}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <div className="flex flex-col justify-center space-y-4 md:w-1/2 p-8">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 text-xs font-semibold bg-[#4361ee]/10 text-[#4361ee] rounded-full">Featured</span>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(featuredPost._createdAt)}</span>
                      </div>
                      <h2 className="text-3xl font-bold font-calendas group-hover:text-[#4361ee] transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {featuredPost.description}
                      </p>
                      <div className="flex items-center space-x-3 pt-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={featuredPost.author?.image ? urlFor(featuredPost.author.image).url() : ''} />
                          <AvatarFallback>{featuredPost.author?.name?.substring(0, 2) || 'AU'}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{featuredPost.author?.name || 'Author'}</span>
                          <span className="text-xs text-neutral-600 dark:text-neutral-400">Author</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid of Posts */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {remainingPosts.map((post: Post, key: number) => (
              <motion.div
                key={key}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/blog/${post.slug.current}`} className="block h-full">
                  <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={urlFor(post.image).url()}
                        fill
                        alt={post.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 text-xs font-semibold bg-[#4361ee]/10 text-[#4361ee] rounded-full">Blog</span>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post._createdAt)}</span>
                      </div>
                      <h3 className="text-xl font-bold font-calendas group-hover:text-[#4361ee] transition-colors">{post.title}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{post.description}</p>
                      <div className="flex items-center space-x-3 pt-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={post.author?.image ? urlFor(post.author.image).url() : ''} />
                          <AvatarFallback>{post.author?.name?.substring(0, 2) || 'AU'}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{post.author?.name || 'Author'}</span>
                          <span className="text-xs text-neutral-600 dark:text-neutral-400">Author</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
