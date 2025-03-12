"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GradientHeading } from "@/components/ui/gradient-heading"
import Link from "next/link"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

type Project = {
  _id: string
  title: string
  description: string
  heroImage: SanityImageSource
  services: string[]
  slug: {
    current: string
  }
}

const categories = [
  "All",
  "Website Development",
  "App Development",
  "SEO",
  "Digital Marketing"
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200
    }
  },
  hover: {
    y: -10,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300
    }
  }
}

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const query = `*[_type == "project"] {
        _id,
        title,
        description,
        heroImage,
        services,
        slug
      }`
      
      const data = await client.fetch(query)
      setProjects(data)
    }

    fetchProjects()
  }, [])

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" ? true : project.services.includes(selectedCategory)
  )

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-gradient-to-b from-white to-neutral-100 dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GradientHeading variant="default" size="xxl" weight="bold">
            Featured <span className="text-[#4361ee]">Works</span>
          </GradientHeading>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 font-poppins max-w-3xl mx-auto">
            Explore our portfolio of successful projects and digital solutions
          </p>
        </motion.div>

        {/* Filter Options */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-[#4361ee] text-white"
                  : "bg-white dark:bg-zinc-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-zinc-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <Link key={project._id} href={`/works/${project.slug.current}`}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={urlFor(project.heroImage).url()}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <span 
                        key={index}
                        className="inline-block px-3 py-1 text-xs font-semibold bg-[#4361ee]/10 text-[#4361ee] rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
