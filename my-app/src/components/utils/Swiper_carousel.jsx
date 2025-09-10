import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Home_frame_4_card from "./Home_frame_4_card";
import { assets } from "../../assets/assets";

const Swiper_carousel = () => {
  const swiperRef = useRef(null);

  const contnt = [
    {
      id: 1,
      head: "Efficient and Effective Hiring Process!",
      para: "\"The efficiency of Applyfier's hiring process is commendable. The platform's intuitive interface, combined with the customizable criteria for candidate ranking, makes it easy to identify the right fit for our company. It's a game-changer for businesses seeking quality hires.\"",
      img: assets.home_frame_4_ford_logo,
    },
    {
      id: 2,
      head: "Top-Notch Talent at Our Fingertips!",
      para: '"As an employer, finding top-notch talent is crucial for our success. Applyfier has been our go-to platform for hiring. The automated candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team."',
      img: assets.home_frame_4_desney_logo,
    },
    {
      id: 3,
      head: "A True Partner in Recruitment!",
      para: "\"Applyfier partner in our recruitment efforts. The platform's commitment to diversity and inclusion aligns with our values, and the personalized support we received throughout the hiring process was exceptional. It's more than a hiring platform, it's a strategic ally in building successful teams.\"",
      img: assets.home_frame_4_fedex_logo,
    },
    {
      id: 4,
      head: "Efficient and Effective Hiring Process!",
      para: "\"The efficiency of Applyfier's hiring process is commendable. The platform's intuitive interface, combined with the customizable criteria for candidate ranking, makes it easy to identify the right fit for our company. It's a game-changer for businesses seeking quality hires.\"",
      img: assets.home_frame_4_ford_logo,
    },
    {
      id: 5,
      head: "Top-Notch Talent at Our Fingertips!",
      para: '"As an employer, finding top-notch talent is crucial for our success. Applyfier has been our go-to platform for hiring. The automated candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team."',
      img: assets.home_frame_4_desney_logo,
    },
    {
      id: 6,
      head: "A True Partner in Recruitment!",
      para: "\"Applyfier partner in our recruitment efforts. The platform's commitment to diversity and inclusion aligns with our values, and the personalized support we received throughout the hiring process was exceptional. It's more than a hiring platform, it's a strategic ally in building successful teams.\"",
      img: assets.home_frame_4_fedex_logo,
    },
  ];

  return (
    <div>
      <div className=" justify-between items-end pr-[6vw] md:flex hidden">
        <div>
          <p className="font_16">
            Discover the stories and experiences of individuals and<br/> companies
            who have found success and excellence through Applyfier
          </p>
        </div>

        {/* Navigation buttons under carousel */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="px-4 py-2 border  rounded-full hover:bg-black hover:text-white text-xl text-blue-400"
          >
           ❮
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="px-4 py-2 border  rounded-full hover:bg-black hover:text-white text-xl text-blue-400"
          >
             ❯
          </button>
        </div>
      </div>

      <div className="w-full mx-auto py-8">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {contnt.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition p-4">
                <Home_frame_4_card
                  head={item.head}
                  para={item.para}
                  img={item.img}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="px-4 py-2 border  rounded-full bg-black text-white text-xl text-blue-400"
          >
           ❮
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="px-4 py-2 border  rounded-full bg-black text-white text-xl text-blue-400"
          >
             ❯
          </button>
        </div>        
      </div>
    </div>
  );
};

export default Swiper_carousel;
