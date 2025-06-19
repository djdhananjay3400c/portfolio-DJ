"use client"

import { useEffect, useRef, useState } from "react"
import { Download, GraduationCap, Briefcase, X } from "lucide-react"

// Import your UI components here based on your website's component library
// If you're not using shadcn/ui, replace these imports with your own components
// For example:
// import Button from "@/components/Button"
// import Card from "@/components/Card"

// Using shadcn/ui components as default
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

// Configuration variables - easy to modify
const RESUME_LINKS = {
  generalized: "https://drive.google.com/file/d/15x_kKoXLdPPZDGwxIQQhZ4RM8JLUXZXP/view?usp=sharing",
  specialized: "https://drive.google.com/file/d/1fmJFwCmmACl1Z_r_ftu4gAqjdRt00_7I/view?usp=sharing"
};

const POPUP_TEXT = {
  title: "Select Resume Type",
  generalizedLabel: "Generalized Resume",
  specializedLabel: "Specialized Resume",
  footer: "Choose the resume version that best fits your needs"
};

// You can customize these class names to match your website's theme
const THEME_CLASSES = {
  primaryButton: "bg-primary hover:bg-primary/80 text-white dark:text-black",
  cardBg: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
  textPrimary: "text-primary dark:text-primary",
  textSecondary: "text-gray-500 dark:text-gray-400",
  textContent: "text-gray-600 dark:text-gray-300"
};

const Resume = () => {
  const sectionRef = useRef(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      const elements = section.querySelectorAll(".reveal")
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".reveal")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Lovely Professional University",
      period: "2022 - 2026",
      description: "Currently pursuing Computer Science and Engineering with a focus on cybersecurity. CGPA: 6.7",
    },
    {
      degree: "12th with Science",
      institution: "Bhartiya Vidhyapeeth",
      period: "2021 - 2022",
      description: "Completed higher secondary education with 73.94%",
    },
    {
      degree: "10th with Science",
      institution: "The International School Agra (TISA)",
      period: "2019 - 2020",
      description: "Completed secondary education with 70.05%",
    },
  ]

  const experience = [
    {
      position: "Live Project (Outlier)",
      company: "",
      period: "December 2024 - Present",
      description:
        "Trained an AI model to detect outliers based on patterns in source code, with a focus on C++, Java, and Python. Refined algorithms to accurately identify anomalies and tuned datasets to boost model precision.",
    },
    {
      position: "Cybersecurity Training",
      company: "Broad Infinity (Edtech Company)",
      period: "June 2023 - July 2023",
      description:
        "Completed comprehensive training in cybersecurity fundamentals and advanced concepts. Gained practical knowledge of ethical hacking, network security, cryptography, and digital forensics.",
    },
  ]

  return (
    <section id="resume" ref={sectionRef} className="section cyberpunk-grid py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center reveal">
          <span className={THEME_CLASSES.textPrimary}>My</span> Resume
        </h2>

        <div className="flex justify-center mb-8 md:mb-12 reveal">
          <Button 
            className={`${THEME_CLASSES.primaryButton} text-sm sm:text-base`}
            onClick={() => setIsDialogOpen(true)}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Full Resume
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="reveal">
            <div className="flex items-center mb-4 md:mb-6">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary dark:text-primary mr-2" />
              <h3 className="text-xl sm:text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-4 md:space-y-6">
              {education.map((item, index) => (
                <Card key={index} className={THEME_CLASSES.cardBg}>
                  <CardHeader className="pb-2">
                    <CardTitle className={`text-base sm:text-lg ${THEME_CLASSES.textPrimary}`}>{item.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-sm sm:text-base">{item.institution}</p>
                    <p className={`text-xs sm:text-sm ${THEME_CLASSES.textSecondary} mb-1 sm:mb-2`}>{item.period}</p>
                    <p className={`${THEME_CLASSES.textContent} text-xs sm:text-sm`}>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="flex items-center mb-4 md:mb-6">
              <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary dark:text-primary mr-2" />
              <h3 className="text-xl sm:text-2xl font-semibold">Experience</h3>
            </div>

            <div className="space-y-4 md:space-y-6">
              {experience.map((item, index) => (
                <Card key={index} className={THEME_CLASSES.cardBg}>
                  <CardHeader className="pb-2">
                    <CardTitle className={`text-base sm:text-lg ${THEME_CLASSES.textPrimary}`}>
                      {item.position}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.company && <p className="font-medium text-sm sm:text-base">{item.company}</p>}
                    <p className={`text-xs sm:text-sm ${THEME_CLASSES.textSecondary} mb-1 sm:mb-2`}>{item.period}</p>
                    <p className={`${THEME_CLASSES.textContent} text-xs sm:text-sm`}>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Download Modal - Start */}
      {/* You can replace AlertDialog with your own modal component if needed */}
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className={`${THEME_CLASSES.cardBg} max-w-md`}>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-lg font-bold flex justify-between items-center">
              <span>{POPUP_TEXT.title}</span>
              <Button
                variant="ghost"
                className="h-6 w-6 p-0 rounded-full"
                onClick={() => setIsDialogOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </AlertDialogTitle>
          </AlertDialogHeader>
          
          {/* Resume Options */}
          <div className="grid grid-cols-1 gap-4 my-4">
            {/* Generalized Resume Link */}
            <a
              href={RESUME_LINKS.generalized}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className={`w-full ${THEME_CLASSES.primaryButton}`}
                onClick={() => setIsDialogOpen(false)}
              >
                <Download className="mr-2 h-4 w-4" />
                {POPUP_TEXT.generalizedLabel}
              </Button>
            </a>
            
            {/* Specialized Resume Link */}
            <a
              href={RESUME_LINKS.specialized}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className={`w-full ${THEME_CLASSES.primaryButton}`}
                onClick={() => setIsDialogOpen(false)}
              >
                <Download className="mr-2 h-4 w-4" />
                {POPUP_TEXT.specializedLabel}
              </Button>
            </a>
          </div>
          
          <AlertDialogFooter className={`text-xs text-center ${THEME_CLASSES.textSecondary}`}>
            {POPUP_TEXT.footer}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* Resume Download Modal - End */}
    </section>
  )
}

export default Resume
