import { Header } from '@/components/shared/header'
import { ThemeProvider } from "@/components/theme-provider"
import { geistSans, geistMono } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/shared/footer'

// Load Poppins font with specific weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chennai Web Solutions',
  description: 'Web development and design services in Chennai, India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased font-poppins`}>
        <ThemeProvider>
          <main className="container mx-auto">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
