import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import Home_frame_4_card from "./Home_frame_4_card";

const contnt = [
  {
    id: 1,
    head: "Efficient and Effective Hiring Process!",
    para:
      '"The efficiency of Applyfier\'s hiring process is commendable. The platform\'s intuitive interface, combined with the customizable criteria for candidate ranking, makes it easy to identify the right fit for our company. It\'s a game-changer for businesses seeking quality hires."',
    img: assets.home_frame_4_ford_logo,
  },
  {
    id: 2,
    head: "Top-Notch Talent at Our Fingertips!",
    para:
      '"As an employer, finding top-notch talent is crucial for our success. Applyfier has been our go-to platform for hiring. The automated candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team."',
    img: assets.home_frame_4_desney_logo,
  },
  {
    id: 3,
    head: "A True Partner in Recruitment!",
    para:
      '"Applyfier partner in our recruitment efforts. The platform\'s commitment to diversity and inclusion aligns with our values, and the personalized support we received throughout the hiring process was exceptional. It\'s more than a hiring platform, it\'s a strategic ally in building successful teams."',
    img: assets.home_frame_4_fedex_logo,
  },
  {
    id: 4,
    head: "Efficient and Effective Hiring Process!",
    para:
      '"The efficiency of Applyfier\'s hiring process is commendable. The platform\'s intuitive interface, combined with the customizable criteria for candidate ranking, makes it easy to identify the right fit for our company. It\'s a game-changer for businesses seeking quality hires."',
    img: assets.home_frame_4_ford_logo,
  },
  {
    id: 5,
    head: "Top-Notch Talent at Our Fingertips!",
    para:
      '"As an employer, finding top-notch talent is crucial for our success. Applyfier has been our go-to platform for hiring. The automated candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team."',
    img: assets.home_frame_4_desney_logo,
  },
  {
    id: 6,
    head: "A True Partner in Recruitment!",
    para:
      '"Applyfier partner in our recruitment efforts. The platform\'s commitment to diversity and inclusion aligns with our values, and the personalized support we received throughout the hiring process was exceptional. It\'s more than a hiring platform, it\'s a strategic ally in building successful teams."',
    img: assets.home_frame_4_fedex_logo,
  },
];

export default function Home_frame_4_carousel() {
  const [current, setCurrent] = useState(0);
  const visibleItems = 3; // show 3 at a time

  const nextSlide = () => {
    if (current < contnt.length - visibleItems) {
      setCurrent((prev) => prev + 1);
    } else {
      setCurrent(0); // loop back to start
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    } else {
      setCurrent(contnt.length - visibleItems); // loop to end
    }
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className=" mx-auto ">

      <div className="flex justify-between pb-[3vw] md:pr-[4vw]">
                  <p className="font_16 m_font_16 md:pr-60">
                   Discover the stories and experiences of individuals and<br className="hidden md:block"/>
                   companies who have found success and excellence through Applyfier
          </p>
            {/* Arrows under carousel */}

      <div className="flex justify-center mt-5 space-x-6">
        <button
          onClick={prevSlide}
          className="bg-gray-700 text-white w-10 h-10 rounded-full hover:bg-gray-900 transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-700 text-white w-10 h-10 rounded-full hover:bg-gray-900 transition"
        >
          ▶
        </button>
      </div>


          </div>
      {/* Carousel track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / visibleItems)}%)`,
          }}
        >
          {contnt.map((item) => (
            <div
              key={item.id}
              className="p-2 flex-shrink-0"
              style={{ flex: `0 0 ${100 / visibleItems}%` }}
            >
              <Home_frame_4_card
                head={item.head}
                para={item.para}
                img={item.img}
              />
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}






