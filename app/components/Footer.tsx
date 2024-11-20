import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Klearance</h3>
            <p className="mb-4">Automating sample clearance for the music industry.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 rounded-md border border-gray-700 bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button type="submit" className="bg-[#38BDF8] hover:bg-[#0EA5E9]">Subscribe</Button>
            </form>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="hover:text-white">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/enterprise" className="hover:text-white">Enterprise</Link></li>
              <li><Link href="/security" className="hover:text-white">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/press" className="hover:text-white">Press</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
              <li><Link href="/guides" className="hover:text-white">Guides</Link></li>
              <li><Link href="/api" className="hover:text-white">API</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link href="/security" className="hover:text-white">Security</Link></li>
              <li><Link href="/gdpr" className="hover:text-white">GDPR</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Klearance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
