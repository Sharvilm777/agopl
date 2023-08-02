import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'A G Organics -  Working for Green',
  description: 'AGO Is The Core Manufacturer For Wide Range Of Insect Pheromones (Sex Pheromones, Aggregation Pheromone) Assuring High Purity With Best Price.',

}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js" />

    </html>
  )
}
