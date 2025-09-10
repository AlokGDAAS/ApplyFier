import React from 'react'
import Home_frame_4_carousel from '../utils/Home_frame_4_carousel'
import Swiper_carousel from '../utils/Swiper_carousel'

const Home_frame_4 = () => {


  return (
    <div className='md:h-[58vw] md:py-[7vw] md:pl-[6vw]'>
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between  md:pt-20 md:pr-10">
          <div className='flex items-center'>
            <div className='w-1/5 pr-4'><hr/></div>
          <p className="text-lg font-normal text-lg rounded-full px-4" style={{backgroundColor:"#ffffff7f"}}>Testimonials</p>          
          </div>

          <h1 className="home-font m_font_36 my-[2vw]">What They are<span className='gradient-text'> Saying</span></h1>

          <div>
            <p className='m_font_16 md:hidden'>Discover the stories and experiences of individuals and
companies who have found success and excellence through Applyfier</p>
          </div>


        </div>

        <div className=''>
          <Swiper_carousel/>            
        </div>

    </div>
  )
}

export default Home_frame_4