import React from 'react';
import image from '../assets/img1.png';

const Main = () => {
  return (
    <div id="main">
      <div className='m-3 relative top-10 md:flex'>
      <img src={image} className='w-full h-[90vh] object-cover rounded-[3%]'/>
      </div>
    </div>
  )
}

export default Main