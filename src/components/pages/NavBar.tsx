import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi"; // Import menu icon from React Icons
import logo from "../../styles/templogo.jpg";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="n-wrapper bg-transparent flex justify-between items-center p-4" id="Navbar">
      {/* Left */}
      <div className="n-left flex items-center">
        <div className="hover:text-bg-fou n-name text-2xl font-bold">
          <Link to="/">
            <img src={logo} className="w-14 h-14 rounded-full" alt="Logo" />
          </Link>
        </div>
      </div>

      {/* Middle (responsive menu for mobile) */}
      <div className="n-middle flex-1 flex justify-center">
        <ul className={`list-none flex space-x-6 lg:flex ${isOpen ? "hidden" : "block"}`}>
          <li>
            <Link className="hover:text-bg-fou font-pri" to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-bg-fou font-pri" to="/experiences" onClick={() => setIsOpen(false)}>
              Experiences
            </Link>
          </li>
          <li>
            <Link className="hover:text-bg-fou font-pri" to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link className="hover:text-bg-fou font-pri" to="/certificates" onClick={() => setIsOpen(false)}>
              Certificates
            </Link>
          </li>
          <li>
            <Link className="hover:text-bg-fou font-pri" to="/recommendations" onClick={() => setIsOpen(false)}>
              Recommendations
            </Link>
          </li>
        </ul>
      </div>

      {/* Right (Contact Me button and mobile menu toggle) */}
      <div className="n-right flex items-center">
        {/* Mobile menu toggle button */}
        <button className="lg:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          <HiMenu className="text-3xl text-bg-sec" />
        </button>

        {/* Contact Me button */}
        <Link to="/contact-me">
          <button className="button n-button bg-bg-sec text-bg-ter py-2 px-4 rounded hover:bg-bg-ter hover:text-bg-pri lg:inline-block hidden">
            Contact Me
          </button>
        </Link>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden absolute top-0 left-0 w-full bg-bg-ter ${isOpen ? "block" : "hidden"}`}>
        <ul className="p-4 space-y-2">
          <li>
            <Link className="block hover:text-bg-fou font-pri" to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link className="block hover:text-bg-fou font-pri" to="/experiences" onClick={() => setIsOpen(false)}>
              Experiences
            </Link>
          </li>
          <li>
            <Link className="block hover:text-bg-fou font-pri" to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link className="block hover:text-bg-fou font-pri" to="/certificates" onClick={() => setIsOpen(false)}>
              Certificates
            </Link>
          </li>
          <li>
            <Link className="block hover:text-bg-fou font-pri" to="/recommendations" onClick={() => setIsOpen(false)}>
              Recommendations
            </Link>
          </li>
          <li>
            <Link to="/contact-me" onClick={() => setIsOpen(false)}>
              <button className="button n-button bg-bg-sec text-bg-ter w-full py-2 px-4 rounded hover:bg-bg-ter hover:text-bg-pri">
                Contact Me
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

