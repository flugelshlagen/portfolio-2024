import React from 'react';
import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa6";
import ImageCarousel from './ImageCarousel'; // Adjust the import path as necessary
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/main-img.png';

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
    <div id="main" className="h-[200vh]">
      <img src={img4} className="z-0 object-cover object-center w-full h-screen" alt="cover-photo"/>
      <div className='absolute top-[450px] left-[890px] z-1 w-[15%] h-[40px] flex flex-row justify-left items-center gap-7'>
        <a href='https://github.com/flugelshlagen' target='_blank' alt='github'><FaGithub className='w-6 h-6 text-white bg-black rounded-full'/></a>
        <a href='https://www.instagram.com/cole.nyix2/' target='_blank' alt='instagram'><FaInstagram className='w-6 h-6 text-white bg-black rounded-full'/></a>
        <a href='https://www.linkedin.com/in/min-thiha-79303a184/' target='_blank' alt='linkedin'><FaLinkedin className='w-6 h-6 text-white bg-black rounded-full'/></a>
      </div>
    </div>
  );
};

export default Main2;

