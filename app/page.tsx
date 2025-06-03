"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import {
  Users,
  FileText,
  Gavel,
  Shield,
  Scale,
  FileCheck,
  GraduationCap,
  HelpCircle,
  ArrowRight,
  CalendarIcon,
  Clock,
  Phone,
  Search,
  BookOpen,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Calendar, momentLocalizer, Views } from "react-big-calendar"
import moment from "moment"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

// Sample news data (same as newsfeed page)
const newsItems = [
  {
    id: 1,
    title: "SEAC Negotiates 4.2% Salary Increase for 2024",
    date: "2024-01-15",
    summary:
      "After months of negotiations, SEAC has successfully secured a 4.2% salary increase for all members, effective immediately.",
    category: "Bargaining",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "New Mental Health Benefits Program Launched",
    date: "2024-01-10",
    summary:
      "SEAC is proud to announce the launch of our comprehensive mental health benefits program, providing members with access to counseling services.",
    category: "Benefits",
    readTime: "2 min read",
  },
  {
    id: 3,
    title: "Annual General Meeting - March 15th",
    date: "2024-01-08",
    summary:
      "Join us for our Annual General Meeting where we'll review the year's achievements and discuss upcoming initiatives.",
    category: "Events",
    readTime: "1 min read",
  },
]

// Sample events data (same as calendar page)
const events = [
  {
    id: 1,
    title: "Annual General Meeting",
    start: new Date(2024, 2, 15, 10, 0),
    end: new Date(2024, 2, 15, 16, 0),
    description: "Join us for our Annual General Meeting to review achievements and elect new committee members.",
    type: "meeting",
    location: "SEAC Head Office, Toronto",
  },
  {
    id: 2,
    title: "Safety Training Workshop",
    start: new Date(2024, 2, 22, 9, 0),
    end: new Date(2024, 2, 22, 17, 0),
    description: "Comprehensive safety training covering workplace hazards and emergency procedures.",
    type: "training",
    location: "Training Center, Vancouver",
  },
  {
    id: 3,
    title: "Bargaining Committee Meeting",
    start: new Date(2024, 2, 28, 14, 0),
    end: new Date(2024, 2, 28, 17, 0),
    description: "Monthly bargaining committee meeting to discuss ongoing negotiations.",
    type: "committee",
    location: "Virtual Meeting",
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
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getEventColor = (type: string) => {
  switch (type) {
    case "meeting":
      return "#3b82f6"
    case "training":
      return "#10b981"
    case "committee":
      return "#8b5cf6"
    default:
      return "#6b7280"
  }
}

export default function SEACWebsite() {
  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: getEventColor(event.type),
        borderRadius: "4px",
        opacity: 0.8,
        color: "white",
        border: "0px",
        display: "block",
      },
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />

      {/* 1. Banner - "Your Voice Matters" */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-t-[12px] rounded-b-[12px] mx-4 mt-4">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Voice Matters</h1>
          <p className="text-xl md:text-2xl font-bold mb-8 max-w-2xl mx-auto">
            Representing Professionals for Over 50 Years
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
              Learn More
            </Button>
          </div>
        </div>

        {/* Search Card */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl mx-auto px-4">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Committee</label>
                  <div className="relative">
                    <Input placeholder="Select Committee..." className="pr-10" />
                    <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Resource</label>
                  <div className="relative">
                    <Input placeholder="Education & Training" className="pr-10" />
                    <BookOpen className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Support</label>
                  <div className="relative">
                    <Input placeholder="Get help..." className="pr-10" />
                    <HelpCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <Button className="bg-teal-500 hover:bg-teal-600 text-white h-10">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 2. Newsfeed Section */}
      <section className="py-20 mt-12" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative mb-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Newsfeed</h2>
                <p className="text-lg text-gray-600">Swipe through our latest news and announcements</p>
              </div>
              <div className="absolute top-0 right-0">
                <Link href="/newsfeed">
                  <Button variant="outline" className="flex items-center">
                    View All News
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
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
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}
                        >
                          {item.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {item.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold leading-tight mb-3">{item.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                      <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{item.summary}</p>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-auto py-3 font-medium">
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

      {/* 3. Events Slider Section */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative mb-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Calendar</h2>
                <p className="text-lg text-gray-600">View and manage your SEAC events and meetings</p>
              </div>
              <div className="absolute top-0 right-0">
                <Link href="/calendar">
                  <Button variant="outline" className="flex items-center">
                    View Full Calendar
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Calendar Preview (Optional) */}
            <div className="mt-12">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="h-[600px] overflow-auto">
                    <Calendar
                      localizer={localizer}
                      events={events}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: "550px" }}
                      eventPropGetter={eventStyleGetter}
                      views={[Views.MONTH]}
                      defaultView={Views.MONTH}
                      toolbar={true}
                      popup
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEAC Committees Section */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SEAC Committees</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our committees ensure effective representation, transparency, and member involvement in all union
                activities.
              </p>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
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
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="pb-12"
            >
              <SwiperSlide>
                <Link href="/committees/executive">
                  <Card className="hover:shadow-lg transition-shadow bg-white cursor-pointer h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">Executive Committee</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Provides strategic leadership and oversees the overall direction of SEAC operations and member
                        services.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link href="/committees/constitution">
                  <Card className="hover:shadow-lg transition-shadow bg-white cursor-pointer h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-lg">Constitution Committee</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Reviews and maintains our constitutional framework, ensuring governance aligns with member
                        needs.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link href="/committees/bargaining">
                  <Card className="hover:shadow-lg transition-shadow bg-white cursor-pointer h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <Gavel className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg">Bargaining Committee</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Negotiates collective agreements and represents member interests in discussions with management.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link href="/committees/health-safety">
                  <Card className="hover:shadow-lg transition-shadow bg-white cursor-pointer h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-lg">Joint Health & Safety</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Ensures workplace safety standards and advocates for healthy working conditions for all members.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* 5. Education & Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Resources</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access essential documents, training materials, and educational resources to stay informed about your
                rights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">SEAC Policies & Procedures</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Comprehensive guide to SEAC policies, procedures, and operational guidelines for members.
                  </CardDescription>
                  <Link href="/education/policies">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">SEAC Constitution</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Our foundational document outlining the structure, governance, and principles of SEAC.
                  </CardDescription>
                  <Link href="/education/constitution">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Collective Agreement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Current collective bargaining agreements and terms negotiated on behalf of our members.
                  </CardDescription>
                  <Link href="/education/collective-agreement">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Negotiation Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Training programs and workshops to develop negotiation skills and union leadership capabilities.
                  </CardDescription>
                  <Link href="/education/training">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Find SEAC - Help & Instructions */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find SEAC - Help & Instructions</h2>
              <p className="text-lg text-gray-600">Quick access to support, help, and important information</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Quick Links Card */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <HelpCircle className="h-6 w-6 mr-2 text-blue-600" />
                    Quick Links
                  </CardTitle>
                  <CardDescription>Essential links and resources for SEAC members</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link href="/join" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900">How to Join SEAC</h4>
                      <p className="text-sm text-gray-600">
                        Learn about membership requirements and application process
                      </p>
                    </Link>
                    <Link href="/contact" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900">Where to Find Us</h4>
                      <p className="text-sm text-gray-600">Office locations and contact information</p>
                    </Link>
                    <Link href="/help" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900">Support & Help</h4>
                      <p className="text-sm text-gray-600">Get assistance with union services and questions</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact & Help Accordion */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Phone className="h-6 w-6 mr-2 text-red-600" />
                    Emergency Contact & Help
                  </CardTitle>
                  <CardDescription>Important contact information and emergency support</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="emergency">
                      <AccordionTrigger>Emergency Contact Info</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">24/7 Emergency Hotline:</span>
                            <span className="text-red-600 font-bold">1-800-SEAC-911</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Main Office:</span>
                            <span className="text-blue-600">1-800-SEAC-HELP</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Email Support:</span>
                            <span className="text-blue-600">help@seac.ca</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="grievance">
                      <AccordionTrigger>Filing a Grievance</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-gray-600 mb-3">
                          If you're experiencing workplace issues, contact your union representative within 10-30 days
                          of the incident.
                        </p>
                        <Button className="w-full bg-red-600 hover:bg-red-700">File Grievance Now</Button>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="benefits">
                      <AccordionTrigger>Member Benefits</AccordionTrigger>
                      <AccordionContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Legal representation</li>
                          <li>• Collective bargaining</li>
                          <li>• Professional development</li>
                          <li>• Health and safety advocacy</li>
                          <li>• Member discounts and services</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
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
