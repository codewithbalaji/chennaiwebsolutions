"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";

const steps = [
  { number: "01", title: "Consultation" },
  { number: "02", title: "Requirement" },
  { number: "03", title: "Specification & Design" },
  { number: "04", title: "Development" },
  { number: "05", title: "Testing & Optimization" },
  { number: "06", title: "Launch & Maintenance" },
];

const requirements = [
  "WEBSITE DESIGN",
  "WEBSITE DEVELOPMENT",
  "APP DEVELOPMENT",
  "SEO",
  "E-COMMERCE",
  "DIGITAL MARKETING"
];

export default function Contact() {
  const [selectedRequirements, setSelectedRequirements] = useState<string[]>([]);
  const [isHuman, setIsHuman] = useState(false);

  const toggleRequirement = (req: string) => {
    setSelectedRequirements(prev =>
      prev.includes(req)
        ? prev.filter(r => r !== req)
        : [...prev, req]
    );
  };

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-gradient-to-b from-white to-neutral-50/50 dark:from-slate-900 dark:to-slate-900 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "dark:fill-white/10 dark:stroke-white/10 fill-neutral-900/[0.07] stroke-neutral-900/[0.07]",
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%]"
          )}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 pt-24 pb-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header and Motivational Section */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-wider text-neutral-600 dark:text-neutral-400 uppercase font-medium">CONTACT</p>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mt-2">Let&apos;s Talk</h1>
          
          <div className="max-w-2xl mx-auto mt-8">
            
            <p className="text-neutral-600 dark:text-neutral-300 mt-4">
              Transform your vision into reality with our expert team. We&apos;re here to bring your ideas to life.
            </p>
          </div>
        </div>

        {/* Two Column Layout for Steps and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Steps Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Development Process</h3>
            <div className="grid grid-cols-1 gap-4">
              {steps.map((step) => (
                <div 
                  key={step.number} 
                  className="p-6 rounded-xl bg-white shadow-sm dark:shadow-none dark:bg-white/5 backdrop-blur-sm flex items-center space-x-4 transition-all duration-300 hover:shadow-md dark:hover:bg-white/[0.075] border border-neutral-200/50 dark:border-white/10"
                >
                  <span className="text-red-500 font-bold min-w-[2.5rem] text-lg">{step.number}</span>
                  <h3 className="text-neutral-800 dark:text-white font-medium">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white shadow-sm dark:shadow-none dark:bg-white/5 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 hover:shadow-md border border-neutral-200/50 dark:border-white/10">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Requirements</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {requirements.map((req) => (
                <button
                  key={req}
                  onClick={() => toggleRequirement(req)}
                  className={cn(
                    "p-3 rounded-lg text-sm transition-all duration-300 font-medium",
                    selectedRequirements.includes(req)
                      ? "bg-red-500 text-white shadow-sm hover:bg-red-600"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 border border-neutral-200 dark:border-white/10"
                  )}
                >
                  {req}
                </button>
              ))}
            </div>

            <form className="space-y-6">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b-2 border-neutral-200 dark:border-white/20 p-2 text-neutral-800 dark:text-white focus:outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors duration-300 placeholder-neutral-400"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b-2 border-neutral-200 dark:border-white/20 p-2 text-neutral-800 dark:text-white focus:outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors duration-300 placeholder-neutral-400"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-transparent border-b-2 border-neutral-200 dark:border-white/20 p-2 text-neutral-800 dark:text-white focus:outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors duration-300 placeholder-neutral-400"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-neutral-800 dark:text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isHuman}
                    onChange={(e) => setIsHuman(e.target.checked)}
                    className="rounded border-2 border-neutral-300 dark:border-white/20 text-red-500 focus:ring-red-500 transition-colors duration-300"
                  />
                  <span className="select-none">I am human</span>
                </label>

                {/* Placeholder Captcha */}
                <div className="border-2 border-neutral-200 dark:border-white/20 rounded-xl p-4 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div className="text-neutral-700 dark:text-white/60 text-sm font-medium">Captcha Verification</div>
                    <div className="bg-neutral-100 dark:bg-white/10 px-3 py-1 rounded-lg text-xs text-neutral-600 dark:text-white/60 transition-colors duration-300 font-medium">
                      Demo Mode
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-900 dark:bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-500 dark:hover:bg-red-600 transition-all duration-300 flex items-center justify-center space-x-2 font-medium shadow-sm hover:shadow-md"
              >
                <span>Submit</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}