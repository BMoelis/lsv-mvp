"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, Upload, CheckCircle, Settings } from 'lucide-react'
import Link from 'next/link'

export default function GuidePage() {
  const guideCategories = [
    {
      title: "Getting Started",
      icon: FileText,
      items: [
        { title: "Creating an account", content: "Learn how to sign up and set up your Klearance account." },
        { title: "Navigating the dashboard", content: "Explore the main features of your Klearance dashboard." },
        { title: "Setting up your profile", content: "Customize your profile and preferences for a personalized experience." },
      ]
    },
    {
      title: "Uploading Samples",
      icon: Upload,
      items: [
        { title: "Supported file formats", content: "Check which audio file formats are supported by Klearance." },
        { title: "Batch uploading", content: "Learn how to upload multiple samples at once for efficient processing." },
        { title: "Adding metadata", content: "Understand how to add crucial information to your samples for better organization." },
      ]
    },
    {
      title: "Clearance Process",
      icon: CheckCircle,
      items: [
        { title: "Initiating a clearance request", content: "Step-by-step guide on how to start the clearance process for a sample." },
        { title: "Tracking clearance status", content: "Learn how to monitor the progress of your clearance requests." },
        { title: "Handling clearance issues", content: "What to do when you encounter problems during the clearance process." },
      ]
    },
    {
      title: "Advanced Features",
      icon: Settings,
      items: [
        { title: "Using AI-powered sample matching", content: "Leverage our advanced AI to find potential matches for your samples." },
        { title: "Integrating with DAWs", content: "Connect Klearance with your favorite Digital Audio Workstations." },
        { title: "Customizing clearance workflows", content: "Tailor the clearance process to fit your specific needs." },
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Guide</h1>

      <div className="space-y-6">
        {guideCategories.map((category, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <Accordion type="single" collapsible>
                {category.items.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`${index}-${itemIndex}`}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">Need more help?</h2>
        <p className="text-gray-600 mb-6">Cannot find what you are looking for? Our support team is here to assist you.</p>
        <Link href="/help">
          <Button>Contact Support</Button>
        </Link>
      </div>
    </div>
  )
}
