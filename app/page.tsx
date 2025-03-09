import { LandingHero } from '@/components/home/LandingHero'
import { About } from '@/components/home/About'
import { Services } from '@/components/home/Services'
import { Clients } from '@/components/home/Clients'
import Footer from '@/components/shared/footer'
import React from 'react'
import { Testimonials } from '@/components/home/Testimonials'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <LandingHero/>
        <Clients/>
        <About/>
        <Services/>
      
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home