'use client'
import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { Post } from '@/@types'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'

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
          className="w-12 h-12 rounded-full bg-primary/20"
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
    <motion.div 
      className="flex flex-col items-center w-full bg-background"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="h-full w-full flex flex-1 max-w-[1500px] md:px-14 pt-8 px-4 flex-col space-y-8">
        {/* Blog Header */}
        <motion.div 
          className="w-full"
          variants={fadeInVariants}
        >
          <p className="text-sm font-medium text-muted-foreground">BLOG</p>
          <h1 className="text-4xl font-bold text-primary">Recent Blogs</h1>
        </motion.div>

        {/* Featured Post - Horizontal Layout */}
        {featuredPost && (
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={`/blog/${featuredPost.slug.current}`} className="w-full group cursor-pointer block">
              <div className="flex flex-col md:flex-row gap-6 items-stretch">
                <motion.div 
                  className="relative w-full md:w-1/2 h-80"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={urlFor(featuredPost.image).url()}
                    fill
                    alt={featuredPost.title}
                    className="object-cover rounded-lg"
                  />
                </motion.div>
                <div className="flex flex-col justify-center space-y-4 md:w-1/2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs bg-gray-100 text-black rounded-full">Blog</span>
                    <span className="text-xs text-muted-foreground">{formatDate(featuredPost._createdAt)}</span>
                  </div>
                  <motion.h2 
                    className="text-3xl font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {featuredPost.title}
                  </motion.h2>
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {featuredPost.description}
                  </motion.p>
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={featuredPost.author?.image ? urlFor(featuredPost.author.image).url() : ''} />
                      <AvatarFallback>{featuredPost.author?.name?.substring(0, 2) || 'AU'}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{featuredPost.author?.name || 'Author'}</span>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid of Posts - Updated to match the image */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 grid-cols-1"
          variants={containerVariants}
        >
          {remainingPosts.map((post: Post, key: number) => (
            <motion.div
              key={key}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`/blog/${post.slug.current}`} className="group cursor-pointer block h-full">
                <div className="flex flex-col h-full">
                  <motion.div 
                    className="relative h-48 w-full overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={urlFor(post.image).url()}
                      fill
                      alt={post.title}
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs bg-gray-100 text-black rounded-full">Blog</span>
                      <span className="text-xs text-muted-foreground">{formatDate(post._createdAt)}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
                    <div className="flex items-center space-x-2 pt-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author?.image ? urlFor(post.author.image).url() : ''} />
                        <AvatarFallback>{post.author?.name?.substring(0, 2) || 'AU'}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{post.author?.name || 'Author'}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
