import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-b border-gray-200'>
      <button
        className='flex justify-between items-center w-full py-4 text-left text-gray-800 hover:text-primary focus:outline-none'
        onClick={toggleAccordion}
      >
        <span className='font-semibold'>{title}</span>
        <svg
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          width='20'
          height='20'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path
            fillRule='evenodd'
            d='M5.23 7.21a.75.75 0 011.06-.02L10 10.943l3.71-3.755a.75.75 0 011.08 1.04l-4.26 4.31a.75.75 0 01-1.08 0l-4.26-4.31a.75.75 0 01.02-1.06z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className='py-4'>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
