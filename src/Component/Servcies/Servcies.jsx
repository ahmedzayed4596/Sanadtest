import React, { useState } from "react";
import style from "./Servcies.module.css";
import Slider from "react-slick";
import gosi from '../../assets/gosi.png'
import absher from '../../assets/absher.png'
import bldy from '../../assets/bldy.png'
import zakaa from '../../assets/zakaa.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Servcies() {

    const settings = {
    dots: false,
    arrows : true ,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear"
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
       
       <div className=" p-4 shadow-2xl h-auto">

              <div className="bg-[#07543a] h-auto w-auto rounded-full">

                <img src={gosi} className="w-full h-[125px] object-cover" alt="" />
              </div>
                                              <h2 className="text-center text-[#f0bb35] text-2xl my-3.5"> التأمينات الاجتماعية </h2>

            </div>
       <div className=" p-4 shadow-2xl h-auto">
              <div className="bg-[#07543a] rounded-full">

                <img src={absher} className="w-full h-[125px] object-cover" alt="" />
              </div>
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">خدمات أبشر </h2>

            </div>
       <div className=" p-4 shadow-2xl h-auto">

              <div className="bg-[#07543a] h-auto w-auto rounded-full">

                <img src={bldy} className="w-full h-[125px] object-cover" alt="" />
              </div>
                                              <h2 className="text-center text-[#f0bb35] text-2xl my-3.5"> منصة بلدي</h2>

            </div>
       <div className=" p-4 shadow-2xl h-auto">
              <div className="bg-[#07543a] rounded-full">

                <img src={zakaa} className="w-full h-[125px] object-cover" alt="" />
              </div>
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">خدمات أبشر </h2>

            </div>
       <div className=" p-4 shadow-2xl h-auto">

              <div className="bg-[#07543a] h-auto w-auto rounded-full">

                <img src={gosi} className="w-full h-[125px] object-cover" alt="" />
              </div>
                                              <h2 className="text-center text-[#f0bb35] text-2xl my-3.5"> التأمينات الاجتماعية </h2>

            </div>
       <div className=" p-4 shadow-2xl h-auto">
              <div className="bg-[#07543a] rounded-full">

                <img src={absher} className="w-full h-[125px] object-cover" alt="" />
              </div>
                <h2 className="text-center text-[#f0bb35] text-2xl my-3.5">خدمات أبشر </h2>

            </div>
     
      </Slider>
    </div>

         

       
        </div>
      </div>
    </>
  );
}
