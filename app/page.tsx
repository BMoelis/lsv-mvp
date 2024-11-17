export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">LSV MVP Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-xl font-semibold">Sample Request Form</h2>
            </div>
            <p className="text-gray-600 mb-4">Submit a new sample clearance request</p>
            <p className="text-gray-500 mb-6">Access the public-facing form for users to submit sample clearance requests.</p>
            <a href="/sample-request" className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Go to Form
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h2 className="text-xl font-semibold">Admin Login</h2>
            </div>
            <p className="text-gray-600 mb-4">Access the admin portal</p>
            <p className="text-gray-500 mb-6">Secure login page for administrators to access the management dashboard.</p>
            <a href="/login" className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Go to Login
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <h2 className="text-xl font-semibold">Admin Dashboard</h2>
            </div>
            <p className="text-gray-600 mb-4">Manage sample clearance requests</p>
            <p className="text-gray-500 mb-6">View and manage all submitted sample clearance requests.</p>
            <a href="/admin/dashboard" className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Go to Dashboard
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}