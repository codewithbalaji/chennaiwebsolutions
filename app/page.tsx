import { LandingHero } from '@/components/home/LandingHero'
import { About } from '@/components/home/About'
import { Services } from '@/components/home/Services'
import { Clients } from '@/components/home/Clients'
import Projects from '@/components/home/Projects'
import React from 'react'
import { Testimonials } from '@/components/home/Testimonials'
import GetStarted from '@/components/home/GetStarted'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <LandingHero/>
        <Clients/>
        <About/>
        <Services/>
        <Projects/>
        <Testimonials/>
        <GetStarted/>
    </div>
  )
}

export default Home