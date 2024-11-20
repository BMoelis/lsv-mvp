'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Activity, LinkIcon, Zap, TrendingUp, Heart } from 'lucide-react'
import StreamlineWorkflow from './components/StreamlineWorkflow'
import HowKlearanceWorks from './components/HowKlearanceWorks'
import Testimonials from './components/Testimonials'

const publishers = [
  { name: 'Universal Music Publishing Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Universal_Music_Publishing_Group.svg' },
  { name: 'Sony/ATV Music Publishing', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Sony_Music_Publishing_logo.svg/1200px-Sony_Music_Publishing_logo.svg.png' },
  { name: 'Warner Chappell Music', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Warner_Chappell_Music_logo.svg/1200px-Warner_Chappell_Music_logo.svg.png' },
  { name: 'Kobalt Music Group', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Kobalt_Music_Group_logo.svg/1280px-Kobalt_Music_Group_logo.svg.png' },
  { name: 'BMG Rights Management', logo: 'https://seekvectorlogo.net/wp-content/uploads/2019/04/bmg-rights-management-gmbh-vector-logo.png' },
]

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="bg-[#0F172A] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Automate Your Sample <br className="hidden md:inline" /> Clearance Requests
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Streamline your music production workflow with our AI-powered sample clearance automation service.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/sample-request">
                <Button size="lg" className="bg-[#38BDF8] hover:bg-[#0EA5E9] w-full sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        <StreamlineWorkflow />

        <section className="py-16 md:py-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Trusted by Top Music Publishers</h2>
          <div className="w-full max-w-4xl mx-auto overflow-hidden">
            <div className="flex animate-scroll space-x-8 whitespace-nowrap">
              {[...publishers, ...publishers].map((publisher, index) => (
                <div key={index} className="inline-flex items-center justify-center min-w-[200px]">
                  <Image
                    src={publisher.logo}
                    alt={publisher.name}
                    width={160}
                    height={64}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <HowKlearanceWorks />

        <section className="mt-16 mb-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-4 text-center">Impressive Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-gray-600" />
                </div>
                <h4 className="text-4xl font-bold mb-2">50%</h4>
                <p>Faster Clearances</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-gray-600" />
                </div>
                <h4 className="text-4xl font-bold mb-2">30%</h4>
                <p>Lift in Clearance Requests</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-gray-600" />
                </div>
                <h4 className="text-4xl font-bold mb-2">95%</h4>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="bg-[#0F172A] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to revolutionize your sample clearance process?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Join thousands of music professionals who trust Klearance for faster, easier sample clearances.
            </p>
            <Link href="/sample-request">
              <Button size="lg" className="bg-[#38BDF8] hover:bg-[#0EA5E9]">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
