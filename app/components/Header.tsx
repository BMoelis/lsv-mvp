"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigation = {
    product: {
      name: "Product",
      items: [
        { name: "Features", href: "/features" },
        { name: "Enterprise", href: "/enterprise" },
        { name: "Integrations", href: "/integrations" },
        { name: "Security", href: "/security" }
      ]
    },
    resources: {
      name: "Resources",
      items: [
        { name: "Documentation", href: "/documentation" },
        { name: "API", href: "/api" },
        { name: "Guides", href: "/guide" },
        { name: "Help Center", href: "/help" }
      ]
    },
    company: {
      name: "Company",
      items: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Blog", href: "/blog" }
      ]
    }
  }

  return (
    <header className="bg-white border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold">
              Klearance
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {Object.entries(navigation).map(([key, section]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-2 py-2 text-gray-600 hover:text-gray-900">
                    {section.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeDropdown === key && (
                    <div className="absolute left-0 top-full w-48 py-2 bg-white rounded-md shadow-lg border z-50">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="default">Login</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}