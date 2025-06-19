import React, { useState, useEffect, useContext } from "react";
import style from "./Login.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import signupImg from "../../assets/singup.png";
import { Link, useNavigate } from "react-router-dom";
import back from "../../assets/back.jpeg";
import * as Yup from 'yup'
import { userContext } from "../../../Context/UserContext";
import axios from "axios";
import { useFormik } from "formik";

export default function Login() {
    const [isLouding, setIsLouding] = useState(false)
  const [errMsg, setErrMsg] = useState(null)
  const navigate = useNavigate()
  const {userToken , setUserToken} = useContext(userContext)

  async function handleSubmit(values) {
    try {
      setIsLouding(true)
      const src = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      navigate('/')
      localStorage.setItem('userToken' ,src.data.token )
      setUserToken(src.data.token)
      console.log(data);
    } catch (error) {
      console.log(error);
      setErrMsg(error.response.data.message)
    }finally {
      setIsLouding(false)
    }
  }
  const Schema = Yup.object().shape({
    email: Yup.string()
      .required()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter a valid email")
      .email(),
    password: Yup.string().required().min(6).max(15),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: Schema,
  });








  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
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
              <form onSubmit={formik.handleSubmit} className="max-w-md px-3 mx-auto mt-5">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  class="relative z-0 mb-5 group"
                >
                  <input
                    
                   type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            id="email"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#fac337] peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#fac337] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    إسم المستخدم :
                  </label>
                </div>


                 {
          formik.errors.email && formik.touched.email &&  <div
          className="p-4 font-medium mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          {formik.errors.email}
        </div>
        }

                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  class="relative z-0 mb-5 group"
                >
                  <input
                    
                   type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            id="password"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#fac337] peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#fac337] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    كلمة السر :
                  </label>
                </div>

                 {
          formik.errors.password && formik.touched.password &&  <div
          className="p-4 font-medium mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          {formik.errors.password}
        </div>
        }

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
                 disabled ={isLouding}
                  type="submit"
                  className="text-white disabled:opacity-25 w-full active:opacity-75 bg-green-500 hover:bg-[#fac337] font-bold hover:text-black hover:cursor-pointer transition-colors duration-200 ease-in-out font-lg rounded-lg text-sm px-4 py-2"
                >
                 {isLouding ? 'جاري التحميل ...' : 'تسجيل الدخول'}
                </button>



                 {
          errMsg &&  <div
          className="p-4 font-medium mb-4 text-sm text-red-800 rounded-lg my-6 bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          {errMsg}
        </div>
        }
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
