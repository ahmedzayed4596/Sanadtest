import React, { useState } from "react";
import style from "./Partner.module.css";
import { FaStar } from "react-icons/fa";
import fayrouz from "../../assets/fayrouz.png";
import shazrwan from "../../assets/shazrwan.png";
import tech from "../../assets/tech.png";
import ace from "../../assets/ace.png";
import abraj from "../../assets/abraj.webp";

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
  {
    name: "مؤسسة السنافي للمقاولات",
    feedback: "تعاملت مع أكثر من مكتب قبل، لكن سند مختلفين. خدمتهم دقيقة، والتزامهم بالمواعيد شيء نادرة",
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
           
            className="grid gap-6 md:grid-cols-5  pt-16"
          >
            zz
          </div>
        </div>
      </section>
      <hr className="border-0 h-1 bg-[#fac337]  w-full" />
    </>
  );
}
