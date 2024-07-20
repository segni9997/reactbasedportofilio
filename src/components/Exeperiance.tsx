import {  useState } from 'react';
import { GoLink } from 'react-icons/go';
import defaultImage from '../styles/backnew.png';
import portfolioImage from '../styles/portof.png';
import apex from "../styles/apex.png";
import fsms from "../styles/Fsms.png";
import covid from "../styles/covid.png";
import hospital from "../styles/hospital.png";
import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 1,
    yearRange: '2020 - 2021',
    title: 'Covid-19 Awareness',
    description: 'Worked on developing websites using HTML, CSS, and PHP as a backend.',
    usedLanguage: 'HTML, CSS, JavaScript',
    backend: 'PHP',
    image: covid,
    purpose: 'School Project',
    projectLink: 'https://github.com/segni9997/CovidAwreness',
    backgroundColor: 'bg-blue-300',
    textColor: 'text-blue-400'
  },
  {
    id: 2,
    yearRange: '2020 - 2021',
    title: 'Hospital Management System',
    description: 'Digitalized the manual work of the organization for better patient information flow and history storage.',
    usedLanguage: 'HTML, CSS, JavaScript',
    backend: 'PHP',
    image: hospital,
    purpose: 'School Project',
    projectLink: 'https://github.com/segni9997/CovidAwrenes',
    backgroundColor: 'bg-green-300',
    textColor: 'text-green-400'
  },
  {
    id: 3,
    yearRange: '2022 - 2023',
    title: 'Flight Schedule Management System',
    description: 'Helps airline employees, especially pilots, cabin crew, and technicians, by notifying them of their upcoming flight schedules.',
    usedLanguage: 'React, CSS, Bootstrap 5',
    backend: 'C# (ASP.NET Core)',
    image: fsms,
    purpose: 'University Internship at Ethiopian Airlines',
    projectLink: 'https://github.com/segni9997/AMS',
    backgroundColor: 'bg-red-300',
    textColor: 'text-red-400'
  },
  {
    id: 4,
    yearRange: '2023 - 2024',
    title: 'Consultancy',
    description: 'Used for scholarship finding, learning scholarship-related courses, and tracking processes. Used for company consultancy work.',
    usedLanguage: 'React, CSS, Tailwind CSS',
    backend: 'Python Django framework, Djoser framework',
    image: apex,
    purpose: 'For Company',
    projectLink: 'https://github.com/segni9997/apex',
    backgroundColor: 'bg-yellow-300',
    textColor: 'text-yellow-400'
  },
  {
    id: 5,
    yearRange: '2023 - 2024',
    title: 'Face Recognition',
    description: 'Used on campus to monitor students in the cafeteria.',
    usedLanguage: 'React.js',
    backend: 'Python',
    image: defaultImage,
    purpose: 'School Project',
    projectLink: 'https://github.com/segni9997/FaceRecwithpython',
    backgroundColor: 'bg-purple-300',
    textColor: 'text-purple-400'
  },
  {
    id: 6,
    yearRange: '2023 - 2024',
    title: 'My Portfolio',
    description: 'The website showcasing my work, experiences, skills, certificates, and recommendations.',
    usedLanguage: 'React.js, Tailwind CSS',
    backend: 'None',
    image: portfolioImage,
    purpose: 'self',
    projectLink: 'https://github.com/segni9997/reactbasedportofilio',
    backgroundColor: 'bg-gray-300',
    textColor: 'text-gray-400'
  },
];

const ExperienceTimeline = () => {
  const [activeExperienceId, setActiveExperienceId] = useState<number | null>(null);

  const handleDetailToggle = (id: number) => {
    setActiveExperienceId(activeExperienceId === id ? null : id);
  };

  return (
    <div className="relative mt-8 w-full">
      <h2 className="text-left text-3xl font-serif flex items-center ml-2">
        <strong className="bg-bg-ter text-bg-sec p-2">My</strong>
        <strong className="border-b-8 text-bg-ter border-bg-sec">Experiences</strong>
        <span className="bg-bg-fth cursor-pointer"></span>
      </h2>

      <div className="overflow-hidden">
        <div className="flex flex-wrap justify-center items-center p-8 bg-b">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`transition-all duration-300 ease-in-out m-2 p-2 rounded-lg shadow-lg transform ${
                activeExperienceId === exp.id ? 'w-full' : 'w-96'
              } ${exp.backgroundColor} ${activeExperienceId === exp.id ? 'absolute z-10' : ''}`}
              style={{
                position: activeExperienceId === exp.id ? 'relative' : 'static',
                top: activeExperienceId === exp.id ? '0' : 'auto',
                left: activeExperienceId === exp.id ? '0' : 'auto',
                zIndex: activeExperienceId === exp.id ? '10' : 'auto'
              }}
            >
              <span className="text-4xl justify-center font-pri align-middle mx-auto items-center flex text-bg-ter">
                {exp.title}
              </span>
              {activeExperienceId === exp.id && (
                <>
                  <img src={exp.image} className='lg:w-full mx-auto lg:h-96' alt={exp.title} />
                  <div className='justify-between flex items-center bg-slate-50 p-1 rounded-full mt-3'>
                    <p className="p-3 text-sm font-semibold font-serif text-left text-bg-ter flex">
                      <p className='w-3 h-5 bg-red-600 mr-1 text-center'></p>
                      <p className='border-b-4 border-bg-sec'>Description</p>
                    </p>
                    <Link to={exp.projectLink} target="_blank">
                    <GoLink className='mr-4 text-xl text-bg-ter font-extrabold animate animate-pulse duration-1000 hover:animate-none hover:scale-110 hover:text-bg-sec' />
                    
                    </Link>
                  </div>
                  <p className="text-left w-full p-2 text-xl font-serif text-white">{exp.description}</p>
                  <p className="p-3 text-sm font-semibold font-serif text-left text-bg-ter flex">
                    <p className='w-3 h-5 bg-red-600 mr-1 text-center'></p>
                    <p className='border-b-4 border-bg-sec'>Language used</p>
                  </p>
                  <p className="text-left w-full p-2 text-xl font-serif text-white">
                    {exp.usedLanguage.split(",").map((item) => (
                      <span key={item} className='bg-bg-sec rounded-ss-xl rounded-ee-xl p-2 mr-1'>{item}</span>
                    ))}
                  </p>
                  <p className="text-left w-full p-2 text-xl font-serif text-white">
                    {exp.backend.split(",").map((item) => (
                      <span key={item} className='bg-bg-ter rounded-ss-xl rounded-ee-xl p-2 mr-1'>{item}</span>
                    ))}
                  </p>
                </>
              )}
              <div className='flex justify-between items-stretch w-full p-2 text-white'>
                <span className="text-sm font-semibold transform font-pri text-bg-ter">
                  {exp.yearRange}
                </span>
                <button
                  onClick={() => handleDetailToggle(exp.id)}
                  className="font-serif text-sm font-semibold transform text-bg-ter p-3 rounded-ss-full rounded-ee-full bg-white"
                >
                  {activeExperienceId === exp.id ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
