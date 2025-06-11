import React, { useState } from "react";
import style from "./Register.module.css";
import signupImg from "../../assets/singup.png";
export default function Register() {
  return (
    <>
      <div className="pt-40 px-7 h-screen bg-[url('../../../public/bg.jpg')] bg-cover bg-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="col-span-1">
              <h2 className=" text-green-800 my-4 text-center text-4xl font-serif ">
                تسجيل جديد
              </h2>

              <form className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    id="default_outlined"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="default_outlined"
                    class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent 
                    px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto "
                  >
                    الاسم :{" "}
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    id="default_outlined"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="default_outlined"
                    class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent 
                     px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto "
                  >
                    البريد الالكتروني :{" "}
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    id="default_outlined"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="default_outlined"
                    class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent 
                     px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto "
                  >
                    كلمة المرور :{" "}
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    id="default_outlined"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="default_outlined"
                    class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent 
                     px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto "
                  >
                    رقم الهاتف :{" "}
                  </label>
                </div>

                <button
                  type="submit"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
    </>
  );
}
