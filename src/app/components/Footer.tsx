"use client";

import React, { useState, useEffect } from 'react';
import './Footer.css'; // Import CSS file for styling

interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop + clientHeight >= scrollHeight - 15) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isFixed ? 'fixed-footer' : 'regular-footer'}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/partnership">Partnership</a>
            <a href="/our%20story">Our Story</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <hr className="divider" />
        <p>Copyright &copy; {year} {companyName}</p>
      </div>
    </footer>
  );
};

export default Footer;
