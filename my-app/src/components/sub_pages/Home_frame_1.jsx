import React from 'react'
import { assets } from '../../assets/assets'
import Home_footer from '../pages_sub_parts/Home_footer'


const Home_frame_1 = () => {
  return (
    <div className=''>
    <div className="md:h-[55vw] md:pt-[10vw] pt-[8vw]">
      <div className="md:flex  md:w-[85vw] mx-auto md:h-[40vw] md:relative md:pr-6">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between md:pb-30 md:pt-20 md:pr-35 md:relative">
          <div className='flex items-center'>
            <div className='w-1/5 pr-4 '><hr/></div>
          <p className="font_20 rounded-full px-4 m_font_14" style={{backgroundColor:"#ffffff7f"}}>#1 Hiring Talent Platform</p>          
          </div>

          <h1 className="home-font  m_font_46 my-[4vw] md:my-0"><span className='gradient-text'>Uplift</span> Your Hiring<br className='hidden md:block'/> with Applyfier</h1>
          <p className="text-base font-normal m_font_16">
            Our platform is more than just a job portal, it's a dynamic space where
            dreams take flight and companies find their next star performers.
          </p>
          <div className="flex md:gap-2 border rounded-full md:w-fit justify-between md:justify-start my-10 md:my-0">
            <input type="text"  placeholder="Your email"  className=" md:px-4 pl-4 md:py-2 py-4  border-0 focus:outline-none focus:ring-0 focus:border-transparent"/>
            <button className="cursor-pointer m_font_16 bg-yellow-500 md:px-6 px-4 md:py-2 rounded-full md:m-1 m-2 hover:scale-105 transition-all duration-300">Start Here ➡</button>
          </div>
          <div className='hidden md:block absolute bg-white/80 rounded-2xl h-[8vw] w-[18vw] right-[-25%] bottom-[15%] z-30 p-[1.5vw]'>
          <div className='flex font_20 pb-[0.5vw]'>
            <img src={assets.rating_star} alt=''/>
            <img src={assets.rating_star} alt=''/>
            <img src={assets.rating_star} alt=''/>
            <img src={assets.rating_star} alt=''/>
            <img src={assets.rating_star} alt=''/>
          </div>
          <p className='pb-[0.3vw]'>Aura Laura</p>
          <p>"Awesome Website"</p>
            
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className="">
            <div className=''>
            <div className="md:rounded-[40px] rounded-[30px] md:min-w-[35vw]  md:min-h-[13vw] min-h-[29vw]" style={{ backgroundColor: "#9A72F9" }}></div>
            <div className="md:rounded-[40px] rounded-[30px]  md:min-h-[14vw] min-h-[29vw]" style={{ backgroundColor: "#9A72F9" }}></div>
            <div className="md:rounded-[40px] rounded-[30px]  md:min-h-[13vw] min-h-[29vw]" style={{ backgroundColor: "#9A72F9" }}></div>
            </div>
           <div className='absolute top-0   md:hidden'>
            <img src={assets.girl_1} alt='' className='md:h-[40vw]  md:w-[39vw] w-[85vw]'/>
          </div> 

          </div>
       


        </div>
      </div>

           <div className='md:absolute md:bottom-14 md:right-25 hidden md:block'>
            <img src={assets.girl_1} alt='' className='md:h-[40vw]  md:w-[39vw] w-[85vw]'/>
          </div>   

    </div>
    <Home_footer/>
    </div>
  )
}

export default Home_frame_1