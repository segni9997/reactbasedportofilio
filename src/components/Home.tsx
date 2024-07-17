import React from "react";
import "../styles/styles.css";
import segni from "../styles/segni2.png";
import { NavBar } from "./pages/NavBar";

export const Home = () => {
  const colorfulSquares = [
    { width: 20, height: 16, bg: "bg-bg-ter", top: 32, left: 20 },
    { width: 16, height: 16, bg: "bg-bg-sec", top: 10, right: 10 },
    { width: 24, height: 24, bg: "bg-bg-fth", top: -20, left: 20 },
    { width: 10, height: 10, bg: "bg-bg-ter", top: 32, right: 32 },
    { width: 12, height: 12, bg: "bg-bg-fou", top: 48, left: 16 },
    { width: 18, height: 18, bg: "bg-bg-ter", top: -24, right: 8 },
    { width: 20, height: 20, bg: "bg-bg-fth", top: 72, left: 24 },
    { width: 14, height: 14, bg: "bg-bg-ter", top: 56, left: 56 },
    { width: 16, height: 16, bg: "bg-bg-sec", top: 28, left: 40 },
    { width: 22, height: 22, bg: "bg-bg-fth", top: -12, left: 48 },
    { width: 12, height: 12, bg: "bg-bg-ter", top: 20, right: 24 },
    { width: 14, height: 14, bg: "bg-bg-fou", top: 68, left: 8 },
    { width: 18, height: 18, bg: "bg-bg-sec", top: -16, right: 16 },
    { width: 20, height: 20, bg: "bg-bg-fth", top: 80, left: 48 },
  ];

  return (
    <>
    <div className="relative h-[1000px] w-full flex items-center justify-center">
      {/* {colorfulSquares.map((square, index) => (
        <div
          key={index}
          className={`w-${square.width} h-${square.height} ${square.bg} rotate-45 transform absolute top-${square.top} left-${square.left}`}
        /> 
      ))} */}
  <div className="w-16 h-16 bg-bg-ter rotate-45 transform absolute top-32 left-20"></div>
      <div className="w-16 h-16 bg-bg-sec rotate-45 transform absolute top-10 right-10"></div>
      <div className="w-24 h-24 bg-bg-fth rotate-45 transform absolute bottom-20 left-20"></div>
      <div className="w-10 h-10 bg-bg-ter rotate-45 transform absolute top-32 right-32"></div>
      <div className="w-12 h-12 bg-bg-fou rotate-45 transform absolute top-48 left-16"></div>
      <div className="w-18 h-18 bg-bg-ter rotate-45 transform absolute bottom-24 right-8"></div>
      <div className="w-20 h-20 bg-bg-fth rotate-45 transform absolute top-72 left-24"></div>
      <div className="w-14 h-14 bg-bg-ter rotate-45 transform absolute top-56 left-56"></div>
      <div className="w-16 h-16 bg-bg-sec rotate-45 transform absolute top-28 left-40"></div>
      <div className="w-22 h-22 bg-bg-fth rotate-45 transform absolute bottom-12 left-48"></div>
      <div className="w-12 h-12 bg-bg-ter rotate-45 transform absolute top-20 right-24"></div>
      <div className="w-14 h-14 bg-bg-fou rotate-45 transform absolute top-68 left-8"></div>
      <div className="w-18 h-18 bg-bg-sec rotate-45 transform absolute bottom-16 right-16"></div>
      <div className="w-20 h-20 bg-bg-fth rotate-45 transform absolute top-80 left-48"></div>
      {/* Main Content */}
      <div className="absolute top-14 min-w-full h-[700px] flex items-center justify-center ">
        <div className="flex w-full max-w-screen-xl mx-auto">
          {/* Text Section */}
          <div className="flex-1 flex  p-2 max">
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white text-center w-full max-w-2zl bg-transparent">
              <h2 className="text-xl font-semibold text-gray-700">About Me</h2>
              <p className="text-gray-600 mt-2">
              Hi, I'm Segni Asrat, a dedicated web and software developer with a solid foundation in creating dynamic and responsive applications. With a degree in Computer Engineering from Dilla University, I have honed my skills in various programming languages and development frameworks. I'm passionate about designing and building innovative solutions that make a real impact. Let's create something remarkable together!
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center p-1">
            <div className="w-[550px] h-[350px] flex items-center justify-center">
              <img
                src={segni}
                width={350}
                height={350}
                className="rounded-full shadow-2xl shadow-bg-sec bg-gradient-to-bl from-bg-ter to-bg-sec "
                alt="Segni"
              />
            </div>
          </div>
        </div>
      </div>
   
    </div>
      <div className="bg-bg-ter w-full m-0 foot rounded-sm">
      <NavBar/>
      </div>
       </>
  );
};