import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'
import Success from './Success'




const Home = () => {
  return (
    <>
     <HeroSection />   
     <About />
     <Qualities />
     <Menu />
    <WhoAreWe />
    <Team />
    <Reservation />
    <Footer />
    <Success />
    </>
  )
}

export default Home