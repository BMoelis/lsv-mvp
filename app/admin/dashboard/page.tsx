"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import MetricsCards from '../../components/MetricsCards'
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
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredSubmissions, setFilteredSubmissions] = useState(submissions)
  const [sortConfig, setSortConfig] = useState<{ field: string; direction: "asc" | "desc"; }>({ field: "", direction: "asc" })
  const [selectedRequest, setSelectedRequest] = useState<Submission | null>(null)
  const [isCountering, setIsCountering] = useState(false)
  const [counterOffer, setCounterOffer] = useState("")
  const { toast } = useToast()
  const closeModal = () => {
    setIsCommentsOpen(false)
    setSelectedSubmissionId("")
    setIsCountering(false)
  }

  const handleRejectRequest = () => {
    console.log("Rejecting request:", selectedSubmissionId)
    closeModal()
  }

  const handleCounterRequest = () => {
    setIsCountering(true)
  }

  const handleApproveRequest = () => {
    console.log("Approving request:", selectedSubmissionId)
    closeModal()
  }

  const formatDistribution = (text: string) => {
    return text?.replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
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
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/submissions')
        if (!response.ok) {
          throw new Error(`Failed to fetch submissions: ${response.status}`)
        }
        const data = await response.json()
        if (data.submissions) {
          const enhancedSubmissions = data.submissions.map((submission: Submission) => ({
            ...submission,
            analysis: {
              usageDescription: `The nature of the use of ${submission.originalSong} by ${submission.originalArtist} is as ${submission.usageType} that appears throughout the new work "${submission.newSong}" by ${submission.newArtist}. This creates a musical structure that represents a significant portion of the new work.`,
              artistBackground: `${submission.newArtist} is releasing this work through ${formatDistribution(submission.distributionType)}. The commercial potential will depend on the label's ability to promote to their existing fan base.`,
              recommendation: `Based on the ${submission.usageType} usage and ${formatDistribution(submission.distributionType)} distribution, we recommend granting rights for the copyright interest in "${submission.originalSong}". This takes into account the nature of use and commercial potential of the release.`,
              systemRecommendation: submission.distributionType === "majorLabel" ? "50% copyright interest in the new work" : "22.5% copyright interest in the new work with a 20% floor"
            }
          }))
          setSubmissions(enhancedSubmissions)
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
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Sample Clearance Requests</h1>
        </div>
        <MetricsCards metrics={{
          totalRequests: 156,
          totalChange: 12,
          pendingReview: 23,
          pendingChange: -5,
          approved: 89,
          approvedChange: 18,
          averageTime: 3.2,
          timeComparison: "Faster than last month"
        }} />
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
            <select
              className="border rounded-md px-3 py-2"
              value={`${sortConfig.field}-${sortConfig.direction}`}
              onChange={(e) => {
                const [field, direction] = e.target.value.split('-')
                setSortConfig({ field, direction: direction as "asc" | "desc" })
                const sorted = [...filteredSubmissions].sort((a, b) => {
                  let comparison = 0
                  if (field === 'date') {
                    comparison = new Date(a._date).getTime() - new Date(b._date).getTime()
                  }
                  if (field === 'status') {
                    comparison = (a.status || 'new').localeCompare(b.status || 'new')
                  }
                  if (field === 'artist') {
                    comparison = a.originalArtist.localeCompare(b.originalArtist)
                  }
                  return direction === "asc" ? comparison : -comparison
                })
                setFilteredSubmissions(sorted)
              }}
            >
              <option value="">Select sort type</option>
              <option value="date-asc">Date ↑</option>
              <option value="date-desc">Date ↓</option>
              <option value="status-asc">Status ↑</option>
              <option value="status-desc">Status ↓</option>
              <option value="artist-asc">Artist ↑</option>
              <option value="artist-desc">Artist ↓</option>
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
                {filteredSubmissions.map((submission: Submission, index: number) => (
                  <tr key={`submission-${index}`} className="border-b hover:bg-gray-50">
                    <td className="p-4">{submission.originalSong || 'N/A'}</td>
                    <td className="p-4">{submission.originalArtist || 'N/A'}</td>
                    <td className="p-4">{submission.newSong || 'N/A'}</td>
                    <td className="p-4">{submission.newArtist || 'N/A'}</td>
                    <td className="p-4">{formatText(submission.usageType) || 'N/A'}</td>
                    <td className="p-4">{formatDistribution(submission.distributionType) || 'N/A'}</td>
                    <td className="p-4">{new Date(submission._date).toLocaleDateString()}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${submission.status === 'approved'
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
                          setSelectedRequest(submission)
                          setIsCommentsOpen(true)
                        }}
                      >
                        <Eye className="h-4 w-4" />
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Dialog open={isCommentsOpen} onOpenChange={(open) => {
        if (!open) {
          closeModal()
        }
      }}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-6">
          <DialogHeader className="pb-4">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-semibold">
                {isCountering ? "Counter Offer" : "Request Details"}
              </DialogTitle>
            </div>
          </DialogHeader>
          {!isCountering ? (
            <ScrollArea className="flex-1 pr-4 -mr-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Request Information</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 bg-gray-50 p-4 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Original Song</p>
                      <p className="mt-1">{selectedRequest?.originalSong}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Original Artist</p>
                      <p className="mt-1">{selectedRequest?.originalArtist}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">New Song</p>
                      <p className="mt-1">{selectedRequest?.newSong}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">New Artist</p>
                      <p className="mt-1">{selectedRequest?.newArtist}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Usage Type</p>
                      <p className="mt-1">{selectedRequest?.usageType}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Distribution</p>
                      <p className="mt-1">{selectedRequest?.distributionType}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Usage Analysis</h3>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Usage Description</h4>
                      <p className="text-sm text-gray-600">
                        {selectedRequest?.analysis.usageDescription}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Artist Background</h4>
                      <p className="text-sm text-gray-600">
                        {selectedRequest?.analysis.artistBackground}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Recommendation</h4>
                      <p className="text-sm text-gray-600">
                        {selectedRequest?.analysis.recommendation}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-900 mb-2">AI-Generated Quote</h4>
                      <p className="text-sm font-semibold text-blue-900">
                        {selectedRequest?.analysis.systemRecommendation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-3 pt-6 mt-6 border-t">
                  <Button variant="outline" onClick={closeModal} className="px-4 py-2">
                    Close
                  </Button>
                  <Button variant="destructive" onClick={handleRejectRequest} className="px-4 py-2">
                    Reject Request
                  </Button>
                  <Button variant="outline" onClick={handleCounterRequest} className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2">
                    Counter Request
                  </Button>
                  <Button variant="outline" onClick={handleApproveRequest} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2">
                    Approve Request
                  </Button>
                </div>
              </div>
            </ScrollArea>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="font-medium mb-2">System Recommendation</h3>
                <p className="text-sm font-semibold text-blue-900">
                  {selectedRequest?.distributionType === "majorLabel"
                    ? "50% copyright interest in the new work"
                    : "22.5% copyright interest in the new work with a 20% floor"}
                </p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Counter Offer Percentage</label>
                <Input
                  type="number"
                  value={counterOffer}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCounterOffer(e.target.value)}
                  placeholder="Enter percentage (e.g., 25)"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCountering(false)}>
                  Back
                </Button>
                <Button onClick={async () => {
                  if (!counterOffer) {
                    toast({
                      title: "Error",
                      description: "Please enter a counter offer percentage",
                      variant: "destructive",
                    })
                    return
                  }

                  const response = await fetch(`/api/submissions/${selectedSubmissionId}`, {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      status: 'counter',
                      counterOffer
                    })
                  })

                  if (response.ok) {
                    toast({
                      title: "Success",
                      description: "Counter offer sent successfully",
                    })
                    setIsCountering(false)
                    setIsCommentsOpen(false)
                  }
                }}>
                  Send Counter Offer
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}