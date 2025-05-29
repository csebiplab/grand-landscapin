import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/header/Header'
import Footer from '@/components/layouts/footer/Footer'

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata = {
  title: 'Grand Landscaping',
  description: 'Grand Landscaping'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
