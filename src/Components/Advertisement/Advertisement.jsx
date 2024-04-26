import React, { useState } from 'react';

function Advertisement({ images, link }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <img
          src={images[currentIndex]}
          alt="Advertisement"
          className="w-full rounded-lg shadow-md max-h-[500px] transition-transform duration-500 transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        />
      </a>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md" onClick={prevSlide}>
        Prev
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

export default Advertisement;
