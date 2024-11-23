import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import img1 from '../assets/img/bg-desktop.jpg'
import img2 from '../assets/img/WebPic2.jfif'
import img3 from '../assets/img/headerBG.jpg'
import 'swiper/css';
const Slider = () => {
  return (
    <>
      <Swiper
      className="w-11/12 md:h-80 m-auto h-64 my-4 rounded-md"
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide className=""><img src={img1} className="w-full h-full" alt="" /></SwiperSlide>
        <SwiperSlide className=""><img src={img2} className="w-full h-full" alt="" /></SwiperSlide>
        <SwiperSlide className=""><img src={img3} className="w-full h-full" alt="" /></SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

export default Slider;
