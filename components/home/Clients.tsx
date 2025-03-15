"use client";

import React from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

// Array with logos
const allLogos = [
  { 
    name: "Tespa", 
    id: 1, 
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1740752141/tespa_logo_fvfey9.jpg" 
  },
  { 
    name: "Ashok Leyland", 
    id: 2, 
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1740733278/client-1_iehmud.jpg" 
  },
  { 
    name: "Sri Balaji Printers", 
    id: 3, 
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1742050574/sribalajiprinters_nceieb.png" 
  },
  { 
    name: "Vei Technologies", 
    id: 4, 
    img: "https://res.cloudinary.com/dryhpaq1t/image/upload/v1742050566/veitech_wnybxf.png" 
  },
];

// Double the logos array for seamless infinite scroll
const infiniteLogos = [...allLogos, ...allLogos];

export function Clients() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-neutral-50 dark:bg-zinc-950/30 overflow-hidden">
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
        
        <div className="relative w-full overflow-hidden mb-16">
          <motion.div 
            className="flex gap-8 md:gap-12"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }
            }}
            style={{
              width: "fit-content"
            }}
          >
            {infiniteLogos.map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                className="relative h-24 w-36 md:h-32 md:w-48 lg:h-40 lg:w-56 flex-shrink-0"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Image
                  src={logo.img}
                  alt={logo.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain transition-all duration-300 hover:brightness-110"
                  priority
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-neutral-50 to-transparent dark:from-zinc-950/30 z-10" />
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-neutral-50 to-transparent dark:from-zinc-950/30 z-10" />
        </div>
        
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
