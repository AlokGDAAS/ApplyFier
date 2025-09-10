import React from 'react'
import { assets } from '../../assets/assets'
import Home_frame_5_card from '../utils/Home_frame_5_card'

const Home_frame_5 = () => {

  const contnt = [
    {
      id:1,
      img:assets.home_frame_5_img_1,
      time:"2 days ago . 7 min read",
      para_1:"Dive on Remote Work:",
      para_2:"Adopting WFA"
    },
    {
      id:2,
      img:assets.home_frame_5_img_2,
      time:"2 days ago . 7 min read",
      para_1:"Navigating the Job Search in the Digital Age",
      para_2:""
    },
    {
      id:3,
      img:assets.home_frame_5_img_3,
      time:"1 days ago . 6 min read",
      para_1:"Building a Diverse and Inclusive Workplace",
      para_2:""
    },
    {
      id:4,
      img:assets.home_frame_5_img_4,
      time:"3 days ago . 5 min read",
      para_1:"Mastering the Virtual",
      para_2:"Interview: Tips for Success"
    },
  ]
  return (
    <div className=' md:py-[3.5vw] md:px-[7vw]'>
                {/* LEFT SIDE */}
        <div className="flex flex-col justify-between pb-10 pt-20 ">
          <div className='flex items-center'>
            <div className='w-1/5 pr-4'><hr/></div>
          <p className="text-lg font-normal text-lg rounded-full px-4" style={{backgroundColor:"#ffffff7f"}}>Blog</p>          
          </div>
         <div className='flex justify-between items-end'>
            <h1 className="home-font m_font_36 pt-8">From Our <br className='md:hidden'/><span className='gradient-text'> Blog</span></h1>
            <p className='font_20 cursor-pointer'>See All ➡</p>
         </div>
         
        </div>

          <div className="relative hidden md:block">
            <div className="mb-[2vw]">
              <img
                src={assets.home_frame_5_img_lg}
                alt=""
                className="w-[86vw]"
              />
            </div>

            <div className="absolute top-0 w-full">
              <div className="relative p-6 z-10 rounded-2xl h-[25.2vw]">
                {/* Blur + white fade layer */}
                <div className="absolute inset-0 rounded-2xl -z-10 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-t from-white via-white/50 via-30% to-transparent " />
                </div>
               
                <div className='pt-[10vw] w-2/3'>
                <p className="font_16">2 days ago . 7 min read</p>
                <p className="font_32 my-[1vw]">Mastering the Art of Resume Crafting</p>
                <p className="font_16">Uncover the secrets to creating a standout resume that 
                  captures the attention of employers. Our experts share tips on showcasing your skills, experiences, 
                  and achievements effectively.</p>
                 </div>  
              </div>
            </div>
          </div>





        <div className='md:flex gap-[1.5vw]'>
          {contnt.map((item)=>(
            <Home_frame_5_card key={item.id} img={item.img} time={item.time} para_1={item.para_1} para_2={item.para_2}/>
          ))}
          
        </div>
    </div>
  )
}

export default Home_frame_5