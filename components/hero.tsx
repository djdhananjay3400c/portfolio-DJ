"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        canvas.width = width
        canvas.height = height
      }
    }

    updateCanvasSize()

    // Security icons and programming language symbols
    const symbols = [
      // Security icons
      "🔒",
      "🛡️",
      "🔑",
      "🔐",
      "🔍",
      "⚠️",
      // Additional security icons
      "🕵️",
      "🔗",
      "🔏",
      "🔓",
      "🧪",
      "📡",
      "🌐",
      "⚙️",
      "🔧",
      "💻",
      // Programming language icons (text-based)
      "Py",
      "C++",
      "Java",
      "JS",
      "HTML",
      "CSS",
      "SQL",
      "PHP",
      "Go",
      "R",
      // Additional programming languages
      "Ruby",
      "Swift",
      "Rust",
      "Kotlin",
      "TypeScript",
      "Bash",
      "C#",
      "Scala",
    ]

    const particles: {
      x: number
      y: number
      symbol: string
      size: number
      speedX: number
      speedY: number
      color: string
      rotation: number
      rotationSpeed: number
      isEmoji: boolean
    }[] = []

    const createParticles = () => {
      // Increase particle density - adjust the divisor to control density
      // Lower number = more particles
      const particleCount = Math.max(30, Math.floor(canvas.width / 40))

      // More professional color palette
      const colors =
        theme === "dark"
          ? ["#0096c8", "#6a5acd", "#3cb371", "#4682b4", "#9370db"]
          : ["#0078b4", "#5a4fcb", "#2a9d8f", "#3a6ea5", "#8a63d2"]

      for (let i = 0; i < particleCount; i++) {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)]
        // Check if the symbol is an emoji (security icon)
        const isEmoji = /\p{Emoji}/u.test(symbol)

        // Adjust size based on screen width
        const baseSize = canvas.width < 768 ? 8 : 12
        const sizeVariation = canvas.width < 768 ? 6 : 10

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          symbol: symbol,
          size: isEmoji ? Math.random() * sizeVariation + baseSize : Math.random() * (sizeVariation - 2) + baseSize - 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          isEmoji: isEmoji,
        })
      }
    }

    createParticles()

    const connectParticles = () => {
      // Adjust connection distance based on screen width
      const connectionDistance = canvas.width < 768 ? 100 : 150

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const color = theme === "dark" ? "rgba(0, 150, 200, " : "rgba(0, 120, 180, "
            ctx.beginPath()
            ctx.strokeStyle = `${color}${0.08 - distance / (connectionDistance * 12)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Save context state
        ctx.save()

        // Move to particle position and rotate
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)

        // Draw the symbol
        if (p.isEmoji) {
          // For emoji (security icons)
          ctx.font = `${p.size}px Arial`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(p.symbol, 0, 0)
        } else {
          // For programming language text
          ctx.font = `bold ${p.size}px monospace`
          ctx.fillStyle = p.color
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(p.symbol, 0, 0)

          // Add a subtle glow effect for programming language text
          ctx.shadowColor = p.color
          ctx.shadowBlur = 5 // Reduced blur for more professional look
          ctx.fillText(p.symbol, 0, 0)
          ctx.shadowBlur = 0
        }

        // Restore context state
        ctx.restore()

        // Update position
        p.x += p.speedX
        p.y += p.speedY
        p.rotation += p.rotationSpeed

        // Wrap around screen edges
        if (p.x > canvas.width) p.x = 0
        else if (p.x < 0) p.x = canvas.width

        if (p.y > canvas.height) p.y = 0
        else if (p.y < 0) p.y = canvas.height
      }

      connectParticles()
    }

    animate()

    const handleResize = () => {
      updateCanvasSize()
      particles.length = 0
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [theme]) // Re-run when theme changes

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <div className="z-10 text-center px-4 py-16 md:py-0 max-w-[1200px] mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
          <span className="text-gray-800 dark:text-white">Hi, I'm </span>
          <span className="text-primary dark:text-primary">Dhananjay Singh</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 text-gray-700 dark:text-gray-300">
          <span className="text-primary dark:text-primary">Cybersecurity</span> |{" "}
          <span className="text-secondary dark:text-secondary">Networking</span> |{" "}
          <span className="text-accent dark:text-accent">Programming</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 text-gray-600 dark:text-gray-400">
          Computer Science student passionate about cybersecurity, ethical hacking, and building secure applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects">
            <Button className="bg-primary hover:bg-primary/80 text-white dark:text-black text-sm sm:text-base transition-transform duration-300 hover:scale-105">
              View My Work
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-sm sm:text-base transition-transform duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </a>
        </div>
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </a>
      </div>
    </section>
  )
}

export default Hero
