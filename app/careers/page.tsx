import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  const benefits = [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "Flexible working hours",
    "Remote-first culture",
    "Learning and development budget",
    "Regular team events and meetups"
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Careers at Klearance</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Why Work at Klearance?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-gray-600">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Culture</h2>
        <p className="text-gray-600 mb-4">
          At Klearance, we're passionate about music and technology. We foster a culture of innovation, collaboration, and continuous learning. Our team is diverse, inclusive, and committed to making a positive impact on the music industry.
        </p>
        <p className="text-gray-600">
          We believe in work-life balance and offer flexible working arrangements to ensure our team members can do their best work while maintaining a healthy lifestyle.
        </p>
      </section>

      <section>
  <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
  <div className="space-y-6">
    {[
      {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time"
      },
      {
        title: "Music Rights Specialist",
        department: "Legal",
        location: "New York, NY",
        type: "Full-time"
      },
      {
        title: "Product Manager",
        department: "Product",
        location: "Remote",
        type: "Full-time"
      }
    ].map((job, index) => (
      <Card key={index}>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">{job.title}</h3>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>{job.department}</span>
            <span>•</span>
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.type}</span>
          </div>
          <Button className="mt-4" variant="outline">Apply Now</Button>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
    </div>
  )
}
