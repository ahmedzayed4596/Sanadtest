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
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
              className={`relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center border border-[#fac337] group bg-white ${style.main}`}
            >
              {/* المحتوى الأساسي */}
              <div className="z-10 transition duration-300 group-hover:blur-sm">
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
                className={`bg-green-900/80 ${style.child} rounded-3xl m-4 absolute inset-0 flex flex-col justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <h2 className="text-lg text-[#fac337] underline-offset-2 underline font-bold">
                  بامكانك الانضمام الينا الان :
                </h2>
                <Link className="flex items-center mx-auto mt-10 bg-[#fac337] hover:bg-white text-white font-bold hover:text-black active:opacity-75 px-5 py-3 gap-2 text-sm text-center rounded-lg w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
                  سجل الان 
                  <svg  width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="fill-green-500" d="M13 2C10.2386 2 8 4.23858 8 7C8 7.55228 8.44772 8 9 8C9.55228 8 10 7.55228 10 7C10 5.34315 11.3431 4 13 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H13C11.3431 20 10 18.6569 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 19.7614 10.2386 22 13 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H13Z" fill="#000000"/>
<path className="fill-green-500" d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11.2821C11.1931 13.1098 11.1078 13.2163 11.0271 13.318C10.7816 13.6277 10.5738 13.8996 10.427 14.0945C10.3536 14.1921 10.2952 14.2705 10.255 14.3251L10.2084 14.3884L10.1959 14.4055L10.1915 14.4115C10.1914 14.4116 10.191 14.4122 11 15L10.1915 14.4115C9.86687 14.8583 9.96541 15.4844 10.4122 15.809C10.859 16.1336 11.4843 16.0346 11.809 15.5879L11.8118 15.584L11.822 15.57L11.8638 15.5132C11.9007 15.4632 11.9553 15.3897 12.0247 15.2975C12.1637 15.113 12.3612 14.8546 12.5942 14.5606C13.0655 13.9663 13.6623 13.2519 14.2071 12.7071L14.9142 12L14.2071 11.2929C13.6623 10.7481 13.0655 10.0337 12.5942 9.43937C12.3612 9.14542 12.1637 8.88702 12.0247 8.7025C11.9553 8.61033 11.9007 8.53682 11.8638 8.48679L11.822 8.43002L11.8118 8.41602L11.8095 8.41281C11.4848 7.96606 10.859 7.86637 10.4122 8.19098C9.96541 8.51561 9.86636 9.14098 10.191 9.58778L11 9C10.191 9.58778 10.1909 9.58773 10.191 9.58778L10.1925 9.58985L10.1959 9.59454L10.2084 9.61162L10.255 9.67492C10.2952 9.72946 10.3536 9.80795 10.427 9.90549C10.5738 10.1004 10.7816 10.3723 11.0271 10.682C11.1078 10.7837 11.1931 10.8902 11.2821 11H3Z" fill="#000000"/>
</svg>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="2000"
              className={`relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center border border-[#fac337] group bg-white ${style.main}`}
            >
              {/* المحتوى الأساسي */}
              <div className="z-10 transition duration-300 group-hover:blur-sm">
                <img
                  src={partnerFeedback[1].logo}
                  className="w-36 h-36 mx-auto object-contain mb-2"
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
                </div>
              </div>

              {/* الطبقة العلوية */}
              <div
                className={`bg-green-900/80 ${style.child} rounded-3xl m-4 absolute inset-0 flex flex-col justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <h2 className="text-lg text-[#fac337] underline-offset-2 underline font-bold">
                  بامكانك الانضمام الينا الان :
                </h2>
               <Link className="flex items-center mx-auto mt-10 bg-[#fac337] hover:bg-white text-white font-bold hover:text-black active:opacity-75 px-5 py-3 gap-2 text-sm text-center rounded-lg w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
                  سجل الان 
                  <svg  width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="fill-green-500" d="M13 2C10.2386 2 8 4.23858 8 7C8 7.55228 8.44772 8 9 8C9.55228 8 10 7.55228 10 7C10 5.34315 11.3431 4 13 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H13C11.3431 20 10 18.6569 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 19.7614 10.2386 22 13 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H13Z" fill="#000000"/>
<path className="fill-green-500" d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11.2821C11.1931 13.1098 11.1078 13.2163 11.0271 13.318C10.7816 13.6277 10.5738 13.8996 10.427 14.0945C10.3536 14.1921 10.2952 14.2705 10.255 14.3251L10.2084 14.3884L10.1959 14.4055L10.1915 14.4115C10.1914 14.4116 10.191 14.4122 11 15L10.1915 14.4115C9.86687 14.8583 9.96541 15.4844 10.4122 15.809C10.859 16.1336 11.4843 16.0346 11.809 15.5879L11.8118 15.584L11.822 15.57L11.8638 15.5132C11.9007 15.4632 11.9553 15.3897 12.0247 15.2975C12.1637 15.113 12.3612 14.8546 12.5942 14.5606C13.0655 13.9663 13.6623 13.2519 14.2071 12.7071L14.9142 12L14.2071 11.2929C13.6623 10.7481 13.0655 10.0337 12.5942 9.43937C12.3612 9.14542 12.1637 8.88702 12.0247 8.7025C11.9553 8.61033 11.9007 8.53682 11.8638 8.48679L11.822 8.43002L11.8118 8.41602L11.8095 8.41281C11.4848 7.96606 10.859 7.86637 10.4122 8.19098C9.96541 8.51561 9.86636 9.14098 10.191 9.58778L11 9C10.191 9.58778 10.1909 9.58773 10.191 9.58778L10.1925 9.58985L10.1959 9.59454L10.2084 9.61162L10.255 9.67492C10.2952 9.72946 10.3536 9.80795 10.427 9.90549C10.5738 10.1004 10.7816 10.3723 11.0271 10.682C11.1078 10.7837 11.1931 10.8902 11.2821 11H3Z" fill="#000000"/>
</svg>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
              className={`relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center border border-[#fac337] group bg-white ${style.main}`}
            >
              {/* المحتوى الأساسي */}
              <div className="z-10 transition duration-300 group-hover:blur-sm">
                <img
                  src={partnerFeedback[2].logo}
                  className="w-36 h-36 mx-auto object-contain mb-2"
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
                </div>
              </div>

              {/* الطبقة العلوية */}
              <div
                className={`bg-green-900/80 ${style.child} rounded-3xl m-4 absolute inset-0 flex flex-col justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                 <h2 className="text-lg text-[#fac337] underline-offset-2 underline font-bold">
                  بامكانك الانضمام الينا الان :
                </h2>
                <Link className="flex items-center mx-auto mt-10 bg-[#fac337] hover:bg-white text-white font-bold hover:text-black active:opacity-75 px-5 py-3 gap-2 text-sm text-center rounded-lg w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
                  سجل الان 
                  <svg  width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="fill-green-500" d="M13 2C10.2386 2 8 4.23858 8 7C8 7.55228 8.44772 8 9 8C9.55228 8 10 7.55228 10 7C10 5.34315 11.3431 4 13 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H13C11.3431 20 10 18.6569 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 19.7614 10.2386 22 13 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H13Z" fill="#000000"/>
<path className="fill-green-500" d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11.2821C11.1931 13.1098 11.1078 13.2163 11.0271 13.318C10.7816 13.6277 10.5738 13.8996 10.427 14.0945C10.3536 14.1921 10.2952 14.2705 10.255 14.3251L10.2084 14.3884L10.1959 14.4055L10.1915 14.4115C10.1914 14.4116 10.191 14.4122 11 15L10.1915 14.4115C9.86687 14.8583 9.96541 15.4844 10.4122 15.809C10.859 16.1336 11.4843 16.0346 11.809 15.5879L11.8118 15.584L11.822 15.57L11.8638 15.5132C11.9007 15.4632 11.9553 15.3897 12.0247 15.2975C12.1637 15.113 12.3612 14.8546 12.5942 14.5606C13.0655 13.9663 13.6623 13.2519 14.2071 12.7071L14.9142 12L14.2071 11.2929C13.6623 10.7481 13.0655 10.0337 12.5942 9.43937C12.3612 9.14542 12.1637 8.88702 12.0247 8.7025C11.9553 8.61033 11.9007 8.53682 11.8638 8.48679L11.822 8.43002L11.8118 8.41602L11.8095 8.41281C11.4848 7.96606 10.859 7.86637 10.4122 8.19098C9.96541 8.51561 9.86636 9.14098 10.191 9.58778L11 9C10.191 9.58778 10.1909 9.58773 10.191 9.58778L10.1925 9.58985L10.1959 9.59454L10.2084 9.61162L10.255 9.67492C10.2952 9.72946 10.3536 9.80795 10.427 9.90549C10.5738 10.1004 10.7816 10.3723 11.0271 10.682C11.1078 10.7837 11.1931 10.8902 11.2821 11H3Z" fill="#000000"/>
</svg>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="2000"
              className={`relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center border border-[#fac337] group bg-white ${style.main}`}
            >
              {/* المحتوى الأساسي */}
              <div className="z-10 transition duration-300 group-hover:blur-sm">
                <img
                  src={partnerFeedback[3].logo}
                  className="w-36 h-36 mx-auto object-contain mb-2"
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
                </div>
              </div>

              {/* الطبقة العلوية */}
              <div
                className={`bg-green-900/80 ${style.child} rounded-3xl m-4 absolute inset-0 flex flex-col justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <h2 className="text-lg text-[#fac337] underline-offset-2 underline font-bold">
                  بامكانك الانضمام الينا الان :
                </h2>
                <Link className="flex items-center mx-auto mt-10 bg-[#fac337] hover:bg-white text-white font-bold hover:text-black active:opacity-75 px-5 py-3 gap-2 text-sm text-center rounded-lg w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
                  سجل الان 
                  <svg  width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="fill-green-500" d="M13 2C10.2386 2 8 4.23858 8 7C8 7.55228 8.44772 8 9 8C9.55228 8 10 7.55228 10 7C10 5.34315 11.3431 4 13 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H13C11.3431 20 10 18.6569 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 19.7614 10.2386 22 13 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H13Z" fill="#000000"/>
<path className="fill-green-500" d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11.2821C11.1931 13.1098 11.1078 13.2163 11.0271 13.318C10.7816 13.6277 10.5738 13.8996 10.427 14.0945C10.3536 14.1921 10.2952 14.2705 10.255 14.3251L10.2084 14.3884L10.1959 14.4055L10.1915 14.4115C10.1914 14.4116 10.191 14.4122 11 15L10.1915 14.4115C9.86687 14.8583 9.96541 15.4844 10.4122 15.809C10.859 16.1336 11.4843 16.0346 11.809 15.5879L11.8118 15.584L11.822 15.57L11.8638 15.5132C11.9007 15.4632 11.9553 15.3897 12.0247 15.2975C12.1637 15.113 12.3612 14.8546 12.5942 14.5606C13.0655 13.9663 13.6623 13.2519 14.2071 12.7071L14.9142 12L14.2071 11.2929C13.6623 10.7481 13.0655 10.0337 12.5942 9.43937C12.3612 9.14542 12.1637 8.88702 12.0247 8.7025C11.9553 8.61033 11.9007 8.53682 11.8638 8.48679L11.822 8.43002L11.8118 8.41602L11.8095 8.41281C11.4848 7.96606 10.859 7.86637 10.4122 8.19098C9.96541 8.51561 9.86636 9.14098 10.191 9.58778L11 9C10.191 9.58778 10.1909 9.58773 10.191 9.58778L10.1925 9.58985L10.1959 9.59454L10.2084 9.61162L10.255 9.67492C10.2952 9.72946 10.3536 9.80795 10.427 9.90549C10.5738 10.1004 10.7816 10.3723 11.0271 10.682C11.1078 10.7837 11.1931 10.8902 11.2821 11H3Z" fill="#000000"/>
</svg>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
              className={`relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center border border-[#fac337] group bg-white ${style.main}`}
            >
              {/* المحتوى الأساسي */}
              <div className="z-10 transition duration-300 group-hover:blur-sm">
                <img
                  src={partnerFeedback[4].logo}
                  className="w-36 h-36 mx-auto object-contain mb-2"
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
                </div>
              </div>

              {/* الطبقة العلوية */}
              <div
                className={`bg-green-900/80 ${style.child} rounded-3xl m-4 absolute inset-0 flex flex-col justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <h2 className="text-lg text-[#fac337] underline-offset-2 underline font-bold">
                  بامكانك الانضمام الينا الان :
                </h2>
                <Link className="flex items-center mx-auto mt-10 bg-[#fac337] hover:bg-white text-white font-bold hover:text-black active:opacity-75 px-5 py-3 gap-2 text-sm text-center rounded-lg w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
                  سجل الان 
                  <svg  width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="fill-green-500" d="M13 2C10.2386 2 8 4.23858 8 7C8 7.55228 8.44772 8 9 8C9.55228 8 10 7.55228 10 7C10 5.34315 11.3431 4 13 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H13C11.3431 20 10 18.6569 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 19.7614 10.2386 22 13 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H13Z" fill="#000000"/>
<path className="fill-green-500" d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11.2821C11.1931 13.1098 11.1078 13.2163 11.0271 13.318C10.7816 13.6277 10.5738 13.8996 10.427 14.0945C10.3536 14.1921 10.2952 14.2705 10.255 14.3251L10.2084 14.3884L10.1959 14.4055L10.1915 14.4115C10.1914 14.4116 10.191 14.4122 11 15L10.1915 14.4115C9.86687 14.8583 9.96541 15.4844 10.4122 15.809C10.859 16.1336 11.4843 16.0346 11.809 15.5879L11.8118 15.584L11.822 15.57L11.8638 15.5132C11.9007 15.4632 11.9553 15.3897 12.0247 15.2975C12.1637 15.113 12.3612 14.8546 12.5942 14.5606C13.0655 13.9663 13.6623 13.2519 14.2071 12.7071L14.9142 12L14.2071 11.2929C13.6623 10.7481 13.0655 10.0337 12.5942 9.43937C12.3612 9.14542 12.1637 8.88702 12.0247 8.7025C11.9553 8.61033 11.9007 8.53682 11.8638 8.48679L11.822 8.43002L11.8118 8.41602L11.8095 8.41281C11.4848 7.96606 10.859 7.86637 10.4122 8.19098C9.96541 8.51561 9.86636 9.14098 10.191 9.58778L11 9C10.191 9.58778 10.1909 9.58773 10.191 9.58778L10.1925 9.58985L10.1959 9.59454L10.2084 9.61162L10.255 9.67492C10.2952 9.72946 10.3536 9.80795 10.427 9.90549C10.5738 10.1004 10.7816 10.3723 11.0271 10.682C11.1078 10.7837 11.1931 10.8902 11.2821 11H3Z" fill="#000000"/>
</svg>
                </Link>
              </div>
            </div>

           
          </div>
        </div>
      </section>
      <hr className="border-0 h-1 bg-[#fac337]  w-full" />
    </>
  );
}
