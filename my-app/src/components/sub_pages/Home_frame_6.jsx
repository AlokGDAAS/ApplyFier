import React from 'react'
import Toggle_1 from '../utils/Toggle_1'
import Home_frame_2_card from '../utils/Home_frame_2_card'
import Home_frame_6_card from '../utils/Home_frame_6_card'

const Home_frame_6 = () => {

    const contnt = [
        {
            id:1,
            head_1:"Professional Plan",
            head_2:"For Individuals and Small Team",
            price:"$15/",
            dura:"per user per month",
            button:"start 14 day free trial ➡ ",
            desc_1:"Up to 15 Jobs per Account",
            desc_2:"Up 10 10,000 Candidates",
            desc_3:"Unlimited Hiring Mangers",
        },
        {
            id:2,
            head_1:"Enterprise Plan",
            head_2:"For Industry Leaders",
            price:"$35/",
            dura:"per user per month",
            button:"Start 14-day Free Trial ➡ ",
            desc_1:"Unlimited Jobs",
            desc_2:"Unlimited Candidates",
            desc_3:"Unlimited Hiring Managers",
        },
        {
            id:3,
            head_1:"Custom Plan",
            head_2:"For Custom Plan",
            price:"On Demand",
            dura:"",
            button:"Contact Us ➡ ",
            desc_1:"Everything in Enterprise plan",
            desc_2:"Custom Features",
            desc_3:"Custom Integrations",
        },
    ]
  return (
    <div className='md:h-[64vw] p-[0.7vw] mt-[10vw]'>
        <div>
        <div>
        <div className='flex items-center justify-center'>
          <hr className='md:w-1/8 w-1/4'/>
          <p className='mx-4 px-4  py-3 rounded-full font_20_normal ' style={{backgroundColor:"#ffffff81"}}>Pricing</p>
          <hr  className='md:w-1/8 w-1/4'/>
          
        </div>
        <h1 className="home-font m_font_36 text-center mt-8 mb-4"><span className='gradient-text '>Simple</span> and Trasparent Pricing</h1>
        <p  className="font_20_normal text-center py-1 flex items-center justify-center">Yearly Plans <Toggle_1 /> Monthly Plans</p>
        </div>            
        </div>

        <div className='md:flex justify-center md:gap-5'>
            {contnt.map((item)=>(
                <div key={item.id}>
                   <Home_frame_6_card contnt={item}/>
                </div>
            ))}
        </div>
        <div className='flex justify-center'>
        <button className="cursor-pointer text-base font-normal bg-yellow-500 md:px-20 px-15 py-2 rounded-full m-1 hover:scale-105 transition-all duration-300" style={{color:"#2A2A2A"}}>
            Compare All Price Plans ➡ </button>            
        </div>
    </div>
  )
}

export default Home_frame_6