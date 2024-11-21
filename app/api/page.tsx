import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function APIPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">API Documentation</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            To get started with the Klearance API, you'll need to sign up for an account and obtain your API key. Follow these steps:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Sign up for a Klearance account</li>
            <li>Navigate to the API section in your dashboard</li>
            <li>Generate a new API key</li>
            <li>Use this key in the Authorization header of your API requests</li>
          </ul>
        </CardContent>
      </Card>

      <p className="text-gray-600">
        Need help with our API? Contact our developer support team at api-support@klearance.com
      </p>
    </div>
  )
}
