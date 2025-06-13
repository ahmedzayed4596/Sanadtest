import React, { useState, useEffect } from "react";
import style from "./Login.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import signupImg from "../../assets/singup.png";
import { Link } from "react-router-dom";
import back from "../../assets/back.jpeg";

export default function Login() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="pt-40 px-7 h-screen bg-[url('../../../public/bg2.png')] sm:bg-[url('../../../public/bg1.png')] bg-cover bg-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="md:col-span-1 lg:block hidden">
              <img
                src={back}
                height="500px"
                className="w-full  object-cover rounded-lg shadow-2xl"
                alt=""
              />
            </div>

            <div className="col-span-1 self-center">
              <h2
                className={`text-green-700 animate-pulse w-fit mx-auto z-20 my-4 text-center font-bold text-4xl ${style.reg}`}
              >
                <span className="text-white">تسجيل</span> الدخول
              </h2>
              <form className="max-w-md px-3 mx-auto mt-5">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
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
                  data-aos-delay="400"
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

                <div>
                  <p className="text-white my-4">
                    ليس لدي حساب :{" "}
                    <span>
                      <Link
                        to={"/Register"}
                        className="font-bold active:opacity-75 hover:text-[#fac337] hover:underline"
                      >
                        سجل الان
                      </Link>
                    </span>
                  </p>
                </div>

                <div className="space-y-3 flex  ">
                  <input
                    defaultChecked
                    id="yellow-checkbox"
                    type="checkbox"
                    defaultValue
                    className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded-sm focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="yellow-checkbox"
                    className="ms-2 text-sm font-medium text-white"
                  >
                    تذكرني
                  </label>
                </div>

                <button
                  type="submit"
                  className="text-white w-full active:opacity-75 bg-green-500 hover:bg-[#fac337] font-bold hover:text-black hover:cursor-pointer transition-colors duration-200 ease-in-out font-lg rounded-lg text-sm px-4 py-2"
                >
                  تسجيل الدخول
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
