"use client"

import Link from 'next/link'

export default function VideoGamePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Select Rights Type</h1>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/request/video-game/master-recording" className="h-full">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition-shadow h-[200px] flex flex-col justify-between">
            <h2 className="text-xl font-bold">Master Recording</h2>
            <p className="text-gray-600">Request clearance for using the original recording</p>
          </div>
        </Link>
        <Link href="/request/video-game/musical-composition" className="h-full">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition-shadow h-[200px] flex flex-col justify-between">
            <h2 className="text-xl font-bold">Musical Composition</h2>
            <p className="text-gray-600">Request clearance for using the musical composition</p>
          </div>
        </Link>
      </div>
    </div>
  )
}