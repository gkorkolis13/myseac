"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building, MapPin, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

export default function StructurePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Structure</h1>
            <p className="text-xl mb-8">
              SEAC operates through a democratic structure that ensures member representation at all levels of the
              organization.
            </p>
          </div>
        </div>
      </section>

      {/* Organizational Chart */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Organizational Structure</h2>
            <p className="text-lg text-gray-600">Democratic governance ensuring member voices are heard</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Executive Committee</CardTitle>
                  <CardDescription>Strategic leadership and oversight</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Provides overall direction and strategic planning for SEAC operations and member services.
                  </p>
                  <Link href="/committees/executive">
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Regional Offices</CardTitle>
                  <CardDescription>Local representation across Canada</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Regional offices provide direct support and representation to members in their local areas.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Find Your Office
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Local Representatives</CardTitle>
                  <CardDescription>Workplace-level advocacy</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Local representatives provide direct support to members in their specific workplaces.
                  </p>
                  <Button variant="outline" className="w-full">
                    Find Your Rep
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Breakdown */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Presence</h2>
            <p className="text-lg text-gray-600">SEAC serves members across Canada through regional offices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Ontario Region
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Headquarters:</strong> Toronto
                  </p>
                  <p className="text-sm">
                    <strong>Members:</strong> 12,500+
                  </p>
                  <p className="text-sm">
                    <strong>Workplaces:</strong> 45
                  </p>
                  <div className="flex items-center mt-4">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">(416) 555-0123</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  British Columbia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Headquarters:</strong> Vancouver
                  </p>
                  <p className="text-sm">
                    <strong>Members:</strong> 8,200+
                  </p>
                  <p className="text-sm">
                    <strong>Workplaces:</strong> 32
                  </p>
                  <div className="flex items-center mt-4">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">(604) 555-0456</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                  Quebec Region
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Headquarters:</strong> Montreal
                  </p>
                  <p className="text-sm">
                    <strong>Members:</strong> 6,800+
                  </p>
                  <p className="text-sm">
                    <strong>Workplaces:</strong> 28
                  </p>
                  <div className="flex items-center mt-4">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">(514) 555-0789</span>
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
