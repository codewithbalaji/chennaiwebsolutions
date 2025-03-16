import { Header } from '@/components/shared/header'
import { ThemeProvider } from "@/components/theme-provider"
import { geistSans, geistMono } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/shared/footer'
import Preheader from '@/components/shared/preheader'
import { GoogleAnalytics } from '@next/third-parties/google'

// Load Poppins font with specific weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.chennaiwebsolutions.com'),
  keywords: [
    'Web development in Chennai',
    'Best web design company',
    'Affordable web design services',
    'Chennai web development agency',
    'Professional website development',
    'E-commerce website design Chennai',
    'SEO-friendly web development',
    'Custom website development in Chennai'
  ],
  title: {
    default: 'Chennai Web Solutions - Web Development & Design Services',
    template: '%s | Chennai Web Solutions',
  },
  description: 'Chennai Web Solutions offers professional web development and design services in Chennai, India. Get SEO-friendly, responsive, and high-quality websites for your business.',
  openGraph: {
    title: 'Chennai Web Solutions - Web Development & Design Services',
    description: 'Professional web development and design services in Chennai, India. Build modern, responsive, and SEO-optimized websites with us.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.chennaiwebsolutions.com',
    siteName: 'Chennai Web Solutions',
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.chennaiwebsolutions.com'}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Chennai Web Solutions - Web Development & Design Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Web Solutions - Web Development & Design Services',
    description: 'Professional web development and design services in Chennai, India. Build modern, responsive, and SEO-optimized websites with us.',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.chennaiwebsolutions.com'}/og-image.png`]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

  return (
    <html lang="en" suppressHydrationWarning>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased font-poppins`}>
        <ThemeProvider>
          <main className="container mx-auto">
            <Preheader />
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
