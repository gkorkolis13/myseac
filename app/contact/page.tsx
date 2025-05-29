"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageSquare, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact SEAC</h1>
            <p className="text-xl mb-8">
              We're here to help. Reach out to our team for support, information, or to get involved with SEAC.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                24/7 Emergency Support
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Multilingual Services
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Confidential Assistance
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Choose the best way to reach us based on your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>Speak directly with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Main Line:</p>
                  <p className="text-blue-600">1-800-SEAC-HELP</p>
                  <p className="font-medium">Emergency:</p>
                  <p className="text-red-600">1-800-SEAC-911</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Send us a detailed message</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">General Inquiries:</p>
                  <p className="text-blue-600">info@seac.ca</p>
                  <p className="font-medium">Grievances:</p>
                  <p className="text-blue-600">grievance@seac.ca</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Instant support online</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Available Monday-Friday</p>
                  <p className="text-sm text-gray-600">9:00 AM - 5:00 PM EST</p>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">Start Chat</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Visit Us</CardTitle>
                <CardDescription>In-person consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">By appointment only</p>
                  <p className="text-sm text-gray-600">Multiple locations</p>
                  <Button variant="outline" className="w-full mt-4">
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <Card className="bg-white">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">First Name *</label>
                      <Input placeholder="Your first name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name *</label>
                      <Input placeholder="Your last name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address *</label>
                      <Input type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Phone Number</label>
                      <Input type="tel" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Member ID (if applicable)</label>
                    <Input placeholder="Your SEAC member ID" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Subject *</label>
                    <Input placeholder="What is your inquiry about?" required />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Message *</label>
                    <Textarea
                      placeholder="Please provide details about your inquiry, question, or concern..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                    <Button type="button" variant="outline">
                      Clear Form
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-lg text-gray-600">SEAC has offices across Canada to serve our members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Toronto (Head Office)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">123 Union Street, Suite 500</p>
                  <p className="text-sm">Toronto, ON M5V 2T6</p>
                  <div className="flex items-center mt-4">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">(416) 555-0123</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">Mon-Fri 8:30 AM - 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Vancouver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">456 Pacific Avenue, Floor 12</p>
                  <p className="text-sm">Vancouver, BC V6B 1R8</p>
                  <div className="flex items-center mt-4">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">(604) 555-0456</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">Mon-Fri 9:00 AM - 5:30 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Montreal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">789 Rue Saint-Jacques, Bureau 300</p>
                  <p className="text-sm">Montréal, QC H3C 1G1</p>
                  <div className="flex items-center mt-4">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">(514) 555-0789</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">Lun-Ven 8:30 - 17:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-red-800">
                <AlertCircle className="h-6 w-6 mr-2" />
                Emergency Support
              </CardTitle>
              <CardDescription className="text-red-700">
                If you're facing an urgent workplace issue or need immediate assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-red-800 mb-2">24/7 Emergency Hotline</h4>
                  <p className="text-2xl font-bold text-red-600">1-800-SEAC-911</p>
                  <p className="text-sm text-red-700 mt-2">
                    Available 24 hours a day, 7 days a week for urgent workplace issues, safety concerns, or harassment
                    situations.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-red-800 mb-2">What constitutes an emergency?</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Workplace safety hazards</li>
                    <li>• Harassment or discrimination</li>
                    <li>• Wrongful termination</li>
                    <li>• Urgent grievance matters</li>
                    <li>• Legal issues requiring immediate attention</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
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
