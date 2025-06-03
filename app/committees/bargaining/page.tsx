"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, FileText, Target, Mail, Gavel, DollarSign, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

export default function BargainingCommitteePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Bargaining Committee</h1>
            <p className="text-xl mb-8">
              The Bargaining Committee leads negotiations on behalf of SEAC members during collective bargaining
              processes. Their goal is to secure fair wages, benefits, and working conditions through transparent,
              member-informed negotiations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                Collective Bargaining
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Fair Wages
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Member Advocacy
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
                  <Gavel className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Represents Members During Bargaining Cycles</h3>
                    <p className="text-gray-600">
                      Serves as the primary negotiating body for SEAC members, advocating for improved wages, benefits,
                      and working conditions during collective bargaining sessions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Engages Legal and Financial Experts</h3>
                    <p className="text-gray-600">
                      Collaborates with specialized legal counsel and financial advisors to ensure negotiations are
                      well-informed and strategically sound.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hosts Bargaining Input Sessions</h3>
                    <p className="text-gray-600">
                      Conducts member consultation sessions to gather input on bargaining priorities and keep members
                      informed throughout the negotiation process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Works with Executive and Constitution Committees</h3>
                    <p className="text-gray-600">
                      Maintains close coordination with other SEAC committees to ensure bargaining strategies align with
                      overall union governance and member interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Current Bargaining Priorities</CardTitle>
                <CardDescription>Key focus areas for ongoing and upcoming negotiations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Salary Increases</span>
                    <Badge>High Priority</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Remote Work Flexibility</span>
                    <Badge>Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Health Benefits Enhancement</span>
                    <Badge>Ongoing</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Professional Development</span>
                    <Badge>Under Review</Badge>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-semibold">
                      <span>Next Bargaining Cycle</span>
                      <Badge variant="secondary">2025</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Bargaining Achievements</h2>
            <p className="text-lg text-gray-600">Successful outcomes from recent collective bargaining efforts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Salary Improvements</CardTitle>
                <CardDescription>2023 Collective Agreement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Secured a 3.5% annual salary increase over three years, plus cost-of-living adjustments to ensure
                  members maintain purchasing power.
                </p>
                <Badge className="bg-green-100 text-green-800">Completed</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Enhanced Benefits</CardTitle>
                <CardDescription>Health & Wellness Package</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Negotiated expanded mental health coverage, increased dental benefits, and new wellness programs
                  including fitness subsidies.
                </p>
                <Badge className="bg-blue-100 text-blue-800">Implemented</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Work-Life Balance</CardTitle>
                <CardDescription>Flexible Work Arrangements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Established formal remote work policies, flexible scheduling options, and additional personal leave
                  days for better work-life balance.
                </p>
                <Badge className="bg-purple-100 text-purple-800">Active</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Member Input Process */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Input & Participation</h2>
              <p className="text-lg text-gray-600">
                Your voice matters in shaping SEAC's bargaining priorities and strategies
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    Bargaining Input Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Participate in member consultation sessions where you can share your priorities and concerns for
                    upcoming negotiations. These sessions help shape our bargaining strategy.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Join Next Session</Button>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-green-600" />
                    Submit Bargaining Proposals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Members can submit formal proposals for consideration during bargaining. All submissions are
                    reviewed by the committee and incorporated into our negotiation strategy where appropriate.
                  </p>
                  <Button variant="outline" className="w-full">
                    Submit Proposal
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact the Bargaining Committee</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about current negotiations or want to share your bargaining priorities? Get in touch with
              our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
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
