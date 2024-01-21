import React from 'react';
import image from '../assets/img2.png';

const Main = () => {
  return (
    <div id="main">
      <div className='m-3 max-w-full relative top-10 md:flex justify-center items-center'>
      <img src={image} className='max-w-[1080px] w-full h-[70vh] scale-75 object-[90%] md:object-right md:scale-100 md:h-[90vh] object-cover rounded-[3%]'/>
      </div>
    </div>
  )
}

export default Main