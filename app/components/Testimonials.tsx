import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  return (
    <section className="py-12 px-4">
      <h3 className="text-2xl font-semibold mb-8 text-center">What Our Customers Say</h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Image
                src="https://media.licdn.com/dms/image/v2/C5603AQE2WnBIWTRwAA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517619824212?e=2147483647&v=beta&t=-Z5ytiZhxmriHDR3LMOl6ms00Kwd4E0P08pHzYT_lxM"
                alt="Larry Moelis"
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <div className="font-semibold">Larry Moelis</div>
                <div className="text-sm text-muted-foreground">Music Director at BET Media Group</div>
              </div>
            </div>
            <blockquote className="text-lg italic mb-4">
              "Klearance saved us countless hours in receiving approval to use songs for our seasonal award shows. Gamechanger for music directors and anyone looking to clear a song."
            </blockquote>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/b/bd/BET-2021Logo.svg"
              alt="BET Media Group Logo"
              width={100}
              height={40}
              className="mt-4"
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Image
                src="https://www.nmpa.org/wp-content/uploads/2021/06/HubertLaurent-Headshot.jpg"
                alt="Laurent Hubert"
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <div className="font-semibold">Laurent Hubert</div>
                <div className="text-sm text-muted-foreground">CEO of Kobalt Music</div>
              </div>
            </div>
            <blockquote className="text-lg italic mb-4">
              "Responsive, efficient, and easy to work with. Klearance is like an extension of our team!"
            </blockquote>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_WhLWC_RAGpkIR8nOJyVcyXFRVoIFf7v-dA&s"
              alt="Kobalt Music Logo"
              width={100}
              height={40}
              className="mt-4"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}