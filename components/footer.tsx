import { Github, Linkedin, Mail } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 md:py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/djdhananjay3400c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/dhananjay-singh-dj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:djdhananjay499@gmail.com"
                    className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>djdhananjay499@gmail.com</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm sm:text-base">
              &copy; {new Date().getFullYear()} Dhananjay Singh. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
              Cybersecurity | Networking | Programming | FullStack 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
