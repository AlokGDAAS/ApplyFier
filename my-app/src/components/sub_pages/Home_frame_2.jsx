import React from 'react'
import Home_frame_2_card from '../utils/Home_frame_2_card'
import { assets } from '../../assets/assets'

const Home_frame_2 = () => {

  const contnt = [
    { 
      id:1,
      img:assets.home_frame_2_logo_1,
      head_1:"Real-time",
      head_2:"Analytics",
      head_3:"",
      para:"Our system helping you make informed decisions based on quantifiable data and reducing the risk of bias in the hiring process."
    },
    {
      id:2,      
      img:assets.home_frame_2_logo_2,
      head_1:"Automated",
      head_2:"Candidate",
      head_3:"Ranking",      
      para:"Our algorithm analyzes candidate profiles, resumes, and application data to identify the key skills, experiences, and qualifications"
    },
    {
      id:3,      
      img:assets.home_frame_2_logo_3,
      head_1:"Seamless",
      head_2:"Integration",
      head_3:"",      
      para:"Our user-friendly interface ensures a smooth experience, allowing you to focus on engaging with the most promising candidates"
    }
  ]

  return (
       <div className='md:h-[62vw] md:p-[7vw]'>
        <div>
        <div className='flex items-center md:justify-center justify-between '>
          <hr className='md:w-1/7 w-1/4'/>
          <p className='mx-4 md:px-4 px-2 py-1 rounded-full' style={{backgroundColor:"#ffffff81"}}>How it Works</p>
          <hr  className='md:w-1/7 w-1/4'/>
          
        </div>
        <h1 className="home-font m_font_36 text-center my-4"><span className='gradient-text '>Easy</span> Implematation<br/> in Three Easy Steps</h1>
        <p  className="font_16 text-center m_font_16">Build with AI tool and growth analytics designed to boost<br className='hidden md:block'/> user conversion, engagement, and retention</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center md:gap-5 md:py-10'>
          {contnt.map((item)=>(
            
              <Home_frame_2_card key={item.id}  img={item.img} head_1={item.head_1} head_2={item.head_2} head_3={item.head_3} para={item.para}/>
            
          ))}
          
        </div>
       </div>  
  )
}

export default Home_frame_2