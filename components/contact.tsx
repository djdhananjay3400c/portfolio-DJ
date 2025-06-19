"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Check, Copy } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCopiedNotification, setShowCopiedNotification] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
      alert("Message sent successfully!")
    }, 1500)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setShowCopiedNotification(true)
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowCopiedNotification(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-primary" />,
      title: "Email",
      value: "djdhananjay499@gmail.com",
      link: "mailto:djdhananjay499@gmail.com",
      copyable: true,
    },
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-primary" />,
      title: "Phone",
      value: "+91 8126678155",
      link: "tel:+918126678155",
      copyable: false,
    },
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-primary" />,
      title: "Location",
      value: "Agra, Uttar Pradesh 282001",
      link: null,
      copyable: false,
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="section bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center reveal">
          <span className="text-primary dark:text-primary">Contact</span> Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-1 reveal">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-6 text-gray-800 dark:text-white">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 text-sm sm:text-base">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out through any of
              the channels below or use the contact form.
            </p>

            <div className="space-y-4 md:space-y-6">
              <TooltipProvider>
                {contactInfo.map((item, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                        <CardContent className="p-3 sm:p-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-3 sm:mr-4">{item.icon}</div>
                            <div>
                              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                              {item.link ? (
                                <a
                                  href={item.link}
                                  className="font-medium text-sm sm:text-base text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                                >
                                  {item.value}
                                </a>
                              ) : (
                                <p className="font-medium text-sm sm:text-base text-gray-800 dark:text-white">
                                  {item.value}
                                </p>
                              )}
                            </div>
                          </div>
                          {item.copyable && (
                            <button
                              onClick={() => copyToClipboard(item.value)}
                              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                              aria-label="Copy to clipboard"
                            >
                              <Copy className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            </button>
                          )}
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.copyable ? "Click to copy" : item.value}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          <div className="lg:col-span-2 reveal">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary text-sm"
                  />
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary text-sm"
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary text-sm"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/80 text-white dark:text-black text-sm transition-all duration-300 hover:shadow-md"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white dark:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Copied notification */}
      {showCopiedNotification && (
        <div className="fixed bottom-4 right-4 z-50 flex items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-lg animate-fade-in-up">
          <Check className="h-5 w-5 mr-2" />
          <span>Email copied to clipboard!</span>
        </div>
      )}
    </section>
  )
}

export default Contact
