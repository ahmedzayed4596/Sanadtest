import React from "react";
import signupImg from "../../assets/singup.png";

export default function Register() {
  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 items-center">
          {/* Form section: Full width on small/medium screens, half on large */}
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-green-800 my-4 text-center text-4xl font-serif">
=======
    <>
      <div className="pt-40 px-7 h-screen">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="col-span-1">
              <h2 className=" text-green-800 my-4 text-center text-4xl font-serif ">
>>>>>>> 1311c07ead465100f88a21a58cb3219980508f18
                تسجيل جديد
              </h2>

              <form>
                {[
                  "الاسم",
                  "البريد الالكتروني",
                  "كلمة المرور",
                  "رقم الهاتف",
                ].map((label, i) => (
                  <div key={i} className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      id={`input_${i}`}
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor={`input_${i}`}
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      {label} :
                    </label>
                  </div>
                ))}

                <button
                  type="submit"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  تسجيل
                </button>
              </form>
            </div>
<<<<<<< HEAD
          </div>

          {/* Image section: Only visible on large screens */}
          <div className="hidden lg:block lg:col-span-6">
            <img
              src={signupImg}
              height="500px"
              className="w-full object-cover rounded-lg shadow-2xl"
              alt="Signup"
            />
=======
            <div className="md:col-span-1 lg:block hidden">
              <img src={signupImg}  height='500px' className="w-full  object-cover rounded-lg shadow-2xl" alt="" />
            </div>
>>>>>>> 1311c07ead465100f88a21a58cb3219980508f18
          </div>
        </div>
      </div>
    </div>
  );
}
