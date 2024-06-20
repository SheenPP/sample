// Footer.tsx

"use client";

import React, { useState, useEffect } from 'react';

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
    <footer className={`bg-gray-800 text-white py-5 text-center ${isFixed ? 'fixed bottom-0 left-0 w-full z-50' : 'relative'} transition-all duration-300`}>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="footer-content flex flex-col items-center">
          <div className="footer-links mb-2 text-center">
            <a href="/" className="text-white no-underline mx-2 hover:underline">Home</a>
            <a href="/blog" className="text-white no-underline mx-2 hover:underline">Blog</a>
            <a href="/partnership" className="text-white no-underline mx-2 hover:underline">Partnership</a>
            <a href="/our%20story" className="text-white no-underline mx-2 hover:underline">Our Story</a>
            <a href="/contact" className="text-white no-underline mx-2 hover:underline">Contact</a>
          </div>
        </div>
        <hr className="w-full max-w-4xl my-2 border-t border-gray-400" />
        <p className="mt-2 text-sm text-center">&copy; {year} {companyName}</p>
      </div>
    </footer>
  );
};

export default Footer;
