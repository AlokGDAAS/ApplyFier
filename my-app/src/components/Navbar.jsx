import React from 'react'
import { assets } from '../assets/assets'
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
  return (
   <div>
    <div className='w-[80vw]  fixed top-0 left-35 z-10 hidden md:block'>
        <div className='flex justify-between  backdrop-blur-sm  py-[3vh]'>
            
            <div>
               <img src={assets.logo_1} alt='' className='cursor-pointer'/>
            </div>

            <div className='flex gap-[2vw]'>
               <p  className='cursor-pointer text-base font-normal'>Features</p>
               <p  className='cursor-pointer text-base font-normal'>About Us</p>
               <p  className='cursor-pointer text-base font-normal'>Pricing</p>
               <p  className='cursor-pointer text-base font-normal'>Blog</p>
               <p  className='cursor-pointer text-base font-normal'>Contact Us</p>
            </div> 

            <div className='flex gap-[2vw] items-center'>
               <p  className='cursor-pointer text-base font-normal'>Login</p>
               <p  className='cursor-pointer  text-base font-normal bg-yellow-500 px-6 py-2 rounded-full hover:scale-105 transition-all duration-300'>Register Now ➡</p>
            </div>
        </div>
    </div>
    <div className= ' pt-4'>
      <div className=' px-4 py-2 md:hidden flex justify-between  rounded-full bg-white mx-4'>
      <div className='flex items-center'>
         <img src={assets.logo_1} alt='' className='cursor-pointer w-30'/>         
      </div>

      <div onClick={() => setIsMenu(prev => !prev)} className="md:hidden cursor-pointer p-[0.1rem] rounded-lg   flex items-center">
        <MdMenu  size={30} className='text-black'/> 

      </div> 
      </div>
    </div>
    </div>
  )
}

export default Navbar