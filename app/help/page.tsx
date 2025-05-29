"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  HelpCircle,
  FileText,
  Users,
  Phone,
  Mail,
  MessageSquare,
  BookOpen,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import SharedHeader from "@/components/shared-header"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      category: "Membership",
      questions: [
        {
          question: "How do I become a SEAC member?",
          answer:
            "To become a SEAC member, you must be a salaried employee in a workplace where SEAC has bargaining rights. Contact your local representative or our membership department for specific eligibility requirements.",
        },
        {
          question: "What are the membership fees?",
          answer:
            "Membership fees are typically 1.5% of your gross salary, deducted automatically from your paycheck. This covers all union services, legal support, and member benefits.",
        },
        {
          question: "Can I opt out of membership?",
          answer:
            "In most provinces, membership is mandatory for employees in bargaining units. However, specific rules vary by province and workplace. Contact us for information about your specific situation.",
        },
      ],
    },
    {
      category: "Grievances",
      questions: [
        {
          question: "What is a grievance?",
          answer:
            "A grievance is a formal complaint filed when you believe your employer has violated the collective agreement, workplace policies, or your rights as an employee.",
        },
        {
          question: "How do I file a grievance?",
          answer:
            "Contact your union representative within the time limits specified in your collective agreement (usually 10-30 days). They will help you complete the grievance form and guide you through the process.",
        },
        {
          question: "What happens after I file a grievance?",
          answer:
            "The grievance process typically involves several steps: informal discussion, formal grievance, mediation, and potentially arbitration. Your representative will advocate for you throughout the process.",
        },
      ],
    },
    {
      category: "Benefits",
      questions: [
        {
          question: "What benefits do SEAC members receive?",
          answer:
            "Members receive legal representation, grievance support, collective bargaining, professional development opportunities, and access to member-only resources and discounts.",
        },
        {
          question: "Do I get legal support?",
          answer:
            "Yes, SEAC provides legal representation for workplace-related issues, grievances, and matters covered under your collective agreement at no additional cost to members.",
        },
        {
          question: "Are there professional development opportunities?",
          answer:
            "SEAC offers various training programs, workshops, and educational resources to help members advance their careers and develop new skills.",
        },
      ],
    },
  ]

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Help & Support</h1>
            <p className="text-xl mb-8">
              Find answers to your questions, access resources, and get the support you need as a SEAC member.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Input
                  placeholder="Search for help topics, FAQs, or resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Options */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Help Quickly</h2>
            <p className="text-lg text-gray-600">Choose the best option for your immediate needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Emergency Support</CardTitle>
                <CardDescription>Urgent workplace issues</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  24/7 support for urgent workplace problems, safety issues, or harassment.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Instant online support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Chat with our support team Monday-Friday, 9 AM - 5 PM EST.</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Contact Representative</CardTitle>
                <CardDescription>Speak with your union rep</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Connect with your local union representative for personalized assistance.
                </p>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Find My Rep
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Send detailed inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Send us a detailed message and we'll respond within 24 hours.
                </p>
                <Button variant="outline" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find quick answers to common questions</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-8">
                {filteredFaqs.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Badge variant="secondary" className="mr-3">
                        {category.category}
                      </Badge>
                    </h3>
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <Card key={faqIndex} className="bg-gray-50">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-start">
                              <HelpCircle className="h-5 w-5 mr-2 mt-1 text-blue-600 flex-shrink-0" />
                              {faq.question}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 ml-7">{faq.answer}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : searchQuery ? (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any FAQs matching your search. Try different keywords or browse our categories below.
                </p>
                <Button onClick={() => setSearchQuery("")} variant="outline">
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                {faqs.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Badge variant="secondary" className="mr-3">
                        {category.category}
                      </Badge>
                    </h3>
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <Card key={faqIndex} className="bg-gray-50">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-start">
                              <HelpCircle className="h-5 w-5 mr-2 mt-1 text-blue-600 flex-shrink-0" />
                              {faq.question}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 ml-7">{faq.answer}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20" style={{ backgroundColor: "#E8E4D9" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Library</h2>
            <p className="text-lg text-gray-600">Access guides, forms, and educational materials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Member Handbook</CardTitle>
                <CardDescription>Complete guide to SEAC membership</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Everything you need to know about your rights, benefits, and responsibilities as a SEAC member.
                </p>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Grievance Guide</CardTitle>
                <CardDescription>Step-by-step grievance process</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Learn how to file a grievance, what to expect, and how to prepare your case effectively.
                </p>
                <Button variant="outline" className="w-full">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Forms & Documents</CardTitle>
                <CardDescription>Essential forms and templates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Access membership applications, grievance forms, and other important documents.
                </p>
                <Button variant="outline" className="w-full">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Browse Forms
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-5 w-5 mr-2" />
                Call Support
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </Button>
              <Button size="lg" variant="outline">
                <MessageSquare className="h-5 w-5 mr-2" />
                Live Chat
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
