'use client'

import React from 'react'
import { Mail, Phone } from 'lucide-react'
import useInvalidPaths from '@/lib/use-invalid-paths'

export default function Preheader() {
  const isInvalid = useInvalidPaths()

  if (isInvalid) return null

  return (
    <div className="w-full py-2 px-4 md:px-6 border-b border-gray-200 dark:border-gray-700">
      <div className="flex flex-row justify-between md:justify-end items-center gap-2 md:gap-6 text-xs md:text-sm">
        <a 
          href="mailto:info.chennaiwebsolutions@gmail.com"
          className="flex items-center gap-1 md:gap-2 text-black dark:text-white transition-colors"
        >
          <Mail className="h-3 w-3 md:h-4 md:w-4" />
          <span className='text-blue-600 dark:text-blue-600 hover:text-blue-700 dark:hover:text-blue-500'>info.chennaiwebsolutions@gmail.com</span>
        </a>
        <a 
          href="tel:+919384318546" 
          className="flex items-center gap-1 md:gap-2 text-black dark:text-white transition-colors"
        >
          <Phone className="h-3 w-3 md:h-4 md:w-4" />
          <span className='text-blue-600 dark:text-blue-600 hover:text-blue-700 dark:hover:text-blue-500'>+91 93843 18546</span>
        </a>
      </div>
    </div>
  )
}
