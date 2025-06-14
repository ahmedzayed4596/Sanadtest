import React, { useState } from "react";
import style from "./Contact.module.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="pt-40 pb-16 bg-gray-100">
      <h2 className="text-4xl sm:text-5xl text-center font-bold text-[#f0bb35] mb-4">
          تواصل مع <span className="text-[#07543a]"> سند </span> للاستفسار وانجاز جميع الاعمال
        </h2>
  <div className="grid container mx-auto md:grid-cols-12 gap-8">
        <div className="col-span-5">
          <div className="p-5 space-y-3 ">
            <h3 className="text-[#07543a] text-center text-2xl font-extrabold mb-5">
فريقنا موجود دائما من اجل اعمالك 
</h3>
<div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
  <div className=" cart border-2 border-[#fac337] rounded-lg hover:bg-gray-400 duration-300 transition shadow-xl p-4">

  <h3 className="flex gap-2 items-center text-[#f0bb35] text-lg font-bold" > <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" className="fill-black" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z" fill="#1C274C"/>
</svg>البريد الخاص بنا : </h3>
<h5 className="text-2xl text-[#07543a] font-extrabold "> sanad@company.com</h5>
</div>
  <div className=" cart rounded-lg border-2 border-[#fac337] hover:bg-gray-400 duration-300 transition shadow-xl p-4">

  <h3 className="flex gap-2 items-center text-[#f0bb35] text-lg font-bold" > <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#1C274C"/>
<path d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z" fill="#1C274C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z" fill="#1C274C"/>
</svg> رقم الجوال : </h3>
<h5 className="text-2xl text-[#07543a] font-extrabold "> 96655555555</h5>
</div>
  <div className=" cart rounded-lg border-2 shadow-2xl border-[#fac337]  duration-300 transition col-span-2 flex justify-evenly      p-4">

<a
                    target="_blank"
                    href="https://x.com/sanadofficial11/"
                    className="text-black  hover:text-[#fac337] ms-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="60px"
                      height="60px"
                      className="text-black hover:scale-125 transition duration-300 fill-current"
                    >
                      <g opacity=".3">
                        <polygon
                          fill="currentColor"
                          fillRule="evenodd"
                          points="16.002,19 6.208,5 8.255,5 18.035,19"
                          clipRule="evenodd"
                        />
                        <polygon
                          fill="currentColor"
                          points="8.776,4 4.288,4 15.481,20 19.953,20 8.776,4"
                        />
                      </g>
                      <polygon
                        fill="currentColor"
                        fillRule="evenodd"
                        points="10.13,12.36 11.32,14.04 5.38,21 2.74,21"
                        clipRule="evenodd"
                      />
                      <polygon
                        fill="currentColor"
                        fillRule="evenodd"
                        points="20.74,3 13.78,11.16 12.6,9.47 18.14,3"
                        clipRule="evenodd"
                      />
                      <path
                        fill="currentColor"
                        d="M8.255,5l9.779,14h-2.032L6.208,5H8.255 M9.298,3h-6.93l12.593,18h6.91L9.298,3L9.298,3z"
                      />
                    </svg>

                    <span className="sr-only">X page</span>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/sanadofficial11/"
                    className="text-black  hover:text-[#fac337] ms-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="60px"
                      height="60px"
                      className="hover:scale-125 transition duration-300"
                    >
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8ma"
                        cx="19.38"
                        cy="42.035"
                        r="44.899"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fd5" />
                        <stop offset=".328" stop-color="#ff543f" />
                        <stop offset=".348" stop-color="#fc5245" />
                        <stop offset=".504" stop-color="#e64771" />
                        <stop offset=".643" stop-color="#d53e91" />
                        <stop offset=".761" stop-color="#cc39a4" />
                        <stop offset=".841" stop-color="#c837ab" />
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                      />
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8mb"
                        cx="11.786"
                        cy="5.54"
                        r="29.813"
                        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#4168c9" />
                        <stop
                          offset=".999"
                          stop-color="#4168c9"
                          stop-opacity="0"
                        />
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                      />
                      <path
                        fill="#fff"
                        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                      />
                      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                      <path
                        fill="#fff"
                        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                      />
                    </svg>
                    <span className="sr-only">Instagram account</span>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-black hover:text-[#fac337] ms-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="60px"
                      height="60px"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="hover:scale-125 transition duration-300"
                    >
                      <path
                        fill="#212121"
                        fill-rule="evenodd"
                        d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#ec407a"
                        fill-rule="evenodd"
                        d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#81d4fa"
                        fill-rule="evenodd"
                        d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Tiktok account</span>
                  </a>
</div>
</div>
          </div>
        </div>
        <div className="col-span-7 m-3">
          <div className="p-5 bg-[#07543a] rounded-2xl">
            <h2 className="text-center text-[#fac337] text-2xl font-extrabold">ارسل طلبك الان : </h2>

              <form className="max-w-md mx-auto mt-5 px-3">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  class="relative z-0 mb-5 group"
                >
                  <input
                    required
                    type="text"
                    id="floating_standard"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#fac337] peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_standard"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#fac337] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    إسم المستخدم :
                  </label>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  class="relative z-0 mb-5 group"
                >
                  <input
                    required
                    type="email"
                    id="floating_standard"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#fac337] peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_standard"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#fac337] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    البريد الإلكتروني :
                  </label>
                </div>
              
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="relative z-0 mb-5 group"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm text-white">
                    +966
                  </span>

                  <input
                    required
                    type="tel"
                    id="floating_standard"
                    className="block py-2.5 pl-16 pr-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#fac337] peer"
                    placeholder=" "
                    pattern="[0-9]{9}"
                    maxLength={9}
                  />

                  <label
                    htmlFor="floating_standard"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:origin-[0] peer-focus:text-[#fac337] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    رقم الجوال :
                  </label>
                </div>
               
                <button
                  type="submit"
                  className="text-white w-full bg-green-500 active:opacity-75 hover:bg-[#fac337] font-bold hover:text-black hover:cursor-pointer transition-colors duration-200 ease-in-out font-lg rounded-lg text-sm px-4 py-2"
                >
                  ارسال
                </button>
              </form>
          </div>







        </div>
      </div>
      </div>


      <hr className="border-0 h-1 bg-[#fac337]  w-full" />
    </>
  );
};

export default Contact;
