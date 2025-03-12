"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { GradientHeading } from "@/components/ui/gradient-heading"
import Image from "next/image"

type Testimonial = {
  author: {
    name: string
    role: string
    company: string
    avatar: string
  }
  text: string
}

const testimonials: Testimonial[] = [
  {
    author: {
      name: "Emma Thompson",
      role: "Marketing Director",
      company: "TechGrowth",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this platform has transformed how we handle our online presence. The speed and quality of work are unprecedented.",
  },
  {
    author: {
      name: "David Park",
      role: "CEO",
      company: "InnovateTech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The website integration is flawless. We've increased our conversion rate by 60% since implementing this solution.",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      role: "Product Manager",
      company: "GlobalApps",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, a development team that actually understands our business needs! The communication and results are impressive."
  },
  {
    author: {
      name: "Michael Chen",
      role: "E-commerce Director",
      company: "ShopWave",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Our online sales have doubled since launching our new website. The SEO optimization and user experience are top-notch."
  },
  {
    author: {
      name: "Priya Sharma",
      role: "Startup Founder",
      company: "NexGen Solutions",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face"
    },
    text: "From concept to launch in just weeks - these guys delivered exactly what we needed for our MVP, and then some!"
  },
  {
    author: {
      name: "James Wilson",
      role: "Digital Strategist",
      company: "MediaForce",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The digital marketing strategy they implemented has completely transformed our online presence and lead generation."
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md flex flex-col h-full min-w-[300px] max-w-[350px]">
      <div className="mb-4">
        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#4361ee]/20">
          <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27H18V36H9C4.02944 36 0 31.9706 0 27V13.5C0 6.04416 6.04416 0 13.5 0ZM40.5 0C33.0442 0 27 6.04416 27 13.5C27 20.9558 33.0442 27 40.5 27H45V36H36C31.0294 36 27 31.9706 27 27V13.5C27 6.04416 33.0442 0 40.5 0Z" fill="currentColor" />
        </svg>
      </div>
      <p className="text-neutral-700 dark:text-neutral-300 flex-grow mb-6">{testimonial.text}</p>
      <div className="flex items-center mt-auto">
        <Image 
          src={testimonial.author.avatar} 
          alt={testimonial.author.name} 
          width={48}
          height={48}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold text-neutral-900 dark:text-white">{testimonial.author.name}</h4>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {testimonial.author.role}, {testimonial.author.company}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const marqueeRef1 = useRef(null)
  const marqueeRef2 = useRef(null)
  
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-neutral-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GradientHeading variant="default" size="xxl" weight="bold">
            What our <span className="text-[#4361ee]">clients</span> say
          </GradientHeading>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 font-poppins max-w-3xl mx-auto">
            We are proud to have worked with some of the best companies in the world
          </p>
        </motion.div>
        
        <div className="overflow-hidden">
          {/* First row - left to right */}
          <div 
            ref={marqueeRef1}
            className="flex gap-6 mb-6"
          >
            <div className="flex gap-6 animate-marquee">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div key={index} className="shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div key={`clone-${index}`} className="shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Second row - right to left */}
          <div 
            ref={marqueeRef2}
            className="flex gap-6"
          >
            <div className="flex gap-6 animate-marquee-reverse">
              {testimonials.slice(3, 6).map((testimonial, index) => (
                <div key={index} className="shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
              {testimonials.slice(3, 6).map((testimonial, index) => (
                <div key={`clone-${index}`} className="shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}