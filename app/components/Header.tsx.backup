import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 tracking-tight">
          Klearance
        </div>
        <ul className="flex space-x-6 items-center">
          <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link href="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link></li>
          <li><Link href="/chat" className="hover:text-blue-400 transition-colors">Chat</Link></li>
          <li>
            <Link 
              href="/login" 
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-4 py-2 rounded-md transition-all duration-200 ease-in-out"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
