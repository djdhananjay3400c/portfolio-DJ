"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

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

  const projects = [
    {
  title: "FormCraft",
  description:
    "A modern, full-stack resume builder application that lets users create, edit, and export professional resumes with ease and customization.",
  image: "/formcraft-logo.png?height=200&width=400",
  tags: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "JWT",
    "Vite",
    "Email OTP"
  ],
  github: "https://github.com/djdhananjay3400c/FormCraft",
  demo: "https://formcraftfrom.onrender.com/", // add your Vercel or live link once deployed
  period: "June 2025 – July 2025",
  details: [
    "Developed a full-stack MERN resume builder with real-time live preview and PDF export support.",
    "Implemented authentication using JWT and OTP-based email verification for secure signup.",
    "Enabled customizable resume templates with live theme switching, dynamic preview rendering, and print-ready A4 layouts.",
    "Built backend REST APIs for user management, resume CRUD operations, and OTP verification using Nodemailer.",
    "Used Vite for blazing-fast frontend builds and Tailwind CSS for responsive UI design.",
    "Deployed using Vercel (frontend) and Render (backend), integrated with GitHub CI for auto-updates."
  ],
},
    {
      title: "BlueWatch Lab",
      description:
        "Built a simulated enterprise environment using Active Directory to practice real-world attack detection.",
      image: "/placeholder-logo2.png?height=200&width=400",
      tags: ["Kali Linux", "Splunk", "Windows Server", "Atomic Red Team"],
      github: "https://github.com/djdhananjay3400c/BlueWatch-Lab-cybersecurity-",
      demo: "#",
      period: "Jan 2025 - Mar 2025",
      details: [
        "Built a simulated enterprise environment using Active Directory to practice real-world attack detection.",
        "Integrated Splunk SIEM for log ingestion and analysis.",
        "Monitored domain activities and detected threats like brute-force attempts and unauthorized access using security telemetry.",
      ],
    },
    {
      title: "WebApp Vulnerability Assessment Lab",
      description: "Performed SQL injection attacks on vulnerable web applications to extract sensitive data.",
      image: "/placeholder-logo.png?height=200&width=400",
      tags: ["Kali Linux", "SQLMap", "WAFW00F"],
      github: "https://github.com/djdhananjay3400c/WebApp_Vulnerability_Assessment_Lab",
      demo: "#",
      period: "Jul 2024 - Aug 2024",
      details: [
        "Performed SQL injection attacks on vulnerable web applications to extract sensitive data.",
        "Detected and bypassed Web Application Firewalls (WAFs).",
        "Proposed effective mitigation strategies like input validation and prepared statements to prevent future exploitation.",
      ],
    },
    {
  title: "DigitWiz 🧙‍♂️",
  description: "The Wizard of Web Calculations — Smart. Swift. Spellbinding.",
  image: "/placeholder-logo3.png?height=200&width=400",
  tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Mantine UI"],
  github: "https://github.com/djdhananjay3400c/-DigitWiz",
  demo: "#",
  period: "May 2024 - Jun 2024",
  details: [
    "Developed a modern and responsive web-based calculator using React and TypeScript.",
    "Integrated Vite for blazing-fast development and hot module reloading.",
    "Designed polished UI/UX with Tailwind CSS and Mantine UI components.",
    "Implemented component-based architecture for scalability and maintainability.",
    "Enforced TypeScript type safety and ESLint rules for robust and clean code.",
    "Supports basic arithmetic with plans for advanced features like trigonometry and error handling.",
  ],
},
    {
      title: "VividSwap 🌀",
      description: "Instantly swap your webpage colors with a single keystroke!",
      image: "/placeholder-logo4.png?height=200&width=400",
      tags: ["HTML5", "CSS3", "JavaScript", "Web Design"],
      github: "https://github.com/djdhananjay3400c/BG-color-change-dj-",
      demo: "#",
      period: "May 2024 - Jun 2024",
      details: [
        "Created a dynamic web app that changes background color as you type a color name or hex code.",
        "Implemented live updates with zero page reloads using vanilla JavaScript.",
        "Built a responsive design that works on all screen sizes with a stylish input box.",
        "Supports both color names (red, blue) and hex codes (#ff5733) for maximum flexibility.",
      ],
    },
    {
      title: "GraphiCalc 🎨🧮",
      description: "A Scientific Calculator with a Graphical Twist — Built using Python's Turtle Library",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "Turtle Graphics", "GUI", "Scientific Calculator"],
      github: "https://github.com/djdhananjay3400c/SCIENTIFIC-CALCULATOR-GUI-/tree/main",
      demo: "#",
      period: "Mar 2024 - Apr 2024",
      details: [
        "Developed a modern scientific calculator with visual creativity using Python's Turtle graphics library.",
        "Implemented scientific calculations including addition, subtraction, multiplication, division, square, and square root.",
        "Created an intuitive button layout with a responsive design for easy mouse-click operation.",
        "Built a lightweight application without heavy frameworks, using pure Python for optimal performance.",
      ],
    },
  ]

  const toggleProjects = () => {
    setShowAllProjects((prev) => !prev)
  }

  return (
    <section id="projects" ref={sectionRef} className="section bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center reveal">
          <span className="text-primary dark:text-primary">My</span> Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Always visible projects */}
          {projects.slice(0, 2).map((project, index) => (
            <Card
              key={index}
              className="project-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden reveal h-full flex flex-col"
            >
              <div className="h-40 sm:h-48 w-full relative group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                <div className="absolute top-2 right-2 bg-primary/80 text-white text-xs px-2 py-1 rounded">
                  {project.period}
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl text-primary dark:text-primary group-hover:underline">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-primary/50 text-primary text-xs bg-primary/5 hover:bg-primary/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex justify-between pt-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary text-xs sm:text-sm hover:bg-primary/10 transition-all duration-300"
                  >
                    <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Code
                  </Button>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button
                  size="sm"
                  className="bg-primary text-white dark:text-black hover:bg-primary/80 text-xs sm:text-sm transition-all duration-300"
                >
                  <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Live Demo
                </Button>
                </a>
              </CardFooter>
            </Card>
          ))}

          {/* Additional projects with animation */}
          <AnimatePresence>
            {showAllProjects &&
              projects.slice(2).map((project, index) => (
                <motion.div
                  key={`additional-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="lg:col-span-1"
                >
                  <Card className="project-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden h-full flex flex-col">
                    <div className="h-40 sm:h-48 w-full relative group">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                      <div className="absolute top-2 right-2 bg-primary/80 text-white text-xs px-2 py-1 rounded">
                        {project.period}
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg sm:text-xl text-primary dark:text-primary group-hover:underline">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="border-primary/50 text-primary text-xs bg-primary/5 hover:bg-primary/10"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {project.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="flex justify-between pt-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 text-primary text-xs sm:text-sm hover:bg-primary/10 transition-all duration-300"
                        >
                          <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Code
                        </Button>
                      </a>
                      <Button
                        size="sm"
                        className="bg-primary text-white dark:text-black hover:bg-primary/80 text-xs sm:text-sm transition-all duration-300"
                      >
                        <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Live Demo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-8 md:mt-12 reveal">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
            onClick={toggleProjects}
          >
            {showAllProjects ? (
              <>
                Show Less <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </>
            ) : (
              <>
                View All Projects{" "}
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects
