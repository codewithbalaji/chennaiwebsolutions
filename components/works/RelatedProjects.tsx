"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/sanity/lib/image"

type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

type RelatedProject = {
  title: string;
  description: string;
  heroImage: SanityImage;
  slug: {
    current: string;
  };
  services: string[];
}

type Props = {
  projects: RelatedProject[]
}

export default function RelatedProjects({ projects }: Props) {
  return (
    <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Similar Projects</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Explore more projects like this
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link 
            key={project.slug.current} 
            href={`/works/${project.slug.current}`}
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
                  src={urlFor(project.heroImage).url()}
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