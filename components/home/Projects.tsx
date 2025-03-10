"use client"

import React, { useRef } from 'react'
import { Cover } from "@/components/ui/cover"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern online shopping experience with seamless checkout",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2670&auto=format&fit=crop",
    category: "Web Development",
    link: "/works/ecommerce"
  },
  {
    title: "Fitness App",
    description: "Mobile application for tracking workouts and nutrition",
    image: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?q=80&w=2670&auto=format&fit=crop",
    category: "App Development",
    link: "/works/fitness-app"
  },
  {
    title: "Corporate Website",
    description: "Professional website with custom CMS for a financial firm",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    category: "Website Design",
    link: "/works/corporate"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics platform for monitoring social media performance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    category: "Digital Marketing",
    link: "/works/social-dashboard"
  }
]

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#4361ee] rounded-full mb-2">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-sm text-white/80">{project.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  
  return (
    <section ref={containerRef} className="py-20 md:py-28 px-6 md:px-8 relative">
      <motion.div 
        style={{ y }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold relative z-20 py-6 mb-4">
            We Deliver Projects at <Cover>warp speed</Cover>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 font-poppins max-w-3xl mx-auto">
            Our team of experts delivers high-quality projects on time and within budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link href="/works">
            <motion.button
              className="px-8 py-3 bg-[#4361ee] text-white rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View All Projects <span className="ml-1">→</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
