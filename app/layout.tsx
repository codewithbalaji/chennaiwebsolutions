import { Header } from '@/components/shared/header'
import { ThemeProvider } from "@/components/theme-provider"
import { geistSans, geistMono } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'

// Load Poppins font with specific weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chennai Web Solutions',
  description: 'Web development and design services',
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
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
