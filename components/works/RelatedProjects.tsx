"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@/lib/projects"

type Props = {
  currentSlug: string
  currentServices: string[]
  allProjects: Project[]
}

export default function RelatedProjects({ currentSlug, currentServices, allProjects }: Props) {
  const relatedProjects = allProjects
    .filter(project => 
      project.slug !== currentSlug && 
      project.services.some(service => currentServices.includes(service))
    )
    .slice(0, 3)

  if (relatedProjects.length === 0) return null

  return (
    <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Similar Projects</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Explore more projects like this
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {relatedProjects.map((project, index) => (
          <Link 
            key={project.slug} 
            href={`/works/${project.slug}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#4361ee] transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 text-xs font-semibold bg-[#4361ee]/10 text-[#4361ee] rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
} 