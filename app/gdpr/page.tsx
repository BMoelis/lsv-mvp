import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GDPRPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">GDPR Compliance</h1>

      <p className="text-gray-600 mb-8">
        Klearance is fully committed to GDPR compliance. We have implemented comprehensive measures to ensure that our data processing activities are in line with GDPR requirements.
      </p>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Our GDPR Measures</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Appointing a Data Protection Officer</li>
              <li>Conducting regular Data Protection Impact Assessments</li>
              <li>Maintaining detailed records of our data processing activities</li>
              <li>Ensuring that our third-party processors are also GDPR compliant</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-gray-600">
        For any GDPR-related inquiries or to exercise your data rights, please contact our Data Protection Officer at dpo@klearance.com
      </p>
    </div>
  )
}
