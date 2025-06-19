"use client"

import { useEffect, useState } from "react"
import { Shield } from "lucide-react"

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setOpacity(0)
      setTimeout(() => {
        setLoading(false)
      }, 500) // Wait for fade out animation to complete
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div
      className="fixed inset-0 bg-white dark:bg-gray-950 z-[100] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="relative">
        <Shield className="h-20 w-20 text-primary animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-xl">DS</span>
        </div>
      </div>

      <div className="mt-8 relative w-48 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-primary animate-loadingBar"></div>
      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm animate-pulse">Loading Portfolio...</p>
    </div>
  )
}

export default LoadingScreen
