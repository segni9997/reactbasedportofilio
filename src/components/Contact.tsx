import React, { useState } from 'react';
import { BsGithub, BsLinkedin, BsMegaphoneFill, BsPhone, BsTelegram, BsWhatsapp } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import { NavBar } from './pages/NavBar';

export const ContactMe = () => {
  const Contacts = [
    {
      id: 1,
      icon: <BsGithub />,
      link: 'https://github.com/segni9997'
    },
    {
      id: 2,
      icon: <BsPhone />,
      link: '+251-983-604-770'
    },
    {
      id: 3,
      icon: <BsTelegram />,
      link: 'https://t.me/JESUS_LOVES_US_A_LOT'
    },
    {
      id: 4,
      icon: <BsLinkedin />,
      link: 'https://www.linkedin.com/in/segni-asrat-30068b198/'
    },
    {
      id: 5,
      icon: <BsMegaphoneFill />,
      link: 'mailto:segni.836@gmail.com'
    },{
        id: 6,
        icon: <BsWhatsapp />,
        link: 'https://wa.me/251983604770'
      }
  ];
 const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // e.preventDefault();
    // Simulate sending email
    sendEmail(formData);
    // Clear form after submission
    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
  };

  const sendEmail = (formData: { fullName: string; email: string; message: string }) => {
    // For demonstration, log the message to the console (replace with actual sending logic)
    console.log(`Sending email to: segni.836@gmail.com\n\nMessage:\n${formData.message}`);
    // Here you would typically implement logic to send an email using a backend service or API
    // Example: fetch('/send-email', { method: 'POST', body: JSON.stringify(formData) });
  };
  return (
    <NavBar>
 <div className="w-2/3 mx-auto shadow-sm shadow-amber-600  mt-10 grid lg:grid-cols-5 rounded-lg">
      <div className="col-span-2 w-full h-full bg-bg-ter rounded-l-lg relative flex flex-col items-start justify-center text-bg-sec space-y-4 pl-4"> 
        <h2 className=' justify-center  font-extrabold font-pri text-3xl items-center text-center'>Contact Me</h2>
        {Contacts.map((item) => (
          <div key={item.id} className="flex items-center space-x-2 w-full text-xl">
            {item.icon}
            <p className="text-sm text-left font-bold flex-wrap w-full p-2">
              <Link to={item.link} className="text-bg-pri hover:underline break-all ">{item.link}</Link>
            </p>
          </div>
        ))}
      </div>
      <div className="col-span-3 h-full rounded-r-lg">
  <div className='mt-10 p-4 '>
  <div >
          <label htmlFor="fullName" className="block text-sm font-serif text-left font-medium text-bg-ter">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-serif text-left text-sm font-medium text-bg-ter">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-serif text-left text-sm font-medium text-bg-ter">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            cols={7}
            value={formData.message}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-center mt-5">
          <button
            type="submit"
            onClick={()=>handleSubmit()}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bg-sec hover:border-indigo-700 hover:bg-no focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </div>
  </div>
      
      </div>
    </div>
    </NavBar>
   
  );
};

