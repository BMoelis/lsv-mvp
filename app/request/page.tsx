"use client"

import Link from 'next/link'

export default function RequestTypePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">New Clearance Request</h1>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/request/sampling">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4">Sampling & Interpolation Rights</h2>
            <p className="text-gray-600">Request clearance for using portions of existing songs</p>
          </div>
        </Link>
        <Link href="/request/synchronization">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4">Synchronization Rights</h2>
            <p className="text-gray-600">Request clearance for using music in video content</p>
          </div>
        </Link>
      </div>
    </div>
  )
}