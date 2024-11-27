import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const teamMembers = [
  {
    name: "Ben Moelis",
    role: "CEO/COO & Co-founder",
    bio: "AI enthusiast with 10+ years of technology and music industry experience",
    image: "/images/team/ben-moelis.jpg"
  },
  {
    name: "Stuart Baker",
    role: "CTO/CPO & Co-founder",
    bio: "Experienced software engineering leader, formerly Amazon & Comulate",
    image: "/images/team/stuart-baker.jpg"
  }
]

const advisoryBoard = [
  {
    name: "Deborah Mannis-Gardner",
    role: "Advisory Board Member",
    bio: "Leading music clearance expert and founder of DMG Clearances",
    image: "/images/team/deborah-mannis-gardner.jpg"
  },
  {
    name: "Laurent Hubert",
    role: "Advisory Board Member",
    bio: "Experienced music industry executive with expertise in rights management",
    image: "/images/team/laurent-hubert.jpg"
  },
  {
    name: "Gregg Latterman",
    role: "Advisory Board Member",
    bio: "Professor of Entrepreneurship and former music industry executive",
    image: "/images/team/gregg-latterman.jpg"
  },
  {
    name: "Pierre Mossiat",
    role: "Advisory Board Member",
    bio: "Honorary President of the Independent Music Publishers International Forum (IMPF)",
    image: "/images/team/pierre-mossiat.jpg"
  }
]
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

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                {member.image && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Advisory Board</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {advisoryBoard.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                {member.image && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    quality={90}
                    className="object-cover object-center w-full h-full rounded-lg"
                    style={{ objectPosition: '50% 30%' }}  // This moves focus up to the face
                    priority
                  />
                </div>
                )}
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
