"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Shield, Network, Code, Layers } from "lucide-react" // Added Layers icon

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
            sectionRef.current?.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
      const elements = section.querySelectorAll(".reveal")
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (section) {
        observer.unobserve(section)
        const elements = section.querySelectorAll(".reveal")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section cyberpunk-grid py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center reveal">
          <span className="text-primary dark:text-primary">About</span> Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="reveal order-2 md:order-1">
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg border-2 border-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group">
              <Image
                src="/placeholder-my.png?height=400&width=400"
                alt="Profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className="reveal order-1 md:order-2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Computer Science Student | MERN Stack Developer | Cybersecurity Enthusiast
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
              I'm a passionate Computer Science student at Lovely Professional University with a strong focus on both full-stack development and cybersecurity. My interests lie in creating secure, scalable web applications as well as identifying and mitigating digital threats.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) and backend API development alongside my ongoing work in penetration testing, network security, and secure application design. I believe in building technology that not only works beautifully but is also hardened against modern vulnerabilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="skill-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary dark:text-primary mb-2 transition-transform duration-300 group-hover:scale-110" />
                <h4 className="font-semibold">Cybersecurity</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Penetration Testing & Vulnerability Assessment
                </p>
              </div>

              <div className="skill-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
                <Network className="h-8 w-8 sm:h-10 sm:w-10 text-secondary dark:text-secondary mb-2 transition-transform duration-300 group-hover:scale-110" />
                <h4 className="font-semibold">Networking</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Network Security & Monitoring</p>
              </div>

              <div className="skill-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
                <Code className="h-8 w-8 sm:h-10 sm:w-10 text-accent dark:text-accent mb-2 transition-transform duration-300 group-hover:scale-110" />
                <h4 className="font-semibold">Programming</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Python, C++, Java, SQL</p>
              </div>

              <div className="skill-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
                <Layers className="h-8 w-8 sm:h-10 sm:w-10 text-primary dark:text-primary mb-2 transition-transform duration-300 group-hover:scale-110" />
                <h4 className="font-semibold">Full-Stack Dev</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">MERN Stack & REST APIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
