import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect personal information that you provide to us, such as your name, email address, and payment information when you register for an account or use our services."
    },
    {
      title: "How We Use Your Information",
      content: "We use your information to provide and improve our services, process transactions, communicate with you, and comply with legal obligations."
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data."
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
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
        For any questions or concerns about our privacy policy, please contact us at privacy@klearance.com
      </p>
    </div>
  )
}
