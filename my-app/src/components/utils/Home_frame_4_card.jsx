import React from 'react'
import { assets } from '../../assets/assets'


const Home_frame_4_card = ({head,para,img}) => {
  return (
    <div className='p-[2vw] rounded-[15px]  bg-[#ffffff86] '>
      <div className=''>
        <div className=' md:h-[17vw]'>
        <p className='py-[1.5vw] font_20 m_font_20'>{head}</p>
        <p className='font_16 m_font_16'>{para}</p>
        </div>  
              <hr className="my-[8vw] md:my-[2vw] h-[0.5px] bg-[rgba(0,0,0,0.25)] border-0" />
              {/* Child image will change bg when parent is hovered */}
        <div className='md:h-[3vw]'>   
        <img src={img} alt='' className='md:w-[9vw] ' />  
        </div>     
      </div>



    </div>
  )
}

export default Home_frame_4_card