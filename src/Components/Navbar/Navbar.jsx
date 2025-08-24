import React, { useState, useEffect } from 'react'
import { ImSun } from "react-icons/im";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-scroll"; // ✅ import react-scroll
import './Navbar.css'

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <header>
      <nav className='flex between wrapper navbar'>
        <a href="#" className='logo'>
          <span>V</span> Vayu.
        </a>

        {/* Desktop menu */}
        <ul className='flex gap-2 desktop-menu'>
          <li><Link to="home" smooth={true} duration={500} className='link'>Home</Link></li>
          <li><Link to="services" smooth={true} duration={500} className='link'>Services</Link></li>
          <li><Link to="about" smooth={true} duration={500} className='link'>About Me</Link></li>
          <li><Link to="project" smooth={true} duration={500} className='link'>Project</Link></li>
          <li><Link to="achievements" smooth={true} duration={500} className='link'>Achievements</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className='link'>Contact Me</Link></li>
        </ul>

        <div className='flex gap-2 nav-action'>
          <a href="#" className='icon-container border-inverse' onClick={toggleTheme}>
            {theme === 'dark' ? <ImSun className='green-text' /> : <FaRegMoon className='green-text' />}
          </a>
          <Link to="contact" smooth={true} duration={500} className='btn'>
            Let's Talk
          </Link>
          <a href="#" className='hamburger' onClick={toggleMenu}>
            {isMenuActive ? <FaXmark /> : <FaBarsStaggered />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul className={`mobile-menu ${isMenuActive ? 'mobile-menu-active' : ''}`}>
          <li><Link to="home" smooth={true} duration={500} className='link'>Home</Link></li>
          <li><Link to="services" smooth={true} duration={500} className='link'>Services</Link></li>
          <li><Link to="about" smooth={true} duration={500} className='link'>About Me</Link></li>
          <li><Link to="project" smooth={true} duration={500} className='link'>Project</Link></li>
          <li><Link to="achievements" smooth={true} duration={500} className='link'>Achievements</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className='link'>Contact Me</Link></li>
          <Link to="contact" smooth={true} duration={500} className='btn' onClick={toggleMenu}>
              Let's Talk
            </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
