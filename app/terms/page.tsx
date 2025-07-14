import AnimatedBackground from '../../components/ui/animated-background'

function TermsOfServicePage () {
  return (
    <section className='relative min-h-screen bg-dark flex items-center justify-center px-4 py-8 overflow-hidden'>
      <AnimatedBackground />
      <div className='relative z-10 container mx-auto max-w-3xl text-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>Terms of Service</h1>
        <p className='text-lg md:text-xl text-white/80 mb-4'>
          Please read our terms of service carefully before using our website and services. By accessing or using our site, you agree to be bound by these terms.
        </p>
        <div className='text-left text-white/90 mt-8 space-y-6'>
          <h2 className='text-2xl font-semibold mb-2'>Acceptance of Terms</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>By using our website, you agree to these terms and conditions</li>
            <li>If you do not agree, please do not use our site</li>
          </ul>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Use of the Website</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>Use the site only for lawful purposes</li>
            <li>Do not attempt to disrupt or compromise the website</li>
            <li>Do not submit false or misleading information</li>
          </ul>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Intellectual Property</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>All content is owned by us or our licensors</li>
            <li>You may not copy, reproduce, or distribute content without permission</li>
          </ul>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Limitation of Liability</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>We are not liable for any damages resulting from your use of the site</li>
            <li>The website is provided &quot;as is&quot; without warranties</li>
          </ul>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Termination</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>We may terminate or suspend access at any time, without notice</li>
          </ul>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Governing Law</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>These terms are governed by the laws of our jurisdiction</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TermsOfServicePage