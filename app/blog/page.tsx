"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of AI in Music Production",
      excerpt: "Explore how artificial intelligence is reshaping the landscape of music creation and production.",
      author: "Jane Doe",
      date: "June 1, 2024",
    },
    {
      title: "5 Tips for Clearing Samples Efficiently",
      excerpt: "Learn how to streamline your sample clearance process and avoid common pitfalls.",
      author: "John Smith",
      date: "May 15, 2024",
    },
    {
      title: "Understanding Music Copyright in the Digital Age",
      excerpt: "A comprehensive guide to navigating copyright laws in today's music industry.",
      author: "Alice Johnson",
      date: "April 30, 2024",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-9"
          />
        </div>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500">
                By {post.author} | {post.date}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
