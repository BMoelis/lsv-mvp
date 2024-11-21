"use client"

import { useForm } from '@formspree/react'

export default function SampleRequestForm() {
  const [state, handleSubmit] = useForm("mqaklzyo")

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-sm max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-4">Thank you!</h2>
          <p className="text-center text-gray-600">Your sample request has been submitted successfully.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Sample Request Form</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h2 className="text-xl font-bold mb-6">Music Sample Request</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <label className="block text-sm font-medium mb-2">Original Artist</label>
              <input
                type="text"
                name="originalArtist"
                placeholder="Enter original artist"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <label className="block text-sm font-medium mb-2">New Artist</label>
              <input
                type="text"
                name="newArtist"
                placeholder="Enter new artist"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
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
          </div>

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
            <label className="block text-sm font-medium mb-2">Upload MP3</label>
            <div className="border-2 border-dashed rounded-md p-6 text-center">
              <input
                type="file"
                name="mp3File"
                accept=".mp3"
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-gray-500">
                  Click to upload or drag and drop
                  <br />
                  MP3 (MAX. 10MB)
                </div>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Additional Notes</label>
            <textarea
              name="notes"
              placeholder="Enter any additional notes or comments"
              rows={4}
              className="w-full p-2 border rounded-md"
            ></textarea>
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
