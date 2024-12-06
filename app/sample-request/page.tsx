"use client"
import { useForm } from '@formspree/react'
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function SampleRequestForm() {
  const [state, handleSubmit] = useForm("mqaklzyo")
  const [shareMethod, setShareMethod] = useState<string>('')
  const [originalArtists, setOriginalArtists] = useState([''])
  const [newArtists, setNewArtists] = useState([''])
  const handleAddOriginalArtist = () => {
    setOriginalArtists([...originalArtists, ''])
  }
  const [originalWriters, setOriginalWriters] = useState([''])
  const [newWriters, setNewWriters] = useState([''])


  const handleAddNewArtist = () => {
    setNewArtists([...newArtists, ''])
  }

  const handleOriginalArtistChange = (index: number, value: string) => {
    const updatedArtists = [...originalArtists]
    updatedArtists[index] = value
    setOriginalArtists(updatedArtists)
  }

  const handleNewArtistChange = (index: number, value: string) => {
    const updatedArtists = [...newArtists]
    updatedArtists[index] = value
    setNewArtists(updatedArtists)
  }

  const handleAddOriginalWriter = () => {
    setOriginalWriters([...originalWriters, ''])
  }

  const handleAddNewWriter = () => {
    setNewWriters([...newWriters, ''])
  }

  const handleOriginalWriterChange = (index: number, value: string) => {
    const updatedWriters = [...originalWriters]
    updatedWriters[index] = value
    setOriginalWriters(updatedWriters)
  }

  const handleNewWriterChange = (index: number, value: string) => {
    const updatedWriters = [...newWriters]
    updatedWriters[index] = value
    setNewWriters(updatedWriters)
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    formData.append('sharingMethod', shareMethod)
    formData.append('originalArtists', JSON.stringify(originalArtists))
    formData.append('newArtists', JSON.stringify(newArtists))
    formData.append('originalWriters', JSON.stringify(originalWriters))
    formData.append('newWriters', JSON.stringify(newWriters))
    await handleSubmit(e)
  }
  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-sm max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-4">Thank you!</h2>
          <p className="text-center text-gray-600">Your interpolation request has been submitted successfully.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Interpolation Request Form</h1>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-8">
        <h2 className="text-xl font-bold mb-6">Music Interpolation Request</h2>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Original Song Title</label>
              <input
                type="text"
                name="originalSong"
                placeholder="Enter original song title"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Original Artist(s)</label>
              <div className="space-y-2">
                {originalArtists.map((artist, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      name={`originalArtist${index}`}
                      value={artist}
                      onChange={(e) => handleOriginalArtistChange(index, e.target.value)}
                      placeholder="Enter original artist"
                      required
                      className="w-full p-2 border rounded-md"
                    />
                    {index === originalArtists.length - 1 && (
                      <button
                        type="button"
                        onClick={handleAddOriginalArtist}
                        className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                      >
                        +
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Original Writer(s)</label>
              <div className="space-y-2">
                {originalWriters.map((writer, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      name={`originalWriter${index}`}
                      value={writer}
                      onChange={(e) => handleOriginalWriterChange(index, e.target.value)}
                      placeholder="Enter original writer"
                      required
                      className="w-full p-2 border rounded-md"
                    />
                    {index === originalWriters.length - 1 && (
                      <button
                        type="button"
                        onClick={handleAddOriginalWriter}
                        className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                      >
                        +
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">New Song Title</label>
              <input
                type="text"
                name="newSong"
                placeholder="Enter new song title"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">New Artist(s)</label>
              <div className="space-y-2">
                {newArtists.map((artist, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      name={`newArtist${index}`}
                      value={artist}
                      onChange={(e) => handleNewArtistChange(index, e.target.value)}
                      placeholder="Enter new artist"
                      required
                      className="w-full p-2 border rounded-md"
                    />
                    {index === newArtists.length - 1 && (
                      <button
                        type="button"
                        onClick={handleAddNewArtist}
                        className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                      >
                        +
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">New Writer(s)</label>
              <div className="space-y-2">
                {newWriters.map((writer, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      name={`newWriter${index}`}
                      value={writer}
                      onChange={(e) => handleNewWriterChange(index, e.target.value)}
                      placeholder="Enter new writer"
                      required
                      className="w-full p-2 border rounded-md"
                    />
                    {index === newWriters.length - 1 && (
                      <button
                        type="button"
                        onClick={handleAddNewWriter}
                        className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                      >
                        +
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-2 border rounded-md"
            />
          </div> */}

          {/* <div>
            <label className="block text-sm font-medium mb-2">Usage Type</label>
            <select 
              name="usageType"
              required
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select usage type</option>
              <option value="sample">Sample</option>
              <option value="interpolation">Interpolation</option>
            </select>
          </div> */}

          <div>
            <label className="block text-sm font-medium mb-2">Distribution Type</label>
            <select
              name="distributionType"
              required
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select distribution type</option>
              <option value="majorLabel">Major Label</option>
              <option value="independentLabel">Independent Label</option>
              <option value="selfReleased">Self-Released</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Share New Song</label>
            <select
              name="shareMethod"
              value={shareMethod}
              onChange={(e) => setShareMethod(e.target.value)}
              required
              className="w-full p-2 border rounded-md mb-4"
            >
              <option value="">Select sharing method</option>
              <option value="upload">Upload MP3 File</option>
              <option value="link">Share Cloud Link</option>
              <option value="session">Schedule Listening Session</option>
            </select>

            {shareMethod === 'upload' && (
              <div className="border-2 border-dashed rounded-md p-6 text-center">
                <input
                  type="file"
                  name="mp3File"
                  accept=".mp3"
                  className="hidden"
                  id="file-upload"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file && file.size > 10 * 1024 * 1024) {
                      alert('File size must be less than 10MB')
                      e.target.value = ''
                    }
                  }}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-gray-500">
                    Click to upload or drag and drop
                    <br />
                    MP3 (MAX. 10MB)
                  </div>
                </label>
              </div>
            )}

            {shareMethod === 'link' && (
              <div>
                <input
                  type="url"
                  name="cloudLink"
                  placeholder="Enter cloud storage link (Dropbox, Google Drive, etc.)"
                  className="w-full p-2 border rounded-md"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Please ensure the link is accessible and doesn't require special permissions
                </p>
              </div>
            )}

            {shareMethod === 'session' && (
              <div className="text-center p-4 border rounded-md bg-gray-50">
                <p className="text-gray-700 mb-2">Schedule a listening session with our team</p>
                <Button
                  type="button"
                  onClick={() => window.open('https://calendly.com/bmoelis97', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  variant="default"
                >
                  Schedule Session
                </Button>
                <p className="text-sm text-gray-500 mt-2">
                  You'll be redirected to our scheduling platform
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Additional Notes</label>
            <div className="space-y-2">
              <textarea
                name="notes"
                placeholder="Enter any additional notes or comments on the nature of the usage."
                rows={4}
                className="w-full p-2 border rounded-md"
              ></textarea>
              <p className="text-sm text-gray-500">
                For example:
                <em className="block mt-1">
                  The use of the original song is as a replayed melody line that appears in the choruses of the new work at 0:27-0:40/0:43-0:50 and 1:53-2:09/2:14-2:22 beneath the new artist's lyrical performance.
                </em>
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 disabled:bg-gray-400"
          >
            {state.submitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  )
}
