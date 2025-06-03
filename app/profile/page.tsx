"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, User, FileText, Bell, Download, Edit, Save, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import SharedHeader from "@/components/shared-header"

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    fullName: "John Smith",
    email: "john.smith@company.com",
    employeeId: "EMP-12345",
    region: "Ontario",
    department: "Engineering",
    membershipStatus: "Active",
    joinDate: "January 15, 2020",
    lastLogin: "December 3, 2024",
    committees: ["Bargaining Committee", "Health & Safety"],
    phone: "(416) 555-0123",
    address: "123 Main St, Toronto, ON M5V 3A8",
  })

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
    console.log("Saving profile data:", profileData)
  }

  const sidebarItems = [
    { id: "overview", label: "Profile Overview", icon: User },
    { id: "update", label: "Update Info", icon: Edit },
    { id: "documents", label: "Uploaded Documents", icon: FileText },
    { id: "preferences", label: "Communication Preferences", icon: Bell },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Member Information
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? <X className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="fullName"
                        value={profileData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                      />
                    ) : (
                      <p className="text-lg font-medium">{profileData.fullName}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    ) : (
                      <p className="text-lg">{profileData.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="employeeId">Employee ID</Label>
                    <p className="text-lg">{profileData.employeeId}</p>
                  </div>
                  <div>
                    <Label htmlFor="region">Region</Label>
                    {isEditing ? (
                      <Input
                        id="region"
                        value={profileData.region}
                        onChange={(e) => handleInputChange("region", e.target.value)}
                      />
                    ) : (
                      <p className="text-lg">{profileData.region}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    {isEditing ? (
                      <Input
                        id="department"
                        value={profileData.department}
                        onChange={(e) => handleInputChange("department", e.target.value)}
                      />
                    ) : (
                      <p className="text-lg">{profileData.department}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    ) : (
                      <p className="text-lg">{profileData.phone}</p>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex gap-2 pt-4">
                    <Button onClick={handleSave}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Membership Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Status:</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    {profileData.membershipStatus}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Member Since:</span>
                  <span>{profileData.joinDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Last Login:</span>
                  <span>{profileData.lastLogin}</span>
                </div>
                <Separator />
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Union Card
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Committee Involvement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.committees.map((committee, index) => (
                    <Badge key={index} variant="secondary">
                      {committee}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "update":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Update Personal Information</CardTitle>
              <CardDescription>Keep your contact information and preferences up to date</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="updateName">Full Name</Label>
                  <Input id="updateName" value={profileData.fullName} />
                </div>
                <div>
                  <Label htmlFor="updateEmail">Email</Label>
                  <Input id="updateEmail" type="email" value={profileData.email} />
                </div>
                <div>
                  <Label htmlFor="updatePhone">Phone</Label>
                  <Input id="updatePhone" value={profileData.phone} />
                </div>
                <div>
                  <Label htmlFor="updateRegion">Region</Label>
                  <Input id="updateRegion" value={profileData.region} />
                </div>
              </div>
              <div>
                <Label htmlFor="updateAddress">Address</Label>
                <Textarea id="updateAddress" value={profileData.address} />
              </div>
              <Button>Update Information</Button>
            </CardContent>
          </Card>
        )

      case "documents":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Documents</CardTitle>
              <CardDescription>Manage your uploaded documents and forms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Grievance Form - Case #2024-001</h4>
                      <p className="text-sm text-gray-500">Uploaded: November 15, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Medical Certificate</h4>
                      <p className="text-sm text-gray-500">Uploaded: October 3, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Upload New Document
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      case "preferences":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Communication Preferences</CardTitle>
              <CardDescription>Choose how you want to receive updates and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-500">Receive updates via email</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS Alerts</h4>
                    <p className="text-sm text-gray-500">Urgent notifications via text</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Newsletter</h4>
                    <p className="text-sm text-gray-500">Monthly SEAC newsletter</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Meeting Reminders</h4>
                    <p className="text-sm text-gray-500">Committee meeting notifications</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
              </div>
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E8E4D9" }}>
      <SharedHeader />

      <div className="container mx-auto px-6 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Website
              </Button>
            </Link>
          </div>

          {/* Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Dashboard</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {sidebarItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full flex items-center px-4 py-3 text-left text-sm font-medium rounded-none transition-colors ${
                            activeSection === item.id
                              ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <Icon className="h-4 w-4 mr-3" />
                          {item.label}
                        </button>
                      )
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
