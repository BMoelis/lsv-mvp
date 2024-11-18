"use client"

import { useEffect, useState } from "react"

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
        const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
        const apiKey = process.env.NEXT_PUBLIC_FORMSPREE_API_KEY

        console.log('Fetching submissions...')
        console.log('Form ID exists:', !!formId)
        console.log('API Key exists:', !!apiKey)

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
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Sample Clearance Requests</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between mb-6">
            <input
              type="text"
              placeholder="Search requests..."
              className="w-64 p-2 border rounded-md"
            />
            <select className="p-2 border rounded-md">
              <option>Sort by date</option>
              <option>Sort by status</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Original Song</th>
                  <th className="text-left p-2">Original Artist</th>
                  <th className="text-left p-2">New Song</th>
                  <th className="text-left p-2">New Artist</th>
                  <th className="text-left p-2">Usage Type</th>
                  <th className="text-left p-2">Distribution</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, index) => (
                  <tr key={`submission-${index}`} className="border-b">
                    <td className="p-2">{submission.originalSong || 'N/A'}</td>
                    <td className="p-2">{submission.originalArtist || 'N/A'}</td>
                    <td className="p-2">{submission.newSong || 'N/A'}</td>
                    <td className="p-2">{submission.newArtist || 'N/A'}</td>
                    <td className="p-2">{formatText(submission.usageType) || 'N/A'}</td>
                    <td className="p-2">{formatDistribution(submission.distributionType) || 'N/A'}</td>
                    <td className="p-2">{new Date(submission._date).toLocaleDateString()}</td>
                    <td className="p-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                        new
                      </span>
                    </td>
                    <td className="p-2">
                      <button className="text-black hover:text-gray-700">
                        View Details
                      </button>
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
