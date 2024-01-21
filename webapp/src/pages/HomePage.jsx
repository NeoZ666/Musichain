import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import ShortInfo from '../components/ShortInfo'

function HomePage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <ShortInfo />
        <Features />
        <Footer />
    </div>
  )
}

export default HomePage