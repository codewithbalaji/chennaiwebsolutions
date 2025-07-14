"use client"
import Link from "next/link"
import TypewriterEffect from "../ui/typewriter-effect"
import AnimatedBackground from "../ui/animated-background"

export default function LandingHero() {
  const services = ["Online Presence", "Digital Marketing", "Web Development", "Mobile Development"]

  return (
    <section className="relative min-h-screen bg-dark flex items-center justify-center px-4 py-8 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl text-center">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Bringing Local Businesses{" "}
            <span className="block mt-2 md:mt-4">
              <TypewriterEffect words={services} className="text-primary" />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            We empower businesses with cutting-edge web & app solutions, turning ideas into a strong digital presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 md:pt-8 px-4">
            <Link
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black bg-white rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm"
            >
              View Our Work →
            </Link>

            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        {/* Optional: Add scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
