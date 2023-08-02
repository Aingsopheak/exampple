import './globals.css'

export const metadata = {
  title: 'Example',
  description: 'This my project example',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
