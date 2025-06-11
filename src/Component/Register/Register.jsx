import React, { useState } from "react";
import style from "./Register.module.css";
import signupImg from "../../assets/singup.png";
export default function Register() {
  return (
    <>
      <div className="pt-40 px-7 h-screen  bg-{}">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="col-span-1">
              <h2 className=" text-green-800 my-4 text-center text-4xl font-serif ">
                تسجيل جديد
              </h2>

            
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
