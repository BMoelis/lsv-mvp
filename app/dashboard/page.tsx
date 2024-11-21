"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Eye, Plus, Clock, CheckCircle, XCircle, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const mockUserRequests = [
  {
    id: "1",
    originalSong: "California Love",
    originalArtist: "Tupac",
    newSong: "I Know SaaS",
    newArtist: "Melanie Moelis",
    usageType: "Sample",
    distributionType: "Independent Label",
    _date: "2024-01-19",
    status: "pending",
    comments: 2
  },
  {
    id: "2",
    originalSong: "Strobe",
    originalArtist: "Deadmau5",
    newSong: "Electronic Dreams",
    newArtist: "Melanie Moelis",
    usageType: "Sample",
    distributionType: "Independent Label",
    _date: "2024-01-15",
    status: "approved",
    comments: 4
  },
  {
    id: "3",
    originalSong: "Sweet Dreams",
    originalArtist: "Eurythmics",
    newSong: "Digital Nights",
    newArtist: "Melanie Moelis",
    usageType: "Sample",
    distributionType: "Independent Label",
    _date: "2024-01-10",
    status: "rejected",
    comments: 1
  }
]

const stats = [
  { title: "Active Requests", value: "3", icon: Clock },
  { title: "Approved", value: "12", icon: CheckCircle },
  { title: "Rejected", value: "2", icon: XCircle },
  { title: "Average Response Time", value: "48h", icon: Clock }
]

export default function RequestorDashboard() {
  const getStatusBadge = (status: string) => {
    const statusStyles = {
      pending: { variant: "secondary", label: "Pending" },
      approved: { variant: "default", label: "Approved" },
      rejected: { variant: "destructive", label: "Rejected" }
    } as const
    return statusStyles[status as keyof typeof statusStyles]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Track and manage your sample clearance requests</h1>
        <Link href="/sample-request">
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
              <TableHead>Comments</TableHead>
              <TableHead>Actions</TableHead>
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
                <TableCell>{new Date(request._date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadge(request.status)?.variant}>
                    {getStatusBadge(request.status)?.label}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4 text-gray-400" />
                    <span>{request.comments}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}