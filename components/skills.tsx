"use client"

import { useEffect, useRef } from "react"
import { ShieldCheck, Code, Database, Server, Terminal, Globe, Lock } from "lucide-react"

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
            sectionRef.current?.classList.add("in-view")

            // Animate progress bars when in view
            if (entry.target.classList.contains("skills-container")) {
              const progressBars = document.querySelectorAll(".progress-value")
              progressBars.forEach((bar, index) => {
                const htmlBar = bar as HTMLElement
                setTimeout(() => {
                  htmlBar.style.width = htmlBar.dataset.value || "0%"
                }, index * 100)
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
      const elements = section.querySelectorAll(".reveal, .skills-container")
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (section) {
        observer.unobserve(section)
        const elements = section.querySelectorAll(".reveal, .skills-container")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-primary" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 85 },
        { name: "C", level: 80 },
        { name: "HTML/CSS", level: 75 },
      ],
    },
    {
      name: "Frameworks & Tools",
      icon: <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-secondary dark:text-secondary" />,
      skills: [
        { name: "Kali Linux", level: 90 },
        { name: "Wireshark", level: 85 },
        { name: "TcpDump", level: 80 },
        { name: "Nmap", level: 85 },
        { name: "VMware", level: 80 },
        { name: "Windows Server", level: 75 },
      ],
    },
    {
      name: "Cybersecurity",
      icon: <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-accent dark:text-accent" />,
      skills: [
        { name: "Penetration Testing", level: 85 },
        { name: "Vulnerability Assessment", level: 90 },
        { name: "Network Security", level: 85 },
        { name: "Ethical Hacking", level: 80 },
        { name: "Digital Forensics", level: 75 },
      ],
    },
    {
      name: "Other Skills",
      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-white" />,
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
        { name: "Problem-Solving", level: 90 },
        { name: "Scripting", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="section cyberpunk-grid py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center reveal">
          <span className="text-primary dark:text-primary">My</span> Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 skills-container reveal">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                {category.icon}
                <h3 className="text-lg sm:text-xl font-semibold ml-2">{category.name}</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-1 sm:mb-2 text-sm sm:text-base">
                      <span className="font-medium group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-primary dark:text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden group-hover:shadow-md transition-all duration-300">
                      <div
                        className="progress-value h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out group-hover:from-secondary group-hover:to-primary"
                        style={{ width: "0%" }}
                        data-value={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 reveal">
          <div className="skill-card flex flex-col items-center p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
            <Terminal className="h-8 w-8 sm:h-10 sm:w-10 text-primary dark:text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-center text-sm sm:text-base">Linux Administration</span>
          </div>
          <div className="skill-card flex flex-col items-center p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
            <Server className="h-8 w-8 sm:h-10 sm:w-10 text-primary dark:text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-center text-sm sm:text-base">Server Management</span>
          </div>
          <div className="skill-card flex flex-col items-center p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
            <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-primary dark:text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-center text-sm sm:text-base">Web Security</span>
          </div>
          <div className="skill-card flex flex-col items-center p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
            <Lock className="h-8 w-8 sm:h-10 sm:w-10 text-primary dark:text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-center text-sm sm:text-base">Cryptography</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
