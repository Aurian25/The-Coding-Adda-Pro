import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      image: "/woman-programmer.jpg",
      text: "The Coding Adda helped me transition from beginner to professional developer. The curated content is exceptional!",
      rating: 5,
      company: "Tech Startup",
    },
    {
      name: "Rajesh Kumar",
      role: "Data Scientist",
      image: "/man-data-scientist.jpg",
      text: "Best platform for learning data science. The tutorials are clear, concise, and updated regularly.",
      rating: 5,
      company: "Analytics Corp",
    },
    {
      name: "Aisha Patel",
      role: "UI/UX Designer",
      image: "/woman-designer.jpg",
      text: "I found amazing UI/UX design courses here. The community support is incredible!",
      rating: 5,
      company: "Design Studio",
    },
    {
      name: "Amit Verma",
      role: "DevOps Engineer",
      image: "/man-engineer.jpg",
      text: "The DevOps and Cloud sections have everything I needed to advance my career.",
      rating: 4.5,
      company: "Cloud Solutions",
    },
    {
      name: "Sneha Gupta",
      role: "Mobile Developer",
      image: "/woman-mobile-dev.jpg",
      text: "The iOS and Android tutorials are comprehensive and well-structured. Highly recommended!",
      rating: 5,
      company: "Mobile First",
    },
    {
      name: "Vikram Singh",
      role: "Backend Developer",
      image: "/man-backend.jpg",
      text: "Excellent resource for backend development. The database and API courses are top-notch.",
      rating: 4.8,
      company: "Enterprise Solutions",
    },
  ]

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Student Testimonials</h2>
          <p className="text-gray-400 text-lg">See what our learners have to say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(testimonial.rating)
                          ? "text-yellow-400 fill-current"
                          : i < testimonial.rating
                            ? "text-yellow-400 fill-half"
                            : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 italic">{testimonial.text}</p>

                {/* Author Info */}
                <div className="flex gap-4 items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
