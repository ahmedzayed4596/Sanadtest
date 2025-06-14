import React from "react";
import Tilt from "react-parallax-tilt";
import Slider from "react-slick";
import gosi from "../../assets/gosi.png";
import absher from "../../assets/absher.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import zaka from "../../assets/zaka.png";
import marka from "../../assets/marka.png";
import qiwa from "../../assets/qiwa.png";
import bldy from "../../assets/bldy.png";
import muqeem from "../../assets/muqeem.png";
import nakl from "../../assets/nakl.png";
import mawared from "../../assets/mawared.png";

export default function Servcies() {
  const services = [
    {
      title: "التأمينات الاجتماعية",
      icon: gosi,
      description:
        "إدارة اشتراكات الموظفين وربطهم بالتأمينات الاجتماعية بشكل آلي ومنتظم.",
    },
    {
      title: "منصة أبشر",
      icon: absher,
      description:
        "تنفيذ الخدمات الحكومية للمواطنين والمقيمين بسهولة مثل إصدار الإقامات وتجديدها.",
    },
    {
      title: "مقيم",
      icon: muqeem,
      description:
        "خدمة إدارة بيانات المقيمين، إصدار تأشيرات الخروج والعودة، وتمديد الإقامات إلكترونيًا.",
    },
    {
      title: "بلدي",
      icon: bldy,
      description:
        "إصدار الرخص البلدية والتصاريح المرتبطة بالأنشطة التجارية بكل سهولة.",
    },
    {
      title: "هيئة الزكاة والضريبة والجمارك",
      icon: zaka,
      description:
        "تقديم الإقرارات الضريبية وتحديث بيانات المنشأة والربط مع الفوترة الإلكترونية.",
    },
    {
      title: "المركز السعودي للأعمال",
      icon: marka,
      description:
        "منصة موحدة لتأسيس ومتابعة الأعمال التجارية بشكل سريع ومتكامل.",
    },
    {
      title: "قوى",
      icon: qiwa,
      description:
        "إدارة علاقات العمل، العقود، والتأشيرات بشكل رقمي ومتوافق مع أنظمة وزارة الموارد البشرية.",
    },
    {
      title: "الهيئة العامة للنقل",
      icon: nakl,
      description:
        "إصدار وتجديد بطاقات تشغيل المركبات والأنشطة المرتبطة بقطاع النقل.",
    },
    {
      title: "الموارد البشرية",
      icon: mawared,
      description:
        "منصة لإدارة شؤون الموظفين والأنظمة الداخلية للمنشآت وتحقيق الامتثال لأنظمة العمل.",
    },
  ];


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="pt-40 pb-16 bg-gray-100">
        <h2 className="text-4xl sm:text-5xl text-center font-bold text-[#f0bb35] mb-4">
          خدماتنا في <span className="text-[#07543a]">سند</span>
        </h2>
        <p className="text-center text-gray-600 mb-10  mx-auto px-4 font-bold">
          مجموعة متكاملة من الخدمات الذكية لدعم أعمالك وتسهيل الإجراءات.
        </p>

        <div className="w-[90%] mx-auto bg-white rounded-2xl shadow-xl px-4 py-8">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="p-4">
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                >
                  <div className="border-2 border-[#fac337] text-white rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition duration-300 h-full">
                    <div className="w-fit h-24  flex items-center justify-center overflow-hidden mb-4">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl text-green-800 font-bold text-center mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-center text-gray-600 font-bold">
                      {service.description}
                    </p>
                  </div>
                </Tilt>
              </div>
            ))}
          </Slider>
        </div>
        <Link className="flex mx-auto mt-10 bg-[#07543a] hover:bg-[#fac337] text-white font-bold hover:text-black active:opacity-75  px-5 py-3 gap-2 text-sm  text-center rounded-lg w-fit sm:w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
          عرض جميع خدماتنا
        </Link>
      </div>
      <hr className="border-0 h-1 bg-[#fac337]  w-full" />
    </>
  );
}
