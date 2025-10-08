"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Play, Clock, Eye } from "lucide-react"
import { getVideosByCategory } from "@/lib/video-data"

interface CategoryModalProps {
  isOpen: boolean
  onClose: () => void
  categoryName: string
  subcategory?: string
}

export function CategoryModal({ isOpen, onClose, categoryName, subcategory }: CategoryModalProps) {
  const videos = getVideosByCategory(categoryName, subcategory)

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {subcategory ? `${categoryName} - ${subcategory}` : categoryName}
            <span className="text-gray-400 text-lg ml-2">({videos.length} videos)</span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors overflow-hidden cursor-pointer"
              onClick={() => handleVideoClick(video.url)}
            >
              <div className="relative">
                <img
                  src={video.image || "/placeholder.svg?height=150&width=250"}
                  alt={video.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-black/70 text-white text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration}
                  </Badge>
                </div>
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-blue-500/80 text-white text-xs">
                    <Eye className="w-3 h-3 mr-1" />
                    {video.views}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-blue-500 rounded-full p-2">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 text-white text-sm line-clamp-2">{video.title}</h3>
                <p className="text-xs text-gray-400 mb-3 line-clamp-2">{video.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {video.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-gray-600 text-gray-300 px-1 py-0">
                      {tag}
                    </Badge>
                  ))}
                  {video.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-400 px-1 py-0">
                      +{video.tags.length - 2}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 text-xs">
                    {video.level}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-300">{video.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">by {video.instructor}</span>
                  <Button
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-xs px-2 py-1 h-6"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleVideoClick(video.url)
                    }}
                  >
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {videos.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">No videos available for this category yet.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
