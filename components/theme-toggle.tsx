"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-white/20 dark:bg-primary/20 border-slate-300 dark:border-primary hover:bg-white/30 dark:hover:bg-primary/30 backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-amber-400 transition-transform duration-300 hover:scale-110" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 transition-transform duration-300 hover:scale-110" />
      )}
    </Button>
  )
}

export default ThemeToggle
