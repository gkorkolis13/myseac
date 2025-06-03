"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, DollarSign, Shield, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

export default function VictoriesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Victories</h1>
            <p className="text-xl mb-8">
              Celebrating the achievements and wins that have improved working conditions and benefits for SEAC members.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Victories */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
            <p className="text-lg text-gray-600">Major wins for our members in the past year</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>4.2% Salary Increase</CardTitle>
                <CardDescription>2024 Collective Agreement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Negotiated the largest salary increase in five years, benefiting all 30,000+ SEAC members.
                </p>
                <Badge className="bg-green-100 text-green-800">$15M+ in raises</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Enhanced Benefits</CardTitle>
                <CardDescription>Mental Health Coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Secured comprehensive mental health benefits including counseling and wellness programs.
                </p>
                <Badge className="bg-blue-100 text-blue-800">100% Coverage</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Remote Work Rights</CardTitle>
                <CardDescription>Flexible Work Arrangements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Established formal remote work policies protecting members' right to flexible arrangements.
                </p>
                <Badge className="bg-purple-100 text-purple-800">Policy Protected</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Historical Victories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Historic Achievements</h2>
            <p className="text-lg text-gray-600">Landmark victories that shaped workers' rights</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="h-6 w-6 text-yellow-600 mr-3" />
                    <div>
                      <CardTitle>Pension Rights Victory (1995)</CardTitle>
                      <CardDescription>Supreme Court of Canada</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Landmark Case</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Won groundbreaking Supreme Court case establishing pension rights for salaried employees, setting
                  national precedent for worker protections.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="h-6 w-6 text-yellow-600 mr-3" />
                    <div>
                      <CardTitle>Equal Pay Achievement (2008)</CardTitle>
                      <CardDescription>Gender Pay Equity</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Historic Win</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Successfully negotiated equal pay provisions eliminating gender-based wage gaps across all SEAC
                  workplaces.
                </p>
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
