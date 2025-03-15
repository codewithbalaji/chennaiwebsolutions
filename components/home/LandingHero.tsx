"use client"

import Link from "next/link"
import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const exampleImages = [
  {
    url: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1742046966/img1_hjpxfn.avif",
    author: "React Development",
    title: "React JS Framework",
  },
  {
    url: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1742046966/img2_nmc8sx.avif",
    title: "WordPress Development",
    author: "CMS Solutions",
  },
  {
    url: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1742046965/img3_abu59j.avif",
    author: "Chennai Cityscape",
    title: "Chennai Central Station",
  },
  {
    url: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1742046966/img4_jfha1g.avif",
    author: "Business Trust",
    title: "Client Handshake",
  },
  {
    url: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1742047208/niclas-illg-FJ5e_2f96h4-unsplash_1_rxnqwf.jpg",
    author: "Digital Marketing",
    title: "Social Media Dashboard",
  }, 
]

function LandingHero() {
  return (
    <section className="w-full min-h-[100vh] overflow-hidden  flex flex-col items-center justify-center relative py-8 md:py-0">
      <Floating sensitivity={-0.5} className="h-full w-full">
        <FloatingElement
          depth={0.5}
          className="top-[20%] left-[5%] md:top-[25%] md:left-[5%]"
        >
          <motion.img
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="w-24 h-20 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[5%] left-[15%] md:top-[6%] md:left-[11%]"
        >
          <motion.img
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="w-48 h-36 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[85%] left-[2%] md:top-[80%] md:left-[8%]"
        >
          <motion.img
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="w-48 h-48 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[8%] right-[5%] md:top-[2%] md:left-[83%]"
        >
          <motion.img
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="w-48 h-44 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[75%] right-[2%] md:top-[68%] md:left-[83%]"
        >
          <motion.img
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[90%] sm:w-[85%] md:w-[80%] z-50 pointer-events-auto">
        <motion.h1
          className="text-4xl sm:text-4xl md:text-7xl text-center w-full justify-center items-center flex-col flex leading-tight font-calendas tracking-tight space-y-1 md:space-y-3"
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
                mainClassName="overflow-hidden text-[#4361ee] py-0 pb-1 md:pb-4 rounded-xl mt-1 sm:mt-0"
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
          className="text-lg sm:text-lg md:text-2xl text-center font-poppins pt-2 sm:pt-6 md:pt-8 px-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          We empower businesses with cutting-edge web & app solutions, turning ideas into a strong digital presence.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 items-center mt-4 sm:mt-8 md:mt-12 w-full px-6 sm:px-0">
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
