import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'LSV MVP',
  description: 'Sample clearance platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
