'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Automate Your Sample Clearance Requests</h2>
          <p className="text-xl mb-8">Streamline your music production workflow with our AI-powered sample clearance automation service.</p>
          <Link href="/dashboard">
            <Button size="lg">Get Started</Button>
          </Link>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">Trusted by Top Music Publishers</h3>
          <Card className="w-full max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center justify-center h-16">
                    <div className="h-12 w-32 bg-gray-200 rounded animate-pulse" />
                  </div>
                ))}
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
    </div>
  )
}
