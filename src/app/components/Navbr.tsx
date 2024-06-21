"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import SignUpModal from './SignUpModal';
import LogInModal from './LoginModal';

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

  // State to handle SignUp modal visibility
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  // State to handle LogIn modal visibility
  const [isLogInOpen, setLogInOpen] = useState(false);

  // State to handle active button
  const [activeButton, setActiveButton] = useState<null | string>(null);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle the SignUp modal visibility
  const toggleSignUpModal = () => {
    setActiveButton('signup');
    setSignUpOpen(!isSignUpOpen);
  };

  // Toggle the LogIn modal visibility
  const toggleLogInModal = () => {
    setActiveButton('login');
    setLogInOpen(!isLogInOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="LoveChat Logo" width={130} height={200} className="h-16 md:h-20" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden ml-auto" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="text-2xl text-black" /> : <FaBars className="text-2xl text-black" />}
        </div>

        {/* Navigation Links */}
        <div className={`w-full md:flex shadow-inner bg-white rounded-2xl md:items-center md:w-auto ${menuOpen ? "block" : "hidden"}`}>
          <div className="md:flex md:space-x-2">
            {navItems.map((item) => {
              const isActive = item.path === pathname; // Check if the item is the current path
              const isHovered = item.path === hoveredPath; // Check if the item is being hovered

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block md:inline-block px-8 py-2 md:py-1 text-sm lg:text-base font-bold rounded-2xl no-underline 
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
          </div>
        </div>

        {/* Authentication Links */}
        <div className="hidden md:flex md:items-center shadow-inner rounded-2xl bg-white space-x-2">
          <button
            onClick={toggleSignUpModal}
            className={`px-8 py-2 md:py-1 text-sm lg:text-base font-bold rounded-tl-2xl rounded-bl-2xl ${
              activeButton === 'signup'
                ? 'text-white bg-custom-red rounded-2xl'
                : 'text-black bg-transparent'
            } hover:bg-gray-200 rounded-2xl`}
          >
            Signup
          </button>
          <button
            onClick={toggleLogInModal}
            className={`px-8 py-2 md:py-1 text-sm lg:text-base font-bold rounded-tr-2xl rounded-br-2xl ${
              activeButton === 'login'
                ? 'text-white bg-custom-red rounded-2xl'
                : 'text-black bg-transparent'
            } hover:bg-gray-200 rounded-2xl`}
          >
            Login
          </button>
        </div>

        {/* Mobile Authentication Links */}
        {menuOpen && (
          <div className="flex flex-col md:hidden mt-2 bg-white space-y-1">
            <button
              onClick={toggleSignUpModal}
              className={`px-8 py-2 text-sm font-bold shadow-md rounded ${
                activeButton === 'signup'
                  ? 'text-white bg-custom-red'
                  : 'text-black'
              }`}
            >
              Signup
            </button>
            <button
              onClick={toggleLogInModal}
              className={`px-8 py-2 text-sm font-bold shadow-md rounded ${
                activeButton === 'login'
                  ? 'text-white bg-custom-red'
                  : 'text-black'
              }`}
            >
              Login
            </button>
          </div>
        )}
      </div>

      {/* Render Modals */}
      <SignUpModal isOpen={isSignUpOpen} onClose={toggleSignUpModal} />
      <LogInModal isOpen={isLogInOpen} onClose={toggleLogInModal} />
    </nav>
  );
}

export default NavBar;
