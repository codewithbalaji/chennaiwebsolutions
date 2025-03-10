"use client";

import React, { type SVGProps, useEffect, useState } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import Link from "next/link";
import { motion } from "framer-motion";

function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="209"
      height="256"
      viewBox="0 0 814 1000"
      {...props}
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}

function PierreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 74 20"
      width={74}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="black"
        d="M2 0a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V2a2 2 0 00-2-2H2zm33.134 14.398h-2.502V16h6.714v-1.602h-2.502V8.152c0-.384-.096-.666-.288-.846-.192-.192-.468-.288-.828-.288h-2.52V8.62h1.926v5.778zm-.342-9.108c.264.228.594.342.99.342s.726-.12.99-.36.396-.546.396-.918a1.11 1.11 0 00-.414-.9c-.264-.24-.594-.36-.99-.36-.384 0-.708.12-.972.36-.252.228-.378.528-.378.9 0 .384.126.696.378.936zm-12.55-1.98V16h1.926v-4.14h2.016c1.812 0 3.156-.324 4.032-.972.888-.648 1.332-1.752 1.332-3.312 0-1.044-.204-1.878-.612-2.502-.396-.636-.99-1.086-1.782-1.35-.78-.276-1.77-.414-2.97-.414h-3.942zm1.926 6.894V4.966h2.088c.732 0 1.338.072 1.818.216.492.144.87.408 1.134.792.276.372.414.906.414 1.602 0 .708-.138 1.254-.414 1.638-.264.384-.642.648-1.134.792-.48.132-1.086.198-1.818.198h-2.088zm24.622 1.674h-7.034c.031.82.258 1.486.68 1.998.456.552 1.11.828 1.962.828.708 0 1.278-.162 1.71-.486.432-.324.726-.78.882-1.368h1.836c-.204.984-.666 1.788-1.386 2.412-.708.612-1.71.918-3.006.918-.96 0-1.782-.204-2.466-.612a4.058 4.058 0 01-1.53-1.71c-.348-.72-.522-1.536-.522-2.448 0-.948.18-1.764.54-2.448a3.817 3.817 0 011.548-1.566c.672-.372 1.44-.558 2.304-.558.912 0 1.704.174 2.376.522a3.595 3.595 0 011.53 1.494c.36.648.54 1.398.54 2.25 0 .216-.012.444-.036.684zm-1.872-1.476c-.024-.756-.27-1.344-.738-1.764-.468-.432-1.068-.648-1.8-.648-.684 0-1.26.222-1.728.666-.456.432-.714 1.014-.774 1.746h5.04z"
      />
    </svg>
  );
}

function LowesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={91.239998}
      height={42.970001}
      {...props}
    >
      <defs>
        <clipPath>
          <path d="M22.8 704.934h119.143V768.6H22.8v-63.666z" />
        </clipPath>
      </defs>
      <g fillOpacity={1} fillRule="nonzero" stroke="none">
        <path
          d="M155.876 378.285l-23.048 9.873h-14.376v4.027h-7.201v27.07h89.24v-27.07h-7.198v-4.027h-14.37l-23.047-9.873z"
          fill="#004990"
          transform="translate(-110.251 -377.285)"
        />
        <path
          d="M177.157 395.357v4.377l2.83.005.59-4.38-3.42-.001zM192.465 399.15c.183 0 .348-.014.348-.237 0-.175-.163-.207-.313-.207h-.295v.443h.26zm-.26.802h-.216v-1.43h.545c.336 0 .504.125.504.407 0 .257-.159.368-.369.394l.406.629h-.242l-.378-.62h-.25v.62zm.263.32c.561 0 1.004-.439 1.004-1.038 0-.587-.443-1.03-1.004-1.03-.569 0-1.011.443-1.011 1.03 0 .599.442 1.038 1.011 1.038m-1.261-1.038c0-.712.577-1.237 1.261-1.237.676 0 1.255.525 1.255 1.237 0 .718-.579 1.245-1.255 1.245-.684 0-1.261-.527-1.261-1.245M125.486 410.27v-14.913h-4.079v18.465h10.39v-3.551h-6.31zM166.547 413.822h9.709v-3.556h-5.61v-2.317h5.61v-3.424h-5.61v-2.33h5.61v-3.571h-9.71V413.822zM141.12 402.195h-3.588v8.057h3.588v-8.057zm4.086 9.687a1.942 1.942 0 01-1.941 1.94h-7.879c-1.071 0-1.94-.87-1.94-1.94v-11.317a1.94 1.94 0 011.94-1.941h7.879a1.94 1.94 0 011.941 1.941v11.317zM160.128 398.624v11.647h-2.463v-11.647h-3.587v11.647h-2.463v-11.647h-4.086v13.257c0 1.072.869 1.942 1.941 1.942h4.83c.814 0 1.572-.562 1.572-1.376 0 .814.757 1.376 1.571 1.376h4.831c1.071 0 1.94-.87 1.94-1.942v-13.257h-4.086zM190.578 408.08h.001l-.025-.052-.048-.097-.025-.05c-.647-1.296-2.094-2.378-4.424-3.31l-.083-.032c-.46-.181-1.865-.73-2.02-1.623-.043-.25.058-.642.337-.88.293-.3.743-.453 1.337-.453.95 0 2.03.388 2.59.62 1.179.488 2.213.925 2.223.93l.102.043v-3.317l-.034-.021c-.022-.015-2.25-1.42-4.502-1.743a8.82 8.82 0 00-.761-.032c-2.073 0-3.643.752-4.665 2.237-.86 1.22-.954 3.151-.224 4.593.939 1.628 2.444 2.308 3.9 2.967.6.27 1.221.553 1.802.898l.006.004c.658.395.993.998.854 1.535-.144.556-.78.93-1.584.93-.11 0-.22-.006-.33-.022l-.038-.005c-1.547-.215-4.682-1.382-4.713-1.395l-.1-.037v3.637l.051.018c.03.01 3.064 1.015 5.758 1.015 1.47 0 2.58-.296 3.298-.879.018-.012 1.664-1.336 1.737-3.587.02-.623-.122-1.26-.42-1.893"
          fill="#fff"
          transform="translate(-110.251 -377.285)"
        />
      </g>
    </svg>
  );
}

function AllyLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="32" rx="16" fill="#6E1EFF" />
      <path
        d="M10.5 10.5L21.5 21.5M10.5 21.5L21.5 10.5"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function VercelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 222"
      width="256"
      height="222"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path fill="#000" d="m128 0 128 221.705H0z" />
    </svg>
  );
}

function SupabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 109 113"
      width="109"
      height="113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z"
        fill="url(#a)"
      />
      <path
        d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z"
        fill="url(#b)"
        fillOpacity=".2"
      />
      <path
        d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient
          id="a"
          x1="53.974"
          y1="54.974"
          x2="94.163"
          y2="71.829"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="36.156"
          y1="30.578"
          x2="54.484"
          y2="65.081"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Array with logos
const allLogos = [
  { name: "Apple", id: 1, img: AppleIcon },
  { name: "CEO Supabase", id: 2, img: SupabaseIcon },
  { name: "Vercel", id: 3, img: VercelIcon },
  { name: "Lowes", id: 4, img: LowesIcon },
  { name: "Ally", id: 5, img: AllyLogo },
  { name: "Pierre", id: 6, img: PierreIcon },
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
