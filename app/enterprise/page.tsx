import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BarChart, Lock, Users, Zap, HeadphonesIcon } from 'lucide-react'

export default function EnterprisePage() {
  const features = [
    { title: "Unlimited Requests", description: "Unlimited sample clearance requests", icon: CheckCircle },
    { title: "Account Management", description: "Dedicated account manager", icon: Users },
    { title: "Premium Support", description: "24/7 priority support", icon: HeadphonesIcon },
    { title: "Custom Integration", description: "Custom integration options", icon: Zap },
    { title: "Rights Management", description: "Advanced rights management", icon: Lock },
    { title: "Bulk Processing", description: "Bulk processing capabilities", icon: BarChart },
    { title: "Custom Reporting", description: "Custom reporting solutions", icon: BarChart }
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
