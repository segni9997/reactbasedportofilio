import React, { useRef, useState } from 'react';
import { AiFillSpotify } from 'react-icons/ai';
import { DiDotnet, DiJava } from 'react-icons/di';
import { GiElectricalSocket } from 'react-icons/gi';
import { GrNetwork, GrVmMaintenance } from 'react-icons/gr';
import { IoIosArrowDropdown } from 'react-icons/io';
import { 
  SiHtml5, 
  SiJavascript, 
  SiReact, 
  SiCss3, 
  SiTailwindcss, 
  SiBootstrap,
  SiPython, 
  SiCsharp, 
  SiPhp, 
 
  SiDjango, 


  SiFlutter,
  
  SiFigma,
  SiWebflow,
  SiDotnet,
 
} from 'react-icons/si';
const fskills = [
  { name: 'HTML', color: 'bg-red-400', icon: <SiHtml5 /> },
  { name: 'JavaScript', color: 'bg-orange-400', icon: <SiJavascript /> },
  { name: 'React', color: 'bg-yellow-400', icon: <SiReact /> },
  { name: 'CSS', color: 'bg-green-400', icon: <SiCss3 /> },
  { name: 'Tailwind CSS', color: 'bg-teal-400', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', color: 'bg-blue-400', icon: <SiBootstrap /> },
  // Add more skills as needed
];

const bskills = [
  { name: 'Python', color: 'bg-indigo-400', icon: <SiPython /> },
  { name: 'C#', color: 'bg-purple-400', icon: <SiCsharp /> },
  { name: 'PHP', color: 'bg-pink-400', icon: <SiPhp /> },
  { name: 'Java', color: 'bg-red-400', icon: <DiJava /> },
  // Add more skills as needed
];

const frameworkskills = [
  { name: 'Django Framework', color: 'bg-orange-400', icon: <SiDjango /> },
  { name: 'ASP.NET MVC (C#)', color: 'bg-yellow-400', icon: <DiDotnet /> },
  { name: 'ASP.NET Core (C#)', color: 'bg-green-400', icon: <DiDotnet /> },
  // Add more skills as needed
];

const Appskills = [
  { name: 'Java', color: 'bg-teal-400', icon: <DiJava /> },
  { name: 'Flutter', color: 'bg-blue-400', icon: <SiFlutter /> },
  { name: 'Python', color: 'bg-indigo-400', icon: <SiPython /> },
  // Add more skills as needed
];

const Webdesign = [
  { name: 'Figma', color: 'bg-purple-400', icon: <SiFigma /> },
  { name: 'WebFlow', color: 'bg-pink-400', icon: <SiWebflow /> },
  // Add more skills as needed
];

const OtherRelatedSkills = [
  { name: 'Basic Computer Maintenance', color: 'bg-red-400', icon: <GrVmMaintenance /> },
  { name: 'Basic Network Configuration', color: 'bg-orange-400', icon: <GrNetwork /> },
  { name: 'Basic Electrical Installation', color: 'bg-yellow-400', icon: <GiElectricalSocket /> },
  // Add more skills as needed
];
const Skill = () => {
  const [isWebDevt, setIsWebDevt] = useState(false);
  const [isAppDevt, setIsAppDevt] = useState(false);
  const [isWebDesign, setIsWebDesign] = useState(false);
  const [isOtherSkills, setIsOtherSkills] = useState(false);

  const toggleWebDevt = () => setIsWebDevt(!isWebDevt);
  const toggleAppDevt = () => setIsAppDevt(!isAppDevt);
  const toggleWebDesign = () => setIsWebDesign(!isWebDesign);
  const toggleOtherSkills = () => setIsOtherSkills(!isOtherSkills);3.

  return (
    <>
    <div className="grid grid-cols-1 mt-8 transform ease-in-out duration-500 translate-x-3">
      <h2 className="text-left text-3xl font-serif flex items-center ml-2">
        <strong className="bg-bg-ter text-bg-sec p-2">Web</strong>
        <strong className="border-b-8 border-bg-sec">Development</strong>
        <span className="bg-bg-fth cursor-pointer"></span>
        <IoIosArrowDropdown
          onClick={toggleWebDevt}
          className={`ml-2 text-4xl text-bg-ter font-bold transition-transform ${
            isWebDevt ? 'rotate-180 duration-1000' : 'rotate-0 duration-500'
          }`}
        />
      </h2>

      <div
        className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isWebDevt ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <h2 className="text-center font-pri text-3xl mt-5">Front-End</h2>
        <div className="flex flex-wrap justify-center items-center p-6">
          {/* Front-End Skills */}
          {fskills.map((skill, index) => (
      <div
        key={index}
        className={`m-2 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105  ${skill.color}`}
      >
        <span className='text-white text-4xl justify-center align-middle mx-auto items-center flex'>{skill.icon}</span>

        <span className="text-white text-lg font-semibold transform ">{skill.name}</span>
      </div>
    ))}
        </div>
        <h2 className="text-center font-pri text-3xl mt-5">Back-End</h2>
        <div className="flex flex-wrap justify-center items-center p-6">
          {/* Back-End Skills */}
          {bskills.map((skill, index) => (
      <div
        key={index}
        className={`m-2 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105  ${skill.color}`}
      >
        <span className='text-white text-4xl justify-center align-middle mx-auto items-center flex'>{skill.icon}</span>

        <span className="text-white text-lg font-semibold transform ">{skill.name}</span>
      </div>
    ))}
        </div>
        <h2 className="text-center font-pri text-3xl mt-5">Frameworks</h2>
        <div className="flex flex-wrap justify-center items-center p-6">
          {/* Framework Skills */}
          {frameworkskills.map((skill, index) => (
      <div
        key={index}
        className={`m-2 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105  ${skill.color}`}
      >
        <span className='text-white text-4xl justify-center align-middle mx-auto items-center flex'>{skill.icon}</span>

        <span className="text-white text-lg font-semibold transform ">{skill.name}</span>
      </div>
    ))}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 mt-8 transform ease-in-out duration-500 translate-x-3">
      <h2 className="text-left text-3xl font-serif flex items-center ml-2">
        <strong className="bg-bg-ter text-bg-sec p-2">App</strong>
        <strong className="border-b-8 border-bg-sec">Development</strong>
        <span className="bg-bg-fth cursor-pointer"></span>
        <IoIosArrowDropdown
          onClick={toggleAppDevt}
          className={`ml-2 text-4xl text-bg-ter font-bold transition-transform ${
            isAppDevt ? 'rotate-180 duration-1000' : 'rotate-0 duration-500'
          }`}
        />
      </h2>

      <div
        className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isAppDevt ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <h2 className="text-center font-pri text-3xl mt-5">Languages</h2>
        <div className="flex flex-wrap justify-center items-center p-6">
          {/* App Development Skills */}
          {Appskills.map((skill, index) => (
      <div
        key={index}
        className={`m-3 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105  ${skill.color}`}
      >
        {/* <img src={skill.image} width={20} height={20} alt="logo"/> */}
        <span className='text-white text-4xl justify-center align-middle mx-auto items-center flex'>{skill.icon}</span>
        <span className="text-white text-lg font-semibold transform ">{skill.name}</span>
      </div>
    ))}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 mt-8 transform ease-in-out duration-500 translate-x-3">
      <h2 className="text-left text-3xl font-serif flex items-center ml-2">
        <strong className="bg-bg-ter text-bg-sec p-2">Web</strong>
        <strong className="border-b-8 border-bg-sec">Design</strong>
        <span className="bg-bg-fth cursor-pointer"></span>
        <IoIosArrowDropdown
          onClick={toggleWebDesign}
          className={`ml-2 text-4xl text-bg-ter font-bold transition-transform ${
            isWebDesign ? 'rotate-180 duration-1000' : 'rotate-0 duration-500'
          }`}
        />
      </h2>

      <div
        className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isWebDesign ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <h2 className="text-center font-pri text-3xl mt-5">Softwares</h2>
        <div className="flex flex-wrap justify-center items-center p-6">
          {/* Web Design Skills */}
          {Webdesign.map((skill, index) => (
      <div
        key={index}
        className={`m-2 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105  ${skill.color}`}
      >
        <span className='text-white text-4xl justify-center align-middle mx-auto items-center flex'>{skill.icon}</span>

        <span className="text-white text-lg font-semibold transform ">{skill.name}</span>
      </div>
    ))}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 mt-8 transform ease-in-out duration-500 translate-x-3">
      <h2 className="text-left text-3xl font-serif flex items-center ml-2">
        <strong className="bg-bg-ter text-bg-sec p-2">Other</strong>
        <strong className="border-b-8 border-bg-sec">Related Skills</strong>
        <span className="bg-bg-fth cursor-pointer"></span>
        <IoIosArrowDropdown
          onClick={toggleOtherSkills}
          className={`ml-2 text-4xl text-bg-ter font-bold transition-transform ${
            isOtherSkills ? 'rotate-180 duration-1000' : 'rotate-0 duration-500'
          }`}
        />
      </h2>

      <div
        className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isOtherSkills ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {/* <h2 className="text-center font-pri text-3xl mt-5">Softwares</h2> */}
        <div className="flex flex-wrap justify-center items-center p-6">
          {/* Other Related Skills */}
          {OtherRelatedSkills.map((skill, index) => (
      <div
        key={index}
        className={`m-2 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105  ${skill.color}`}
      >
        <span className='text-white text-4xl justify-center align-middle mx-auto items-center flex'>{skill.icon}</span>

        <span className="text-white text-lg font-semibold transform ">{skill.name}</span>
      </div>
    ))}
        </div>
      </div>
    </div>
  </>
    
  );
};

export default Skill;
