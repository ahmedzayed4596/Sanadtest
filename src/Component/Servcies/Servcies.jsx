import React, { useState } from "react";
import style from "./Servcies.module.css";
import Slider from "react-slick";
import gosi from "../../assets/gosi.png";
import absher from "../../assets/absher.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Servcies() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    rows: 2,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="pt-40">
        <h2 className="text-5xl text-center font-medium mb-4">
          الخدمات التي نقدمها في{" "}
          <span className="font-bold text-green-800">سند</span>
        </h2>
        <div className=" w-[90%] bg-gray-100 rounded-2xl  mx-auto">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="m-4 p-4 bg-[#07543a] rounded-lg">
                <div className="bg-[#f0bb35] rounded-full overflow-hidden w-[150px] h-[150px] mx-auto flex items-center justify-center">
                  <img
                    src={gosi}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="p-4">
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">
                  التأمينات الاجتماعية
                </h2>
                <div className="bg-[#07543a] rounded-full overflow-hidden w-[150px] h-[150px] mx-auto flex items-center justify-center">
                  <img
                    src={gosi}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="p-4">
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">
                  التأمينات الاجتماعية
                </h2>
                <div className="bg-[#07543a] rounded-full overflow-hidden w-[150px] h-[150px] mx-auto flex items-center justify-center">
                  <img
                    src={gosi}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">
                  التأمينات الاجتماعية
                </h2>
                <div className="bg-[#07543a] rounded-full overflow-hidden w-[150px] h-[150px] mx-auto flex items-center justify-center">
                  <img
                    src={gosi}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">
                  التأمينات الاجتماعية
                </h2>
                <div className="bg-[#07543a] rounded-full overflow-hidden w-[150px] h-[150px] mx-auto flex items-center justify-center">
                  <img
                    src={gosi}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">
                  التأمينات الاجتماعية
                </h2>
                <div className="bg-[#07543a] rounded-full overflow-hidden w-[150px] h-[150px] mx-auto flex items-center justify-center">
                  <img
                    src={gosi}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">
                  التأمينات الاجتماعية
                </h2>
                <div className="bg-[#07543a] rounded-full overflow-hidden w-[150px] h-[150px] mx-auto flex items-center justify-center">
                  <img
                    src={gosi}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">
                  التأمينات الاجتماعية
                </h2>
                <div className="bg-[#07543a] rounded-full overflow-hidden w-[150px] h-[150px] mx-auto flex items-center justify-center">
                  <img
                    src={gosi}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">
                  التأمينات الاجتماعية
                </h2>
                <div className="bg-[#07543a] rounded-full overflow-hidden w-[150px] h-[150px] mx-auto flex items-center justify-center">
                  <img
                    src={gosi}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">
                  التأمينات الاجتماعية
                </h2>
                <div className="bg-[#07543a] rounded-full overflow-hidden w-[150px] h-[150px] mx-auto flex items-center justify-center">
                  <img
                    src={gosi}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
