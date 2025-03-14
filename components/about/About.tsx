"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Highlight } from "@/components/ui/hero-highlight"
import { CheckCircle2, Users, Trophy, Lightbulb, Users2, Shield, Clock } from 'lucide-react'
import Link from 'next/link';
import { GradientHeading } from "@/components/ui/gradient-heading"
import { useState, useRef, useEffect } from 'react';

const teamMembers = [
  { 
    name: "Balaji D", 
    role: "Founder", 
    image: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1741943851/balajid_bmu3km.jpg",
    slug: "balaji-d"
  },
  { 
    name: "Santhosh D", 
    role: "Web & AI Specialist", 
    image: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1741963174/Santhosh_D_rz3vr0.jpg",
    slug: "santhosh-d"
  },  
  { 
    name: "Deepan B", 
    role: "AI Consultant", 
    image: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1741943850/deepanb_wyj4j2.jpg",
    slug: "deepan-b"
  },
  { 
    name: "Joshua Vince", 
    role: "Creative Designer", 
    image: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1741943851/joshuavince_mjoivc.jpg",
    slug: "joshua-vince"
  },
  { 
    name: "Yogeshwaran B", 
    role: "Social Media Strategist", 
    image: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1741962791/yogeshwaranhd.jpeg_loh6ua.jpg",
    slug: "yogeshwaran-b"
  },
 
];

const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const endValue = end

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      if (progress < 1) {
        countRef.current = Math.floor(endValue * progress)
        setCount(countRef.current)
        requestAnimationFrame(updateCount)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(updateCount)
  }, [end, duration, isInView])

  return [count, setIsInView] as const
}

const stats = [
  { number: 5, label: 'Years Experience', icon: Trophy, suffix: '+' },
  { number: 100, label: 'Projects Completed', icon: CheckCircle2, suffix: '+' },
  { number: 50, label: 'Happy Clients', icon: Users, suffix: '+' },
  { number: 24, label: 'Support Available', icon: Lightbulb, suffix: '/7' }
]

const values = [
  {
    title: 'Innovation First',
    description: 'We stay ahead of technological trends to deliver cutting-edge solutions.',
    icon: Lightbulb
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our priority. We work closely with you to understand and meet your needs.',
    icon: Users2
  },
  {
    title: 'Quality Driven',
    description: 'We maintain high standards in every project, ensuring exceptional results.',
    icon: Shield
  },
  {
    title: 'Timely Delivery',
    description: 'We respect deadlines and deliver projects on time without compromising quality.',
    icon: Clock
  }
]

// Create a separate StatItem component
function StatItem({ stat, index }: { stat: typeof stats[0], index: number }) {
  const [count, setIsInView] = useCounter(stat.number)
  const Icon = stat.icon

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
      onViewportEnter={() => setIsInView(true)}
    >
      <div className="flex justify-center mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-3xl font-bold font-calendas mb-2">
        {count}{stat.suffix}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <GradientHeading variant="default" size="xxl" weight="bold" className="mb-6">
              About <span className="text-[#4361ee]">Chennai Web Solutions</span>
            </GradientHeading>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              We are a team of passionate developers and designers crafting digital experiences 
              that make a difference in the modern web landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-16 bg-gray-50 dark:bg-[#001324]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-calendas mb-6">
                Our <Highlight>Mission</Highlight>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                To empower businesses with innovative digital solutions that drive growth 
                and success in the ever-evolving digital landscape. We combine technical 
                expertise with creative excellence to deliver results that exceed expectations.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Based in Chennai, we serve clients globally with a focus on quality, 
                innovation, and customer satisfaction. Our team of experts is dedicated 
                to helping your business thrive in the digital world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://res.cloudinary.com/dryhpaq1t/image/upload/v1741947174/fetchpik.com-iconscout-fJNPZGqV4K_rivxpi.gif"
                alt="Our Mission"
                width={450}
                height={450}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#001324]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-calendas mb-6">
              Our <Highlight>Values</Highlight>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white dark:bg-[#002340] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 
                                  transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 font-calendas">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-calendas mb-6">
              Meet Our <Highlight>Team</Highlight>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Our success is built on the expertise and dedication of our talented team members
              who bring innovation to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Link href={`/about/${member.slug}`} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative cursor-pointer"
                >
                  <div className="bg-white dark:bg-[#002340] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill 
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <motion.div 
                      className="p-6 text-center relative"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-xl font-bold mb-2 font-calendas">{member.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{member.role}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 md:px-8"
        >
          <div className="relative">
            {/* Background dots pattern */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 10 }).map((_, rowIndex) => (
                  <div key={`row-${rowIndex}`} className="flex justify-around">
                    {Array.from({ length: 15 }).map((_, colIndex) => (
                      <div 
                        key={`dot-${rowIndex}-${colIndex}`} 
                        className="w-1 h-1 rounded-full bg-white m-6"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold font-calendas text-white mb-6">
                  Ready to Transform Your Digital Presence?
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  Let&apos;s discuss how our expertise can help you achieve your business goals 
                  and create impactful digital solutions.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Let&apos;s Talk 
                    <svg 
                      className="ml-2 w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
