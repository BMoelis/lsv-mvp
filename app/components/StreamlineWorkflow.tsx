import { Brain, Activity, LinkIcon } from 'lucide-react'

export default function StreamlineWorkflow() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Streamline Your Workflow</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Clearance</h3>
            <p className="text-gray-600">Our AI algorithms quickly process and analyze sample requests.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Tracking</h3>
            <p className="text-gray-600">Monitor the status of your clearance requests in real-time.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <LinkIcon className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
            <p className="text-gray-600">Easily integrate with your existing music production tools.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
