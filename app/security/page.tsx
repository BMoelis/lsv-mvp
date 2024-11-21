import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Key } from 'lucide-react'

export default function SecurityPage() {
  const securityMeasures = [
    {
      title: "Data Encryption",
      icon: Lock,
      description: "All data is encrypted in transit and at rest using industry-standard encryption protocols."
    },
    {
      title: "Access Control",
      icon: Key,
      description: "Strict access controls and authentication measures protect your account and data."
    },
    {
      title: "Regular Audits",
      icon: Shield,
      description: "We conduct regular security audits and vulnerability assessments to maintain platform security."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Security</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {securityMeasures.map((measure, index) => {
          const Icon = measure.icon
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <Icon className="h-6 w-6 mb-4 text-primary" />
                <CardTitle className="mb-2">{measure.title}</CardTitle>
                <p className="text-gray-600">{measure.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <p className="text-gray-600 mb-8">
        At Klearance, we are committed to maintaining the highest standards of security to protect your data and ensure the integrity of our services. Our team of security experts continuously monitors and improves our systems to stay ahead of potential threats.
      </p>

      <p className="text-gray-600">
        If you have any questions or concerns about our security practices, please contact our security team at security@klearance.com
      </p>
    </div>
  )
}
