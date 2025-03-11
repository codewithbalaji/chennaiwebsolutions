"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GradientHeading } from '@/components/ui/gradient-heading'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    title: "Quick Turnaround",
    description: "Get your project delivered in record time without compromising on quality"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
        <line x1="16" y1="8" x2="2" y2="22"></line>
        <line x1="17.5" y1="15" x2="9" y2="15"></line>
      </svg>
    ),
    title: "Customized Solutions",
    description: "Tailored development approach based on your specific business requirements"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
      </svg>
    ),
    title: "Ongoing Support",
    description: "Continuous maintenance and updates to keep your digital presence running smoothly"
  }
]

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business goals and requirements"
  },
  {
    number: "02",
    title: "Planning",
    description: "Our team creates a detailed roadmap for your project"
  },
  {
    number: "03",
    title: "Development",
    description: "We build your solution using the latest technologies"
  },
  {
    number: "04",
    title: "Launch",
    description: "Your project goes live with our full support"
  }
]

export default function GetStarted() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-gradient-to-b from-white to-neutral-50 dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GradientHeading variant="default" size="xxl" weight="bold">
            Ready to <span className="text-[#4361ee]">Get Started</span>?
          </GradientHeading>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 font-poppins max-w-3xl mx-auto">
            Transform your business with our comprehensive digital solutions
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-[#4361ee] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#4361ee]/10 dark:bg-[#4361ee]/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-[#4361ee] font-bold text-xl">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#4361ee]/50 to-transparent" />
                )}
                <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#4361ee] to-[#3a56e4] rounded-3xl p-10 md:p-16 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Digital Journey Today</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Let&apos;s discuss how we can help your business grow with our custom web and app development solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                className="px-8 py-3 bg-white text-[#4361ee] rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact Us
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
