import React from 'react'


const Home_frame_2_card = ({img , head_1 , head_2 ,head_3, para}) => {
  return (
<div className='my-4 md:my-0 group md:max-w-[27vw] md:max-h-[27vw] p-8 rounded-[15px] 
     shadow-sm bg-[#ffffff86] hover:bg-blue-400 hover:text-white 
     hover:scale-105 hover:shadow-lg 
     transition-all duration-500 ease-in-out cursor-pointer'>
      
      {/* Child image will change bg when parent is hovered */}
      <img 
        src={img} 
        alt='' 
        className='p-4 rounded-full bg-[#FEA334] transition-colors duration-300 group-hover:bg-[#ffffff86]' 
      />

      <div>
        <p className='py-4 font_32 m_font_32_ln_0 leading-tight'>{head_1}<br className='' /> {head_2}<br className='' /> {head_3}</p>
        <p className='font_16 m_font_16'>{para}</p>
      </div>
    </div>
  )
}

export default Home_frame_2_card
