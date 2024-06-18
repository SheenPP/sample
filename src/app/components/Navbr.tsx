"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';



// Navigation items for the NavBar
const navItems = [
  { path: "/", name: "Home" },
  { path: "/Features", name: "Features" },
  { path: "/About", name: "About" },
  { path: "/Success_Stories", name: "Success Stories" },
  { path: "/Service", name: "Service" },
];

 function NavBar() {
  // Get current path or default to "/"
  const pathname = usePathname() || "/";

  // State to handle hovered navigation item
  const [hoveredPath, setHoveredPath] = useState(pathname);

  // State to handle mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <nav className="fixed-top">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-full sticky top-0 z-60 p-4">
      {/* Logo Section */}
      <div className="logo mr-4">
        <img src="./logo.png" alt="LoveChat Logo" className="h-16 md:h-20" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden ml-auto" onClick={toggleMenu}>
        {menuOpen ? <FaTimes className="text-xl text-black" /> : <FaBars className="text-xl text-black" />}
      </div>

      {/* Navigation Links */}
      <nav className={`NavBar font-sans flex flex-col md:flex-row md:space-x-2 bg-custom-white rounded-2xl shadow-inner absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${menuOpen ? "max-h-screen" : "max-h-0 md:max-h-screen"} overflow-hidden md:overflow-visible`}>
        {navItems.map((item) => {
          const isActive = item.path === pathname; // Check if the item is the current path
          const isHovered = item.path === hoveredPath; // Check if the item is being hovered

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`px-8 py-2 md:py-1 text-sm lg:text-base font-bold rounded-2xl relative no-underline 
                ${isActive ? "bg-custom-red text-white" : "bg-transparent text-black"}
                hover:bg-gray-200 hover:text-black`}                 
              data-active={isActive}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Authentication Links */}
      <div className="hidden md:flex">
        <Link
          href="/signup"
          className="px-8 py-1 rounded-tl-2xl rounded-bl-2xl text-sm lg:text-base font-bold text-white bg-custom-red no-underline shadow-md"
        >
          Signup
        </Link>
        <Link
          href="/login"
          className="px-8 py-1 rounded-tr-2xl rounded-br-2xl text-sm lg:text-base font-bold text-black bg-gray-100 no-underline shadow-md"
        >
          Login
        </Link>
      </div>

      {/* Mobile Authentication Links */}
      {menuOpen && (
        <div className="flex flex-col md:hidden mt-2">
          <Link
            href="/signup"
            className="px-8 py-2 text-sm text-white font-bold bg-custom-red no-underline shadow-md"
            >
            Signup
          </Link>
          <Link
            href="/login"
            className="px-8 py-2 text-sm text-black font-bold bg-gray-100 no-underline shadow-md mt-1"
          >
            Login
          </Link>
        </div>
      )}
    </div>
    </nav>
  );
}
export default NavBar