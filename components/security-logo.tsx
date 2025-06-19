"use client"

import { useEffect, useState } from "react"
import { Shield, ShieldCheck } from "lucide-react"

const SecurityLogo = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isGlowing, setIsGlowing] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Set up glow/unglow animation
    const glowInterval = setInterval(() => {
      setIsGlowing((prev) => !prev)
    }, 1500)

    return () => {
      clearTimeout(timer)
      clearInterval(glowInterval)
    }
  }, [])

  return (
    <div className="fixed top-4 left-4 z-50 transition-all duration-500">
      <div className={`relative transition-all duration-500 ${isGlowing ? "scale-110" : "scale-100"}`}>
        {isLoading ? (
          <Shield
            className={`h-8 w-8 text-cyber-primary dark:text-cyber-primary transition-all duration-500 ${
              isGlowing ? "opacity-100" : "opacity-60"
            }`}
          />
        ) : (
          <ShieldCheck
            className={`h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-all duration-500 ${
              isGlowing ? "opacity-100" : "opacity-80"
            }`}
          />
        )}
        <div
          className={`absolute inset-0 rounded-full bg-cyber-primary dark:bg-cyber-primary blur-md transition-all duration-500 -z-10 ${
            isGlowing ? "opacity-20" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  )
}

export default SecurityLogo
