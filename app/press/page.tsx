export default function PressPage() {
  const pressReleases = [
    {
      title: "Klearance Raises $10M Series A to Transform Music Sample Clearance",
      date: "May 1, 2024",
      excerpt: "Funding will accelerate product development and market expansion."
    }
  ]

  const mediaFeatures = [
    {
      title: "How AI is Revolutionizing Music Sample Clearance",
      outlet: "TechCrunch",
      date: "April 15, 2024"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Press</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Press Releases</h2>
        {pressReleases.map((release, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-medium mb-2">{release.title}</h3>
            <p className="text-gray-500 mb-2">{release.date}</p>
            <p className="text-gray-600">{release.excerpt}</p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Media Coverage</h2>
        {mediaFeatures.map((feature, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.outlet} | {feature.date}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Media Inquiries</h2>
        <p className="text-gray-600">
          For press inquiries, please contact our media relations team at press@klearance.com. 
          We're happy to provide additional information about Klearance, arrange interviews with 
          our leadership team, or assist with any other media-related requests.
        </p>
      </section>
    </div>
  )
}
