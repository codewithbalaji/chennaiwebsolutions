import { Header } from '@/components/shared/header'
import { ThemeProvider } from "@/components/theme-provider"
import { geistSans, geistMono } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
