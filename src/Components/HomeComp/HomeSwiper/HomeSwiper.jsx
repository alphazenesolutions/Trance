import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./HomeSwiper.css";
import family from "../../../assests/swiper.png";
import { FaPlayCircle } from "react-icons/fa";
import Heading from "../../Reusable/Heading/Heading";

const HomeSwiper = () => {
  return (
    <div>
      <div className="homeSwiper sectionWidth">
        <Heading />
        <div className="">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={family} alt="" />
              <div className="swiperPlay">
                <FaPlayCircle />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={family} alt="" />
              <div className="swiperPlay">
                <FaPlayCircle />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={family} alt="" />
              <div className="swiperPlay">
                <FaPlayCircle />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={family} alt="" />
              <div className="swiperPlay">
                <FaPlayCircle />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeSwiper;
