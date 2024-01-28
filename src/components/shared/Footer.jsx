import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light px-5 py-10">
      <div className="py-10 space-y-10">
        <div className="container flex justify-between items-center">
          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row gap-4 text-sm">
            <Link to="/credentials">Credentials</Link>
            <Link to="/expertise">Expertise</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </nav>

          {/* Logo */}
          <div>
            <img
              src="/amraotech-transparent-logo.png"
              alt="Amraotech Logo"
              className="w-10"
            />
          </div>

          {/* Additional Links */}
          <nav className="flex flex-col md:flex-row gap-4 text-sm">
            <Link to="/carbon-offset">Carbon Offset</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/cookies">Cookies</Link>
          </nav>
        </div>

        <hr className="opacity-20 my-5" />

        {/* Copyright and Regulatory Information */}
        <div className="container text-center text-xs text-light/40 space-y-1">
          <p>
            Amraotech is an Appointed Representative of Amrao, which is
            authorized and regulated by the ICT Division.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Amraotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
