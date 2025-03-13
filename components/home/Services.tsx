"use client";
import React from "react";
import { motion } from "framer-motion";
import { GradientHeading } from "@/components/ui/gradient-heading";
import Link from "next/link";

type Service = {
  title: string
  description: string
  icon: string
  color: string
  iconBg: string
}


// Service card data based on the provided image
const services = [
  {
    title: "WEBSITE DESIGN",
    description: "Chennai web solutions design/redesign your website in a cost efficient manner and according to the trend",
    icon: "/icons/website-design.svg",
    color: "from-red-400 to-red-500",
    iconBg: "bg-red-100"
  },
  {
    title: "WEBSITE DEVELOPMENT",
    description: "Chennai web Developers are skilled and experience in using the latest website building technologies to give out the best performing site",
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
    title: "E-COMMERCE",
    description: "we provide e-commerce solutions to help your business thrive in the online world and make your business more popular and more profitable",
    icon: "/icons/e-commerce.svg",
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

// Helper function to generate slug from title
const generateSlug = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, '-');
};

const ServiceCard = ({ service }: { service: Service }) => {
  const slug = generateSlug(service.title);
  
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="h-full"
    >
      <div className="bg-white dark:bg-zinc-900 rounded-2xl h-full p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <div className="flex justify-center mb-6">
          <div className={`${service.iconBg} p-4 rounded-xl`}>
            {/* Add E-commerce icon */}
            
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
               {service.title.includes("E-COMMERCE") && (
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" xmlSpace="preserve"><path fill="#18CEF6" d="M26.029 58.156c-1.683 0-3.047 1.334-3.047 2.979 0 1.646 1.364 2.979 3.047 2.979s3.047-1.333 3.047-2.979c0-1.645-1.364-2.979-3.047-2.979zm17.795 0c-1.682 0-3.046 1.334-3.046 2.979 0 1.646 1.364 2.979 3.046 2.979 1.683 0 3.047-1.333 3.047-2.979 0-1.645-1.364-2.979-3.047-2.979zM22.515 26.997l5.416 14.5h21.793l6.189-14.5H22.515z"/><path fill="#233251" d="m58.753 13-9.67 28.181H23.85l-6.527-17.968h29.111v-2.27H14.036l7.722 21.258-6.281 10.643h35.794v-2.271H19.494l4.207-7.125h27.051l9.67-28.18H71V13H58.753zm-33.4 41.861c-3.134.002-5.674 2.484-5.676 5.548.002 3.065 2.542 5.548 5.676 5.549 3.133-.002 5.672-2.485 5.672-5.549 0-3.064-2.539-5.546-5.672-5.548zm0 8.827c-1.853-.003-3.35-1.468-3.353-3.279.003-1.81 1.5-3.274 3.353-3.277 1.849.003 3.349 1.467 3.352 3.277-.003 1.812-1.503 3.276-3.352 3.279zm17.794-8.827c-3.134.002-5.673 2.484-5.674 5.548.001 3.065 2.54 5.548 5.674 5.549 3.134-.002 5.672-2.485 5.674-5.549-.002-3.064-2.54-5.546-5.674-5.548zm0 8.827c-1.851-.003-3.349-1.468-3.352-3.279.003-1.81 1.501-3.274 3.352-3.277 1.851.003 3.35 1.467 3.353 3.277-.003 1.812-1.502 3.276-3.353 3.279z"/></svg>
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
          <Link href={`/services/${slug}`}>
            <motion.button 
              className={`rounded-full px-4 py-2 text-white flex items-center space-x-1 ${
                service.title.includes("WEBSITE DESIGN") || service.title.includes("SEO") || service.title.includes("DIGITAL MARKETING") 
                  ? "bg-red-500 hover:bg-red-600" 
                  : "bg-blue-500 hover:bg-blue-600"
              } text-sm font-bold transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More</span>
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
