"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { searchVideos, type Video } from "@/lib/video-data"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Video[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.trim().length > 0) {
      setIsLoading(true)
      // Simulate search delay for better UX
      const timeoutId = setTimeout(() => {
        const searchResults = searchVideos(query)
        setResults(searchResults.slice(0, 8)) // Limit to 8 results
        setIsOpen(true)
        setIsLoading(false)
      }, 300)

      return () => clearTimeout(timeoutId)
    } else {
      setResults([])
      setIsOpen(false)
      setIsLoading(false)
    }
  }, [query])

  const handleClear = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
  }

  const handleResultClick = (video: Video) => {
    console.log("[v0] Video clicked:", video.title)
    setIsOpen(false)
    // Here you would typically navigate to the video page
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search courses, tutorials, topics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-700"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border-gray-700 shadow-xl z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-4 text-center text-gray-400">
                <div className="animate-pulse">Searching...</div>
              </div>
            ) : results.length > 0 ? (
              <>
                <div className="p-3 border-b border-gray-700">
                  <div className="text-sm text-gray-400">
                    Found {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
                  </div>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {results.map((video) => (
                    <div
                      key={video.id}
                      onClick={() => handleResultClick(video)}
                      className="p-4 hover:bg-gray-800 cursor-pointer border-b border-gray-800 last:border-b-0 transition-colors"
                    >
                      <div className="flex gap-3">
                        <img
                          src={video.image || "/placeholder.svg"}
                          alt={video.title}
                          className="w-16 h-12 object-cover rounded flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-sm line-clamp-1 mb-1">{video.title}</h4>
                          <p className="text-gray-400 text-xs line-clamp-2 mb-2">{video.description}</p>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                              {video.category}
                            </Badge>
                            {video.subcategory && (
                              <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                                {video.subcategory}
                              </Badge>
                            )}
                            <span className="text-xs text-gray-500">{video.duration}</span>
                            <span className="text-xs text-gray-500">{video.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {results.length === 8 && (
                  <div className="p-3 border-t border-gray-700 text-center">
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                      View all results
                    </Button>
                  </div>
                )}
              </>
            ) : query.trim().length > 0 ? (
              <div className="p-4 text-center text-gray-400">
                <div className="mb-2">No results found for "{query}"</div>
                <div className="text-sm">Try searching for:</div>
                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  {["Python", "React", "JavaScript", "AWS", "Git"].map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      onClick={() => setQuery(suggestion)}
                      className="text-xs border-gray-600 text-gray-300 hover:bg-gray-800"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
