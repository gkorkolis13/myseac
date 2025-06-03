"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Users, Calendar, Clock, Award, BookOpen, Target, CheckCircle, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

export default function NegotiationTrainingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Negotiation Training</h1>
            <p className="text-xl mb-8">
              Develop essential negotiation skills and union leadership capabilities through our comprehensive training
              programs. Empower yourself to effectively represent member interests and advance workplace rights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                Professional Development
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Leadership Skills
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Certified Programs
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Overview */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training curriculum is designed to build negotiation expertise at every level, from new
              representatives to experienced leaders.
            </p>
          </div>

          <Tabs defaultValue="fundamentals" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="specialized">Specialized</TabsTrigger>
            </TabsList>

            <TabsContent value="fundamentals" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Introduction to Collective Bargaining</CardTitle>
                    <CardDescription>Foundation course for new representatives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>16 hours (2 days)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Max 20 participants</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Certificate provided</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Learn the basics of collective bargaining, labor law, and negotiation principles.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Register Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Negotiation Fundamentals</CardTitle>
                    <CardDescription>Core negotiation skills and strategies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>12 hours (1.5 days)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Max 15 participants</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Certificate provided</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Master essential negotiation techniques, communication skills, and conflict resolution.
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Register Now</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <GraduationCap className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Advanced Bargaining Strategies</CardTitle>
                    <CardDescription>Complex negotiation scenarios and tactics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>24 hours (3 days)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Max 12 participants</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Advanced Certificate</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Advanced techniques for complex negotiations, multi-party bargaining, and strategic planning.
                    </p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle>Interest-Based Bargaining</CardTitle>
                    <CardDescription>Collaborative negotiation approaches</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>20 hours (2.5 days)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Max 16 participants</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Specialized Certificate</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Learn collaborative problem-solving and win-win negotiation strategies.
                    </p>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">Register Now</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="leadership" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>Union Leadership Development</CardTitle>
                    <CardDescription>Building effective union leaders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>32 hours (4 days)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Max 10 participants</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Leadership Certificate</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Comprehensive leadership training for current and aspiring union leaders.
                    </p>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Register Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle>Committee Chair Training</CardTitle>
                    <CardDescription>Effective committee leadership skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>8 hours (1 day)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Max 15 participants</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Chair Certificate</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Learn to effectively chair meetings, manage committees, and facilitate decision-making.
                    </p>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Register Now</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specialized" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-indigo-600" />
                    </div>
                    <CardTitle>Grievance Handling</CardTitle>
                    <CardDescription>Expert grievance processing and arbitration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>16 hours (2 days)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Max 18 participants</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Specialist Certificate</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Master the grievance process from filing to arbitration representation.
                    </p>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Register Now</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle>Financial Analysis for Bargaining</CardTitle>
                    <CardDescription>Understanding employer finances in negotiations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>12 hours (1.5 days)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Max 12 participants</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Analysis Certificate</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Learn to analyze financial statements and use data effectively in bargaining.
                    </p>
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">Register Now</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Training Sessions</h2>
            <p className="text-lg text-gray-600">Register for upcoming training opportunities</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    Spring 2024 Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Introduction to Collective Bargaining</h4>
                      <p className="text-sm text-gray-600">March 15-16, 2024 | Toronto</p>
                      <p className="text-sm text-gray-500">8 spots remaining</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Negotiation Fundamentals</h4>
                      <p className="text-sm text-gray-600">March 22-23, 2024 | Vancouver</p>
                      <p className="text-sm text-gray-500">12 spots remaining</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Advanced Bargaining Strategies</h4>
                      <p className="text-sm text-gray-600">April 5-7, 2024 | Montreal</p>
                      <p className="text-sm text-gray-500">5 spots remaining</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="h-5 w-5 mr-2 text-green-600" />
                    Training Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link href="#" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900">Training Catalog 2024</h4>
                      <p className="text-sm text-gray-600">Complete course descriptions and schedules</p>
                    </Link>
                    <Link href="#" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900">Negotiation Handbook</h4>
                      <p className="text-sm text-gray-600">Essential reference guide for negotiators</p>
                    </Link>
                    <Link href="#" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900">Training Application Form</h4>
                      <p className="text-sm text-gray-600">Apply for training programs</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Training */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SEAC Training?</h2>
              <p className="text-lg text-gray-600">
                Our training programs are designed by experienced negotiators and union leaders
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Instructors</h3>
                    <p className="text-gray-600">
                      Learn from experienced negotiators, labor lawyers, and union leaders with decades of experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Practical Application</h3>
                    <p className="text-gray-600">
                      Hands-on training with real-world scenarios and case studies from actual negotiations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                    <p className="text-gray-600">
                      Continued mentorship and resources available after training completion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Recognized Certification</h3>
                    <p className="text-gray-600">Certificates recognized across the labor movement and by employers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Scheduling</h3>
                    <p className="text-gray-600">Multiple session times and locations to accommodate work schedules.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Member-Funded</h3>
                    <p className="text-gray-600">
                      Training costs covered by union dues - no additional fees for members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Enhance Your Skills?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our training programs and become a more effective advocate for your fellow members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <GraduationCap className="h-5 w-5 mr-2" />
                Register for Training
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Download Catalog
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
