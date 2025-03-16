"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import HCaptcha from '@hcaptcha/react-hcaptcha'

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

// Add form state interface
interface FormData {
  name: string
  email: string
  phone: string
  requirements: string[]
}

export default function Contact() {
  const [selectedRequirements, setSelectedRequirements] = useState<string[]>([]);
  const [isHuman, setIsHuman] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    requirements: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({});
  const [captchaToken, setCaptchaToken] = useState<string>('')
  const captchaRef = useRef(null)

  const toggleRequirement = (req: string) => {
    setSelectedRequirements(prev =>
      prev.includes(req)
        ? prev.filter(r => r !== req)
        : [...prev, req]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const onCaptchaChange = (token: string) => {
    setCaptchaToken(token)
    setIsHuman(!!token)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      setSubmitStatus({
        success: false,
        message: 'Please complete the captcha verification'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          requirements: selectedRequirements.join(', '),
          'h-captcha-response': captchaToken // Add captcha token
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your submission!'
        });
        // Reset form
        setFormData({ name: '', email: '', phone: '', requirements: [] });
        setSelectedRequirements([]);
        setIsHuman(false);
        setCaptchaToken('');
        // Reset captcha
        if (captchaRef.current) {
          // @ts-expect-error: Object is possibly 'null'
          captchaRef.current.resetCaptcha();
        }
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="w-full bg-transparent border-b-2 border-neutral-200 dark:border-white/20 p-2 text-neutral-800 dark:text-white focus:outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors duration-300 placeholder-neutral-400"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border-b-2 border-neutral-200 dark:border-white/20 p-2 text-neutral-800 dark:text-white focus:outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors duration-300 placeholder-neutral-400"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    required
                    className="w-full bg-transparent border-b-2 border-neutral-200 dark:border-white/20 p-2 text-neutral-800 dark:text-white focus:outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors duration-300 placeholder-neutral-400"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY || '50b2fe65-b00b-4b9e-ad62-3ba471098be2'}
                    onVerify={onCaptchaChange}
                    onExpire={() => {
                      setIsHuman(false)
                      setCaptchaToken('')
                    }}
                    reCaptchaCompat={false}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isHuman}
                className="w-full bg-neutral-900 dark:bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-500 dark:hover:bg-red-600 transition-all duration-300 flex items-center justify-center space-x-2 font-medium shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                {!isSubmitting && <span>→</span>}
              </button>

              {/* Add status message */}
              {submitStatus.message && (
                <div className={`text-center p-2 rounded ${
                  submitStatus.success 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}