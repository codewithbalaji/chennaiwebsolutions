"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'

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
    <footer className="text-gray-800 dark:text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and social icons */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <span className="text-xl font-bold tracking-tight">Chennai Web Solutions</span>
              </div>
            </Link>
            
            <div className="flex flex-wrap gap-4">
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

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-[#4361ee]/10 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                  <MdLocationOn className="w-4 h-4 text-[#4361ee]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 group-hover:text-[#4361ee] dark:group-hover:text-[#4361ee] transition-colors">
                    45F3+C4H, Nagammai Street,<br />
                    Vijayalakshmi Puram, Ambattur,<br />
                    Chennai, Tamil Nadu 600053
                  </p>
                </div>
              </div>

              <Link 
                href="tel:+919384318546" 
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-[#4361ee] dark:hover:text-[#4361ee] transition-colors group"
              >
                <div className="w-8 h-8 bg-[#4361ee]/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <FaPhoneAlt className="w-4 h-4 text-[#4361ee]" />
                </div>
                <span className="text-sm group-hover:text-[#4361ee]">+91 93843 18546</span>
              </Link>

              <Link 
                href="mailto:sales.chennaiwebsolutions.com"
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-[#4361ee] dark:hover:text-[#4361ee] transition-colors group"
              >
                <div className="w-8 h-8 bg-[#4361ee]/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <MdEmail className="w-4 h-4 text-[#4361ee]" />
                </div>
                <span className="text-sm break-all group-hover:text-[#4361ee]">sales.chennaiwebsolutions.com</span>
              </Link>
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6">Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-sm hover:text-[#4361ee] dark:hover:text-[#4361ee] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="text-sm hover:text-[#4361ee] dark:hover:text-[#4361ee] transition-colors">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm hover:text-[#4361ee] dark:hover:text-[#4361ee] transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">More</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-sm hover:text-[#4361ee] dark:hover:text-[#4361ee] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:text-[#4361ee] dark:hover:text-[#4361ee] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-[#4361ee] dark:hover:text-[#4361ee] transition-colors">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates and news.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-white dark:bg-[#002340] border border-gray-300 dark:border-none outline-none px-4 py-3 rounded-l-md w-full text-sm text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <motion.button
                type="submit"
                className="bg-[#4361ee] text-white px-4 py-3 rounded-r-md"
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

        <div className="mt-16 pt-8 border-t border-gray-300 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Chennai Web Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
