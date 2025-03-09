"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

// Service card data
const services = [
  {
    title: "Website Development",
    items: [
      "Static & Dynamic Websites",
      "E-commerce Websites",
      "Search Engine Optimization (SEO)",
      "Website Maintenance"
    ],
    icon: "💻",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "App Development",
    items: [
      "iOS & Android Apps",
      "Progressive Web Apps",
      "Cross-platform Solutions",
      "App Maintenance & Updates"
    ],
    icon: "📱",
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Digital Marketing",
    items: [
      "Performance Marketing",
      "Social Media Marketing",
      "Online Ads",
      "App Marketing"
    ],
    icon: "📊",
    color: "from-green-600 to-teal-600"
  },
  {
    title: "MVP Development",
    items: [
      "Rapid Prototyping",
      "Proof of Concept",
      "Minimum Viable Product",
      "Iterative Development"
    ],
    icon: "🚀",
    color: "from-orange-600 to-amber-600"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="h-full"
    >
      <BackgroundGradient 
        className={`rounded-2xl h-full p-6 bg-white dark:bg-zinc-900 ${service.color}`}
      >
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold font-calendas mb-3 text-black dark:text-white">
          {service.title}
        </h3>
        <ul className="space-y-2 mb-6">
          {service.items.map((item, idx) => (
            <li 
              key={idx} 
              className="text-sm text-neutral-700 dark:text-neutral-300 font-overusedGrotesk"
            >
              • {item}
            </li>
          ))}
        </ul>
        <Link href="/contact">
          <motion.button 
            className="rounded-full px-4 py-2 text-white flex items-center space-x-1 bg-black dark:bg-zinc-800 text-sm font-bold mt-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Learn more</span>
            <span className="ml-1">→</span>
          </motion.button>
        </Link>
      </BackgroundGradient>
    </motion.div>
  );
};

export function Services() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-calendas tracking-tight">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 font-overusedGrotesk max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the online world
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
