"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimatedGridPattern } from '../ui/animated-grid-pattern';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

type ServiceDetailProps = {
  service: {
    title: string;
    description: string;
    longDescription: string;
    color: string;
    iconBg: string;
    slug: string;
    features: string[];
    process: string[];
    unsplashImage?: string;
  };
};

// SVG Icon Component
const ServiceIcon = ({ service }: { service: ServiceDetailProps['service'] }) => {
  return (
    <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center", service.iconBg)}>
      {service.title.includes("WEBSITE DESIGN") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF5757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )}
      {service.title.includes("WEBSITE DEVELOPMENT") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )}
      {service.title.includes("APP DEVELOPMENT") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12" y2="18"></line>
        </svg>
      )}
      {service.title.includes("SEO") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF5757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )}
      {service.title.includes("E-COMMERCE") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      )}
      {service.title.includes("DIGITAL MARKETING") && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF5757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )}
    </div>
  );
};

// Unsplash image mapping
const getUnsplashImage = (slug: string): string => {
  const imageMap: Record<string, string> = {
    "website-design": "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    "website-development": "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=80&w=1200&auto=format&fit=crop",
    "app-development": "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
    "seo": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200&auto=format&fit=crop",
    "e-commerce": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    "digital-marketing": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop"
  };
  
  return imageMap[slug] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop";
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
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
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeIn}
            className="flex justify-center"
          >
            <ServiceIcon service={service} />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mt-6"
            variants={fadeIn}
          >
            {service.title}
          </motion.h1>
          <motion.p 
            className="mt-6 text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto text-lg"
            variants={fadeIn}
          >
            {service.description}
          </motion.p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="mb-20 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="aspect-w-21 aspect-h-9 relative">
            <Image 
              src={service.unsplashImage || getUnsplashImage(service.slug)}
              alt={service.title}
              width={1200}
              height={600}
              className="object-cover w-full"
            />
            <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-20`}></div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Long Description */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold text-neutral-900 dark:text-white mb-6"
              variants={fadeIn}
            >
              About Our {service.title} Service
            </motion.h2>
            <motion.div 
              className="prose dark:prose-invert prose-lg max-w-none"
              variants={fadeIn}
            >
              {service.longDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="text-neutral-700 dark:text-neutral-300 mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </motion.div>

            {/* Process Section */}
            <motion.div 
              className="mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3 
                className="text-2xl font-bold text-neutral-900 dark:text-white mb-8"
                variants={fadeIn}
              >
                Our Process
              </motion.h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
              >
                {service.process.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200/50 dark:border-white/10"
                    variants={fadeIn}
                  >
                    <div className={`w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold mb-4`}>
                      {index + 1}
                    </div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">{step}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div 
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white dark:bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-neutral-200/50 dark:border-white/10 sticky top-24"
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs`}>
                      ✓
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <h4 className="font-medium text-neutral-900 dark:text-white mb-4">
                  Ready to get started?
                </h4>
                <Link 
                  href="/contact"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>Contact Us</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Related Services */}
        <motion.div 
          className="mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center"
            variants={fadeIn}
          >
            Explore Other Services
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {/* We'll show 3 other services here */}
            <motion.div 
              className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-200/50 dark:border-white/10"
              variants={fadeIn}
            >
              <Link href="/services" className="block">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    View All Services
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    Explore our complete range of digital services
                  </p>
                  <span className="inline-flex items-center space-x-1 text-red-500 font-medium">
                    <span>Learn more</span>
                    <span>→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 