import React from "react";
import Tilt from "react-parallax-tilt";
import Slider from "react-slick";
import gosi from "../../assets/gosi.png";
import absher from "../../assets/absher.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Servcies() {
  const services = [
    {
      title: "التأمينات الاجتماعية",
      icon: gosi,
      description: "تسجيل الموظفين وربطهم بالتأمينات بسهولة.",
    },
    {
      title: "منصة أبشر",
      icon: absher,
      description: "خدمات إلكترونية مرتبطة بالمواطنين والمقيمين.",
    },
    {
      title: "إدارة العقود",
      icon: gosi,
      description: "توثيق ومتابعة العقود إلكترونيًا.",
    },
    {
      title: "إصدار تأشيرات",
      icon: absher,
      description: "إصدار تأشيرات العمل بكل سهولة وسرعة.",
    },
    {
      title: "الربط الحكومي",
      icon: gosi,
      description: "تكامل البيانات مع الجهات الرسمية.",
    },
    {
      title: "إدارة الموارد",
      icon: absher,
      description: "تحسين أداء فرق العمل وتتبع المهام.",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
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
    <div className="pt-10 pb-16 bg-gray-100">
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
                <div className="bg-gradient-to-br from-green-900 to-green-700 text-white rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition duration-300 h-full">
                  <div className="w-24 h-24 bg-[#f0bb35] rounded-full flex items-center justify-center overflow-hidden mb-4">
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
    </div>
  );
}
