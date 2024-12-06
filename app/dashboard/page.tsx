"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RequestStatusModal } from "@/components/ui/request-status-modal"
import { Input } from "@/components/ui/input"

interface RequestUpdate {
  type: "System" | "Admin"
  message: string
  status: string
  timestamp: Date
}

interface RequestDetails {
  id: string
  originalSong: string
  originalArtist: string
  newSong: string
  newArtist: string
  usageType: string
  distributionType: string
  status: "pending" | "approved" | "rejected"
  email: string
  date: Date
  notes?: string
  updates: RequestUpdate[]
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Eye, Plus, Clock, CheckCircle, XCircle, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const mockUserRequests: RequestDetails[] = [
  {
    id: "1",
    originalSong: "California Love",
    originalArtist: "Tupac",
    newSong: "I Know SaaS",
    newArtist: "Melanie Moelis",
    usageType: "Sample",
    distributionType: "Independent Label",
    date: new Date("2024-01-19"),
    status: "pending",
    email: "melanie@example.com",
    notes: "Planning to use the main hook for chorus",
    updates: [
      {
        type: "System",
        message: "Request received and under review",
        status: "Pending",
        timestamp: new Date("2024-12-05")
      },
      {
        type: "Admin",
        message: "Additional information needed regarding usage context",
        status: "Awaiting Response",
        timestamp: new Date("2024-12-05")
      }
    ]
  },
  {
    id: "2",
    originalSong: "Strobe",
    originalArtist: "Deadmau5",
    newSong: "Electronic Dreams",
    newArtist: "Melanie Moelis",
    usageType: "Sample",
    distributionType: "Independent Label",
    date: new Date("2024-01-15"),
    status: "approved",
    email: "melanie@example.com",
    notes: "Using synth progression in bridge section",
    updates: [
      {
        type: "System",
        message: "Request approved",
        status: "Approved",
        timestamp: new Date("2024-12-04")
      }
    ]
  },
  {
    id: "3",
    originalSong: "Sweet Dreams",
    originalArtist: "Eurythmics",
    newSong: "Digital Nights",
    newArtist: "Melanie Moelis",
    usageType: "Sample",
    distributionType: "Independent Label",
    date: new Date("2024-01-10"),
    status: "rejected",
    email: "melanie@example.com",
    notes: "Incorporating main synth riff throughout",
    updates: [
      {
        type: "Admin",
        message: "Request rejected due to licensing restrictions",
        status: "Rejected",
        timestamp: new Date("2024-12-03")
      }
    ]
  }
]

const stats = [
  { title: "Active Requests", value: "3", icon: Clock },
  { title: "Approved", value: "12", icon: CheckCircle },
  { title: "Rejected", value: "2", icon: XCircle },
  { title: "Average Response Time", value: "48h", icon: Clock }
]

export default function RequestorDashboard() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState<RequestDetails | null>(null)
  const getStatusBadge = (status: string) => {
    const statusStyles = {
      pending: { variant: "warning", label: "Pending" },
      approved: { variant: "success", label: "Approved" },
      rejected: { variant: "destructive", label: "Rejected" }
    } as const
    return statusStyles[status as keyof typeof statusStyles] || { variant: "default", label: "New" }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Track and manage your sample clearance requests</h1>
        <Link href="/request">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" /> New Request
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-gray-400" />
                </div>
                <p className="text-2xl font-semibold mt-2">{stat.value}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Original Song</TableHead>
              <TableHead>Original Artist</TableHead>
              <TableHead>New Song</TableHead>
              <TableHead>New Artist</TableHead>
              <TableHead>Usage Type</TableHead>
              <TableHead>Distribution</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>View Latest Update</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockUserRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.originalSong}</TableCell>
                <TableCell>{request.originalArtist}</TableCell>
                <TableCell>{request.newSong}</TableCell>
                <TableCell>{request.newArtist}</TableCell>
                <TableCell>{request.usageType}</TableCell>
                <TableCell>{request.distributionType}</TableCell>
                <TableCell>{request.date.toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadge(request.status)?.variant}>
                    {getStatusBadge(request.status)?.label}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => {
                      setSelectedRequest(request)
                      setIsOpen(true)
                    }}
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                  {selectedRequest && (
                    <RequestStatusModal
                      isOpen={isOpen}
                      onClose={() => setIsOpen(false)}
                      request={selectedRequest}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}