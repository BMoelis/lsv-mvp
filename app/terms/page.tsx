import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using Klearance, you agree to be bound by these Terms of Service and all applicable laws and regulations."
    },
    {
      title: "Use of Services",
      content: "You may use our services only as permitted by law and these Terms. Klearance reserves the right to suspend or terminate your access to the services at any time for any reason."
    },
    {
      title: "User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account."
    },
    {
      title: "Intellectual Property",
      content: "The content, features, and functionality of Klearance are owned by Klearance and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws."
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{section.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-gray-600">
        If you have any questions about these Terms, please contact us at legal@klearance.com
      </p>
    </div>
  )
}
