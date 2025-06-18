import React, { useContext, useState } from "react";
import style from "./Nav.module.css";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../../../Context/UserContext";
import AvatarDropdown from "../AvatarDropdown/AvatarDropdown";

export default function Nav() {
  const { userToken, setUserToken } = useContext(userContext);
  const navigate = useNavigate();

  function logoutbtn() {
    localStorage.removeItem("userToken");
    navigate("/login");
    setUserToken(null);
  }

  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-2xl fixed w-full z-50 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link
            to={"/"}
            onClick={handleLinkClick}
            className="flex items-center space-x-3 "
          >
            <img
              src={logo}
              className="h-16 hover:cursor-pointer"
              alt="Sanad Logo"
            />
          </Link>

          {/* Links */}
          <div
            className={`
    ${isOpen ? "block" : "hidden"}
    absolute top-full left-0 w-full bg-white z-40
    flex-col items-start p-4
    lg:static lg:flex lg:flex-row lg:items-center lg:w-auto lg:p-0
  `}
          >
            <ul className="flex font-bold flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 ">
              <li>
                <NavLink
                  to={"/"}
                  onClick={handleLinkClick}
                  className="block  py-2 px-3 transition-colors duration-200 ease-in-out text-black hover:text-[#fac337]"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/About"}
                  onClick={handleLinkClick}
                  className="block py-2 px-3 transition-colors duration-200 ease-in-out text-black hover:text-[#fac337]"
                >
                  من نحن
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Servcies"}
                  onClick={handleLinkClick}
                  className="block py-2 px-3 transition-colors duration-200 ease-in-out text-black hover:text-[#fac337]"
                >
                  خدماتنا
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Partner"}
                  onClick={handleLinkClick}
                  className="block py-2 px-3 transition-colors duration-200 ease-in-out text-black hover:text-[#fac337]"
                >
                  عملاؤنا
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Contact"}
                  onClick={handleLinkClick}
                  className="block py-2 px-3 transition-colors duration-200 ease-in-out text-black hover:text-[#fac337]"
                >
                  تواصل معنا
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right buttons */}
          <div className="flex gap-2 space-x-3 lg:space-x-0">
            {userToken == null ? (
              <>
                <Link
                  to={"/Register"}
                  className="text-white active:opacity-75 bg-[#07543a] hover:bg-[#fac337] hover:text-black hover:cursor-pointer transition-colors duration-200 ease-in-out font-medium rounded-lg text-sm px-4 py-2"
                >
                  إنشاء حساب
                </Link>
                <Link
                  to={"/Login"}
                  className="text-white active:opacity-75 bg-[#07543a] hover:bg-[#fac337] hover:text-black hover:cursor-pointer transition-colors duration-200 ease-in-out font-medium rounded-lg text-sm px-4 py-2"
                >
                  تسجيل دخول
                </Link>
              </>
            ) : (
              <AvatarDropdown />
            )}
          </div>

          {/* Animated Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="relative z-50 flex flex-col items-center justify-center w-10 h-10 lg:hidden group"
            aria-label="Toggle menu"
          >
            {/* Top bar */}
            <span
              className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>

            {/* Middle bar */}
            <span
              className={`block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            {/* Bottom bar */}
            <span
              className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Bottom border gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-yellow-300 via-yellow-400 to-yellow-600"></div>
      </nav>
    </>
  );
}
