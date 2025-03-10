"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { GradientHeading } from "@/components/ui/gradient-heading";
import Link from "next/link";
import Image from "next/image";

// Service card data based on the provided image
const services = [
  {
    title: "WEBSITE DESIGN",
    description: "Techpark info solutions design/redesign your website in a cost efficient manner and according to the trend",
    icon: "/icons/website-design.svg",
    color: "from-red-400 to-red-500",
    iconBg: "bg-red-100"
  },
  {
    title: "WEBSITE DEVELOPMENT",
    description: "Tech Park Developers are skilled and experience in using the latest website building technologies to give out the best performing site",
    icon: "/icons/website-development.svg",
    color: "from-blue-400 to-blue-500",
    iconBg: "bg-blue-100"
  },
  {
    title: "APP DEVELOPMENT",
    description: "The user-friendly and responsive mobile applications make your business easily approachable for the clients",
    icon: "/icons/app-development.svg",
    color: "from-blue-400 to-blue-500",
    iconBg: "bg-blue-100"
  },
  {
    title: "SEO",
    description: "Our SEO experts utilize the keywords to the fullest to rank high. We make your website get optimized as per the Search engine criteria",
    icon: "/icons/seo.svg",
    color: "from-red-400 to-red-500",
    iconBg: "bg-red-100"
  },
  {
    title: "WEB HOSTING",
    description: "We can provide Web Hosting of this free of charge for one year with all of our web design packages, giving you everything you need to get your business setup online",
    icon: "/icons/web-hosting.svg",
    color: "from-blue-400 to-blue-500",
    iconBg: "bg-blue-100"
  },
  {
    title: "DIGITAL MARKETING",
    description: "Our strength of digital marketing experts use their relevant industry experience to make your brand more popular on different social media platforms such as Facebook, YouTube, Google+, Twitter, etc",
    icon: "/icons/digital-marketing.svg",
    color: "from-red-400 to-red-500",
    iconBg: "bg-red-100"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="h-full"
    >
      <div className="bg-white dark:bg-zinc-900 rounded-2xl h-full p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <div className="flex justify-center mb-6">
          <div className={`${service.iconBg} p-4 rounded-xl`}>
            {/* Replace with actual SVG icons or use Image component */}
            <div className="text-4xl flex justify-center items-center h-16 w-16">
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
              {service.title.includes("WEB HOSTING") && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              )}
              {service.title.includes("DIGITAL MARKETING") && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF5757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              )}
            </div>
          </div>
        </div>
        
        <h3 className={`text-center text-lg font-bold mb-4 ${
          service.title.includes("WEBSITE DESIGN") || service.title.includes("SEO") || service.title.includes("DIGITAL MARKETING") 
            ? "text-red-500" 
            : "text-blue-500"
        }`}>
          {service.title}
        </h3>
        
        <p className="text-sm text-neutral-700 dark:text-neutral-300 font-overusedGrotesk text-center flex-grow">
          {service.description}
        </p>
        
        <div className="mt-6 flex justify-center">
          <Link href="/contact">
            <motion.button 
              className={`rounded-full px-4 py-2 text-white flex items-center space-x-1 ${
                service.title.includes("WEBSITE DESIGN") || service.title.includes("SEO") || service.title.includes("DIGITAL MARKETING") 
                  ? "bg-red-500 hover:bg-red-600" 
                  : "bg-blue-500 hover:bg-blue-600"
              } text-sm font-bold transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Started</span>
              <span className="ml-1">→</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export function Services() {
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
            Our <span className="text-blue-600">Services</span>
          </GradientHeading>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 font-overusedGrotesk max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the online world
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
