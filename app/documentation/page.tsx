import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Book, Code, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function DocumentationPage() {
  const docSections = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Learn the basics of Klearance and set up your account.",
      link: "#"
    },
    {
      title: "API Reference",
      icon: Code,
      description: "Detailed documentation of our API endpoints and usage.",
      link: "/api"
    },
    {
      title: "Integrations",
      icon: Zap,
      description: "Guides on integrating Klearance with your favorite tools.",
      link: "/integrations"
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Documentation</h1>
      
      <div className="mb-8">
      <div className="relative max-w-md">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
  <Input 
    type="search"
    placeholder="Search documentation..."
    className="pl-9"
  />
</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {docSections.map((section, index) => {
          const Icon = section.icon
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <Icon className="h-6 w-6 mb-4 text-primary" />
                <CardTitle className="mb-2">{section.title}</CardTitle>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="mt-auto pt-4">
  <Link href={section.link || "#"}>
    <Button variant="ghost" className="flex items-center gap-2">
      Learn more <ArrowRight className="h-4 w-4" />
    </Button>
  </Link>
</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Need more help?</h2>
        <p className="text-gray-600 mb-6">Cannot find what you are looking for? Our support team is here to assist you.</p>
        <Link href="/help">
  <Button>Contact Support</Button>
</Link>
      </div>
    </div>
  )
}
