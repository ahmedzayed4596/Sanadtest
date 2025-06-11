import React, { useState } from "react";
import style from "./Footer.module.css";
import logo1 from "../../assets/sanad logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-white z-50">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-yellow-300 via-yellow-400 to-yellow-600"></div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="md:self-center">
              <img src={logo1} className="h-16 flex" alt="Sanad Logo" />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#07543a]  uppercase ">
                  Resources
                </h2>
                <ul className="text-black  font-medium">
                  <li className="mb-4">
                    <a
                      href="https://flowbite.com/"
                      className="hover:underline hover:text-[#fac337]"
                    >
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline hover:text-[#fac337]"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#07543a]  uppercase ">
                  Follow us
                </h2>
                <ul className="text-black  font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline hover:text-[#fac337] "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline hover:text-[#fac337]"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#07543a]  uppercase ">
                  Legal
                </h2>
                <ul className="text-black  font-medium">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline hover:text-[#fac337]"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-[#fac337]"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-[#fcca00] sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-black sm:text-center">
              © 2025{" "}
              <a
                href="https://flowbite.com/"
                className="hover:underline hover:text-[#fac337]"
              >
                Sanad™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link
                to={"https://x.com/sanadofficial11/"}
                className="text-black  hover:text-[#fac337] ms-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  className="text-black hover:text-[#fac337] transition duration-300 fill-current"
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
              </Link>
              <Link
                to={"https://www.instagram.com/sanadofficial11/"}
                className="text-black  hover:text-[#fac337] ms-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="24px"
                  height="24px"
                  className="fill-current transition duration-300"
                >
                  <path
                    fill="currentColor"
                    d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
                  />
                </svg>
                <span className="sr-only">Instagram account</span>
              </Link>

              <a href="#" className="text-black hover:text-[#fac337] ms-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  className="fill-current transition duration-300"
                >
                  <path
                    fill="currentColor"
                    d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"
                  />
                </svg>
                <span className="sr-only">Tiktok account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
