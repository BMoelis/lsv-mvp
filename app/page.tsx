'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
          <Card className="w-full max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-6">
              <div className="relative w-full">
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
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">Impressive Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="text-4xl font-bold mb-2">50%</h4>
                <p>Faster Clearances</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="text-4xl font-bold mb-2">30%</h4>
                <p>Lift in Clearance Requests</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="text-4xl font-bold mb-2">95%</h4>
                <p>Customer Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t p-6 text-center">
        <p>&copy; 2024 Sample Clearance Automation. All rights reserved.</p>
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
