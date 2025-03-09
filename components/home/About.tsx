"use client"
import { motion } from "framer-motion"
import { Highlight } from "@/components/ui/hero-highlight"
import { IconCloudDemo } from "@/components/ui/icon-cloud-demo"
import Link from "next/link"

export function About() {
  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden">
      {/* Dotted background pattern */}
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
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content on the left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <motion.h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold font-calendas leading-tight mb-6 text-gray-900 dark:text-white"
            >
              Transforming ideas into 
              <Highlight className="ml-2">digital excellence</Highlight>
            </motion.h3>

            <motion.p
              className="text-base md:text-lg lg:text-xl font-overusedGrotesk mb-8 text-gray-700 dark:text-white"
            >
              We combine cutting-edge technologies with creative design to build websites and applications 
              that elevate your business in the digital landscape. Our solutions are tailored to your unique needs,
              ensuring optimal performance, user experience, and scalability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8"
            >
              <Link href="/services">
                <motion.button
                  className="text-base md:text-lg font-semibold tracking-tight text-white bg-gray-900 dark:bg-white dark:text-[#001324] px-5 py-2.5 md:px-6 md:py-3 rounded-full shadow-lg font-calendas"
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", damping: 30, stiffness: 400 },
                  }}
                >
                  Make your business <span className="font-serif ml-1">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* IconCloud on the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex justify-center items-center"
          >
            <IconCloudDemo />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

