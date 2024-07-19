import  { useState } from 'react';

import { Link } from 'react-router-dom';
import defaul from "../styles/backnew.png"
import porto from "../styles/portof.png"

const experiences = [
  {
    yearRange: '2020 - 2021',
    title: 'Covid-19 Awareness',
    description: 'Worked on developing web-sites using HTML, CSS and PHP as a backend.',
    usedLanguge: "HTML, CSS, javaScript",
    backend: "PHP",
    image: 'https://th.bing.com/th/id/R.b1ff446f1a3f86ad14a6b8a4604a9d0f?rik=qArBCP%2fEnZMN1Q&pid=ImgRaw&r=0',
    purpose: "School Project",
    projectLink:"https://github.com/segni9997/CovidAwreness"
  },
  {
    yearRange: '2020-2021',
    title: 'Hospital Managemetnt system',
    description: 'Hospital management tried to digitalize the manual work of the organization and for good flow of patient information. can be used in batter history storage',
    usedLanguge: "HTML, CSS, javaScript",
    backend: "PHP",
    image: defaul,
    purpose: "School Project",
    projectLink:'https://github.com/segni9997/CovidAwrenes'

  }, {
    yearRange: '2022-2023',
    title: 'Flight Schedule Management System',
    description: 'The Project helps Airline emplooyees. Specially For Pilot, Cabin-crew, Technichian. it helps them in notifying them with their upcoming flight schedule. ',
    usedLanguge: "React, CSS, Bootstrap 5 ",
    backend: "C#(ASP.NET Core)",
    image: defaul,
    purpose: "Univeristy Internship at Ethiopian Airlines",
    projectLink:"https://github.com/segni9997/AMS , "
  }, {
    yearRange: '2023-2024',
    title: 'Consultancy',
    description: 'The Project can be used in scholarship finding ,learn scholarship related course. it can used also in tracking process like scholarship . it is used Company work consultancy',
    usedLanguge: "React, CSS, Tailwind css",
    backend: "Python Django framework , djoser framwork",
    image: defaul,
    purpose: "for Company",
    projectLink:"https://github.com/segni9997/apex"

  }, {
    yearRange: '2023 - 2024',
    title: 'Face Recognition',
    description: 'It Can be used in Campus to Monitor student in Cafteria',
    usedLanguge: "React js",
    backend: "Python",
    image: defaul,
    purpose: "School Project",
    projectLink:"https://github.com/segni9997/FaceRecwithpython"
  },
  
  {
    yearRange: '2023 - 2024',
    title: 'My Portofilio',
    description: ' The Website you are seeing My Work. it helped me to show my experiance,skills, certeficates, and recomendation i got from different place and time. ',
    usedLanguge: "React js, Tailwind Css",
    backend: "None",
    image: porto,
    purpose: "School Project",
    projectLink:"https://github.com/segni9997/FaceRecwithpython"
  },
 

];







const ExperienceTimeline = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isdetail, setIsDetail] = useState(false)

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
    };
  

    return (
        <div className='mx-auto items-center justify-center '>
    <div className="text-left ms-8 "><span className="cursor-pointer text-sm lg:text-4xl text-bg-ter font-bold font-pri"><Link to="/experiances">Experiance</Link>:</span></div>

         <p className="mb-2 lg:text-2xl font-extrabold text-bg-ter font-pri "> Year: {experiences[currentIndex].yearRange}</p>
      <div className="relative flex items-center  w-full  justify-center h-1/2   ">
      
        <button
          onClick={handlePrev}
          className="absolute  font-extrabold lg:text-xl  left-0 z-10 p-2 m-2 text-white bg-bg-sec hover:scale-105 lg:w-20 lg:h-20 rounded-full hover:bg-bg-fou"
        >
          ←
        </button>
        <div className="flex justify-center ml-24 ">

          <div className="flex-shrink-0 p-6 bg-white border text-white border-gray-200 rounded-lg  shadow-xl  shadow-bg-sec bg-gradient-to-r from-bg-sec to-bg-ter">
            <img
              src={experiences[currentIndex].image}
              alt={experiences[currentIndex].title}
              className="mb-4 rounded items-center justify-center h-48 mx-auto w-full"
            />
            <h2 className="mb-2 text-xl font-bold">{experiences[currentIndex].title}</h2>
           
           
            {isdetail && (
  <div className="text-left font-serif">
    <span className="items-start justify-start text-xl font-bold">Description</span>

    <p className="mb-4  max-w-md">{experiences[currentIndex].description}</p>
    <span className="items-start justify-start text-xl font-bold">Front-End:</span>
    <ul className="list-none  mx-10  text-bg-ter font-semibold">
      {experiences[currentIndex].usedLanguge?.split(",").map((language, index) => (
        <li key={index}>{language}</li>
      ))}
    </ul>
    <span className="items-start justify-start text-xl font-bold">Back-End:</span>

    <ul className="list-none  mx-10  text-bg-ter font-semibold">
      {experiences[currentIndex].backend?.split(",").map((language, index) => (
        <li key={index}>{language}</li>
      ))}
    </ul>
    {experiences[currentIndex].projectLink && (
   <div className="flex justify-center mt-4">
   <a
     href={experiences[currentIndex].projectLink}
     target="_blank"
     rel="noopener noreferrer"
     className="text-bg-ter bg-white  hover:bg-bg-ter hover:text-white transition-colors duration-300 py-2 px-4 rounded-xl"
   >
     View Project
   </a>
 </div>
    )}
  </div>
)}

<br className='mt-3 mb-3'/>
           <button onClick={()=>setIsDetail(!isdetail)} className="bottom-10 mt-5 border-2 border-gradient-to-r  from-bg-ter to-bg-sec p-2 rounded-3xl font-serif transition transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:font-pri hover:bg-bg-ter">
  {isdetail ? "Less" : "Detail"}
</button>

            <p>{currentIndex +1} of  {experiences.length} </p>
          </div>
        </div>
          <button
        onClick={handleNext}
        className="absolute right-0 z-10 p-2 m-2 lg:w-20 lg:h-20 text-white bg-bg-ter rounded-full hover:bg-bg-fth hover:scale-105 "
      >
        →
      </button>
      </div>
    
      </div>
    );
}
   



export default ExperienceTimeline;
