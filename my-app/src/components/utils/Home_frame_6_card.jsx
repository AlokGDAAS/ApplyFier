import React from 'react'

const Home_frame_6_card = ({contnt}) => {
  return (
    <div className='md:w-[27vw] md:p-[2.56vw] p-[7vw] rounded-xl flex flex-col my-16 hover:text-white hover:bg-blue-400 md:bg-[#ffffff50] bg-blue-300 transition-color duration-600 cursor-pointer'>
        <h1 className='font_20 mb-[1vw] m_font_20 pt-[4vw] md:pt-0'>{contnt.head_1}</h1>
        <p  className='font_20_normal m_font_16 '>{contnt.head_2}</p>
        <p className='font_20_normal m_font_16 md:my-[2vw] my-[8vw]'><span className='font_32 m_font_32'>{contnt.price}</span>{contnt.dura}</p>
        <button className="cursor-pointer text-base font-normal bg-yellow-500 px-6 py-2 rounded-full m-1 hover:scale-105 transition-all duration-300 " style={{color:"#2A2A2A"}}>{contnt.button}</button>
        <hr className='md:my-[1.5vw] my-[8vw] border-0 border-t-[0.5px] border-[rgba(0, 0, 0, 0.75)]'/>
        <div className=' font_16 pb-[2vw] md:pb-0 flex md:block flex-col gap-4'>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
              <span>{contnt.desc_1}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
              <span>{contnt.desc_2}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
              <span>{contnt.desc_3}</span>
            </div>

        </div>
    </div>
  )
}

export default Home_frame_6_card