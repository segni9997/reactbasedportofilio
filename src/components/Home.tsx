import React from "react";
import "../styles/styles.css";
import segni from "../styles/segni2.png";

export const Home = () => {
  return (
     <div className="relative h-[1280px] w-full flex items-center justify-center">
      {/* Colorful Rotated Squares */}
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
              Hello! I'm a passionate web developer with a knack for creating user-friendly and visually appealing websites. With a strong foundation in front-end technologies like React and Tailwind CSS, I enjoy bringing design concepts to life and solving complex problems. My goal is to build intuitive interfaces that enhance user experience and make the web a more interactive place. Outside of coding, I love exploring new technologies, traveling, and immersing myself in different cultures. Let's connect and collaborate on exciting projects!
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
  );
};
