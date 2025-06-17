import React, { useState, useEffect } from "react";
import style from "./AllServcies.module.css";

import { Link } from "react-router-dom";
import logo2 from "../../assets/sanad logo.png";


import AOS from "aos";
import "aos/dist/aos.css";

export default function Partner() {
 const Servcies = [
    {
      name: "شركة C-Tech",
      abputServ: "سعداء بالتعاون مع سند، خدمة ممتازة وفريق محترف.",
    
    },
    {
      name: "شركة الشاذروان",
      abputServ: "شراكتنا مع سند كانت ناجحة على جميع المستويات.",
   
    },
    {
      name: "شركة الفيروز",
      abputServ: "تعامل احترافي وسرعة في التنفيذ، نشكركم.",
     
    },
    {
      name: "مؤسسة السنافي للمقاولات",
      abputServ:
        "تعاملت مع أكثر من مكتب قبل، لكن سند مختلفين. خدمتهم دقيقة، والتزامهم بالمواعيد شيء نادرة",
    
    },
    {
      name: "شركة ابراج للمصاعد",
      abputServ: "سرعة في تنفيذ جميع التصاريح اللازمة",
    },
  ];



  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animates only once when in view
    });
    AOS.refresh(); // Refresh to catch new elements
  }, []);

  return (
    <>
      <section className="bg-gray-50 py-40 bg-[url('../../../public/bg2.png')] sm:bg-[url('../../../public/bg1.png')] bg-cover bg-center">
      
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#fac337] mb-10">
           خدماتنا في شركة <span className="text-white">سند</span>
          </h2>
          <p className="text-center text-white w-[80%] sm:w-[40%]  mx-auto text-lg mb-10">
           نحن لا نقدم خدمات فقط... بل نقدم حلولًا تصنع الفارق.

          </p>

          <div>
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">بحث</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 " placeholder="بحث عن خدمة ..." required />
        <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 ">بحث</button>
    </div>
</form>
</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-5  pt-16">
           
           {Servcies.map((service)=>{
            return <>
             <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
              className={`relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center border border-[#fac337] group bg-white ${style.main}`}
            >
              {/* المحتوى الأساسي */}
              <div className="z-10 transition duration-300 group-hover:blur-sm">
  <div className="flex items-center justify-center mb-3">
       <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 508 508" xmlSpace="preserve" width="80px" height="80px" fill="#000000">
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier"> <circle style={{fill: '#07543a'}} cx={254} cy={254} r={254} /> <path style={{fill: '#CED5E0'}} d="M388,410.7H120c-1.7,0-3-1.4-3-3V100.4c0-1.7,1.4-3,3-3h268c1.7,0,3,1.4,3,3v307.3 C391,409.3,389.7,410.7,388,410.7z" /> <path style={{fill: '#FFFFFF'}} d="M117,109.4v289.2c0,6.7,5.4,12,12,12h214v-36c0-6.6,5.4-12,12-12h36V109.4c0-6.7-5.4-12-12-12H129 C122.3,97.3,117,102.7,117,109.4z" /> <path style={{fill: '#E6E9EE'}} d="M343,410.7l48-48h-36c-6.6,0-12,5.4-12,12V410.7z" /> <rect x="129.3" y="110.8" style={{fill: '#CED5E0'}} width="16.1" height="7.5" /> <rect x="132.3" y="82.3" style={{fill: '#324A5E'}} width="10.1" height="32.3" /> <rect x="162.6" y="110.8" style={{fill: '#CED5E0'}} width="16.1" height="7.5" /> <rect x="165.6" y="82.3" style={{fill: '#324A5E'}} width="10.1" height="32.3" /> <rect x={196} y="110.8" style={{fill: '#CED5E0'}} width="16.1" height="7.5" /> <rect x="198.9" y="82.3" style={{fill: '#324A5E'}} width="10.1" height="32.3" /> <rect x="229.3" y="110.8" style={{fill: '#CED5E0'}} width="16.1" height="7.5" /> <rect x="232.3" y="82.3" style={{fill: '#324A5E'}} width="10.1" height="32.3" /> <rect x="262.6" y="110.8" style={{fill: '#CED5E0'}} width="16.1" height="7.5" /> <rect x="265.6" y="82.3" style={{fill: '#324A5E'}} width="10.1" height="32.3" /> <rect x={296} y="110.8" style={{fill: '#CED5E0'}} width="16.1" height="7.5" /> <rect x="298.9" y="82.3" style={{fill: '#324A5E'}} width="10.1" height="32.3" /> <rect x="329.3" y="110.8" style={{fill: '#CED5E0'}} width="16.1" height="7.5" /> <rect x="332.3" y="82.3" style={{fill: '#324A5E'}} width="10.1" height="32.3" /> <rect x="362.6" y="110.8" style={{fill: '#CED5E0'}} width="16.1" height="7.5" /> <rect x="365.6" y="82.3" style={{fill: '#324A5E'}} width="10.1" height="32.3" /> <g> <path style={{fill: '#E6E9EE'}} d="M177,214.4h-31.1c-4.1,0-7.5-3.4-7.5-7.5v-31.1c0-4.1,3.4-7.5,7.5-7.5H177c4.1,0,7.5,3.4,7.5,7.5 V207C184.4,211.1,181.1,214.4,177,214.4z M146.4,206.5h30.2v-30.2h-30.2V206.5z" /> <path style={{fill: '#E6E9EE'}} d="M177,288.7h-31.1c-4.1,0-7.5-3.4-7.5-7.5v-31.1c0-4.1,3.4-7.5,7.5-7.5H177c4.1,0,7.5,3.4,7.5,7.5 v31.1C184.4,285.3,181.1,288.7,177,288.7z M146.4,280.7h30.2v-30.2h-30.2V280.7z" /> <path style={{fill: '#E6E9EE'}} d="M177,362.9h-31.1c-4.1,0-7.5-3.4-7.5-7.5v-31.1c0-4.1,3.4-7.5,7.5-7.5H177c4.1,0,7.5,3.4,7.5,7.5 v31.1C184.4,359.5,181.1,362.9,177,362.9z M146.4,355h30.2v-30.2h-30.2V355z" /> </g> <g> <path style={{fill: '#fac337'}} d="M159.5,198.3c0.7,0.9,1.7,1.5,2.9,1.6c0.1,0,0.2,0,0.3,0c1.1,0,2.1-0.4,2.8-1.2l41.1-41.1 c1.6-1.6,1.6-4.1,0-5.6c-1.6-1.6-4.1-1.6-5.6,0l-37.9,37.9l-5.6-7.7c-1.3-1.8-3.8-2.2-5.5-0.9c-1.8,1.3-2.1,3.8-0.9,5.5 L159.5,198.3z" /> <path style={{fill: '#fac337'}} d="M201,226.2l-37.9,37.9l-5.6-7.7c-1.3-1.8-3.8-2.2-5.5-0.9c-1.8,1.3-2.1,3.8-0.9,5.5l8.4,11.4 c0.7,0.9,1.7,1.5,2.9,1.6c0.1,0,0.2,0,0.3,0c1.1,0,2.1-0.4,2.8-1.2l41.1-41.1c1.6-1.6,1.6-4.1,0-5.6 C205.1,224.7,202.6,224.7,201,226.2z" /> <path style={{fill: '#fac337'}} d="M201,300.5l-37.9,37.9l-5.6-7.7c-1.3-1.8-3.8-2.2-5.5-0.9c-1.8,1.3-2.1,3.8-0.9,5.5l8.4,11.4 c0.7,0.9,1.7,1.5,2.9,1.6c0.1,0,0.2,0,0.3,0c1.1,0,2.1-0.4,2.8-1.2l41.1-41.1c1.6-1.6,1.6-4.1,0-5.6 C205.1,298.9,202.6,298.9,201,300.5z" /> </g> <g> <rect x="216.6" y="175.4" style={{fill: '#00c951'}} width="116.9" height="9.1" /> <rect x="216.6" y="198.4" style={{fill: '#00c951'}} width="70.6" height="9.1" /> <rect x="216.6" y="249.6" style={{fill: '#00c951'}} width="116.9" height="9.1" /> <rect x="216.6" y="272.6" style={{fill: '#00c951'}} width="70.6" height="9.1" /> <rect x="216.6" y="323.8" style={{fill: '#00c951'}} width="116.9" height="9.1" /> <rect x="216.6" y="346.8" style={{fill: '#00c951'}} width="70.6" height="9.1" /> </g> </g>
</svg>

  </div>

                <h3 className="text-lg font-semibold text-[#fac337] mb-4">
                {service.name}
                </h3>
                <p className="text-gray-600 mb-3">
              {service.abputServ}
                </p>
               
              </div>

              {/* الطبقة العلوية */}
              <div
                className={`bg-green-900/80 ${style.child} rounded-3xl m-4 absolute inset-0 flex flex-col justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <h2 className="text-lg text-[#fac337] underline-offset-2 underline font-bold">
                 اطلب الخدمة الان:
                </h2>
                <Link className="flex items-center mx-auto mt-10 bg-[#fac337] hover:bg-white text-white font-bold hover:text-black active:opacity-75 px-5 py-3 gap-2 text-sm text-center rounded-lg w-fit hover:cursor-pointer transition-colors duration-200 ease-in-out">
                 طلب الخدمة
  <svg width="30px" height="30px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

<g id="Home"/>

<g id="Print"/>

<g id="Mail"/>

<g id="Camera"/>

<g id="Video"/>

<g id="Film"/>

<g id="Message"/>

<g id="Telephone"/>

<g id="User"/>

<g id="File"/>

<g id="Folder"/>

<g id="Map"/>

<g id="Download"/>

<g id="Upload"/>

<g id="Video_Recorder"/>

<g id="Schedule"/>

<g id="Cart">

<path d="M30,1h-4c-0.5,0-0.9,0.4-1,0.8L24,8h-8H2C1.7,8,1.4,8.1,1.2,8.3C1,8.6,1,8.9,1,9.2l2,12   C3.1,21.6,3.5,22,4,22h12h6.9c0.5,0,0.9-0.4,1-0.8l1.9-12l1-6.1H30c0.5,0,1-0.5,1-1S30.5,1,30,1z" fill="#0E9688"/>

<g>

<circle cx="7" cy="27" fill="black" r="4"/>

</g>

<g>

<circle cx="20" cy="27" fill="black" r="4"/>

</g>

</g>

<g id="Setting"/>

<g id="Search"/>

<g id="Pencils"/>

<g id="Group"/>

<g id="Record"/>

<g id="Headphone"/>

<g id="Music_Player"/>

<g id="Sound_On"/>

<g id="Sound_Off"/>

<g id="Lock"/>

<g id="Lock_open"/>

<g id="Love"/>

<g id="Favorite"/>

<g id="Film_1_"/>

<g id="Music"/>

<g id="Puzzle"/>

<g id="Turn_Off"/>

<g id="Book"/>

<g id="Save"/>

<g id="Reload"/>

<g id="Trash"/>

<g id="Tag"/>

<g id="Link"/>

<g id="Like"/>

<g id="Bad"/>

<g id="Gallery"/>

<g id="Add"/>

<g id="Close"/>

<g id="Forward"/>

<g id="Back"/>

<g id="Buy"/>

<g id="Mac"/>

<g id="Laptop"/>

</svg>
                </Link>
              </div>
            </div>
            </>

           })}
           
           

           
          </div>
        </div>
      </section>
      <hr className="border-0 h-1 bg-[#fac337]  w-full" />
    </>
  );
}

