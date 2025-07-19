import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ContactModal from './ContactModal';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDark = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
        <div className="logo">Faiza</div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : ''}>Projects</NavLink>
        </div>

        <div className="nav-controls">
          <button className="toggle-btn" onClick={toggleDark}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
          <button className="contact-btn" onClick={() => setShowModal(true)}>
            Hire Me
          </button>
        </div>
      </nav>

      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
