import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      
      <div className="relative m-3 ">
      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center  justify-center bg-black bg-opacity-75 z-50">
          <div className="modal-container bg-transparent rounded-lg p-4 max-h-md max-w-2xl relative">
            <GrClose className="lg:text-3xl lg:absolute lg:top-0 text-white -right-8 cursor-pointer " onClick={closeModal} />
            <img
              src={imageSrc}
              alt={title}
              className="w-[1000px] h-[550px] object-fit cursor-pointer"
              onClick={openModal}
            />
           
          </div>
        </div>
      )}
         {/* <h2 className="text-xl text-bg-sec text-left mt-5 mb-3 bg-bg-ter max-w-md p-2  font-pri ">{title}</h2> */}

      <div className="card overflow-hidden rounded-lg shadow-md">

        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={openModal}
        />
         <h2 className="text-xl text-bg-ter  font-pri bg-bg-sec font-semibold">{description}</h2>
      </div>
    </div>
    </>
  );
};

export default Card;
