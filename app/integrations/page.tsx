"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntegrationsPage() {
  const integrations = [
    {
      name: "Ableton Live",
      logo: "https://ih1.redbubble.net/image.1866456240.1251/raf,360x360,075,t,fafafa:ca443f4786.jpg",
      description: "Seamlessly clear samples directly from your Ableton Live projects.",
    },
    {
      name: "FL Studio",
      logo: "https://i.pcmag.com/imagery/reviews/02QaOt9scNCqy2rcspJPLmq-20.fit_scale.size_760x427.v1709755976.jpg",
      description: "Integrate Klearance into your FL Studio workflow for quick sample clearance.",
    },
    {
      name: "Pro Tools",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/PT2019.svg",
      description: "Clear samples efficiently within your Pro Tools sessions.",
    },
    {
      name: "Logic Pro",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Logic_Pro_icon.png",
      description: "Streamline your Logic Pro workflow with integrated sample clearance.",
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png",
      description: "Easily identify and clear samples from Spotify tracks.",
    },
    {
      name: "SoundCloud",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-Ya5xPa9Gk6yBuohQZZP760Ood-5K7pRvQ&s",
      description: "Integrate with SoundCloud to clear samples from uploaded tracks.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Integrations</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {integrations.map((integration, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 className="text-xl font-semibold">{integration.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{integration.description}</p>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Don't see your favorite tool?</h2>
        <p className="text-gray-600 mb-6">
          We're constantly adding new integrations. Let us know what you'd like to see next!
        </p>
        <Button>Request Integration</Button>
      </div>
    </div>
  )
}
