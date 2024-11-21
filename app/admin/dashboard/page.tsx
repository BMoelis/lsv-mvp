"use client"

import { useEffect, useState } from "react"
import { Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import MetricsCards from '../../components/MetricsCards'

interface Submission {
  id: string
  _date: string
  distributionType: string
  email: string
  newArtist: string
  newSong: string
  notes: string
  originalArtist: string
  originalSong: string
  usageType: string
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const metrics = {
    totalRequests: 156,
    totalChange: 12,
    pendingReview: 23,
    pendingChange: -5,
    approved: 89,
    approvedChange: 18,
    averageTime: 3.2,
    timeComparison: "Faster than last month"
  }

  const formatText = (text: string) => {
    return text?.charAt(0).toUpperCase() + text?.slice(1)
  }

  const formatDistribution = (text: string) => {
    return text?.replace(/([A-Z])/g, ' $1').trim().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/submissions')
        
        if (!response.ok) {
          throw new Error(`Failed to fetch submissions: ${response.status}`)
        }

        const data = await response.json()
        console.log('Submissions data:', data)

        if (data.submissions) {
          setSubmissions(data.submissions)
        }
      } catch (err) {
        console.error('Error:', err)
        setError(err instanceof Error ? err.message : "Failed to load submissions")
      } finally {
        setLoading(false)
      }
    }

    fetchSubmissions()
  }, [])

  if (loading) return <div className="p-8">Loading submissions...</div>
  if (error) return (
    <div className="p-8">
      <div className="text-red-500 mb-4">Error loading submissions:</div>
      <div className="bg-red-50 p-4 rounded-md text-sm">{error}</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
  <h1 className="text-2xl font-bold">Sample Clearance Requests</h1>
</div>

        <MetricsCards metrics={metrics} />

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 flex justify-between items-center border-b">
            <input
              type="text"
              placeholder="Search requests..."
              className="pl-3 pr-10 py-2 border rounded-md w-64"
            />
            <select className="border rounded-md px-3 py-2">
              <option>Sort by date</option>
              <option>Sort by status</option>
              <option>Sort by artist</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-4">Original Song</th>
                  <th className="text-left p-4">Original Artist</th>
                  <th className="text-left p-4">New Song</th>
                  <th className="text-left p-4">New Artist</th>
                  <th className="text-left p-4">Usage Type</th>
                  <th className="text-left p-4">Distribution</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, index) => (
                  <tr key={`submission-${index}`} className="border-b hover:bg-gray-50">
                    <td className="p-4">{submission.originalSong || 'N/A'}</td>
                    <td className="p-4">{submission.originalArtist || 'N/A'}</td>
                    <td className="p-4">{submission.newSong || 'N/A'}</td>
                    <td className="p-4">{submission.newArtist || 'N/A'}</td>
                    <td className="p-4">{formatText(submission.usageType) || 'N/A'}</td>
                    <td className="p-4">{formatDistribution(submission.distributionType) || 'N/A'}</td>
                    <td className="p-4">{new Date(submission._date).toLocaleDateString()}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        New
                      </span>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm" className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
