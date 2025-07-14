import AnimatedBackground from '../../components/ui/animated-background'

function PrivacyPolicyPage () {
  return (
    <section className='relative min-h-screen bg-dark flex items-center justify-center px-4 py-8 overflow-hidden'>
      <AnimatedBackground />
      <div className='relative z-10 container mx-auto max-w-3xl text-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>Privacy Policy</h1>
        <p className='text-lg md:text-xl text-white/80 mb-4'>
          Your privacy is important to us. This page explains how we collect, use, and protect your information when you use our website and services.
        </p>
        <div className='text-left text-white/90 mt-8 space-y-6'>
          <h2 className='text-2xl font-semibold mb-2'>What We Collect</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>Personal information you provide (name, email, etc.)</li>
            <li>Usage data (pages visited, time spent, etc.)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>How We Use Your Information</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>To provide and improve our services</li>
            <li>To communicate with you</li>
            <li>To analyze website usage and trends</li>
            <li>To comply with legal obligations</li>
          </ul>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Data Sharing & Security</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>We do not sell your personal information</li>
            <li>We may share data with trusted third parties for service delivery</li>
            <li>We use reasonable security measures to protect your data</li>
          </ul>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Your Rights</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>Access, update, or delete your information</li>
            <li>Opt out of marketing communications</li>
            <li>Request information about our data practices</li>
          </ul>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us via our website contact form.</p>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicyPage