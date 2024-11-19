'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const publishers = [
  { name: 'Universal Music Publishing Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Universal_Music_Publishing_Group.svg' },
  { name: 'Sony/ATV Music Publishing', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Sony_Music_Publishing_logo.svg/1200px-Sony_Music_Publishing_logo.svg.png' },
  { name: 'Warner Chappell Music', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Warner_Chappell_Music_logo.svg/1200px-Warner_Chappell_Music_logo.svg.png' },
  { name: 'Kobalt Music Group', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Kobalt_Music_Group_logo.svg/1280px-Kobalt_Music_Group_logo.svg.png' },
  { name: 'BMG Rights Management', logo: 'https://seekvectorlogo.net/wp-content/uploads/2019/04/bmg-rights-management-gmbh-vector-logo.png' },
]

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Automate Your Sample Clearance Requests</h2>
          <p className="text-xl mb-8">Streamline your music production workflow with our AI-powered sample clearance automation service.</p>
          <Link href="/sample-request">
            <Button size="lg">Get Started</Button>
          </Link>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">Trusted by Top Music Publishers</h3>
          <div className="w-full max-w-4xl mx-auto overflow-hidden">
            <div className="flex animate-scroll space-x-8 whitespace-nowrap">
              {[...publishers, ...publishers].map((publisher, index) => (
                <div key={index} className="inline-flex items-center justify-center min-w-[200px]">
                  <img
                    src={publisher.logo}
                    alt={publisher.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">Impressive Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-4xl font-bold mb-2">50%</h4>
              <p>Faster Clearances</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-4xl font-bold mb-2">30%</h4>
              <p>Lift in Clearance Requests</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-4xl font-bold mb-2">95%</h4>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 relative mr-4 flex-shrink-0">
                  <img
                    src="https://media.licdn.com/dms/image/v2/C5603AQE2WnBIWTRwAA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517619824212?e=2147483647&v=beta&t=-Z5ytiZhxmriHDR3LMOl6ms00Kwd4E0P08pHzYT_lxM"
                    alt="Larry Moelis"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">Larry Moelis</div>
                  <div className="text-sm text-gray-600">Music Director at BET Media Group</div>
                </div>
              </div>
              <blockquote className="text-lg italic mb-4">
                "Klearance saved us countless hours in receiving approval to use songs for our seasonal award shows. Gamechanger for music directors and anyone looking to clear a song."
              </blockquote>
              <div className="h-12 relative">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bd/BET-2021Logo.svg"
                  alt="BET Media Group Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 relative mr-4 flex-shrink-0">
                  <img
                    src="https://www.nmpa.org/wp-content/uploads/2021/06/HubertLaurent-Headshot.jpg"
                    alt="Laurent Hubert"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">Laurent Hubert</div>
                  <div className="text-sm text-gray-600">CEO of Kobalt Music</div>
                </div>
              </div>
              <blockquote className="text-lg italic mb-4">
                "Responsive, efficient, and easy to work with. Klearance is like an extension of our team!"
              </blockquote>
              <div className="h-12 relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_WhLWC_RAGpkIR8nOJyVcyXFRVoIFf7v-dA&s"
                  alt="Kobalt Music Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-600 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
                <li><Link href="/about" className="hover:text-gray-900">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-gray-900">Careers</Link></li>
                <li><Link href="/press" className="hover:text-gray-900">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/features" className="hover:text-gray-900">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-gray-900">Pricing</Link></li>
                <li><Link href="/enterprise" className="hover:text-gray-900">Enterprise</Link></li>
                <li><Link href="/security" className="hover:text-gray-900">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="hover:text-gray-900">Help Center</Link></li>
                <li><Link href="/api" className="hover:text-gray-900">API Documentation</Link></li>
                <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
                <li><Link href="/partners" className="hover:text-gray-900">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-gray-900">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-gray-900">Cookie Policy</Link></li>
                <li><Link href="/gdpr" className="hover:text-gray-900">GDPR Compliance</Link></li>
              </ul>
            </div>
            <div className="col-span-2">
              <h4 className="font-semibold text-lg mb-4">Stay Connected</h4>
              <p className="mb-4">Subscribe to our newsletter for updates and insights.</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button type="submit" className="rounded-md">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p>&copy; 2024 Klearance. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
