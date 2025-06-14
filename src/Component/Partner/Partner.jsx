import React, { useState, useEffect } from "react";
import style from "./Partner.module.css";
import { FaStar } from "react-icons/fa";
import fayrouz from "../../assets/fayrouz.png";
import shazrwan from "../../assets/shazrwan.png";
import tech from "../../assets/tech.png";
import ace from "../../assets/ace.png";
import abraj from "../../assets/abraj.webp";
import { Link } from "react-router-dom";
import { SlEye } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Partner() {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animates only once when in view
    });
    AOS.refresh(); // Refresh to catch new elements
  }, []);
  const partnerFeedback = [
    {
      name: "شركة C-Tech",
      feedback: "سعداء بالتعاون مع سند، خدمة ممتازة وفريق محترف.",
      rating: 3,
      logo: tech,
    },
    {
      name: "شركة الشاذروان",
      feedback: "شراكتنا مع سند كانت ناجحة على جميع المستويات.",
      rating: 4,
      logo: shazrwan,
    },
    {
      name: "شركة الفيروز",
      feedback: "تعامل احترافي وسرعة في التنفيذ، نشكركم.",
      rating: 5,
      logo: fayrouz,
    },
    {
      name: "مؤسسة السنافي للمقاولات",
      feedback:
        "تعاملت مع أكثر من مكتب قبل، لكن سند مختلفين. خدمتهم دقيقة، والتزامهم بالمواعيد شيء نادرة",
      rating: 5,
      logo: ace,
    },
    {
      name: "شركة ابراج للمصاعد",
      feedback: "سرعة في تنفيذ جميع التصاريح اللازمة",
      rating: 4.5,
      logo: abraj,
    },
  ];
  return (
    <>
      <section className="bg-gray-50 py-40 bg-[url('../../../public/bg2.png')] sm:bg-[url('../../../public/bg1.png')] bg-cover bg-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#fac337] mb-10">
            آراء شركاؤنا
          </h2>
          <p className="text-center text-white w-[80%] sm:w-[40%]  mx-auto text-lg mb-10">
            نفتخر بشراكتنا مع نخبة من الشركات الرائدة في مختلف القطاعات، حيث
            كانت تجاربهم معنا شهادة حقيقية على التزامنا بالجودة والاحترافية.
            إليكم بعضًا من انطباعات شركائنا حول تجربتهم مع "سند" .
          </p>
          <div className="grid gap-6 md:grid-cols-5  pt-16">
            <div
              data-aos="flip-left"
              data-aos-delay="500"
              data-aos-duration="2000"
              className={`relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center border border-[#fac337] group bg-white ${style.main}`}
            >
              {/* المحتوى الأساسي */}
              <div className="z-10 transition duration-300 group-hover:blur-sm ">
                <img
                  src={partnerFeedback[0].logo}
                  className="w-36 h-36 mx-auto object-contain mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {partnerFeedback[0].name}
                </h3>
                <p className="text-gray-600 mb-3">
                  {partnerFeedback[0].feedback}
                </p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < partnerFeedback[0].rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* الطبقة العلوية */}
              <div
                className={`bg-green-900/60 ${style.child} rounded-3xl m-4 absolute inset-0 flex flex-col justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <h2 className="text-lg text-white underline-offset-2 underline font-bold">
                  بامكانك الانضمام الينا الان :
                </h2>
                <Link className="flex mx-auto mt-10 bg-[#fac337] hover:bg-white text-white font-bold hover:text-black active:opacity-75 px-5 py-3 gap-2 text-sm text-center rounded-lg w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
                  عرض جميع خدماتنا
                </Link>
              </div>
            </div>

            <div
              data-aos="flip-left"
              data-aos-delay="500"
              data-aos-duration="2000"
              className={`bg-white relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center  border border-[#fac337] ${style.main}`}
            >
              <img
                src={partnerFeedback[1].logo}
                className="w-36 h-36 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {partnerFeedback[1].name}
              </h3>
              <p className="text-gray-600 mb-3">
                {partnerFeedback[1].feedback}
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < partnerFeedback[1].rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}

                <div
                  className={`bg-green-900/60 ${style.child} rounded-3xl m-4 absolute  flex flex-col justify-center`}
                >
                  <h2 className="text-lg text-center text-white underline-offset-2 underline font-bold">
                    بامكانك الانضمام الينا الان :
                  </h2>
                  <Link className="flex mx-auto mt-10 bg-[#fac337] hover:bg-white text-white font-bold hover:text-black active:opacity-75  px-5 py-3 gap-2 text-sm  text-center rounded-lg w-fit sm:w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
                    عرض جميع خدماتنا
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="500"
              data-aos-duration="2000"
              className={`bg-white relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center  border border-[#fac337] ${style.main}`}
            >
              <img
                src={partnerFeedback[2].logo}
                className="w-36 h-36 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {partnerFeedback[2].name}
              </h3>
              <p className="text-gray-600 mb-3">
                {partnerFeedback[2].feedback}
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < partnerFeedback[2].rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}

                <div
                  className={`bg-green-900/60 ${style.child} rounded-3xl m-4 absolute  flex flex-col justify-center`}
                >
                  <h2 className="text-lg text-center text-white underline-offset-2 underline font-bold">
                    بامكانك الانضمام الينا الان :
                  </h2>
                  <Link className="flex mx-auto mt-10 bg-[#fac337] hover:bg-white text-white font-bold hover:text-black active:opacity-75  px-5 py-3 gap-2 text-sm  text-center rounded-lg w-fit sm:w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
                    عرض جميع خدماتنا
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="500"
              data-aos-duration="2000"
              className={`bg-white relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center  border border-[#fac337] ${style.main}`}
            >
              <img
                src={partnerFeedback[3].logo}
                className="w-36 h-36 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {partnerFeedback[3].name}
              </h3>
              <p className="text-gray-600 mb-3">
                {partnerFeedback[3].feedback}
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < partnerFeedback[3].rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}

                <div
                  className={`bg-green-900/60 ${style.child} rounded-3xl m-4 absolute  flex flex-col justify-center`}
                >
                  <h2 className="text-lg text-center text-white underline-offset-2 underline font-bold">
                    بامكانك الانضمام الينا الان :
                  </h2>
                  <Link className="flex mx-auto mt-10 bg-[#fac337] hover:bg-white text-white font-bold hover:text-black active:opacity-75  px-5 py-3 gap-2 text-sm  text-center rounded-lg w-fit sm:w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
                    عرض جميع خدماتنا
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="500"
              data-aos-duration="2000"
              className={`bg-white group-hover:blur-sm relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center  border border-[#fac337] ${style.main}`}
            >
              <img
                src={partnerFeedback[4].logo}
                className="w-36 h-36 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {partnerFeedback[4].name}
              </h3>
              <p className="text-gray-600 mb-3">
                {partnerFeedback[4].feedback}
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < partnerFeedback[4].rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}

                <div
                  className={`bg-green-900/60 ${style.child} rounded-3xl m-4 absolute  flex flex-col justify-center`}
                >
                  <h2 className="text-lg text-center text-white underline-offset-2 underline font-bold">
                    بامكانك الانضمام الينا الان :
                  </h2>
                  <Link className="flex mx-auto mt-10 bg-[#fac337] hover:bg-white text-white font-bold hover:text-black active:opacity-75  px-5 py-3 gap-2 text-sm  text-center rounded-lg w-fit sm:w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
                    عرض جميع خدماتنا
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-0 h-1 bg-[#fac337]  w-full" />
    </>
  );
}
