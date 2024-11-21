import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BarChart, Lock, Users, Zap, HeadphonesIcon } from 'lucide-react'

export default function EnterprisePage() {
  const features = [
    { title: "Advanced Analytics", description: "Gain deep insights into your sample usage and clearance processes.", icon: BarChart },
    { title: "Enhanced Security", description: "Enterprise-grade security features to protect your valuable assets.", icon: Lock },
    { title: "Team Collaboration", description: "Seamlessly work together with unlimited team members.", icon: Users },
    { title: "API Access", description: "Integrate Klearance directly into your existing workflows.", icon: Zap },
    { title: "Dedicated Support", description: "24/7 priority support from our expert team.", icon: HeadphonesIcon },
    { title: "Custom Workflows", description: "Tailor Klearance to fit your organization's unique needs.", icon: CheckCircle },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Enterprise</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Enterprise-Grade Features</h2>
        <div className="space-y-4">
  {features.map((feature, index) => {
    const Icon = feature.icon
    return (
      <Card key={index}>
        <CardContent className="p-6 flex items-center gap-4">
          <Icon className="h-6 w-6 text-primary" />
          <div>
            <h3 className="font-semibold mb-1">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </CardContent>
      </Card>
    )
  })}
</div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to elevate your sample clearance process?</h2>
        <p className="text-gray-600 mb-6">
          Contact our sales team to learn more about Klearance Enterprise and how it can benefit your organization.
        </p>
        <Button size="lg">Contact Sales</Button>
      </section>
    </div>
  )
}
