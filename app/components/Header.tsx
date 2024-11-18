import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">LSV MVP</div>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/admin/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link href="/chat" className="hover:underline">Chat</Link></li>
        </ul>
      </nav>
    </header>
  )
}
