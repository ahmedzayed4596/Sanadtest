import React, { useState } from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen pt-32 text-white ">
        <div className="w-full lg:w-1/2 p-8 bg-[url('../../../public/bg2.png')] sm:bg-[url('../../../public/bg1.png')] bg-cover bg-center rounded-lg text-black">
          <h2 className="text-3xl text-[#fac337] font-bold mb-6">
            كن على تواصل
          </h2>
          <div className="space-y-10 text-2xl">
            <div>
              <p className="font-semibold text-white">Chat to us</p>
              <p className="text-white">Our friendly team is here to help.</p>
              <p className="text-[#fac337]">hello@paysphere.com</p>
            </div>
            <div>
              <p className="font-semibold">Call us</p>
              <p>Mon–Fri from 8am to 5pm</p>
              <p>(+995) 555-55-55-55</p>
            </div>
            <div>
              <p className="font-semibold">Social media</p>
              <div className="flex gap-3 text-2xl mt-1">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 p-8">
          <form className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 bg-transparent border border-gray-600 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 bg-transparent border border-gray-600 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-3 bg-transparent border border-gray-600 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-transparent border border-gray-600 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 bg-transparent border border-gray-600 rounded"
            />
            <textarea
              placeholder="Tell us what we can help you with"
              className="w-full p-3 bg-transparent border border-gray-600 rounded h-32"
            ></textarea>

            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" />
              <label>
                I'd like to receive more information and agree to the{" "}
                <a href="#" className="text-blue-400 underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="active:opacity-75 bg-[#07543a] hover:bg-[#fac337] font-bold hover:text-black hover:cursor-pointer transition-colors duration-200 ease-in-out font-lg rounded-lg text-sm text-white py-3 px-6 "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <hr className="border-0 h-1 bg-[#fac337]  w-full" />
    </>
  );
};

export default Contact;
