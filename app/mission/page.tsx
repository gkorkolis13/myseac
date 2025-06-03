"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Briefcase, Globe, ExternalLink, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

export default function MissionPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl mb-8">
              SEAC's mission is to provide its members with leading employment standards knowledge and support increases
              to salaries, benefits, and workplace conditions to become market leaders in compensation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                Professional Representation
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Market-Leading Compensation
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Workplace Advocacy
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who is SEAC</h2>
              <p className="text-lg text-gray-600">
                SEAC is a labour union that has been active for 50 years representing Professionals in the workplace.
              </p>
            </div>

            <Card className="bg-white mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Our Professional Members</CardTitle>
                <CardDescription>
                  SEAC represents a diverse group of professionals across multiple disciplines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Engineers</h3>
                      <p className="text-gray-600">
                        Professional engineers across various disciplines and specializations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">IT Services</h3>
                      <p className="text-gray-600">Information technology professionals supporting critical systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Sub Contracts</h3>
                      <p className="text-gray-600">Professionals managing and executing contract relationships</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                      <p className="text-gray-600">Specialists ensuring standards compliance and product excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">ILS Training Analysts</h3>
                      <p className="text-gray-600">Experts in integrated logistics support and training development</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Financial Analysts</h3>
                      <p className="text-gray-600">Professionals managing financial planning and analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:col-span-2">
                    <Briefcase className="h-6 w-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Professional Administration</h3>
                      <p className="text-gray-600">Administrative professionals supporting organizational operations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Challenges Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Challenges</h2>
              <p className="text-lg text-gray-600">
                Understanding the challenges we face in representing our members effectively
              </p>
            </div>

            <Card className="bg-gray-50 border-l-4 border-amber-500 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What is the problem</h3>
                <p className="text-gray-700 mb-4">
                  SEAC is currently tightly coupled to the General Dynamics Mission Systems Backbone services. We only
                  utilize internal networks and communications to members and for our own company sensitive
                  documentation.
                </p>
                <p className="text-gray-700 mb-4">
                  SEAC needs to explore methods of removing its dependency on the company and be more accessible from
                  the public domain. This becomes especially necessary in a strike or lockout position when internal
                  comms may not be accessible.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-l-4 border-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Top level Statement of Work</h3>
                <p className="text-gray-700">
                  We require multiple avenues to promote SEAC on the public domain that will allow members to keep up to
                  date and informed on activities, events, and accomplishments SEAC is making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who is the target audience</h2>
              <p className="text-lg text-gray-600">Understanding who we serve and who we aim to reach</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Primary Audience: SEAC Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    The primary target audience is SEAC members who need to access SEAC information in a quick, easy
                    manner via:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Blogs and news updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Event calendars</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Images and media</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Documentation and resources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Training information</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Secondary Audience: Potential Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    There is a secondary audience of non-SEAC members that work in similar professions who may be
                    interested in:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Learning about what SEAC can offer them</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Understanding how to organize to become SEAC represented</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Comparing benefits and services with their current situation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Connecting with SEAC representatives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a current member or interested in what SEAC can offer, we invite you to be part of our
              mission to provide market-leading representation for professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Users className="mr-2 h-5 w-5" />
                Member Resources
              </Button>
              <Button size="lg" variant="outline">
                <ExternalLink className="mr-2 h-5 w-5" />
                Learn About Joining
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
