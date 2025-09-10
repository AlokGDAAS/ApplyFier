import React from 'react'
import { assets } from '../../assets/assets'

const Home_frame_5_card = ({img,time,para_1,para_2}) => {
  return (
    <div className='md:w-[20.13vw] '>
        <div>
            <img src={img} alt='' className='w-full'/>
        </div>
        <p className='font_12 m_font_16 mt-3'>{time}</p>
        <div className='font_20_ln m_font_20 md:my-[0.5vw] my-[4vw]'>{para_1}<br/>{para_2}</div>
    </div>
  )
}

export default Home_frame_5_card

