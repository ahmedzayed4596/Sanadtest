import React, { useState } from "react";
import style from "./Home.module.css";
import Nav from "../Nav/Nav";
import { Carousel } from "flowbite";
import back1 from "../../assets/back1.jpeg";
import back2 from "../../assets/back.jpeg";
export default function Home() {
  return (
    <>
      
      <div
        id="default-carousel"
        className="relative w-full h-screen z-30 "
        data-carousel="slide"
      >
        <div className="relative overflow-hidden h-full">
          <div className="absolute z-50 inset-0 flex items-center justify-center bg-[#07543a]/60">
            <div className="text-center text-white">
              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-5"></div>
            </div>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={back1}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={back2}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={back1}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={back2}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={back1}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
