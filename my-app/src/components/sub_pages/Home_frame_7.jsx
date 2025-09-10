import React from 'react'
import { assets } from '../../assets/assets'

const Home_frame_7 = () => {
  return (
    <div className='md:h-[34vw]  md:px-[7vw] md:pb-[7vw] my-20 md:my-0 '>
        <div style={{backgroundColor:"#ffffff98"}} className='px-[7vw]  flex md:flex-row flex-col rounded-2xl'>
            <div className='md:py-[4vw] py-[10vw]'>
            <div className=''>
              <p className='font_32 m_font_32_ln_150 md:mb-4 mb-8'>Try Applyfier for free during 14-day with no commitment.<br className='hidden md:block'/>No credit card required</p>
            </div>
            <div>
                <button className="cursor-pointer  text-base font-normal bg-yellow-500 px-6 py-2 rounded-full m-1 hover:scale-105 transition-all duration-300">Start now ➡</button>  
            </div>
            </div>            
            <div className='md:flex items-end'>
                <img src={assets.girl_3}/>
            </div>

        </div>

    </div>
  )
}

export default Home_frame_7