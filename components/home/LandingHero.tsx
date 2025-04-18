"use client"

import Link from "next/link"
import Image from "next/image"
import { LayoutGroup } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const exampleImages = [
  {
    url: "https://res.cloudinary.com/dyj3rywju/image/upload/v1744986921/web_devlopment-min_ex2rms.jpg",
    title: "Web Development",
    author: "Web Development",
    width: 240,
    height: 180,
  },
  {
    url: "https://res.cloudinary.com/dyj3rywju/image/upload/v1744986921/digital_marketing-min_xa3zh5.jpg",
    author: "Digital Marketing",
    title: "Digital Marketing",
    width: 240,
    height: 240,
  },
  {
    url: "https://res.cloudinary.com/dyj3rywju/image/upload/v1744988078/img5_evhuys.webp",
    author: "Business Trust",
    title: "Client Handshake",
    width: 240,
    height: 220,
  },
  {
    url: "https://res.cloudinary.com/dyj3rywju/image/upload/v1744987570/img4_hxyah8.webp",
    author: "Social Media",
    title: "Social Media Dashboard",
    width: 280,
    height: 280,
  },
]

function LandingHero() {
  return (
    <section className="w-full min-h-[100vh] overflow-hidden flex flex-col items-center justify-center relative py-8 md:py-0">
      <div className="flex flex-col justify-center items-center w-[90%] sm:w-[85%] md:w-[80%] z-50 pointer-events-auto">
        <h1 className="text-4xl sm:text-4xl md:text-7xl text-center w-full justify-center items-center flex-col flex leading-tight font-calendas tracking-tight space-y-1 md:space-y-3">
          <span>Bringing</span>
          <LayoutGroup>
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <span className="whitespace-nowrap">
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
                />
              </span>
            </div>
          </LayoutGroup>
        </h1>
        <p className="text-lg sm:text-lg md:text-2xl text-center font-poppins pt-2 sm:pt-6 md:pt-8 px-4">
          We empower businesses with cutting-edge web & app solutions, turning ideas into a strong digital presence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 items-center mt-4 sm:mt-8 md:mt-12 w-full px-6 sm:px-0">
          <button className="w-full sm:w-auto text-base md:text-xl font-semibold tracking-tight text-background bg-foreground px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full z-20 shadow-2xl font-poppins hover:scale-105 duration-200 transition-transform">
            <Link href="/works" className="w-full block">
              View Our Work <span className="font-serif ml-1">→</span>
            </Link>
          </button>
          <button className="w-full sm:w-auto text-base md:text-xl font-semibold tracking-tight text-white bg-[#4361ee] px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full z-20 shadow-2xl font-poppins hover:scale-105 duration-200 transition-transform">
            <Link href="/contact" className="w-full block">Let&apos;s Talk</Link>
          </button>
        </div>
      </div>

      <Floating sensitivity={-0.5} className="h-full w-full absolute top-0 left-0">
        <FloatingElement
          depth={1}
          className="top-[5%] left-[15%] md:top-[6%] md:left-[11%]"
        >
          <div className="relative w-48 h-36 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 -rotate-12 shadow-2xl rounded-xl overflow-hidden">
            <Image
              src={exampleImages[0].url}
              alt={exampleImages[0].title}
              width={exampleImages[0].width}
              height={exampleImages[0].height}
              className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              loading="lazy"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzUvLy0vMC4wLi8vLzAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzD/2wBDAR0XGB0aHS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[85%] left-[2%] md:top-[80%] md:left-[8%]"
        >
          <div className="relative w-48 h-48 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 -rotate-[4deg] shadow-2xl rounded-xl overflow-hidden">
            <Image
              src={exampleImages[1].url}
              alt={exampleImages[1].title}
              width={exampleImages[1].width}
              height={exampleImages[1].height}
              className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              loading="lazy"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzUvLy0vMC4wLi8vLzAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzD/2wBDAR0XGB0aHS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[8%] right-[5%] md:top-[2%] md:left-[83%]"
        >
          <div className="relative w-48 h-44 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 shadow-2xl rotate-[6deg] rounded-xl overflow-hidden">
            <Image
              src={exampleImages[2].url}
              alt={exampleImages[2].title}
              width={exampleImages[2].width}
              height={exampleImages[2].height}
              className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              loading="lazy"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzUvLy0vMC4wLi8vLzAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzD/2wBDAR0XGB0aHS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[75%] right-[2%] md:top-[68%] md:left-[83%]"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 shadow-2xl rotate-[19deg] rounded-xl overflow-hidden">
            <Image
              src={exampleImages[3].url}
              alt={exampleImages[3].title}
              width={exampleImages[3].width}
              height={exampleImages[3].height}
              className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              loading="lazy"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzUvLy0vMC4wLi8vLzAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzD/2wBDAR0XGB0aHS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </FloatingElement>
      </Floating>
    </section>
  )
}

export { LandingHero }
