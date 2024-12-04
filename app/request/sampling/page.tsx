"use client"

import Link from 'next/link'

export default function SamplingTypePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Select Usage Type</h1>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/request/sampling/sample">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4">Sample</h2>
            <p className="text-gray-600">Using a portion of the master recording</p>
          </div>
        </Link>
        <Link href="/sample-request">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4">Interpolation</h2>
            <p className="text-gray-600">Re-recording elements of the composition</p>
          </div>
        </Link>
      </div>
    </div>
  )
}