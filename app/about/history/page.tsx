"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award, Milestone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

export default function HistoryPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our History</h1>
            <p className="text-xl mb-8">
              Over 50 years of fighting for workers' rights and advancing the interests of salaried employees across
              Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SEAC Timeline</h2>
            <p className="text-lg text-gray-600">Key milestones in our organization's history</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-100 text-blue-800">1970</Badge>
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle>SEAC Founded</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    SEAC was established to represent salaried employees who were underrepresented in traditional union
                    structures. Founded with 500 charter members across three provinces.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-100 text-green-800">1985</Badge>
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle>National Expansion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    SEAC expanded coast-to-coast, establishing regional offices and reaching 10,000 members. First
                    national collective agreement negotiated.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-purple-100 text-purple-800">1995</Badge>
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle>Landmark Victory</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Won groundbreaking case establishing pension rights for salaried employees, setting precedent for
                    worker protections across Canada.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-orange-100 text-orange-800">2010</Badge>
                    <Milestone className="h-5 w-5 text-orange-600" />
                  </div>
                  <CardTitle>Digital Transformation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Launched digital member services platform and online training programs, modernizing how we serve our
                    growing membership of 25,000+.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-red-100 text-red-800">2024</Badge>
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    SEAC now represents over 30,000 salaried employees across Canada, continuing to fight for fair
                    wages, benefits, and workplace rights.
                  </p>
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
