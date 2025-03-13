"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {  Menu as MenuIcon, Moon, Sun} from "lucide-react";
import Link from "next/link";
import logo from "@/public/CWS Bullet Blue.svg";
import useInvalidPaths from "@/lib/use-invalid-paths";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isInvalid: boolean = useInvalidPaths();

  // Ensure theme toggle only renders client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if(isInvalid) return <></>;

  return (
    <div className="relative w-full py-4 px-6 flex items-center border-b border-gray-200 dark:border-gray-800">
      {/* Logo on left */}
      <div className="flex items-center">
        <Image src={logo} alt="logo" width={50} height={50}  />
        <h1 className="text-lg font-bold">Chennai Web Solutions</h1>
      </div>
      
      {/* Navigation centered - hidden on mobile */}
      <div className="hidden md:flex flex-1 justify-center space-x-8">
        <Link href="/" className="font-medium hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link href="/services" className="font-medium hover:text-blue-600 transition-colors">
          Services
        </Link>
        <Link href="/works" className="font-medium hover:text-blue-600 transition-colors">
          Works
        </Link>
        <Link href="/about" className="font-medium hover:text-blue-600 transition-colors">
          About
        </Link>
        <Link href="/blog" className="font-medium hover:text-blue-600 transition-colors">
          Blog
        </Link>
      </div>
      
      {/* Contact and theme toggle on right */}
      <div className="ml-auto flex items-center gap-4">
        {/* Contact button - hidden on mobile */}
        <Link href="/contact" className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          Let&apos;s Talk
        </Link>
        
        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        )}
        
        {/* Mobile menu button */}
        <div className="relative md:hidden" ref={dropdownRef}>
          <button 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MenuIcon className="h-5 w-5" />
          </button>
          
          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg py-1 z-50">
              <Link 
                href="/" 
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/works" 
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Works
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
              <Link 
                href="/contact" 
                className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
