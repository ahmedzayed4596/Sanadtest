import React, { useState } from "react";
import style from "./Footer.module.css";
import logo1 from "../../assets/sanad logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-white shadow-sm ">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-yellow-300 via-yellow-400 to-yellow-600"></div>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo1} className="h-16" alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black hover:text-[#fac337]">
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 text-black hover:text-[#fac337]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 text-black hover:text-[#fac337]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 text-black hover:text-[#fac337]"
                >
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-black hover:text-[#fac337]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-[#ec9819] sm:mx-auto dark:border-[#ec9819] lg:my-8" />
          <span className="block text-sm  sm:text-center text-black">
            © 2023{" "}
            <a
              href="https://flowbite.com/"
              className="hover:underline text-black hover:text-[#fac337]"
            >
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
