export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">LSV MVP</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/admin/dashboard" className="hover:underline">Dashboard</a></li>
          <li><a href="/chat" className="hover:underline">Chat</a></li>
        </ul>
      </nav>
    </header>
  )
}
