import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pb-4 md:pb-0' >
      <div className='md:h-[29.86vw] md:p-[7vw] p-[7vw] flex md:flex-row flex-col gap-10 md:gap-0 rounded-3xl md:rounded-0'  style={{backgroundColor:"#ffffffc2"}}>

        <div className='md:basis-1/3 md:pr-20'>
        <div className=' mb-6'>
          <img src={assets.footer_logo_1} alt=''/>
        </div>  
          <div>
            <p className='font_16 m_font_16'>Applyfier is an AI Recruitment Software 
              enabling human resources<br/> departments and recruitment 
              agencies to source and hire in the most effective way.</p>
          </div>

        </div>

        <div className='md:basis-1/3 flex flex-col md:items-center md:gap-5 gap:2 font_32 m_font_16'>
          <h1>Features</h1>
          <h1>About Us</h1>
          <h1>Pricing</h1>
          <h1>Blog</h1>
          <h1>Contact Us</h1>
        </div>

        <div className='flex md:flex-row flex-col md:basis-1/4 justify-between font_16'>
          <div className=''>
             <h2  className='font_20 md:mb-6 mb-2 m_font_20' >Resources</h2>
             <div  className='flex flex-col gap-2' >
             
             <p>Blogs</p>
             <p>Apps</p>
             <p>Learn</p>
             <p>Integration</p>
             <p>Careers</p>
             </div>
          </div>
          <div>
          <div className=' mt-10 md:mt-0'>
             <h2  className='font_20 md:mb-6 mb-2  m_font_20' >Company</h2>
             <div  className='flex flex-col gap-2' >
             <p>Our Story</p>
             <p>Our Team</p>
             <p>Press</p>
             <p>Contact Us</p>   
             </div>
          </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer