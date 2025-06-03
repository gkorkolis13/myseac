"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, Mail, Shield, AlertTriangle, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

export default function HealthSafetyCommitteePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Joint Health & Safety Committee</h1>
            <p className="text-xl mb-8">
              The Joint Health & Safety Committee ensures that SEAC members are protected in their workplace
              environments. The committee promotes workplace safety education and addresses hazards or incidents as they
              arise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                Workplace Safety
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Hazard Prevention
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Safety Education
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
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Conducts Workplace Safety Assessments</h3>
                    <p className="text-gray-600">
                      Performs regular inspections and assessments of workplace environments to identify potential
                      safety hazards and ensure compliance with safety standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reviews Incident Reports and Investigates Hazards</h3>
                    <p className="text-gray-600">
                      Thoroughly investigates workplace incidents, near-misses, and safety concerns reported by members
                      to prevent future occurrences and improve safety protocols.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Develops Health & Safety Training Resources</h3>
                    <p className="text-gray-600">
                      Creates and maintains comprehensive safety training materials, workshops, and educational programs
                      to promote safety awareness among all members.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Partners with Employers on Safety Compliance</h3>
                    <p className="text-gray-600">
                      Collaborates with management to ensure workplace safety standards meet or exceed regulatory
                      requirements and industry best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Safety Statistics</CardTitle>
                <CardDescription>Current workplace safety metrics and performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Incident-Free Days</span>
                    <Badge className="bg-green-100 text-green-800">247 Days</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Safety Training Completion</span>
                    <Badge className="bg-blue-100 text-blue-800">94%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hazards Resolved</span>
                    <Badge className="bg-purple-100 text-purple-800">15 This Month</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Safety Assessments</span>
                    <Badge>Monthly</Badge>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-semibold">
                      <span>Overall Safety Rating</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Excellent
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety Programs & Initiatives</h2>
            <p className="text-lg text-gray-600">Comprehensive safety programs designed to protect our members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Safety Training Program</CardTitle>
                <CardDescription>Comprehensive Safety Education</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Mandatory and voluntary safety training sessions covering workplace hazards, emergency procedures, and
                  best safety practices for all job categories.
                </p>
                <Button variant="outline" className="w-full">
                  View Training Schedule
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Incident Reporting System</CardTitle>
                <CardDescription>Anonymous Safety Reporting</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Secure, confidential system for reporting safety concerns, near-misses, and incidents to ensure rapid
                  response and prevention measures.
                </p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Report Safety Concern</Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Safety Recognition Program</CardTitle>
                <CardDescription>Promoting Safety Excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Recognition program that celebrates individuals and teams who demonstrate exceptional commitment to
                  workplace safety and hazard prevention.
                </p>
                <Button variant="outline" className="w-full">
                  Nominate Someone
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Procedures & Resources</h2>
              <p className="text-lg text-gray-600">
                Essential safety information and emergency contacts for all SEAC members
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                    Emergency Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Emergency Services</span>
                      <span className="text-red-600 font-bold">911</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">SEAC Safety Hotline</span>
                      <span className="text-blue-600">1-800-SEAC-SAFE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Workplace Safety Officer</span>
                      <span className="text-blue-600">(416) 555-0199</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Health & Safety Committee</span>
                      <span className="text-blue-600">safety@seac.ca</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-green-600" />
                    Safety Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link href="#" className="block p-2 border rounded hover:bg-gray-50">
                      <span className="font-medium">Emergency Evacuation Procedures</span>
                    </Link>
                    <Link href="#" className="block p-2 border rounded hover:bg-gray-50">
                      <span className="font-medium">First Aid Guidelines</span>
                    </Link>
                    <Link href="#" className="block p-2 border rounded hover:bg-gray-50">
                      <span className="font-medium">Workplace Safety Handbook</span>
                    </Link>
                    <Link href="#" className="block p-2 border rounded hover:bg-gray-50">
                      <span className="font-medium">Incident Report Forms</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact the Health & Safety Committee</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have safety concerns or questions about workplace health and safety? We're here to help keep you safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Report Safety Issue
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="h-5 w-5 mr-2" />
                Contact Committee
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
