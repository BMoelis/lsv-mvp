'use client'

import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      description: "Perfect for individual producers and small studios",
      features: [
        "Up to 10 sample clearance requests per month",
        "Basic AI sample matching",
        "Email support",
        "Real-time status tracking",
        "Basic analytics"
      ]
    },
    {
      name: "Pro",
      price: "$99",
      description: "Ideal for medium-sized publishers and studios",
      features: [
        "Up to 50 sample clearance requests per month",
        "Advanced AI sample matching",
        "Priority email & chat support",
        "Advanced analytics dashboard",
        "Custom workflow automation",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large studios and record labels",
      features: [
        "Unlimited sample clearance requests",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integration options",
        "Advanced rights management",
        "Bulk processing",
        "Custom reporting"
      ]
    }
  ]

  return (
    <main className="py-16 container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the plan that best fits your needs. All plans include our core features with varying levels of support and capacity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-600 ml-2">{plan.name === "Enterprise" ? "per year" : "per month"}</span>
            </div>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <Link href="/sample-request">
            <Button className="w-full mb-8 bg-[#0F172A] hover:bg-[#1E293B]">
  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
</Button>
            </Link>
            <ul className="space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="h-5 w-5 text-[#38BDF8] mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#0F172A] text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Not sure which plan is right for you?</h2>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Our team is here to help you find the perfect solution for your needs.
        </p>
        <Button size="lg" className="bg-[#38BDF8] hover:bg-[#0EA5E9] px-8">
  Contact Sales
</Button>
      </div>
    </main>
  )
}
