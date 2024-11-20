export default function HowKlearanceWorks() {
  return (
    <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How Klearance Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Submit Request</h3>
                <p className="text-gray-600">Upload your sample and provide details about usage.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-600">Our AI quickly processes and matches your sample.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Publisher Review</h3>
                <p className="text-gray-600">Rights holders review and respond to your request.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-semibold mb-2">Clearance Granted</h3>
                <p className="text-gray-600">Receive your clearance and start using the sample!</p>
              </div>
            </div>
          </div>
        </section>
  )
}
