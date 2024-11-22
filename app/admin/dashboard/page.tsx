"use client"

import { useEffect, useState } from "react"
import { Eye, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import MetricsCards from '../../components/MetricsCards'
import { AdminCommentsDialog } from "@/components/ui/admin-comments-dialog"
import { RequestActionsDialog } from "@/components/ui/request-actions-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

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
  status?: string
  analysis: {
    usageDescription: string
    artistBackground: string
    recommendation: string
    systemRecommendation: string
  }
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isCommentsOpen, setIsCommentsOpen] = useState(false)
const [selectedSubmissionId, setSelectedSubmissionId] = useState<string>("")
const [isActionsOpen, setIsActionsOpen] = useState(false)
const [searchTerm, setSearchTerm] = useState("")
const [filteredSubmissions, setFilteredSubmissions] = useState(submissions)
const [sorting, setSorting] = useState<"asc" | "desc">("asc")
const [selectedRequest, setSelectedRequest] = useState<Request | null>(null)
const [isModalOpen, setIsModalOpen] = useState(false)
const handleReject = () => {
  console.log("Rejecting request:", selectedRequest?.newSong)
  closeModal()
}
const handleCounter = () => {
  console.log("Countering request:", selectedRequest?.newSong)
  closeModal()
}
const handleApprove = () => {
  console.log("Approving request:", selectedRequest?.newSong)
  closeModal()
}

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
  
  const filterSubmissions = (term: string) => {
    if (!term) {
      setFilteredSubmissions(submissions)
      return
    }
    
    const filtered = submissions.filter(submission => 
      submission.originalSong.toLowerCase().includes(term.toLowerCase()) ||
      submission.originalArtist.toLowerCase().includes(term.toLowerCase()) ||
      submission.newSong.toLowerCase().includes(term.toLowerCase()) ||
      submission.newArtist.toLowerCase().includes(term.toLowerCase())
    )
    setFilteredSubmissions(filtered)
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
  
  // Add this as a separate useEffect
  useEffect(() => {
    setFilteredSubmissions(submissions)
  }, [submissions])

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
  value={searchTerm}
  onChange={(e) => {
    setSearchTerm(e.target.value)
    filterSubmissions(e.target.value)
  }}
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
    <th className="text-left p-4">Details</th>
  </tr>
</thead>
              <tbody>
  {filteredSubmissions.map((submission, index) => (
                  <tr key={`submission-${index}`} className="border-b hover:bg-gray-50">
                    <td className="p-4">{submission.originalSong || 'N/A'}</td>
                    <td className="p-4">{submission.originalArtist || 'N/A'}</td>
                    <td className="p-4">{submission.newSong || 'N/A'}</td>
                    <td className="p-4">{submission.newArtist || 'N/A'}</td>
                    <td className="p-4">{formatText(submission.usageType) || 'N/A'}</td>
                    <td className="p-4">{formatDistribution(submission.distributionType) || 'N/A'}</td>
                    <td className="p-4">{new Date(submission._date).toLocaleDateString()}</td>
                    <td className="p-4">
  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
    submission.status === 'approved' 
      ? 'bg-green-100 text-green-800'
      : submission.status === 'rejected'
      ? 'bg-red-100 text-red-800'
      : 'bg-blue-100 text-blue-800'
  }`}>
    {submission.status || 'New'}
  </span>
</td>
<td className="p-4">
  <Button 
    variant="ghost" 
    size="sm" 
    className="flex items-center gap-2"
    onClick={() => {
      setSelectedSubmissionId(submission.id)
      setIsCommentsOpen(true)
    }}
  >
    <Eye className="h-4 w-4" />
    View Details
  </Button>
  <Dialog open={isCommentsOpen && selectedSubmissionId === submission.id} onOpenChange={setIsCommentsOpen}>
  <DialogContent className="max-w-3xl h-[90vh] flex flex-col overflow-hidden">
  <DialogHeader>
    <DialogTitle>Request Details</DialogTitle>
  </DialogHeader>
  <ScrollArea className="flex-1 pr-4 -mr-6">
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">Request Information</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Original Song</p>
          <p>{submission.originalSong}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Original Artist</p>
          <p>{submission.originalArtist}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">New Song</p>
          <p>{submission.newSong}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">New Artist</p>
          <p>{submission.newArtist}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Usage Type</p>
          <p>{submission.usageType}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Distribution</p>
          <p>{submission.distributionType}</p>
        </div>
      </CardContent>
    </Card>
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">Usage Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Nature of Use</h4>
          <p className="text-sm leading-relaxed">
            {submission.analysis?.usageDescription || "The nature of the use of the original song is as replayed melody line that appears in the choruses of the new work @ 0:35-0:48/0:55-0:58 & 1:56-2:10/2:17-2:20 beneath the new artist's lyrical performance. In effect, the 13-second replay & 3-second 'afterthought' creates a musical structure that represents the melodic hook of the new work."}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Artist & Label Background</h4>
          <p className="text-sm leading-relaxed">
            {submission.analysis?.artistBackground || "Artist is signed with a major record label with significant market presence. Commercial potential analysis indicates strong upside based on existing fan base and label's distribution capabilities. Success of the new work will depend on label's ability to promote to the existing fan base."}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Recommendation</h4>
          <p className="text-sm leading-relaxed">
            {submission.analysis?.recommendation || "Based on the analysis above, our recommendation is that rights be granted for BMG's copyright interest in the original work in consideration for which BMG would be entitled to receive its pro rata share of an undivided copyright interest in the new work. This recommendation takes into account the nature of use, artist background, and commercial potential of the release."}
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-md">
            <p className="text-sm font-semibold text-blue-900">
              System Recommendation: {submission.analysis?.systemRecommendation || "22.5% copyright interest in the new work (i.e., 5.91%) with a 20% floor"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </ScrollArea>
  <div className="flex justify-end gap-2 pt-4 border-t mt-auto">
    <Button variant="outline" onClick={() => setIsCommentsOpen(false)}>Close</Button>
    <Button className="bg-red-500 hover:bg-red-600 text-white">Reject Request</Button>
    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Counter Request</Button>
    <Button className="bg-green-500 hover:bg-green-600 text-white">Approve Request</Button>
  </div>
</DialogContent>
  </Dialog>
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
