import React from 'react';
import ImageCarousel from './ImageCarousel'; // Adjust the import path as necessary
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const Main2 = () => {
  const images = [
      img1,img2,img3

    // Add more image URLs as needed
  ];
    const text = [

        "Victoria BC 2023",
        "White Rock BC 2022",
        "Victoria BC 2023"

        
    ];

  return (
    <div>
      <ImageCarousel images={images} text={text} />
    </div>
  );
};

export default Main2;

