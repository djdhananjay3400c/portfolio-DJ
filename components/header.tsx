"use client"

import { useState, useEffect } from "react"
import { Menu, X, Shield, Home, User, Briefcase, Award, FileText, Mail, Code, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "experience", "certifications", "contact", "resume"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home className="h-4 w-4" /> },
    { name: "About", href: "#about", icon: <User className="h-4 w-4" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Skills", href: "#skills", icon: <Code className="h-4 w-4" /> },
    { name: "Experience", href: "#experience", icon: <Clock className="h-4 w-4" /> },
    { name: "Certifications", href: "#certifications", icon: <Award className="h-4 w-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="h-4 w-4" /> },
    { name: "Resume", href: "#resume", icon: <FileText className="h-4 w-4" /> },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-[1900px]">
        <div className="flex justify-between items-center py-3 md:py-4">
          <a
            href="#home"
            className="text-primary dark:text-primary font-bold text-lg sm:text-xl flex items-center group"
          >
            <Shield className="mr-2 h-5 w-5 text-primary dark:text-primary transition-transform duration-300 group-hover:scale-110" />
            <span className="transition-colors duration-300">Dhananjay Singh</span>
          </a>

          {/* Desktop Navigation Dots */}
          <TooltipProvider>
            <nav className="hidden md:flex space-x-3 lg:space-x-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm py-2 px-3 rounded-full shadow-sm">
              {navLinks.map((link) => (
                <Tooltip key={link.name} delayDuration={300}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.href}
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                        activeSection === link.href.substring(1)
                          ? "bg-primary text-white dark:text-black"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                      }`}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </nav>
          </TooltipProvider>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300 py-2 text-sm border-b border-gray-100 dark:border-gray-800 ${
                    activeSection === link.href.substring(1) ? "text-primary dark:text-primary font-medium" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
