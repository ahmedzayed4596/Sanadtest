import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import back from "../../assets/back.jpeg";
import back1 from "../../assets/back1.jpeg";
import logo2 from "../../assets/logo.png";

const images = [back1, back, back1, back];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative">
      <div id="default-carousel" className="relative w-full h-screen z-40">
        <div className="relative overflow-hidden h-full">
          
          <div className="absolute z-40 inset-0 flex items-center justify-center bg-black/50">
            <div className="text-center text-white">
              <img
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="3000"
                src={logo2}
                alt="Logo"
                className="inline-block mb-2 max-w-52"
              />
              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-5">
                <a
                  href="#quotation"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                  className="inline-flex mx-auto items-center text-white bg-[#07543a] hover:bg-[#07543a]/70 justify-center w-full px-5 py-3 gap-2 text-sm font-medium text-center rounded-lg sm:w-auto hover:cursor-pointer transition-colors duration-200 ease-in-out"
                >
                  تصفح خدماتنا
                </a>
              </div>
            </div>
          </div>
          
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100 z-30" : "opacity-0 z-10"
              }`}
            >
              <img
                src={img}
                className="block w-full h-full object-cover"
                alt={`slide-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 z-50 bg-gradient-to-l from-yellow-200 via-yellow-400 to-yellow-600"></div>
    </section>
  );
}
