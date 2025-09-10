import React from 'react'
import { assets } from '../../assets/assets'

const Home_footer = () => {

  return (
    <div className='md:max-w-[80vw] mx-auto  md:h-[15.5vw] md:p-[3.47vw] pt-20 md:pt-0' >
       <p className='m_font_14 text-center md:text-start'>Trusted by 100+ fast-growing-company</p>
       <div className='flex  md:justify-between items-center mx-auto py-7'>
        <div><img src={assets.disney_logo_1} alt=''/></div>
        <div><img src={assets.fedex_logo_1} alt=''/></div>
        <div><img src={assets.ford_logo_1} alt=''/></div>
        <div><img src={assets.gap_logo_1} alt=''/></div>
        <div><img src={assets.kroger_logo_1} alt=''/></div>
        <div><img src={assets.uber_logo_1} alt=''/></div>
       </div>
    </div>
  )
}

export default Home_footer