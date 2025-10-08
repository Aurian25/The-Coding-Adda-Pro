"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VisitorCounter } from "@/components/visitor-counter"
import { SearchBar } from "@/components/search-bar"
import { CategoryModal } from "@/components/category-modal"
import { getFeaturedVideos } from "@/lib/video-data"
import {
  Code,
  Database,
  Smartphone,
  BarChart3,
  Shield,
  Brain,
  Palette,
  Globe,
  Server,
  Blocks,
  Languages,
  Network,
  Monitor,
  Cloud,
  FileSpreadsheet,
  Link2 as Linux,
  Lightbulb,
  Play,
  Users,
  Star,
} from "lucide-react"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<{
    name: string
    subcategory?: string
  } | null>(null)

  const categories = [
    {
      name: "Web Development",
      icon: Code,
      courses: "100 Courses", // Updated course counts to reflect expanded database
      color: "text-blue-400",
      subcategories: ["Front-end", "Back-end"],
    },
    { name: "Next.js", icon: Globe, courses: "110 Courses", color: "text-white" },
    { name: "DSA", icon: Blocks, courses: "110 Courses", color: "text-red-400" },
    { name: "APIs", icon: Server, courses: "110 Courses", color: "text-green-400" },
    {
      name: "Version Control",
      icon: Code,
      courses: "110 Courses",
      color: "text-orange-400",
      subcategories: ["GitHub", "Git Bash", "GIT"],
    },
    { name: "Data Science", icon: BarChart3, courses: "110 Courses", color: "text-purple-400" },
    {
      name: "Database",
      icon: Database,
      courses: "110 Courses",
      color: "text-blue-400",
      subcategories: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Android Development",
      icon: Smartphone,
      courses: "110 Courses",
      color: "text-green-400",
      subcategories: ["Kotlin", "Java"],
    },
    { name: "DevOps", icon: Server, courses: "110 Courses", color: "text-red-400" },
    { name: "Machine Learning", icon: Brain, courses: "110 Courses", color: "text-pink-400" },
    { name: "Deep Learning", icon: Brain, courses: "110 Courses", color: "text-blue-400" },
    { name: "UI/UX Design", icon: Palette, courses: "110 Courses", color: "text-yellow-400" },
    { name: "Cyber Security", icon: Shield, courses: "110 Courses", color: "text-red-400" },
    { name: "iOS", icon: Smartphone, courses: "110 Courses", color: "text-gray-400" },
    { name: "Blockchain", icon: Blocks, courses: "110 Courses", color: "text-yellow-400" },
    { name: "GenAI", icon: Brain, courses: "110 Courses", color: "text-purple-400" },
    {
      name: "Programming Languages",
      icon: Languages,
      courses: "200+ Courses", // Higher count due to multiple language subcategories
      color: "text-blue-400",
      subcategories: ["Python", "C", "C++", "JavaScript", "Java", "R", "Ruby", "C#", "PHP", "Perl"],
    },
    { name: "OOPs", icon: Code, courses: "110 Courses", color: "text-green-400" },
    { name: "Network Security", icon: Network, courses: "110 Courses", color: "text-red-400" },
    { name: "Operating Systems", icon: Monitor, courses: "110 Courses", color: "text-blue-400" },
    {
      name: "Cloud",
      icon: Cloud,
      courses: "110 Courses",
      color: "text-blue-400",
      subcategories: ["AWS", "Azure", "Google Cloud"],
    },
    { name: "PowerBI", icon: BarChart3, courses: "110 Courses", color: "text-yellow-400" },
    { name: "Excel", icon: FileSpreadsheet, courses: "110 Courses", color: "text-green-400" },
    { name: "Linux", icon: Linux, courses: "110 Courses", color: "text-orange-400" },
    { name: "Ubuntu", icon: Monitor, courses: "110 Courses", color: "text-orange-400" },
    { name: "Prompt Engineering", icon: Lightbulb, courses: "110 Courses", color: "text-yellow-400" },
  ]

  const featuredTutorials = getFeaturedVideos(9)

  const handleCategoryClick = (categoryName: string, subcategory?: string) => {
    console.log("[v0] Category clicked:", categoryName, subcategory)
    setSelectedCategory({ name: categoryName, subcategory })
  }

  const scrollToCategories = () => {
    const categoriesSection = document.getElementById("categories-section")
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToFeatured = () => {
    const featuredSection = document.getElementById("featured-section")
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="text-xl font-bold">
              <span className="text-white">The </span>
              <span className="text-blue-400">Coding Adda</span>
              <div className="text-gray-400 text-sm">by AurianWay</div>
            </div>
            <div className="flex-1 max-w-md">
              <SearchBar />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to{" "}
            <span className="text-blue-400">
              The
              <br />
              Coding Adda
            </span>
          </h1>
          <div className="text-lg text-gray-400 mb-4">by AurianWay</div>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Your ultimate destination for excellent programming tutorials from various platforms. From beginner basics
            to advanced concepts, we've got you covered.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3" onClick={scrollToFeatured}>
              Start Learning
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 bg-transparent"
              onClick={scrollToCategories}
            >
              Browse Categories
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Play className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-3xl font-bold">2500+</div> {/* Updated stats to reflect expanded content */}
              <div className="text-gray-400">Videos Served</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-3xl font-bold">100K+</div>
              <div className="text-gray-400">Active Learners</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-3xl font-bold">4.8</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
            <p className="text-gray-400">Find the perfect learning path for your coding journey</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors cursor-pointer"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <CardContent className="p-6 text-center">
                    <IconComponent className={`w-8 h-8 mx-auto mb-3 ${category.color}`} />
                    <h3 className="font-semibold mb-2 text-white">{category.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{category.courses}</p>
                    {category.subcategories && (
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {category.subcategories.slice(0, 3).map((sub, subIndex) => (
                            <Badge
                              key={subIndex}
                              variant="outline"
                              className="text-xs border-gray-600 text-gray-300 px-2 py-1 cursor-pointer hover:bg-gray-800"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleCategoryClick(category.name, sub)
                              }}
                            >
                              {sub}
                            </Badge>
                          ))}
                          {category.subcategories.length > 3 && (
                            <Badge variant="outline" className="text-xs border-gray-600 text-gray-400 px-2 py-1">
                              +{category.subcategories.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section id="featured-section" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Tutorials</h2>
            <p className="text-gray-400">Hand-picked tutorials to accelerate your learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTutorials.map((tutorial, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={tutorial.image || "/placeholder.svg"}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-black/70 text-white">
                      {tutorial.duration}
                    </Badge>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-blue-500/80 text-white">
                      {tutorial.views} views
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-white line-clamp-2">{tutorial.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{tutorial.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutorial.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                      {tutorial.level}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{tutorial.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">by {tutorial.instructor}</span>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                      Watch Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-white">The </span>
            <span className="text-blue-400">Coding Adda</span>
            <div className="text-gray-400 text-lg">by AurianWay</div>
          </div>
          <p className="text-gray-400 mb-6">Empowering developers worldwide with quality programming education</p>
          <VisitorCounter />
          <div className="text-sm text-gray-500">© 2025 AurianWay. All rights reserved.</div>
        </div>
      </footer>

      {/* CategoryModal */}
      <CategoryModal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        categoryName={selectedCategory?.name || ""}
        subcategory={selectedCategory?.subcategory}
      />
    </div>
  )
}
