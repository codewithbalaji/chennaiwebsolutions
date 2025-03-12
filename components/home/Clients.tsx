"use client";

import React, { useEffect, useState } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import Link from "next/link";
import { motion } from "framer-motion";

// Array with logos
const allLogos = [
  { 
    name: "Tespa", 
    id: 1, 
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1740752141/tespa_logo_fvfey9.jpg" 
  },
  { 
    name: "TVS", 
    id: 2, 
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1740733283/client-41_ofeuje.jpg" 
  },
  { 
    name: "L&T", 
    id: 3, 
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1740733279/client-22_ghl6dq.jpg" 
  },
  { 
    name: "Ashok Leyland", 
    id: 4, 
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1740733278/client-1_iehmud.jpg" 
  },
  { 
    name: "Caterpillar", 
    id: 5, 
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1740733279/client-6_sksaxh.jpg" 
  },
  { 
    name: "Mahindra", 
    id: 6, 
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1740733280/client-26_lknxxi.jpg" 
  },
  { 
    name: "DRDO", 
    id: 7, 
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1740733281/client-9_tcjvef.jpg" 
  },
  {
    name: "USHA",
    id: 8,
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1740733284/client-42_xilhw4.jpg"
  },
  {
    name: "talbros",
    id: 9,
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1740733285/cli53_r0qbkq.png"
  }
];

export function Clients() {
  const [columnCount, setColumnCount] = useState(3);
  
  useEffect(() => {
    // Function to update column count based on screen width
    const updateColumnCount = () => {
      if (window.innerWidth >= 768) {
        setColumnCount(6);
      } else {
        setColumnCount(3);
      }
    };
    
    // Set initial column count
    updateColumnCount();
    
    // Add event listener for window resize
    window.addEventListener('resize', updateColumnCount);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateColumnCount);
    };
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-neutral-50 dark:bg-zinc-950/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GradientHeading variant="default" size="xxl" weight="bold">
            Our <span className="text-[#4361ee]">Valuable</span> Clients
          </GradientHeading>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 font-poppins max-w-3xl mx-auto"
          >
            Trusted by leading companies around the world
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <LogoCarousel columnCount={columnCount} logos={allLogos} />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="/contact">
            <motion.button
              className="text-lg md:text-xl font-semibold tracking-tight text-white bg-[#4361ee] px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg font-poppins"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Join Our Client List <span className="ml-1">→</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
