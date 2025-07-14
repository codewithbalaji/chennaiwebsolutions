"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  shape: "circle" | "square" | "triangle"
  color: string
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    if (dimensions.width === 0) return

    const colors = ["#4361ee", "#ffffff", "#6c7ce7", "#a8b3ff"]
    const shapes: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"]

    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.3 + 0.1,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setParticles(newParticles)
  }, [dimensions])

  useEffect(() => {
    if (particles.length === 0) return

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          // Bounce off edges
          if (newX <= 0 || newX >= dimensions.width) {
            particle.speedX *= -1
            newX = Math.max(0, Math.min(dimensions.width, newX))
          }
          if (newY <= 0 || newY >= dimensions.height) {
            particle.speedY *= -1
            newY = Math.max(0, Math.min(dimensions.height, newY))
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [particles.length, dimensions])

  const renderShape = (particle: Particle) => {
    const style = {
      left: `${particle.x}px`,
      top: `${particle.y}px`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      opacity: particle.opacity,
      backgroundColor: particle.color,
    }

    switch (particle.shape) {
      case "circle":
        return (
          <div
            key={particle.id}
            className="absolute rounded-full transition-all duration-1000 ease-linear"
            style={style}
          />
        )
      case "square":
        return <div key={particle.id} className="absolute transition-all duration-1000 ease-linear" style={style} />
      case "triangle":
        return (
          <div
            key={particle.id}
            className="absolute transition-all duration-1000 ease-linear"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: 0,
              height: 0,
              opacity: particle.opacity,
              borderLeft: `${particle.size / 2}px solid transparent`,
              borderRight: `${particle.size / 2}px solid transparent`,
              borderBottom: `${particle.size}px solid ${particle.color}`,
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      {particles.map(renderShape)}

      {/* Large background shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-primary/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-white/5 rotate-45 animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-primary/20 rounded-full animate-bounce-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-white/10 rotate-12 animate-pulse" />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
    </div>
  )
}
