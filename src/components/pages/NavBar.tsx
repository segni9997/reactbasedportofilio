import   { FC, useState, ReactNode } from "react";
// import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi"; // Import menu icon from React Icons
import logo from "../../styles/templogo.jpg";
interface NavBarProps {
  children: ReactNode;
}
import { Link } from "react-router-dom";
 // Adjust according to your types location

export const NavBar: FC<NavBarProps> = ({ children }) => {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <nav className="w-full bg-white">
                <div className="flex justify-between items-center px-4 mx-auto lg:max-w-7xl md:px-8">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 py-3 md:py-5">
                        <Link to="/reactbasedportofilio">
                            <img src={logo} width={44} height={44} className="rounded-full" alt="Logo" />
                        </Link>
                    </div>
                    
                    {/* Navigation Links Section */}
                    <div className="hidden md:flex flex-1 justify-center items-center space-x-6 font-pri">
                        <li className="text-bg-ter hover:text-bg-sec list-none">
                            <Link to="/reactbasedportofilio">Home</Link>
                        </li>
                        <li className="text-bg-ter hover:text-bg-sec list-none">
                            <Link to="/experiences">Experience</Link>
                        </li>
                        <li className="text-bg-ter hover:text-bg-sec list-none">
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li className="text-bg-ter hover:text-bg-sec list-none">
                            <Link to="/Certificates">Certificates</Link>
                        </li>
                        <li className="text-bg-ter hover:text-bg-sec list-none">
                            <Link to="/recommendations">Other Files</Link>
                        </li>
                    </div>

                    {/* Contact Me Button Section */}
                    <div className="hidden md:flex">
                        <span className="text-bg-ter hover:text-white p-2 text-center rounded-xl bg-bg-sec">
                            <Link to="/contact-me">Contact Me</Link>
                        </span>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${navbar ? "block" : "hidden"}`}>
                    <ul className="flex flex-col items-center space-y-8 mt-8">
                        <li className="text-bg-ter hover:text-bg-sec">
                            <Link to="/reactbasedportofilio">Home</Link>
                        </li>
                        <li className="text-bg-ter hover:text-bg-sec">
                            <Link to="/experiences">Experience</Link>
                        </li>
                        <li className="text-bg-ter hover:text-bg-sec">
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li className="text-bg-ter hover:text-bg-sec">
                            <Link to="/Certificates">Certificates</Link>
                        </li>
                        <li className="text-bg-ter hover:text-bg-sec list-none">
                            <Link to="/recommendations">Other Files</Link>
                        </li>
                        <span className="text-bg-ter hover:text-white p-2 text-center rounded-xl bg-bg-sec">
                            <Link to="/contact-me">Contact Me</Link>
                        </span>
                    </ul>
                </div>
            </nav>
            {children}
        </>
    );
}
