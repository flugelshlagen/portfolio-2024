import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineHome, AiOutlineDesktop} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'

const Sidenav = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    }
  return (
    <div>
        <AiOutlineMenu size={20} onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden hover:animate-pulse'/>  
        {
            nav==true ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a href="#main" className='w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadown-gray-400 m-2 p-4 cusor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20}/>
                        <span className='pl-4'>Home</span>
                    </a>
                    <a href="#projects" className='w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadown-gray-400 m-2 p-4 cusor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineDesktop size={20}/>
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a href="#about" className='w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadown-gray-400 m-2 p-4 cusor-pointer hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20}/>
                        <span className='pl-4'>About</span>
                    </a>
                </div>
            )
            :(
                <div>

                </div>
            )
        }
    </div>
  )
}

export default Sidenav