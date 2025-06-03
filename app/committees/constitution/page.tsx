"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, FileText, Target, Mail, Scale, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

export default function ConstitutionCommitteePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Constitution Committee</h1>
            <p className="text-xl mb-8">
              Responsible for reviewing and maintaining SEAC's governing documents, including proposed amendments and
              structural updates. This committee ensures that SEAC's operations comply with its bylaws and remain
              transparent and democratic.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                Governance Review
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Constitutional Amendments
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Democratic Oversight
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
                  <Scale className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reviews Member-Submitted Constitutional Proposals</h3>
                    <p className="text-gray-600">
                      Carefully evaluates all constitutional amendment proposals submitted by SEAC members to ensure
                      they align with union principles and legal requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Recommends Structural Improvements</h3>
                    <p className="text-gray-600">
                      Identifies opportunities to improve union governance structures and processes to better serve
                      member interests and enhance organizational effectiveness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Collaborates with Legal Advisors</h3>
                    <p className="text-gray-600">
                      Works closely with legal experts when needed to ensure all constitutional changes comply with
                      labor law and maintain SEAC's legal standing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Meets Quarterly or As Needed</h3>
                    <p className="text-gray-600">
                      Maintains regular quarterly meetings with additional sessions scheduled as constitutional matters
                      arise or during periods of significant organizational change.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Committee Focus Areas</CardTitle>
                <CardDescription>Key areas of constitutional oversight and governance review</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Constitutional Amendments</span>
                    <Badge>Primary Focus</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Governance Structure</span>
                    <Badge>Ongoing Review</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Bylaw Compliance</span>
                    <Badge>Continuous</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Democratic Processes</span>
                    <Badge>Core Mandate</Badge>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-semibold">
                      <span>Meeting Frequency</span>
                      <Badge variant="secondary">Quarterly</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Initiatives</h2>
            <p className="text-lg text-gray-600">Active projects and ongoing constitutional review work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Governance Modernization</CardTitle>
                <CardDescription>2024 Constitutional Review</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Comprehensive review of SEAC's constitutional framework to ensure it meets the needs of modern
                  workplace representation and member engagement.
                </p>
                <Badge variant="outline">In Progress</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Digital Participation</CardTitle>
                <CardDescription>Remote Voting Procedures</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Developing constitutional provisions for secure digital participation in union votes and meetings to
                  enhance member accessibility.
                </p>
                <Badge variant="outline">Planning Phase</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Transparency Framework</CardTitle>
                <CardDescription>Enhanced Accountability Measures</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Strengthening constitutional requirements for transparency in union operations and decision-making
                  processes.
                </p>
                <Badge variant="outline">Under Review</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Get Involved</h2>
              <p className="text-lg text-gray-600">
                SEAC members can participate in constitutional governance through various channels
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-600" />
                    Submit Constitutional Proposals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Members can submit proposals for constitutional amendments or governance improvements. All
                    submissions are carefully reviewed by the committee.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Submit Proposal</Button>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-green-600" />
                    Attend Committee Meetings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Members are welcome to observe committee meetings and participate in public comment periods during
                    constitutional discussions.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Meeting Schedule
                  </Button>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact the Constitution Committee</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about SEAC's constitution or want to propose changes? We're here to help.
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
