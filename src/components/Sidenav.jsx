import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineHome, AiOutlineDesktop} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'

const Sidenav = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    }

  return (
    <div className='w-[100%] h-[53px] bg-white fixed top-0 z-[1] border-b border-black'>
        <div>
            <a href="#main" className='relative items-center font-montserrat top-3 left-4'><span className='text-xl'>MIN</span></a>
        </div>
        <AiOutlineMenu size={20} onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden hover:animate-pulse'/>  
        {
            nav==true ? (
                <div className='fixed z-10 flex flex-col items-center justify-center w-full h-screen bg-white/90'>
                    <a onClick={handleNav} href="#main" className='w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20}/>
                        <span className='pl-4'>Home</span>
                    </a>
                    <a href="#projects" className='w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineDesktop size={20}/>
                        <span className='pl-4'>Work</span>
                    </a>
                    <a href="#about" className='w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
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
        <div className='md:flex hidden fixed top-[2%] right-[5%] gap-10'>
            <div><a href='#main' className='relative transition-all duration-300 before:absolute before:left-0 before:content-[""] before:bottom-[-5px] before:w-0 before:h-[2px] before:opacity-0 before:transition-all before:duration-300 before:bg-black hover:before:w-full hover:before:opacity-100 uppercase text-sm font-medium'>Home</a></div>
            <div><a href='#projects' className='relative transition-all duration-300 before:absolute before:content-[""] before:bottom-[-5px] before:left-0 before:w-0 before:h-[2px] before:opacity-0 before:transition-all before:duration-300 before:bg-black hover:before:w-full hover:before:opacity-100 uppercase text-sm font-medium'>Projects</a></div>
            <div><a href='#about' className='relative transition-all duration-300 before:absolute before:content-[""] before:bottom-[-5px] before:left-0 before:w-0 before:h-[2px] before:opacity-0 before:transition-all before:duration-300 before:bg-black hover:before:w-full hover:before:opacity-100 uppercase text-sm font-medium'>About</a></div>
        </div>
    </div>
  )
}

export default Sidenav
