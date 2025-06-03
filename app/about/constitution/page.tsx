"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Scale, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

export default function AboutConstitutionPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Constitution</h1>
            <p className="text-xl mb-8">
              The foundational document that guides SEAC's governance, principles, and commitment to democratic
              representation.
            </p>
          </div>
        </div>
      </section>

      {/* Constitution Overview */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Scale className="h-6 w-6 mr-2 text-blue-600" />
                  SEAC Constitution
                </CardTitle>
                <CardDescription>Last updated: January 2024 | Ratified by membership vote</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Our constitution establishes the framework for democratic governance, member rights, and
                  organizational structure that has guided SEAC for over 50 years. It ensures transparency,
                  accountability, and member participation in all union activities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download Full Constitution
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    View Summary
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Constitutional Principles</h2>
            <p className="text-lg text-gray-600">Core values that guide our organization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Democratic Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All major decisions are made through democratic processes with full member participation and
                  transparent voting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Equal Representation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every member has equal voice and representation regardless of position, seniority, or workplace
                  location.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Open communication, accessible records, and clear reporting ensure members stay informed about union
                  activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amendment Process */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Constitutional Amendments</h2>
              <p className="text-lg text-gray-600">How members can propose changes to our constitution</p>
            </div>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-blue-100 text-blue-800 mt-1">1</Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Proposal Submission</h3>
                      <p className="text-gray-600">
                        Any member can submit a constitutional amendment proposal in writing to the Constitution
                        Committee.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-green-100 text-green-800 mt-1">2</Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Committee Review</h3>
                      <p className="text-gray-600">
                        The Constitution Committee reviews the proposal for legal compliance and organizational impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-purple-100 text-purple-800 mt-1">3</Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Member Vote</h3>
                      <p className="text-gray-600">
                        Approved proposals are presented to the membership for democratic vote at the Annual General
                        Meeting.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
