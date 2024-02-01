import React, { useState } from 'react';
import image1 from '../assets/img1.png';
import image2 from '../assets/img2-1.png';
import image3 from '../assets/img3-1.png';

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image1,
    },
  ];

  const handleSlideChange = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Define base classes
  const containerClasses = 'max-w-[1080px] w-full h-[70vh] scale-75 md:object-right md:scale-100 md:h-[90vh] object-cover rounded-[3%]';

  // Define dynamic classes based on currentSlide
  const dynamicClasses = (slideIndex) => {
    switch (slideIndex) {
      case 0:
        return 'object-[90%] md:object-right lg:object-center';
      case 1:
        return 'object-[50%] md:object-center';
      case 2:
        return 'object-[40%] md:object-left';
      default:
        return 'object-center';
    }
  };

  return (
    <div
      id="main"
      onClick={handleSlideChange}
      className='m-0 max-w-full pt-[70px] relative md:flex justify-center items-center'
    >
      <img
        src={slides[currentSlide].url}
        className={`${containerClasses} ${dynamicClasses(currentSlide)}`}
        alt={`Slide ${currentSlide + 1}`}
      />
    </div>
  );
};

export default Main;
