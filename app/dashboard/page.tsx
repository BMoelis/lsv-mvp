import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Sample Clearance Platform</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/sample-request" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Submit Request</h2>
            <p className="text-gray-600">Submit a new sample clearance request</p>
          </Link>
          
          <Link href="/admin/dashboard" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Admin Dashboard</h2>
            <p className="text-gray-600">View and manage clearance requests</p>
          </Link>

          <Link href="/chat" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">AI Assistant</h2>
            <p className="text-gray-600">Get help with sample clearance questions</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
