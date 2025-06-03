"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "SEAC Negotiates 4.2% Salary Increase for 2024",
    date: "2024-01-15",
    summary:
      "After months of negotiations, SEAC has successfully secured a 4.2% salary increase for all members, effective immediately. This represents the largest increase in five years.",
    category: "Bargaining",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "New Mental Health Benefits Program Launched",
    date: "2024-01-10",
    summary:
      "SEAC is proud to announce the launch of our comprehensive mental health benefits program, providing members with access to counseling services and wellness resources.",
    category: "Benefits",
    readTime: "2 min read",
  },
  {
    id: 3,
    title: "Annual General Meeting - March 15th",
    date: "2024-01-08",
    summary:
      "Join us for our Annual General Meeting where we'll review the year's achievements, discuss upcoming initiatives, and elect new committee members.",
    category: "Events",
    readTime: "1 min read",
  },
  {
    id: 4,
    title: "Remote Work Policy Updates",
    date: "2024-01-05",
    summary:
      "New flexible remote work arrangements have been negotiated, allowing members greater work-life balance while maintaining productivity standards.",
    category: "Policy",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Safety Training Workshop Series",
    date: "2024-01-03",
    summary:
      "Register now for our comprehensive safety training workshops covering workplace hazards, emergency procedures, and best practices for all job categories.",
    category: "Training",
    readTime: "2 min read",
  },
  {
    id: 6,
    title: "SEAC Scholarship Program Opens",
    date: "2024-01-01",
    summary:
      "Applications are now open for the SEAC Education Scholarship Program, supporting members and their families in pursuing higher education and professional development.",
    category: "Education",
    readTime: "3 min read",
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Bargaining":
      return "bg-blue-100 text-blue-800"
    case "Benefits":
      return "bg-green-100 text-green-800"
    case "Events":
      return "bg-purple-100 text-purple-800"
    case "Policy":
      return "bg-orange-100 text-orange-800"
    case "Training":
      return "bg-red-100 text-red-800"
    case "Education":
      return "bg-indigo-100 text-indigo-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function NewsfeedPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Newsfeed</h1>
            <p className="text-xl mb-8">
              Stay informed with the latest news, updates, and achievements from SEAC. Get the most recent information
              about negotiations, benefits, events, and member services.
            </p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* News Carousel */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
              <p className="text-lg text-gray-600">Swipe through our latest news and announcements</p>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="pb-12"
            >
              {newsItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {item.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{item.summary}</p>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-auto">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All News Articles</h2>
              <p className="text-lg text-gray-600">Browse through all our recent news and updates</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{item.summary}</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Link href="/" className="flex items-center space-x-3">
                <Image src="/images/seac-logo-new.png" alt="SEAC Logo" width={50} height={50} className="h-12 w-auto" />
                <div>
                  <h3 className="font-bold hover:text-gray-300 transition-colors">SEAC</h3>
                  <p className="text-sm text-gray-400">Salaried Employees Alliance Canada</p>
                </div>
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Salaried Employees Alliance Canada. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
