"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu as MenuIcon, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import logoDark from "@/public/Chennai Web Solutions Logo Horizontal - Color.png";
import logoLight from "@/public/Chennai Web Solutions Logo Horizontal - Color.png";
import useInvalidPaths from "@/lib/use-invalid-paths";
import { motion, AnimatePresence } from "framer-motion";

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "SERVICES" },
    { href: "/works", label: "WORKS" },
    { href: "/about", label: "ABOUT" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "LET'S TALK", isButton: true }
  ];

  return (
    <>
      <div className="relative w-full py-4 px-6 flex items-center border-b border-gray-200 dark:border-gray-800">
        {/* Logo on left */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={theme === "dark" ? logoDark : logoLight} alt="logo" width={180} height={180} />
          </Link>
        </div>
        
        {/* Navigation centered - hidden on mobile */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {menuItems.map((item, index) => (
            !item.isButton && (
              <Link 
                key={index}
                href={item.href} 
                className="font-medium hover:text-[#4361ee] transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
        
        {/* Contact and theme toggle on right */}
        <div className="ml-auto flex items-center gap-4">
          {/* Contact button - hidden on mobile */}
          <Link 
            href="/contact" 
            className="hidden md:block bg-[#4361ee] hover:bg-[#4361ee]/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
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
          <button 
            className="p-2 rounded-full md:hidden bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence >
        {mobileMenuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side panel */}
            <motion.div
              ref={dropdownRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-[300px] bg-white dark:bg-[#0f172a] shadow-xl z-100 overflow-y-auto"
            >
              <div className="p-6">
                {/* Close button and logo */}
                <div className="flex justify-between items-center mb-8">
                  <Image 
                    src={theme === "dark" ? logoDark : logoLight} 
                    alt="logo" 
                    width={140} 
                    height={140} 
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Menu items */}
                <nav className="space-y-6">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`block text-lg font-medium ${
                        item.isButton
                          ? "bg-[#4361ee] text-white px-6 py-3 rounded-full text-center mt-8"
                          : "hover:text-[#4361ee] transition-colors"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
