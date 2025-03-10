"use client"

import Link from "next/link"
import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop",
    author: "React Development",
    title: "React JS Framework",
  },
  {
    url: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2670&auto=format&fit=crop",
    title: "WordPress Development",
    author: "CMS Solutions",
  },
  {
    url: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2669&auto=format&fit=crop",
    author: "Chennai Cityscape",
    title: "Chennai Central Station",
  },
  {
    url: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2670&auto=format&fit=crop",
    author: "Business Trust",
    title: "Client Handshake",
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    author: "Digital Marketing",
    title: "Social Media Dashboard",
  },
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop",
    author: "Server Infrastructure",
    title: "Data Center",
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop",
    author: "Chennai Beach",
    title: "Marina Beach Sunset",
  },
  {
    url: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2670&auto=format&fit=crop",
    author: "Mobile Development",
    title: "App Interface",
  },
  {
    url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop",
    author: "Cybersecurity",
    title: "Data Protection",
  },
  {
    url: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?q=80&w=2670&auto=format&fit=crop",
    author: "Cloud Computing",
    title: "Server Racks",
  },
  {
    url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
    author: "Web Technologies",
    title: "JavaScript Code",
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    author: "Business Strategy",
    title: "Team Planning",
  }
]

function LandingHero() {
  return (
    <section className="w-full min-h-[100vh] overflow-hidden  flex flex-col items-center justify-center relative py-8 md:py-0">
      <Floating sensitivity={-0.5} className="h-full w-full">
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.img
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.img
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
        >
          <motion.img
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
        >
          <motion.img
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
        >
          <motion.img
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[90%] sm:w-[85%] md:w-[80%] z-50 pointer-events-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-7xl text-center w-full justify-center items-center flex-col flex leading-tight font-calendas tracking-tight space-y-2 md:space-y-3"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span>Bringing</span>
          <LayoutGroup>
            <motion.div layout className="flex flex-col sm:flex-row items-center justify-center">
              <motion.span
                layout
                className="whitespace-nowrap"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                Local Businesses{" "}
                  <TextRotate
                texts={[
                  "Online Presence",
                  "Web Development",
                  "Mobile Development",
                  "Digital Marketing",
                  
                ]}
                mainClassName="overflow-hidden text-[#4361ee] py-0 pb-2 md:pb-4 rounded-xl mt-2 sm:mt-0"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
              </motion.span>
            
            </motion.div>
          </LayoutGroup>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-2xl text-center font-poppins pt-4 sm:pt-6 md:pt-8 px-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          We empower businesses with cutting-edge web & app solutions, turning ideas into a strong digital presence.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 items-center mt-6 sm:mt-8 md:mt-12 w-full px-6 sm:px-0">
          <motion.button
            className="w-full sm:w-auto text-base md:text-xl font-semibold tracking-tight text-background bg-foreground px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full z-20 shadow-2xl font-poppins"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <Link href="/works" className="w-full block">
              View Our Work <span className="font-serif ml-1">→</span>
            </Link>
          </motion.button>
          <motion.button
            className="w-full sm:w-auto text-base md:text-xl font-semibold tracking-tight text-white bg-[#4361ee] px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full z-20 shadow-2xl font-poppins"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <Link href="/contact" className="w-full block">Let&apos;s Talk</Link>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export { LandingHero }
