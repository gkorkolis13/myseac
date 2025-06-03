"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, MapPin, Users, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"
import { Calendar, momentLocalizer, Views } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from "react"

const localizer = momentLocalizer(moment)

// Sample events data
const events = [
  {
    id: 1,
    title: "Annual General Meeting",
    start: new Date(2024, 2, 15, 10, 0), // March 15, 2024, 10:00 AM
    end: new Date(2024, 2, 15, 16, 0), // March 15, 2024, 4:00 PM
    description: "Join us for our Annual General Meeting to review achievements and elect new committee members.",
    location: "SEAC Head Office, Toronto",
    type: "meeting",
  },
  {
    id: 2,
    title: "Safety Training Workshop",
    start: new Date(2024, 2, 22, 9, 0), // March 22, 2024, 9:00 AM
    end: new Date(2024, 2, 22, 17, 0), // March 22, 2024, 5:00 PM
    description: "Comprehensive safety training covering workplace hazards and emergency procedures.",
    location: "Training Center, Vancouver",
    type: "training",
  },
  {
    id: 3,
    title: "Bargaining Committee Meeting",
    start: new Date(2024, 2, 28, 14, 0), // March 28, 2024, 2:00 PM
    end: new Date(2024, 2, 28, 17, 0), // March 28, 2024, 5:00 PM
    description: "Monthly bargaining committee meeting to discuss ongoing negotiations.",
    location: "Virtual Meeting",
    type: "committee",
  },
  {
    id: 4,
    title: "New Member Orientation",
    start: new Date(2024, 3, 5, 10, 0), // April 5, 2024, 10:00 AM
    end: new Date(2024, 3, 5, 15, 0), // April 5, 2024, 3:00 PM
    description: "Welcome session for new SEAC members covering benefits, rights, and resources.",
    location: "SEAC Montreal Office",
    type: "orientation",
  },
  {
    id: 5,
    title: "Health & Safety Committee Meeting",
    start: new Date(2024, 3, 12, 13, 0), // April 12, 2024, 1:00 PM
    end: new Date(2024, 3, 12, 16, 0), // April 12, 2024, 4:00 PM
    description: "Quarterly health and safety committee meeting to review workplace safety initiatives.",
    location: "SEAC Head Office, Toronto",
    type: "committee",
  },
  {
    id: 6,
    title: "Professional Development Seminar",
    start: new Date(2024, 3, 18, 9, 0), // April 18, 2024, 9:00 AM
    end: new Date(2024, 3, 18, 16, 0), // April 18, 2024, 4:00 PM
    description: "Career advancement strategies and skill development opportunities for SEAC members.",
    location: "Calgary Convention Center",
    type: "training",
  },
]

const getEventColor = (type: string) => {
  switch (type) {
    case "meeting":
      return "bg-blue-500"
    case "training":
      return "bg-green-500"
    case "committee":
      return "bg-purple-500"
    case "orientation":
      return "bg-orange-500"
    default:
      return "bg-gray-500"
  }
}

const getEventBadgeColor = (type: string) => {
  switch (type) {
    case "meeting":
      return "bg-blue-100 text-blue-800"
    case "training":
      return "bg-green-100 text-green-800"
    case "committee":
      return "bg-purple-100 text-purple-800"
    case "orientation":
      return "bg-orange-100 text-orange-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function CalendarPage() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const eventStyleGetter = (event) => {
    const backgroundColor = getEventColor(event.type)
    return {
      style: {
        backgroundColor: backgroundColor.replace("bg-", "#").replace("-500", ""),
        borderRadius: "4px",
        opacity: 0.8,
        color: "white",
        border: "0px",
        display: "block",
      },
    }
  }

  const handleSelectEvent = (event) => {
    setSelectedEvent(event)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Event Calendar</h1>
            <p className="text-xl mb-8">
              Stay up-to-date with SEAC events, meetings, training sessions, and important dates. Never miss an
              opportunity to engage with your union.
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

      {/* Calendar Section */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SEAC Events Calendar</h2>
              <p className="text-lg text-gray-600">Click on any event to view details</p>
            </div>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="h-[400px] md:h-[600px] overflow-auto">
                  <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "100%" }}
                    eventPropGetter={eventStyleGetter}
                    onSelectEvent={handleSelectEvent}
                    views={[Views.MONTH, Views.WEEK, Views.DAY]}
                    defaultView={Views.MONTH}
                    popup
                    className="custom-calendar"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Details Modal/Section */}
      {selectedEvent && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white border-l-4 border-blue-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className={getEventBadgeColor(selectedEvent.type)}>
                      {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                    </Badge>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedEvent(null)}>
                      ✕
                    </Button>
                  </div>
                  <CardTitle className="text-2xl">{selectedEvent.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center mb-3">
                        <CalendarIcon className="h-5 w-5 mr-2 text-blue-600" />
                        <span className="font-medium">Date & Time</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {moment(selectedEvent.start).format("MMMM Do, YYYY")}
                        <br />
                        {moment(selectedEvent.start).format("h:mm A")} - {moment(selectedEvent.end).format("h:mm A")}
                      </p>

                      <div className="flex items-center mb-3">
                        <MapPin className="h-5 w-5 mr-2 text-green-600" />
                        <span className="font-medium">Location</span>
                      </div>
                      <p className="text-gray-600">{selectedEvent.location}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-3">
                        <Users className="h-5 w-5 mr-2 text-purple-600" />
                        <span className="font-medium">Description</span>
                      </div>
                      <p className="text-gray-600 mb-4">{selectedEvent.description}</p>

                      <Button className="bg-blue-600 hover:bg-blue-700">Register for Event</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-lg text-gray-600">Don't miss these important SEAC events</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.slice(0, 6).map((event) => (
                <Card key={event.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getEventBadgeColor(event.type)}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {moment(event.start).format("h:mm A")}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {moment(event.start).format("MMM Do, YYYY")}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                    <Button variant="outline" className="w-full">
                      Learn More
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
