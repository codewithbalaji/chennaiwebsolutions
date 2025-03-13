"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimatedGridPattern } from '../ui/animated-grid-pattern';

// Import services data with SVG icons
const services = [
  {
    title: "WEBSITE DESIGN",
    description: "Chennai web solutions design/redesign your website in a cost efficient manner and according to the trend",
    color: "from-red-400 to-red-500",
    iconBg: "bg-red-100",
    slug: "website-design",
    unsplashImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "WEBSITE DEVELOPMENT",
    description: "Chennai web Developers are skilled and experience in using the latest website building technologies to give out the best performing site",
    color: "from-blue-400 to-blue-500",
    iconBg: "bg-blue-100",
    slug: "website-development",
    unsplashImage: "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "APP DEVELOPMENT",
    description: "The user-friendly and responsive mobile applications make your business easily approachable for the clients",
    color: "from-blue-400 to-blue-500",
    iconBg: "bg-blue-100",
    slug: "app-development",
    unsplashImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "SEO",
    description: "Our SEO experts utilize the keywords to the fullest to rank high. We make your website get optimized as per the Search engine criteria",
    color: "from-red-400 to-red-500",
    iconBg: "bg-red-100",
    slug: "seo",
    unsplashImage: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "E-COMMERCE",
    description: "we provide e-commerce solutions to help your business thrive in the online world and make your business more popular and more profitable",
    color: "from-blue-400 to-blue-500",
    iconBg: "bg-blue-100",
    slug: "e-commerce",
    unsplashImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "DIGITAL MARKETING",
    description: "Our strength of digital marketing experts use their relevant industry experience to make your brand more popular on different social media platforms such as Facebook, YouTube, Google+, Twitter, etc",
    color: "from-red-400 to-red-500",
    iconBg: "bg-red-100",
    slug: "digital-marketing",
    unsplashImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop"
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// SVG Icon Component
const ServiceIcon = ({ service }: { service: typeof services[0] }) => {
  return (
    <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center", service.iconBg)}>
      {service.title.includes("WEBSITE DESIGN") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF5757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )}
      {service.title.includes("WEBSITE DEVELOPMENT") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )}
      {service.title.includes("APP DEVELOPMENT") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12" y2="18"></line>
        </svg>
      )}
      {service.title.includes("SEO") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF5757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )}
      {service.title.includes("E-COMMERCE") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      )}
      {service.title.includes("DIGITAL MARKETING") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF5757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )}
    </div>
  );
};

export default function Services() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-neutral-50/50 dark:from-slate-900 dark:to-slate-900 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "dark:fill-white/10 dark:stroke-white/10 fill-neutral-900/[0.07] stroke-neutral-900/[0.07]",
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%]"
          )}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p 
            className="text-sm tracking-wider text-neutral-600 dark:text-neutral-400 uppercase font-medium"
            variants={fadeInUp}
          >
            OUR SERVICES
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mt-2"
            variants={fadeInUp}
          >
            What We Offer
          </motion.h1>
          <motion.p 
            className="mt-6 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            We provide comprehensive digital solutions to help your business grow and thrive in the digital landscape. Our expert team is dedicated to delivering high-quality services tailored to your specific needs.
          </motion.p>
        </motion.div>

        {/* Services List - Zig Zag Layout */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.slug}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              )}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Image Section */}
              <motion.div 
                className={cn(
                  "relative rounded-2xl overflow-hidden shadow-xl",
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                )}
                variants={fadeInUp}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image 
                    src={service.unsplashImage}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-20 rounded-2xl`}></div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className={cn(
                  "space-y-6",
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                )}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <ServiceIcon service={service} />
                </motion.div>
                <motion.h2 
                  className="text-3xl font-bold text-neutral-900 dark:text-white"
                  variants={fadeInUp}
                >
                  {service.title}
                </motion.h2>
                <motion.p 
                  className="text-neutral-600 dark:text-neutral-300"
                  variants={fadeInUp}
                >
                  {service.description}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-2 text-red-500 font-medium hover:text-red-600 transition-colors duration-300"
                  >
                    <span>Learn more</span>
                    <span>→</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-32 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6"
            variants={fadeInUp}
          >
            Ready to transform your digital presence?
          </motion.h2>
          <motion.p 
            className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8"
            variants={fadeInUp}
          >
            Let&apos;s discuss how our services can help you achieve your business goals. Contact us today for a free consultation.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Get in touch</span>
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
