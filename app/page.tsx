import { LandingHero } from '@/components/home/LandingHero'
import { About } from '@/components/home/About'
import { Services } from '@/components/home/Services'
import Footer from '@/components/shared/footer'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <LandingHero/>
        <About/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default Home