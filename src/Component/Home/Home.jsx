import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import back from "../../assets/back.jpeg";
import back1 from "../../assets/back1.jpeg";
import back2 from "../../assets/back2.jpeg";

import backm1 from "../../assets/bg-m1.jpeg";
import backm2 from "../../assets/bg-m2.jpeg";
import backm3 from "../../assets/bg-m3.jpeg";

import sanad from "../../assets/sanad.png";

import About from "../About/About";
import Servcies from "../Servcies/Servcies";
import Partner from "../Partner/Partner";
import ContactHome from "../ContactHome/ContactHome";

const imagesPC = [back1, back, back2]; // صور الكمبيوتر
const imagesMobile = [backm1, backm2, backm3]; // صور الموبايل

export default function Home() {
  const [currentSlidePC, setCurrentSlidePC] = useState(0);
  const [currentSlideMobile, setCurrentSlideMobile] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentSlidePC((prev) => (prev + 1) % imagesPC.length);
      setCurrentSlideMobile((prev) => (prev + 1) % imagesMobile.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="home" className="relative">
        <div id="default-carousel" className="relative w-full h-screen z-40">
          <div className="relative overflow-hidden h-full">
            {/* خلفية سوداء مع التعتيم واللوجو */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-40">
              <div className="text-center text-white px-4">
                <img
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  src={sanad}
                  alt="Logo"
                  className="inline-block mb-2 max-w-56 mx-auto"
                />
                <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-5 justify-center">
                  <a
                    href="#quotation"
                    data-aos="fade-up"
                    data-aos-duration="750"
                    data-aos-delay="500"
                    className="inline-flex items-center bg-[#07543a] hover:bg-[#fac337] font-bold hover:text-black active:opacity-75 justify-center w-full px-5 py-3 gap-2 text-sm text-center rounded-lg sm:w-auto cursor-pointer transition-colors duration-200 ease-in-out mx-auto"
                  >
                    تصفح خدماتنا
                  </a>
                </div>
              </div>
            </div>

            {/* صور الكمبيوتر فقط من md وفوق */}
            {imagesPC.map((img, index) => (
              <div
                key={`pc-${index}`}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 md:block hidden ${
                  currentSlidePC === index
                    ? "opacity-100 z-30"
                    : "opacity-0 z-10"
                }`}
              >
                <img
                  src={img}
                  className="block w-full h-full object-cover"
                  alt={`slide-pc-${index}`}
                />
              </div>
            ))}

            {/* صور الموبايل فقط تحت md */}
            {imagesMobile.map((img, index) => (
              <div
                key={`mobile-${index}`}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 block md:hidden ${
                  currentSlideMobile === index
                    ? "opacity-100 z-30"
                    : "opacity-0 z-10"
                }`}
              >
                <img
                  src={img}
                  className="block w-full h-full object-cover"
                  alt={`slide-mobile-${index}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* الشريط الأصفر في الأسفل */}
        <div className="absolute bottom-0 left-0 w-full h-1 z-40 bg-gradient-to-l from-yellow-200 via-yellow-400 to-yellow-600"></div>
      </section>

      {/* باقي الأقسام */}
      <About />
      <Servcies />
      <Partner />
      <div className="container mx-auto bg-[#07543a] px-4 py-7 rounded-4xl my-11">
        <ContactHome />
      </div>
    </>
  );
}
