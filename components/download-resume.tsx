"use client"

import { useState } from "react"
import { Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const DownloadResume = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="py-12 bg-white dark:bg-gray-900 text-center">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md max-w-2xl mx-auto border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Want to know more about my experience?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Download my complete resume to see my full work history, education, and skills.
          </p>
          <Button
            className="bg-primary hover:bg-primary/80 text-white dark:text-black transition-all duration-300 hover:shadow-md group"
            onClick={() => setIsDialogOpen(true)}
          >
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Download Full Resume
          </Button>
        </div>
      </div>

      {/* Resume Download Modal */}
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-lg font-bold flex justify-between items-center">
              <span>Select Resume Type</span>
              <Button variant="ghost" className="h-6 w-6 p-0 rounded-full" onClick={() => setIsDialogOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </AlertDialogTitle>
          </AlertDialogHeader>

          {/* Resume Options */}
          <div className="grid grid-cols-1 gap-4 my-4">
            {/* Generalized Resume Link */}
            <a
              href="https://drive.google.com/file/d/15x_kKoXLdPPZDGwxIQQhZ4RM8JLUXZXP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="w-full bg-primary hover:bg-primary/80 text-white dark:text-black transition-all duration-300"
                onClick={() => setIsDialogOpen(false)}
              >
                <Download className="mr-2 h-4 w-4" />
                Generalized Resume
              </Button>
            </a>

            {/* Specialized Resume Link */}
            <a
              href="https://drive.google.com/file/d/1NMjlU6IY2CeftIKxOGPZCW79hTO1_JbO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="w-full bg-primary hover:bg-primary/80 text-white dark:text-black transition-all duration-300"
                onClick={() => setIsDialogOpen(false)}
              >
                <Download className="mr-2 h-4 w-4" />
                Specialized Resume
              </Button>
            </a>
          </div>

          <AlertDialogFooter className="text-xs text-center text-gray-500 dark:text-gray-400">
            Choose the resume version that best fits your needs
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

export default DownloadResume
