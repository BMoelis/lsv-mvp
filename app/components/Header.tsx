import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#38BDF8]">
            Klearance
          </Link>
          <nav className="flex items-center space-x-6">
  <Link href="/" className="text-white hover:text-[#38BDF8] transition-colors">
    Home
  </Link>
  <Link href="/features" className="text-white hover:text-[#38BDF8] transition-colors">
    Features
  </Link>
  <Link href="/pricing" className="text-white hover:text-[#38BDF8] transition-colors">
    Pricing
  </Link>
  <Link href="/admin/dashboard" className="text-white hover:text-[#38BDF8] transition-colors">
    Dashboard
  </Link>
  <Link 
    href="/login"
    className="bg-[#38BDF8] text-white px-4 py-2 rounded-md hover:bg-[#0EA5E9] transition-colors"
  >
    Login
  </Link>
</nav>
        </div>
      </div>
    </header>
  )
}
