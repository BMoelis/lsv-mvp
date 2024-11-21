import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">About Klearance</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At Klearance, we're on a mission to simplify and streamline the sample clearance process for musicians, producers, and rights holders. By leveraging cutting-edge AI technology, we're making it easier than ever to create, collaborate, and respect intellectual property in the music industry.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600">
          Founded in 2026, Klearance was born out of a shared frustration with the complex and time-consuming process of clearing music samples. Our founders, experienced music producers and tech entrepreneurs, saw an opportunity to use AI to revolutionize this essential part of music creation.
        </p>
        <p className="text-gray-600 mt-4">
          Since then, we've grown into a team of passionate music lovers and tech innovators, all dedicated to making sample clearance as seamless as possible. We're proud to be trusted by artists, labels, and publishers around the world.
        </p>
      </section>

      <section>
  <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        name: "Ben Moelis",
        role: "CEO/CSO & Co-founder",
        bio: "AI enthusiast with 10+ years of technology and music industry experience"
      },
      {
        name: "Myles Novick",
        role: "CTO/CPO & Co-founder",
        bio: "Experienced software engineering leader, formerly Palantir"
      },
      {
        name: "Ian Kantor",
        role: "COO/CFO and Co-Founder",
        bio: "Seasoned business executive with 7+ years of strategic finance experience"
      }
    ].map((member, index) => (
      <Card key={index}>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-1">{member.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{member.role}</p>
          <p className="text-gray-600">{member.bio}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
    </div>
  )
}
