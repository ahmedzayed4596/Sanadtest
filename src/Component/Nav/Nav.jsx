import React, { useState } from "react";
import style from "./Nav.module.css";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/sanad logo.png";
import { Link, NavLink } from "react-router-dom";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-xl fixed w-full z-50 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo2}
              className="h-16 hover:cursor-pointer"
              alt="Sanad Logo"
            />
          </Link>
          <div className="flex md:order-2 gap-2 space-x-3 md:space-x-0">
            <button className="text-white bg-[#07543a] hover:bg-[#07543ab2] hover:cursor-pointer transition-colors duration-200 ease-in-out font-medium rounded-lg text-sm px-4 py-2">
              إنشاء حساب
            </button>
            <button className="text-white bg-[#07543a] hover:bg-[#07543ab2] hover:cursor-pointer transition-colors duration-200 ease-in-out font-medium rounded-lg text-sm px-4 py-2">
              تسجيل دخول
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <NavLink
                  to={"/"}
                  className="block py-2 px-3 transition-colors duration-200 ease-in-out text-black hover:text-[#fac337]"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/About"}
                  className="block py-2 px-3 transition-colors duration-200 ease-in-out text-black hover:text-[#fac337]"
                >
                  من نحن
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Servcies"}
                  className="block py-2 px-3 transition-colors duration-200 ease-in-out text-black hover:text-[#fac337]"
                >
                  خدماتنا
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Partner"}
                  className="block py-2 px-3 transition-colors duration-200 ease-in-out text-black hover:text-[#fac337]"
                >
                  عملاؤنا
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Contact"}
                  className="block py-2 px-3 transition-colors duration-200 ease-in-out text-black hover:text-[#fac337]"
                >
                  تواصل معنا
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-yellow-300 via-yellow-400 to-yellow-600"></div>
      </nav>
    </>
  );
}
