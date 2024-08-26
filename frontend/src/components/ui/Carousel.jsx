import React, { useState, useEffect } from "react";

const Carousel = ({ images, titles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  // Ensure titles array is defined and matches the length of images array
  const currentTitle =
    titles && titles.length === images.length ? titles[currentIndex] : "";

  return (
    <div className='relative w-full h-80 overflow-hidden rounded-[10px] shadow-lg'>
      <div
        className='flex transition-transform duration-500'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className='min-w-full h-80 relative'>
            <img
              src={image}
              alt={`Slide ${index}`}
              className='w-full h-full object-cover brightness-50 rounded-[10px]'
            />
          </div>
        ))}
      </div>
      {/* Dots navigation with dynamic title */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2'>
        {currentTitle && (
          <div className='text-white text-xl font-bold'>{currentTitle}</div>
        )}
        <div className='flex space-x-2'>
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
