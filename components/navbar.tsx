"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { SearchBar } from "@/components/search-bar"

interface NavbarProps {
  darkMode: boolean
  onDarkModeToggle: () => void
}

export function Navbar({ darkMode, onDarkModeToggle }: NavbarProps) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`transition-all duration-300 z-50 ${
        isSticky ? "fixed top-0 left-0 right-0 shadow-lg" : "relative"
      } ${darkMode ? "bg-black/95" : "bg-white/95"} border-b ${darkMode ? "border-gray-800" : "border-gray-200"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-xl font-bold cursor-pointer min-w-max" onClick={() => scrollToSection("hero")}>
            <div className="flex flex-col">
              <span>
                <span className={darkMode ? "text-white" : "text-black"}>The </span>
                <span className="text-blue-400">Coding Adda</span>
              </span>
              <span className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>by AurianWay</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xs px-4">
            <SearchBar />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("featured-section")}
              className={`transition-colors ${
                darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => scrollToSection("categories-section")}
              className={`transition-colors ${
                darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection("testimonials-section")}
              className={`transition-colors ${
                darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Testimonials
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={onDarkModeToggle}
            className={`rounded-full ${
              darkMode
                ? "border-gray-700 text-yellow-400 hover:bg-gray-900"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </nav>
  )
}
