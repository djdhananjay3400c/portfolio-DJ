import { ArrowDown } from "lucide-react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Certifications from "@/components/certifications"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"
import SecurityLogo from "@/components/security-logo"
import LoadingScreen from "@/components/loading-screen"
import DownloadResume from "@/components/download-resume"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-white transition-colors duration-300">
      <LoadingScreen />
      <SecurityLogo />
      <Header />
      <main className="w-full max-w-[1900px] mx-auto">
        <Hero />
        <div className="flex justify-center my-10">
          <div className="animate-bounce bg-slate-500 dark:bg-cyan-700 p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </div>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <DownloadResume />
        <Contact />
        <Resume />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  )
}
