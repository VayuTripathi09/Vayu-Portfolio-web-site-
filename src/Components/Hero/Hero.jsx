import React from 'react'
import HeroImage from '../../assets/HMI.png'
import './Hero.css'
import CV from '../../assets/Vayu Resume.pdf'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section>
      <div id='home' className='hero-section flex wrapper gap-4'>
        <div className='hero-content'>
          <span className='sub-text'>Hello there!</span>
          <h1>
            <span className="green-text">I'm Vayu Nandan Tripathi,</span>
            <br/>Artificial Intelligence and Machine Learning Engineer and founder of Vyomveda from India 
          </h1>
          <p className='para'>
            I am a passionate AI/ML Engineer with a strong foundation in machine learning algorithms, data analysis, and software development. I thrive on solving complex problems and creating innovative solutions that leverage the power of AI.
          </p>
          <div className='flex gap-2'>
            {/* Scroll to Projects */}
            <Link to="project" smooth={true} duration={500} className='btn'>
              View My Works
            </Link>

            {/* Download CV */}
            <a href={CV} download="My CV" className='btn border-btn'>
              Download CV
            </a>
          </div>
        </div>

        <div className='hero-image'>
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero

