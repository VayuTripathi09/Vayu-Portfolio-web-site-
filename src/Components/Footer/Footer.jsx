import React, { useState } from 'react' 
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-scroll";   // ✅ Import Link
import './Footer.css'

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("⚠️ Please enter a valid email!");
      return;
    }
    console.log("Subscribed Email:", email);
    alert("✅ Thank you for subscribing!");
    setEmail(""); // clear field
  };

  return (
    <footer>
      <div className="wrapper">
        <div className='flex between boder-btm p-block-2 gap-4'>
          <h2>Let's <span className='green-text'>Connect</span> There</h2>
          <Link to="contact" smooth={true} duration={500} className='btn self-end'>Hire Me Now</Link>
        </div>

        <div className='p-block-7 flex flex-start gap-4'>
          {/* Logo + About */}
          <div className="footer-wrapper"> 
            <a href="#" className='logo'>
              <span>V</span> Vayu.
            </a>

            <p className='mt-2'>
              Thank you for visiting my portfolio. I’m passionate about technology, AI, and innovation, 
              and always open to collaborations that create meaningful impact. Let’s build the future together.
            </p>
            <div className='flex gap-1 mt-2'>
              <a 
                href="https://x.com/GamingZythum" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='icon-container black-inverse'
              >
                <FaSquareXTwitter />
              </a>
              <a 
                href="https://www.linkedin.com/in/vayu-nandan-tripathi-475771216/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='icon-container black-inverse'
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/VayuTripathi09" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='icon-container black-inverse'
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <ul className="footer-wrapper">
            <li><h6>Navigation</h6></li>
            <li className="mt-2"><Link to="home" smooth={true} duration={500} className='link'>Home</Link></li>
            <li className="mt-2"><Link to="services" smooth={true} duration={500} className='link'>Services</Link></li>
            <li className="mt-2"><Link to="about" smooth={true} duration={500} className='link'>About Me</Link></li>
            <li className="mt-2"><Link to="project" smooth={true} duration={500} className='link'>Project</Link></li>
            <li className="mt-2"><Link to="achievements" smooth={true} duration={500} className='link'>Achievements</Link></li>
            <li className="mt-2"><Link to="contact" smooth={true} duration={500} className='link'>Contact Me</Link></li>
          </ul>

          {/* Contact */}
          <ul className="footer-wrapper">
            <li><h6>Contact</h6></li>
            <li>
              <a href="mailto:aryanlte22@gmail.com" className='link'>aryanlte22@gmail.com</a>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="footer-wrapper">
            <h6>Get the latest Information</h6>
            <form onSubmit={handleSubscribe} className='footer-input mt-2 flex stretch'>
              <input 
                type="email" 
                placeholder='Enter your email' 
                className='email-field' 
                autoComplete='off' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className='input-btn'>
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='copyright'>
        <div className="wrapper flex between">
          <p>Copyright &copy; Vayu. All Rights Reserved</p>
          <p>User Terms & Condition | Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
