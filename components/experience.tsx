"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, Shield, Cpu } from "lucide-react"

const Experience = () => {
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

  const experiences = [
    {
      title: "Live Project (Outlier)",
      company: "",
      period: "December 2024 - Present",
      type: "project",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      description: [
        "Trained an AI model to detect outliers based on patterns in source code, with a focus on C++, Java, and Python.",
        "Refined algorithms to accurately identify anomalies such as irregular syntax, logic errors, and uncommon code structures.",
        "Tuned datasets and hyperparameters to boost model precision, significantly reducing false positives in anomaly detection.",
      ],
      skills: ["AI", "Machine Learning", "Python", "C++", "Java", "Anomaly Detection"],
    },
    {
      title: "Cybersecurity Training",
      company: "Broad Infinity (Edtech Company)",
      period: "June 2023 - July 2023",
      type: "training",
      icon: <Shield className="h-6 w-6 text-secondary" />,
      description: [
        "Completed comprehensive training in cybersecurity fundamentals and advanced concepts.",
        "Gained practical knowledge of ethical hacking, network security, cryptography, and digital forensics.",
        "Hands-on experience with Wi-Fi Hacking, SQL Injection, Email Spoofing, Wi-Fi Jacking, DDoS Attacks, etc.",
        "Practical application of tools and techniques for vulnerability assessment, threat detection, and enhancement.",
      ],
      skills: ["Ethical Hacking", "Network Security", "Cryptography", "Digital Forensics", "Vulnerability Assessment"],
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="section bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center reveal">
          <span className="text-primary dark:text-primary">My</span> Experience
        </h2>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card reveal bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-4">
                {/* Left side - Timeline */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 dark:bg-primary/20">{exp.icon}</div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${
                        exp.type === "project"
                          ? "border-primary/50 text-primary bg-primary/5"
                          : "border-secondary/50 text-secondary bg-secondary/5"
                      }`}
                    >
                      {exp.type === "project" ? "Project" : "Training"}
                    </Badge>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="p-6 md:col-span-3">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                    {exp.company && <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{exp.company}</p>}
                  </div>

                  <div className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="min-w-[8px] h-[8px] rounded-full bg-primary mt-1.5 mr-3"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline visualization */}
        <div className="mt-12 md:mt-16 relative hidden md:block reveal">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>

          <div className="flex flex-col space-y-24 relative">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                    <h4 className="font-semibold text-gray-800 dark:text-white">{exp.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
