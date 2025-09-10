import React from 'react'
import { assets } from '../../assets/assets'
import Home_footer from '../pages_sub_parts/Home_footer'


const Home_frame_3 = () => {
  return (
    <div className=''>
    <div className="md:h-[49.23vw] py-[3.47vw] md:px-[7vw] ">
      <div className="flex flex-col md:flex-row  w-[85vw] mx-auto md:h-[40vw]  md:pr-6">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between pb-30 pt-20 md:pr-10">
          <div className='flex items-center'>
            <div className='w-1/5 pr-4'><hr/></div>
          <p className="m_font_14 font_20_normal rounded-full px-4 py-2" style={{backgroundColor:"#ffffff7f"}}>About Us</p>          
          </div>
        
          <h1 className="home-font m_font_36 mt-[6vw] md:mt-[1vw]">Get to Know Us<span className='gradient-text'> Better</span></h1>
          <p className="font_20_normal_ln_150  m_font_16 md:pr-60 my-[8vw] md:my-[1vw]">
            Applyfier was founded in 2020 to match the right talent globally with companies. 
            Founded with a vision to redefine the way individuals connect with career paths and organizations 
            build their dream teams, our journey is woven with the stories of countless professionals and businesses 
            that have found success through collaboration.
          </p>
         
          <div className="flex gap-2  rounded-full ">

            <button className="cursor-pointer font_16_md m_font_16_md bg-yellow-500 px-6 py-2 rounded-full m-1">Read More ➡</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className=" ">
            <div className=''>
            <div className="rounded-[40px] md:min-w-[35vw]  md:min-h-[13vw] min-h-[30vw] " style={{ backgroundColor: "#9A72F9" }}></div>
            <div className="rounded-[40px]  md:min-h-[13vw] min-h-[30vw]" style={{ backgroundColor: "#9A72F9" }}></div>
            <div className="rounded-[40px]  md:min-h-[13vw] min-h-[30vw]" style={{ backgroundColor: "#9A72F9" }}></div>
            </div>
          </div>
       
           <div className='absolute bottom-0 right-12 md:hidden'>
            <img src={assets.girl_2} alt='' className='h-[94vw]'/>
          </div>  

        </div>
      </div>
      <div className='md:relative'>

           <div className='md:absolute md:bottom-4 md:right-20 hidden md:block'>
            <img src={assets.girl_2} alt='' className='h-[42.29vw]'/>
          </div>   
      </div>   
    </div>

    </div>
  )
}

export default Home_frame_3