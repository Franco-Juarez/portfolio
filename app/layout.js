import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import LavaLamp from './animation/lavaLamp'

export const metadata = {
  title: 'Franco Juarez´s portfolio',
  description: 'My personal front-end developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-black-theme bg-white-theme">
        <Navbar />
        {children}
        <LavaLamp />
        <Footer />
      </body>
    </html>
  )
}
