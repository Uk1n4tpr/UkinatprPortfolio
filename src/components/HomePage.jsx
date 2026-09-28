import React from 'react'
import NavBar from '../componentsSmall/NavBar'
import LandingPage from '../componentsSmall/LandingPage'
import AboutMe from '../componentsSmall/AboutMe'
import Skills from '../componentsSmall/Skills'
import Projects from '../componentsSmall/Projects'
import Contact from '../componentsSmall/Contact'
import Footer from '../componentsSmall/Footer'

function HomePage() {
  return (
    <div className='w-full bg-gradient-to-b from-[#0B1220] via-[#060B17] to-[#030712] text-white'>
        <NavBar />
        <LandingPage />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default HomePage