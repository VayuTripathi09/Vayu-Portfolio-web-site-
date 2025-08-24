import React from 'react'
import AboutImage from '../../assets/about-image.png'
import './AboutMe.css'
import CV from '../../assets/Vayu Resume.pdf'

const AboutMe = () => {
  return (
    <section>
        <div id='about' className='flex gap-5 wrapper p-block-9 boder-btm'>
          <div className="about_image">
           <img src={AboutImage} />
        </div>
             <div className="about-content"> 
             <span className='sub-text overlay-text' datatype='About Me'>About Me</span>
             <h2> Who is <span className='green-text'>Vayu?</span></h2>
             <p className='para'>I’m Vayu Nandan Tripathi, a Computer Science and Engineering student specializing in Machine Learning and Artificial Intelligence. I’m the Founder& CEO of VyomVeda Space Tech, a researcher and quantitative research enthusiast, with a passion for pushing boundaries in AI, space technology, and innovation. My journey combines technical expertise, research curiosity, and entrepreneurial vision to create solutions that inspire and impact.

             </p>

             <div className='flex gap-2 m-block-3'>
              <div>
                <h6>40+</h6>
                <p>Project Completed</p>
              </div>

              <div>
                <h6>10+</h6>
                <p>Industry Covered</p>
              </div>

              <div>
                <h6>02+</h6>
                <p>Year of Experience</p>
              </div>

             </div>
               <a href= {CV} download="My CV" className='btn'>Download CV</a>
             </div>
        </div>
        
    </section>
  )
}

export default AboutMe
