import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Headline from './Components/Headline/Headline'
import Services from './Components/Services/Services' 
import AboutMe from './Components/AboutMe/AboutMe'
import Project from './Components/Project/Project'
import Education from './Components/Education/Education'
import Achievements from './Components/Achievements/Achievements'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
<Navbar/>
    <Hero />
  <Headline />
  <Services/>
  <AboutMe/>
  <Project/>
  <Headline />
  <Education/>
  <Achievements/>
  <Headline />
  <ContactMe/>
  <Headline />
  <Footer/>
    
    </div>
  )
}
export default App