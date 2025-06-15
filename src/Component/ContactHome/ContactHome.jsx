import React, { useState } from 'react'
import style from './ContactHome.module.css'
import vision from '../../assets/vision.png'

export default function ContactHome() {
    
return <>
    <div className='grid grid-cols-12 '>
        <div className="col-span-8 space-y-5 self-center">
            <h3 className='text-3xl text-white font-bold'>للتواصل معك من قبل <span className='text-[#fac337] font-extrabold'>سند</span></h3>
            <h4 className='text-white text-xl'>أضف حسابك الآن وكن من أوائل العملاء الذين يستفيدون من كل جديد!</h4>
            <h4 className='text-white text-xl'>احصل على مزايا خاصة مصممة لتناسب احتياجاتك وتفضيلاتك واستمتع بخصومات حصرية لا تُقدّم إلا للأعضاء.</h4>
            
<form className="max-w-sm  gap-6 flex  ">
 
  <div className="relative grow  ">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
      </svg>
    </div>
    <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="البريد الالكتروني" />

    
  </div>


  <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">تسجيل</button>

</form>


        </div>
        <div className="col-span-4 p-4 ">
            <img src={vision} className='w-full p-4 drop-shadow-2xl drop-shadow-amber-300 ' alt="" />
        </div>
        
    </div>
</>
}
