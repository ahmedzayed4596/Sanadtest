import React, { useState, useEffect } from "react";
import style from "./Register.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import signupImg from "../../assets/singup.png";
import { Link } from "react-router-dom";
export default function Register() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animates only once when in view
    });
    AOS.refresh(); // Refresh to catch new elements
  }, []);
  return (
    <>
      <div className="pt-40 px-7 h-screen bg-[url('../../../public/bg2.png')] sm:bg-[url('../../../public/bg1.png')] bg-cover bg-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="col-span-1 self-center">
              <h2
                className={`text-green-700 animate-pulse w-fit mx-auto z-20 my-4 text-center font-bold text-4xl ${style.reg}`}
              >
                تسجيل جديد
              </h2>
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
                  data-aos-delay="500"
                  class="relative z-0 mb-5 group"
                >
                  <input
                    required
                    type="password"
                    id="floating_standard"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#fac337] peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_standard"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#fac337] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    كلمة السر :
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
                <h2 className="max-w-md mx-auto my-5 text-white">
                  لديك حساب ؟{" "}
                  <Link
                    className="font-bold active:opacity-75 hover:text-[#fac337] mx-2"
                    to={"/Login"}
                  >
                    تسجيل الدخول
                  </Link>
                </h2>
                <button
                  type="submit"
                  className="text-white bg-green-500 active:opacity-75 hover:bg-[#fac337] font-bold hover:text-black hover:cursor-pointer transition-colors duration-200 ease-in-out font-lg rounded-lg text-sm px-4 py-2"
                >
                  تسجيل
                </button>
              </form>
            </div>
            <div className="md:col-span-1 lg:block hidden">
              <img
                src={signupImg}
                height="500px"
                className="w-full  object-cover rounded-lg shadow-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-yellow-300 via-yellow-400 to-yellow-600"></div>
    </>
  );
}
