import React, { useState } from "react";
import style from "./Footer.module.css";
import logo1 from "../../assets/sanad logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-600  shadow-sm  rounded-t-lg">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo1} className="h-16" alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6 text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6 text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6 text-white">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
          <span className="block text-sm  sm:text-center text-white">
            © 2023{" "}
            <a
              href="https://flowbite.com/"
              className="hover:underline text-white"
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
