"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MessageCircle, Phone, Mail } from 'lucide-react'

export default function HelpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const supportCategories = [
    {
      title: "Getting Started",
      icon: Search,
      description: "New to Klearance? Start here for setup guides and tutorials."
    },
    {
      title: "Account & Billing",
      icon: MessageCircle,
      description: "Manage your account settings and billing information."
    },
    {
      title: "Technical Issues",
      icon: Phone,
      description: "Experiencing technical difficulties? Find solutions here."
    },
    {
      title: "Feature Requests",
      icon: Mail,
      description: "Suggest new features or improvements for Klearance."
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Support request submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">How can we help you?</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {supportCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <Icon className="h-6 w-6 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
