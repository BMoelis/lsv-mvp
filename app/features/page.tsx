'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
  const features = [
    {
      title: "AI-Powered Sample Matching",
      description: "Our advanced AI algorithms quickly identify and match samples with original tracks.",
      icon: "🧠",
    },
    {
      title: "Automated Clearance Requests",
      description: "Streamline your workflow with automated clearance request submissions to rights holders.",
      icon: "🚀",
    },
    {
      title: "Real-Time Status Tracking",
      description: "Monitor the progress of your clearance requests in real-time with our intuitive dashboard.",
      icon: "📊",
    },
    {
      title: "Customizable Workflows",
      description: "Tailor the clearance process to fit your specific needs and requirements.",
      icon: "⚙️",
    },
    {
      title: "Comprehensive Rights Management",
      description: "Easily manage and track all your cleared samples and associated rights in one place.",
      icon: "📜",
    },
    {
      title: "Integration with Major DAWs",
      description: "Seamlessly integrate Klearance with popular Digital Audio Workstations for a smooth workflow.",
      icon: "🎹",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Features</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Everything you need to streamline your sample clearance process
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0F172A] text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to streamline your sample clearance process?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join thousands of music professionals who trust Klearance for faster, easier sample clearances.
          </p>
          <Link href="/sample-request">
            <Button size="lg" className="bg-[#38BDF8] hover:bg-[#0EA5E9]">
              Get Started
            </Button>
          </Link>
        </div>
      </main>
    </div>



  )
}
