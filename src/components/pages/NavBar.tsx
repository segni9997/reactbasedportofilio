import React from "react";
import { Link } from "react-router-dom";
export const NavBar = ()=>{
    return (
        <div className="n-wrapper bg-transparent flex justify-between items-center p-4 " id="Navbar">
        {/* left */}
        <div className="n-left flex items-center">
          <div className=" hover:text-bg-fou n-name text-2xl font-bold   "> <Link to="/" >SA.</Link></div>
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
              <Link className="hover:text-bg-fou font-pri" to="/experiances">
              Experiance
              </Link>
            </li>
            <li>
              <Link className="hover:text-bg-fou font-pri" to="/skills">
                Skills
              </Link>
            </li>
           
            <li>
              <Link className="hover:text-bg-fou font-pri " to="/certeficates">
              Certeficates
              </Link>
            </li>
            <li>
              <Link className="hover:text-bg-fou font-pri " to="/recomendations">
               Recomendations
              </Link>
            </li>
          </ul>
        </div>
  
        {/* right */}
        <div className="">
          <Link to="/contact">
            <button className="button n-button bg-bg-sec text-bg-ter py-2 px-4 rounded hover:bg-bg-ter hover:text-bg-pri">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    );
  };