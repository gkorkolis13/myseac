"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, FileText, Target, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

export default function ExecutiveCommitteePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Executive Committee</h1>
            <p className="text-xl mb-8">
              Providing strategic leadership and oversight for SEAC operations, member services, and organizational
              direction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                Strategic Leadership
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Member Advocacy
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Organizational Governance
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Overview */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Role & Responsibilities</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Strategic Planning</h3>
                    <p className="text-gray-600">
                      Developing long-term strategies and goals for SEAC's growth and member service enhancement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Member Representation</h3>
                    <p className="text-gray-600">
                      Ensuring member voices are heard and interests are represented in all organizational decisions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Policy Development</h3>
                    <p className="text-gray-600">
                      Creating and reviewing policies that guide SEAC operations and member services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Committee Composition</CardTitle>
                <CardDescription>
                  The Executive Committee consists of elected representatives from across Canada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">President & CEO</span>
                    <Badge>1 Position</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Vice Presidents</span>
                    <Badge>3 Positions</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Regional Directors</span>
                    <Badge>5 Positions</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Secretary-Treasurer</span>
                    <Badge>1 Position</Badge>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-semibold">
                      <span>Total Members</span>
                      <Badge variant="secondary">10 Positions</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Executive Members</h2>
            <p className="text-lg text-gray-600">Meet the dedicated leaders guiding SEAC's mission and vision</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle>Sarah Mitchell</CardTitle>
                <CardDescription>President & CEO</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Leading SEAC with 20+ years of union experience, focusing on member advocacy and strategic growth.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Mail className="h-4 w-4 mr-2" />
                    s.mitchell@seac.ca
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Phone className="h-4 w-4 mr-2" />
                    (416) 555-0101
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription>VP Operations</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Overseeing daily operations and member services with expertise in organizational management.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Mail className="h-4 w-4 mr-2" />
                    m.chen@seac.ca
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Phone className="h-4 w-4 mr-2" />
                    (604) 555-0102
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-purple-600" />
                </div>
                <CardTitle>Jennifer Thompson</CardTitle>
                <CardDescription>VP Bargaining</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Leading collective bargaining efforts and negotiating agreements that protect member interests.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Mail className="h-4 w-4 mr-2" />
                    j.thompson@seac.ca
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Phone className="h-4 w-4 mr-2" />
                    (514) 555-0103
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meeting Schedule */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meeting Schedule & Information</h2>
              <p className="text-lg text-gray-600">Stay informed about Executive Committee meetings and decisions</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    Regular Meetings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Frequency:</span>
                      <span>Monthly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Day:</span>
                      <span>First Tuesday</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Time:</span>
                      <span>2:00 PM EST</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Format:</span>
                      <span>Hybrid (In-person & Virtual)</span>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600">
                        Members can request to observe meetings by contacting the Secretary-Treasurer 48 hours in
                        advance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-green-600" />
                    Meeting Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link href="#" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900">Meeting Minutes</h4>
                      <p className="text-sm text-gray-600">Access approved minutes from previous meetings</p>
                    </Link>
                    <Link href="#" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900">Agendas</h4>
                      <p className="text-sm text-gray-600">View upcoming meeting agendas and topics</p>
                    </Link>
                    <Link href="#" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900">Reports</h4>
                      <p className="text-sm text-gray-600">Read committee reports and recommendations</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Committee */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact the Executive Committee</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions, concerns, or suggestions for the Executive Committee? We want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="h-5 w-5 mr-2" />
                Request Meeting
              </Button>
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
