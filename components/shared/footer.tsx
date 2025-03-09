"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email)
    setEmail('')
    // Add actual subscription logic or API call
  }

  return (
    <footer className=" text-gray-800 dark:text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and social icons */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <span className="ml-2 text-xl font-bold tracking-tight">Chennai Web Solutions</span>
              </div>
            </Link>
            
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="w-10 h-10 border border-gray-400 dark:border-white/30 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                  <FaFacebookF />
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="w-10 h-10 border border-gray-400 dark:border-white/30 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                  <FaInstagram />
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="w-10 h-10 border border-gray-400 dark:border-white/30 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                  <FaTwitter />
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="w-10 h-10 border border-gray-400 dark:border-white/30 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                  <FaLinkedinIn />
                </div>
              </Link>
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="someone@email.com"
                required
                className="bg-white dark:bg-[#002340] border border-gray-300 dark:border-none outline-none px-4 py-3 rounded-l-md w-full text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-4 py-3 rounded-r-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-300 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Chennai Web Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
