"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Users,
  FileText,
  Gavel,
  Shield,
  BookOpen,
  Scale,
  FileCheck,
  GraduationCap,
  MapPin,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function SEACWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b shadow-sm" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/images/seac-logo-new.png" alt="SEAC Logo" width={60} height={60} className="h-14 w-auto" />
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors">SEAC</h1>
                  <p className="text-xs font-bold text-gray-700">Salaried Employees Alliance Canada</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/50 rounded-md transition-colors"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/50 rounded-md transition-colors"
              >
                About
              </Link>

              {/* Committees Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/50"
                  >
                    Committees
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 bg-white border shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link href="/committees/executive" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                      Executive Committee
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/committees/constitution" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                      Constitution Committee
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/committees/bargaining" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                      Bargaining Committee
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/committees/health-safety" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                      Joint Health & Safety Committee
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Education Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/50"
                  >
                    Education
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 bg-white border shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link href="/education/policies" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                      SEAC Policies & Procedures
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/education/constitution" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                      SEAC Constitution
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/education/collective-agreement" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                      Collective Agreement
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/education/training" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                      Negotiation Training
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/50 rounded-md transition-colors"
              >
                Contact
              </Link>

              <Link
                href="/help"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/50 rounded-md transition-colors"
              >
                Help
              </Link>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white hidden sm:flex">Take Action</Button>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full border-2 border-gray-300 hover:border-gray-400"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                      <AvatarFallback className="bg-blue-100 text-blue-600">U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white border shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/login" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                      Login
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile menu button */}
              <Button variant="ghost" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white/50 rounded-md"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white/50 rounded-md"
                >
                  About
                </Link>

                <div className="px-4 py-2">
                  <p className="text-sm font-medium text-gray-900 mb-2">Committees</p>
                  <div className="pl-4 space-y-1">
                    <Link href="/committees/executive" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                      Executive Committee
                    </Link>
                    <Link
                      href="/committees/constitution"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Constitution Committee
                    </Link>
                    <Link
                      href="/committees/bargaining"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Bargaining Committee
                    </Link>
                    <Link
                      href="/committees/health-safety"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Joint Health & Safety Committee
                    </Link>
                  </div>
                </div>

                <div className="px-4 py-2">
                  <p className="text-sm font-medium text-gray-900 mb-2">Education</p>
                  <div className="pl-4 space-y-1">
                    <Link href="/education/policies" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                      SEAC Policies & Procedures
                    </Link>
                    <Link
                      href="/education/constitution"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      SEAC Constitution
                    </Link>
                    <Link
                      href="/education/collective-agreement"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Collective Agreement
                    </Link>
                    <Link href="/education/training" className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                      Negotiation Training
                    </Link>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white/50 rounded-md"
                >
                  Contact
                </Link>
                <Link
                  href="/help"
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white/50 rounded-md"
                >
                  Help
                </Link>

                <div className="px-4 pt-2">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Take Action</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-t-[12px] rounded-b-[12px] mx-4 mt-4">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Voice Matters</h1>
          <p className="text-xl md:text-2xl font-bold mb-8 max-w-2xl mx-auto">Salaried Employees Alliance Canada</p>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
              Learn More
            </Button>
          </div>
        </div>

        {/* Search Card */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl mx-auto px-4">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Committee</label>
                  <div className="relative">
                    <Input placeholder="Select Committee..." className="pr-10" />
                    <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Resource</label>
                  <div className="relative">
                    <Input placeholder="Education & Training" className="pr-10" />
                    <BookOpen className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Support</label>
                  <div className="relative">
                    <Input placeholder="Get help..." className="pr-10" />
                    <HelpCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <Button className="bg-teal-500 hover:bg-teal-600 text-white h-10">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Committees Section - 1001 Egg White */}
      <section className="py-20 mt-12" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SEAC Committees</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our committees ensure effective representation, transparency, and member involvement in all union
              activities. Each committee plays a vital role in protecting and advancing the interests of our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Executive Committee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Provides strategic leadership and oversees the overall direction of SEAC operations and member
                  services.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Constitution Committee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reviews and maintains our constitutional framework, ensuring governance aligns with member needs and
                  legal requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Gavel className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Bargaining Committee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Negotiates collective agreements and represents member interests in discussions with management and
                  employers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Joint Health & Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ensures workplace safety standards and advocates for healthy working conditions for all members.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Resources Section - 8395 White Comfort */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access essential documents, training materials, and educational resources to stay informed about your
              rights and union activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">SEAC Policies & Procedures</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive guide to SEAC policies, procedures, and operational guidelines for members.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  View Documents
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">SEAC Constitution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our foundational document outlining the structure, governance, and principles of SEAC.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  Read Constitution
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Collective Agreement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Current collective bargaining agreements and terms negotiated on behalf of our members.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  View Agreement
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Negotiation Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Training programs and workshops to develop negotiation skills and union leadership capabilities.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  Join Training
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Help Section - White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Find SEAC */}
            <Card className="bg-white border shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Find SEAC</CardTitle>
                <CardDescription>
                  Get in touch with our team for general inquiries, membership information, or support.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Subject</label>
                  <Input placeholder="What can we help you with?" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                  <Textarea placeholder="Tell us more about your inquiry..." rows={4} />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </CardContent>
            </Card>

            {/* Help & Instructions */}
            <Card className="bg-white border shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Help & Instructions</CardTitle>
                <CardDescription>
                  Find answers to common questions and step-by-step guides for union processes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Link href="#" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900">How to Submit a Grievance</h4>
                    <p className="text-sm text-gray-600">Step-by-step guide to filing workplace grievances</p>
                  </Link>
                  <Link href="#" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900">Understanding Your Rights</h4>
                    <p className="text-sm text-gray-600">Know your workplace rights and protections</p>
                  </Link>
                  <Link href="#" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900">Membership Benefits</h4>
                    <p className="text-sm text-gray-600">Explore all the benefits of SEAC membership</p>
                  </Link>
                  <Link href="#" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900">Contact Directory</h4>
                    <p className="text-sm text-gray-600">Find the right person for your specific needs</p>
                  </Link>
                </div>
                <Button variant="outline" className="w-full">
                  View All FAQs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Take Action Section - 1001 Egg White */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Take Action</h2>
              <p className="text-lg text-gray-600">
                Submit a grievance or workplace concern. Our team will review your submission and provide support
                throughout the process.
              </p>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Submit a Grievance</CardTitle>
                <CardDescription>
                  Use this form to report workplace issues, violations, or concerns that require union intervention.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Employee ID</label>
                    <Input placeholder="Your employee identification" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address</label>
                    <Input type="email" placeholder="your.email@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Department</label>
                    <Input placeholder="Your department/division" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Grievance Subject</label>
                  <Input placeholder="Brief description of the issue" />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Detailed Description</label>
                  <Textarea
                    placeholder="Provide a detailed description of the incident, including dates, times, witnesses, and any relevant documentation..."
                    rows={6}
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Submit Grievance</Button>
                  <Button variant="outline">Check Status</Button>
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
