"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

interface SharedHeaderProps {
  currentPage?: string
}

export default function SharedHeader({ currentPage }: SharedHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [grievanceDialogOpen, setGrievanceDialogOpen] = useState(false)
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    employeeId: "",
    email: "",
    department: "",
    subject: "",
    description: "",
  })
  const pathname = usePathname()

  const isActivePage = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const getLinkClassName = (path: string) => {
    const baseClasses =
      "px-3 py-1.5 text-xs font-medium rounded-md transition-colors border-0 outline-none focus:outline-none"
    if (isActivePage(path)) {
      return `${baseClasses} text-blue-600 bg-white/50`
    }
    return `${baseClasses} text-gray-700 hover:text-blue-600 hover:bg-white/50`
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitClick = () => {
    setConfirmationDialogOpen(true)
  }

  const handleConfirmSubmit = () => {
    // Handle actual form submission here
    console.log("Submitting grievance:", formData)

    // Reset form and close dialogs
    setFormData({
      fullName: "",
      employeeId: "",
      email: "",
      department: "",
      subject: "",
      description: "",
    })
    setConfirmationDialogOpen(false)
    setGrievanceDialogOpen(false)
  }

  const handleCancel = () => {
    setGrievanceDialogOpen(false)
    setFormData({
      fullName: "",
      employeeId: "",
      email: "",
      department: "",
      subject: "",
      description: "",
    })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-sm" style={{ backgroundColor: "#E8E4D9" }}>
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/seac-logo-new.png" alt="SEAC Logo" width={60} height={60} className="h-14 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors">SEAC</h1>
                <p className="text-[12px] font-bold text-gray-700">Salaried Employees Alliance Canada</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Home Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`px-3 py-1.5 text-xs font-medium border-0 outline-none focus:outline-none focus:ring-0 ${
                    pathname === "/"
                      ? "text-blue-600 bg-white/50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/50"
                  }`}
                >
                  Home
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link href="/" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/calendar" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Calendar
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/newsfeed" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Newsfeed
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/mission" className={getLinkClassName("/mission")}>
              Mission
            </Link>

            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`px-3 py-1.5 text-xs font-medium border-0 outline-none focus:outline-none focus:ring-0 ${
                    pathname.startsWith("/about")
                      ? "text-blue-600 bg-white/50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/50"
                  }`}
                >
                  About Us
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link href="/about/structure" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Our Structure
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/constitution" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Our Constitution
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/history" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Our History
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/victories" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Our Victories
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/benefits" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Member Benefits
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/dues" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Membership Dues
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/jobs" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Jobs with PSAC
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/help" className="w-full px-4 py-3 text-sm hover:bg-gray-50">
                    Help
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Committees Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`px-3 py-1.5 text-xs font-medium border-0 outline-none focus:outline-none focus:ring-0 ${
                    pathname.startsWith("/committees")
                      ? "text-blue-600 bg-white/50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/50"
                  }`}
                >
                  Committees
                  <ChevronDown className="ml-1 h-3 w-3" />
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
                  size="sm"
                  className={`px-3 py-1.5 text-xs font-medium border-0 outline-none focus:outline-none focus:ring-0 ${
                    pathname.startsWith("/education")
                      ? "text-blue-600 bg-white/50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/50"
                  }`}
                >
                  Education
                  <ChevronDown className="ml-1 h-3 w-3" />
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
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Take Action Dialog */}
            <Dialog open={grievanceDialogOpen} onOpenChange={setGrievanceDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white text-xs hidden sm:flex">
                  Take Action
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="text-xl">Submit a Grievance</DialogTitle>
                  <DialogDescription>
                    Use this form to report workplace issues, violations, or concerns that require union intervention.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
                      <Input
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Employee ID</label>
                      <Input
                        placeholder="Your employee identification"
                        value={formData.employeeId}
                        onChange={(e) => handleInputChange("employeeId", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address</label>
                      <Input
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Department</label>
                      <Input
                        placeholder="Your department/division"
                        value={formData.department}
                        onChange={(e) => handleInputChange("department", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Grievance Subject</label>
                    <Input
                      placeholder="Brief description of the issue"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Detailed Description</label>
                    <Textarea
                      placeholder="Provide a detailed description of the incident, including dates, times, witnesses, and any relevant documentation..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-4 pt-2">
                    <Button onClick={handleSubmitClick} className="bg-red-600 hover:bg-red-700 text-white">
                      Submit Grievance
                    </Button>
                    <Button onClick={handleCancel} variant="outline">
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Confirmation Dialog */}
            <Dialog open={confirmationDialogOpen} onOpenChange={setConfirmationDialogOpen}>
              <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                  <DialogTitle>Confirm Submission</DialogTitle>
                  <DialogDescription>Are you sure you want to submit this grievance?</DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-4 pt-4">
                  <Button onClick={handleConfirmSubmit} className="bg-red-600 hover:bg-red-700 text-white">
                    Yes
                  </Button>
                  <Button onClick={() => setConfirmationDialogOpen(false)} variant="outline">
                    No
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

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
            <Button
              variant="ghost"
              className="lg:hidden border-0 outline-none focus:outline-none focus:ring-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <div className="px-4 py-2">
                <p className="text-sm font-medium text-gray-900 mb-2">Home</p>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/calendar"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Calendar
                  </Link>
                  <Link
                    href="/newsfeed"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Newsfeed
                  </Link>
                </div>
              </div>
              <Link
                href="/mission"
                className={`block px-4 py-2 text-sm font-medium rounded-md ${
                  pathname === "/mission" ? "text-blue-600 bg-white/50" : "text-gray-700 hover:bg-white/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Mission
              </Link>

              <div className="px-4 py-2">
                <p className="text-sm font-medium text-gray-900 mb-2">About Us</p>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/about/structure"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Structure
                  </Link>
                  <Link
                    href="/about/constitution"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Constitution
                  </Link>
                  <Link
                    href="/about/history"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our History
                  </Link>
                  <Link
                    href="/about/victories"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Victories
                  </Link>
                  <Link
                    href="/about/benefits"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Member Benefits
                  </Link>
                  <Link
                    href="/about/dues"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Membership Dues
                  </Link>
                  <Link
                    href="/about/jobs"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Jobs with PSAC
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/help"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Help
                  </Link>
                </div>
              </div>

              <div className="px-4 py-2">
                <p className="text-sm font-medium text-gray-900 mb-2">Committees</p>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/committees/executive"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Executive Committee
                  </Link>
                  <Link
                    href="/committees/constitution"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Constitution Committee
                  </Link>
                  <Link
                    href="/committees/bargaining"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Bargaining Committee
                  </Link>
                  <Link
                    href="/committees/health-safety"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Joint Health & Safety Committee
                  </Link>
                </div>
              </div>

              <div className="px-4 py-2">
                <p className="text-sm font-medium text-gray-900 mb-2">Education</p>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/education/policies"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SEAC Policies & Procedures
                  </Link>
                  <Link
                    href="/education/constitution"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SEAC Constitution
                  </Link>
                  <Link
                    href="/education/collective-agreement"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Collective Agreement
                  </Link>
                  <Link
                    href="/education/training"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Negotiation Training
                  </Link>
                </div>
              </div>

              <div className="px-4 pt-2">
                <Dialog open={grievanceDialogOpen} onOpenChange={setGrievanceDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-xs">Take Action</Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
