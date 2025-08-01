"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [showAllCertificates, setShowAllCertificates] = useState(false)

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

  const toggleCertificates = () => {
    setShowAllCertificates((prev) => !prev)
  }

  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "October 2024",
      description: "Comprehensive certification covering cloud computing concepts, architectures, and implementations.",
      url: "https://drive.google.com/file/d/11pUIsHAy2SNcjw_7O4xNTWEd3UqUKPsR/view?usp=sharing",
    },
    {
      title: "Penetration Testing and Ethical Hacking",
      issuer: "Cybrary",
      date: "November 2024",
      description: "In-depth training on penetration testing methodologies, tools, and ethical hacking techniques.",
      url: "https://drive.google.com/file/d/1-9wLTKoxETzqtjJroiB1skIHOBO7xgb4/view?usp=sharing",
    },
    {
      title: "CompTIA Linux+ XKO-005",
      issuer: "Cybrary",
      date: "April 2024",
      description: "Certification validating Linux administration skills and system management capabilities.",
      url: "https://drive.google.com/file/d/1b5H22xCW5VymBQ_Rcp1UeQPTZz-5gsIk/view?usp=sharing",
    },
    {
      title: "Introduction to Cybersecurity Essentials",
      issuer: "Coursera",
      date: "April 2024",
      description: "Foundational knowledge of cybersecurity principles, threats, and defense mechanisms.",
      url: "https://drive.google.com/file/d/1UqUsOevjbzwbxEqxWTmBKvQNDXy0pjH-/view?usp=sharing",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "November 2023",
      description: "Comprehensive understanding of networking concepts, protocols, and infrastructure.",
      url: "https://drive.google.com/file/d/1ePgSITPbvwspencKIYt61h05Kkxkn1dc/view?usp=sharing",
    },
    {
      title: "Mastering Data Structures",
      issuer: "Udemy",
      date: "February 2024",
      description: "Mastery of fundamental data structures and algorithms for efficient problem-solving.",
      url: "https://drive.google.com/file/d/1HPkA9wf0a4kPxy5_tOwnV47uUfwbtMaz/view?usp=sharing",
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      date: "November 2023",
      description: "Practical skills in C++ programming with focus on object-oriented concepts and implementation.",
      url: "https://drive.google.com/file/d/1H7yJk-qFzIDhzvtXuXQIZZDcMF5fNnwO/view?usp=sharing",
    },
  ]

  return (
    <section id="certifications" ref={sectionRef} className="section bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center reveal">
          <span className="text-primary dark:text-primary">My</span> Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Always visible certificates (first 4) */}
          {certifications.slice(0, 4).map((cert, index) => (
            <Card
              key={index}
              className="cert-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 reveal h-full flex flex-col"
            >
              <CardHeader className="flex flex-row items-start space-x-3 sm:space-x-4 pb-2">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary dark:text-primary mt-1" />
                <div>
                  <CardTitle className="text-base sm:text-xl">{cert.title}</CardTitle>
                  <CardDescription className="text-sm">{cert.issuer}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pb-12 relative flex-grow">
                <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span>{cert.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{cert.description}</p>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button absolute bottom-4 left-0 right-0 mx-auto w-auto px-3 py-1 h-7"
                >
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white dark:text-black text-xs w-auto px-3 py-1 h-7"
                    size="sm"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    View
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}

          {/* Additional certificates with animation */}
          <AnimatePresence>
            {showAllCertificates &&
              certifications.slice(4).map((cert, index) => (
                <motion.div
                  key={`additional-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="md:col-span-1"
                >
                  <Card className="cert-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                    <CardHeader className="flex flex-row items-start space-x-3 sm:space-x-4 pb-2">
                      <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary dark:text-primary mt-1" />
                      <div>
                        <CardTitle className="text-base sm:text-xl">{cert.title}</CardTitle>
                        <CardDescription className="text-sm">{cert.issuer}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-12 relative flex-grow">
                      <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{cert.description}</p>

                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-button absolute bottom-4 left-0 right-0 mx-auto w-auto px-3 py-1 h-7"
                      >
                        <Button
                          className="bg-primary hover:bg-primary/90 text-white dark:text-black text-xs w-auto px-3 py-1 h-7"
                          size="sm"
                        >
                          <ExternalLink className="mr-1 h-3 w-3" />
                          View
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Toggle button */}
        <div className="text-center mt-8 md:mt-12 reveal">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
            onClick={toggleCertificates}
          >
            {showAllCertificates ? (
              <>
                Show Less <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </>
            ) : (
              <>
                View All Certifications{" "}
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </>
            )}
          </Button>
        </div>

        <div className="mt-8 md:mt-12 text-center reveal">
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Continuously expanding my knowledge through professional certifications and specialized training in
            cybersecurity, networking, WebDveloping and programming technologies.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certifications
