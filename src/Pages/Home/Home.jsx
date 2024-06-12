import React from 'react'
import Header from '../../Components/Header/Header'
import About from '../../Components/About/About'
import Skills from '../../Components/Skills/Skills'
import Projects from '../../Components/Projects/Projects'
import Education from '../../Components/Education/Education'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home