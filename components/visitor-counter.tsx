"use client"

import { useState, useEffect } from "react"
import { Eye } from "lucide-react"

export function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const VISITOR_KEY = "codingAddaVisitors"
    const LAST_VISIT_KEY = "lastVisitTime"

    // Get current count from localStorage or start from 0
    const currentCount = localStorage.getItem(VISITOR_KEY)
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY)
    const now = Date.now()

    let count = currentCount ? Number.parseInt(currentCount) : 0

    // Only increment if this is a new session (more than 30 minutes since last visit)
    const thirtyMinutes = 30 * 60 * 1000
    if (!lastVisit || now - Number.parseInt(lastVisit) > thirtyMinutes) {
      count += 1
      localStorage.setItem(VISITOR_KEY, count.toString())
      localStorage.setItem(LAST_VISIT_KEY, now.toString())
    }

    setVisitorCount(count)
    setIsLoading(false)

    // No automatic increments, only real visits count
  }, [])

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
      <Eye className="w-4 h-4 text-blue-400" />
      <span>
        {isLoading ? (
          <span className="animate-pulse">Loading...</span>
        ) : (
          <>
            <span className="text-blue-400 font-semibold">{formatNumber(visitorCount)}</span>
            <span> total visitors</span>
          </>
        )}
      </span>
    </div>
  )
}
