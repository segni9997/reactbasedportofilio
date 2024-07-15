import React from "react";
import { Link } from "react-router-dom";
export const NavBar = ()=>{
    return (
        <div className="n-wrapper bg-transparent flex justify-between items-center p-4 " id="Navbar">
        {/* left */}
        <div className="n-left flex items-center">
          <div className="n-name text-2xl font-bold  ">Segni A.</div>
          {/* <Toggle /> */}
        </div>
  
        {/* middle */}
        <div className="n-middle ">
          <ul className="list-none flex space-x-6">
            <li>
              <Link className="hover:text-bg-fou font-pri" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-bg-fou font-pri" to="/services">
              Experience
              </Link>
            </li>
            <li>
              <Link className="hover:text-bg-fou font-pri" to="/experience">
                Skills
              </Link>
            </li>
            <li>
              <Link className="hover:text-bg-fou font-pri" to="/portfolio">
              Previous Project
              </Link>
            </li>
            <li>
              <Link className="hover:text-bg-fou font-pri " to="/testimonial">
              Certeficates
              </Link>
            </li>
          </ul>
        </div>
  
        {/* right */}
        <div className="n-right">
          <Link to="/contact">
            <button className="button n-button bg-bg-sec text-white py-2 px-4 rounded hover:bg-blue-600">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    );
  };