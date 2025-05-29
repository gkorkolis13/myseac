"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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
  const pathname = usePathname()

  const isActivePage = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const getLinkClassName = (path: string) => {
    const baseClasses = "px-4 py-2 text-sm font-medium rounded-md transition-colors"
    if (isActivePage(path)) {
      return `${baseClasses} text-blue-600 bg-white/50`
    }
    return `${baseClasses} text-gray-700 hover:text-blue-600 hover:bg-white/50`
  }

  return (
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
            <Link href="/" className={getLinkClassName("/")}>
              Home
            </Link>

            <Link href="/about" className={getLinkClassName("/about")}>
              About
            </Link>

            {/* Committees Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-4 py-2 text-sm font-medium ${
                    pathname.startsWith("/committees")
                      ? "text-blue-600 bg-white/50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/50"
                  }`}
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
                  className={`px-4 py-2 text-sm font-medium ${
                    pathname.startsWith("/education")
                      ? "text-blue-600 bg-white/50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/50"
                  }`}
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

            <Link href="/contact" className={getLinkClassName("/contact")}>
              Contact
            </Link>

            <Link href="/help" className={getLinkClassName("/help")}>
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
                className={`block px-4 py-2 text-sm font-medium rounded-md ${
                  pathname === "/" ? "text-blue-600 bg-white/50" : "text-gray-700 hover:bg-white/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-4 py-2 text-sm font-medium rounded-md ${
                  pathname === "/about" ? "text-blue-600 bg-white/50" : "text-gray-700 hover:bg-white/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

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

              <Link
                href="/contact"
                className={`block px-4 py-2 text-sm font-medium rounded-md ${
                  pathname === "/contact" ? "text-blue-600 bg-white/50" : "text-gray-700 hover:bg-white/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/help"
                className={`block px-4 py-2 text-sm font-medium rounded-md ${
                  pathname === "/help" ? "text-blue-600 bg-white/50" : "text-gray-700 hover:bg-white/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
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
  )
}
