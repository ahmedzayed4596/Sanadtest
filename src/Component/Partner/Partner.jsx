import React, { useState } from "react";
import style from "./Partner.module.css";
import { FaStar } from "react-icons/fa";
import fayrouz from "../../assets/fayrouz.png";
import shazrwan from "../../assets/shazrwan.png";
import tech from "../../assets/tech.png";

const partnerFeedback = [
  {
    name: "شركة C-Tech",
    feedback: "سعداء بالتعاون مع سند، خدمة ممتازة وفريق محترف.",
    rating: 5,
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
];

export default function Partner() {
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
          <div
            data-aos="flip-up"
            data-aos-delay="500"
            data-aos-duration="2000"
            className="grid gap-6 md:grid-cols-3 pt-16"
          >
            {partnerFeedback.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center  border border-[#fac337]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-36 h-36 object-contain mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-3">{partner.feedback}</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < partner.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="border-0 h-1 bg-[#fac337]  w-full" />
    </>
  );
}
