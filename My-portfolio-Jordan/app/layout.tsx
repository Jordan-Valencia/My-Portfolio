import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jordan Valencia | Full-Stack Developer',
  description: 'Portfolio personal de Jordan Valencia - Desarrollador Full-Stack',
  generator: 'v0.dev',
  icons: {
    icon: '/186439275.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
