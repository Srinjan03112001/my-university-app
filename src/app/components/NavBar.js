"use client"; // Add this to make it a Client Component

import Image from 'next/image';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Updated import
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/ciem-logo.png";

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [navBackground, setNavBackground] = useState("bg-transparent");
  const pathname = usePathname(); // Get current path
  const [navShadow, setNavShadow] = useState(""); // State for shadow

  const handleMouseEnter = (menu) => {
    setDropdownOpen(menu);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    if (!isHovering) {
      const timeout = setTimeout(() => {
        if (!isHovering) {
          setDropdownOpen(null);
        }
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isHovering]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = 100; // Adjust this value to match the height of your Hero section
      if (window.scrollY > heroSectionHeight) {
        setNavBackground("bg-slate-800 bg-opacity-90");
        setNavShadow("shadow-lg"); // Add shadow when background is not transparent
      } else {
        setNavBackground("bg-transparent");
        setNavShadow(""); // Remove shadow when background is transparent
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <nav className={`fixed h-auto w-full z-50 ${navBackground} ${navShadow} text-white transition-[background-color,box-shadow] duration-300 ease-in-out`}>
      <div className="container mx-auto pl-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold flex flex-row">
            <Image
              src={logo.src} // Make sure this is correct, relative to your `public` folder
              alt="CIEM Society Logo"
              width={100} // Width in pixels
              height={100} // Height in pixels
              className="rounded-full"
            />
            <h1 className="text-3xl pl-2 pt-8">Society</h1>
          </Link>
        </div>

        {/* Home Button */}
        <ul className="flex-grow hidden md:flex justify-center space-x-6">
          <Link href="/" className="hover:text-opacity-0">
            <li
              className={`relative hover:bg-gray-700 hover:opacity-90 px-6 py-2 rounded-md transition-all duration-300 ${
                pathname === "/" ? "border-b-2 border-white" : ""
              }`}
            >
              Home
            </li>
          </Link>

          {/* About Button */}
          <Link href="/about" className="hover:text-opacity-0">
            <li
              className={`relative hover:bg-gray-700 hover:opacity-90 px-6 py-2 rounded-md transition-all duration-300 ${
                pathname === "/about" ? "border-b-2 border-white" : ""
              }`}
            >
              About
            </li>
          </Link>

          {/* Colleges Button */}
          <li
            className="relative hover:bg-gray-700 hover:opacity-90 px-6 py-2 rounded-md transition-all duration-300"
            onMouseEnter={() => handleMouseEnter("colleges")}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={`cursor-pointer hover:text-opacity-0 ${
                pathname.includes("/colleges") ? "border-b-2 border-white" : ""
              }`}
            >
              Colleges
            </span>
            <AnimatePresence>
              {dropdownOpen === "colleges" && (
                <motion.div
                  className="absolute top-full mt-2 bg-white text-black rounded-md shadow-lg py-2 w-40"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.3, originY: 0 }}
                >
                  <ul>
                    <Link href="/">
                      <li className="px-4 py-2 hover:bg-gray-200">CIEM</li>
                    </Link>
                    <Link href="/">
                      <li className="px-4 py-2 hover:bg-gray-200">CISM</li>
                    </Link>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Academics Button */}
          <li
            className="relative hover:bg-gray-700 hover:opacity-90 px-6 py-2 rounded-md transition-all duration-300"
            onMouseEnter={() => handleMouseEnter("academics")}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={`cursor-pointer hover:text-opacity-0 ${
                pathname.includes("/academics") ? "border-b-2 border-white" : ""
              }`}
            >
              Academics
            </span>
            <AnimatePresence>
              {dropdownOpen === "academics" && (
                <motion.div
                  className="absolute top-full mt-2 bg-white text-black rounded-md shadow-lg py-2 w-40"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.3, originY: 0 }}
                >
                  <ul>
                    <Link href="/">
                      <li className="px-4 py-2 hover:bg-gray-200">M.S. In Nursing</li>
                    </Link>
                    <Link href="/">
                      <li className="px-4 py-2 hover:bg-gray-200">M.A. English</li>
                    </Link>
                    <Link href="/">
                      <li className="px-4 py-2 hover:bg-gray-200">Master Of Public Health</li>
                    </Link>
                    <Link href="/">
                      <li className="px-4 py-2 hover:bg-gray-200">Department Of English</li>
                    </Link>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Events Button */}
          <li
            className="relative hover:bg-gray-700 hover:opacity-90 px-6 py-2 rounded-md transition-all duration-300"
            onMouseEnter={() => handleMouseEnter("events")}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={`cursor-pointer hover:text-opacity-0 ${
                pathname.includes("/events") ? "border-b-2 border-white" : ""
              }`}
            >
              Events
            </span>
            <AnimatePresence>
              {dropdownOpen === "events" && (
                <motion.div
                  className="absolute top-full mt-2 bg-white text-black rounded-md shadow-lg py-2 w-40"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.3, originY: 0 }}
                >
                  <ul>
                    <Link href="/">
                      <li className="px-4 py-2 hover:bg-gray-200">Upcoming Events</li>
                    </Link>
                    <Link href="/">
                      <li className="px-4 py-2 hover:bg-gray-200">Past Events</li>
                    </Link>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Contacts Button */}
          <Link href="/contact" className="hover:text-opacity-0">
            <li
              className={`relative hover:bg-gray-700 hover:opacity-90 px-6 py-2 rounded-md transition-all duration-300 ${
                pathname === "/contact" ? "border-b-2 border-white" : ""
              }`}
            >
              Contact
            </li>
          </Link>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setDropdownOpen(dropdownOpen === "mobile" ? null : "mobile")}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
