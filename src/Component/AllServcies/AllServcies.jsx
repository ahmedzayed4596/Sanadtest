import React, { useState, useEffect } from "react";
import style from "./AllServcies.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Partner() {
  const Servcies = [
    // 🏢 خدمات السجل التجاري
    { name: "فتح سجل تجاري" },
    { name: "تجديد سجل تجاري" },
    { name: "شطب سجل تجاري" },
    { name: "تعديل بيانات السجل التجاري" },
    { name: "إصدار سجل تجاري فرعي" },
    { name: "تحويل سجل فردي إلى شركة" },
    { name: "تأكيد السنوي للسجل" },
    { name: "إصدار شهادة السجل التجاري" },
    { name: "حجز اسم تجاري" },
    { name: "تحويل ملكية السجل التجاري" },
    { name: "إصدار سجل تجاري مهني" },

    // 🏛️ خدمات البلدية (بلدي)
    { name: "إصدار رخصة بلدية (رخصة محل)" },
    { name: "تجديد رخصة بلدية" },
    { name: "نقل ملكية رخصة بلدية" },
    { name: "إلغاء رخصة بلدية" },
    { name: "تعديل نشاط في رخصة بلدية" },
    { name: "إصدار رخصة بناء" },
    { name: "تجديد رخصة بناء" },
    { name: "إصدار رخصة تسوير أرض" },
    { name: "إصدار تصريح لوحات إعلانية" },
    { name: "تحديث موقع النشاط التجاري" },

    // 👷‍♂️ خدمات وزارة الموارد البشرية
    { name: "فتح ملف منشأة في وزارة العمل" },
    { name: "إصدار رخص عمل" },
    { name: "تجديد رخص عمل" },
    { name: "نقل كفالة عامل" },
    { name: "خروج نهائي لعامل" },
    { name: "تحديث بيانات المنشأة" },
    { name: "إصدار شهادة سعودة" },
    { name: "تسجيل موظف سعودي" },
    { name: "إلغاء عقد عامل" },

    // 🧾 خدمات التأمينات الاجتماعية
    { name: "تسجيل منشأة في التأمينات" },
    { name: "تسجيل موظف في التأمينات" },
    { name: "تعديل أجر موظف في التأمينات" },
    { name: "إلغاء اشتراك موظف" },
    { name: "استخراج شهادة التأمينات" },
    { name: "تقديم بلاغ إصابة عمل" },

    // 🛂 خدمات الجوازات (أبشر / مقيم)
    { name: "إصدار إقامة جديدة" },
    { name: "تجديد إقامة" },
    { name: "إصدار تأشيرة خروج وعودة" },
    { name: "إصدار تأشيرة خروج نهائي" },
    { name: "نقل خدمات (نقل كفالة)" },
    { name: "طباعة إقامة" },
    { name: "إلغاء تأشيرة خروج وعودة" },
    { name: "نقل معلومات جواز" },

    // 💰 خدمات الزكاة والضريبة (ZATCA)
    { name: "تسجيل في ضريبة القيمة المضافة" },
    { name: "إلغاء تسجيل في ضريبة القيمة المضافة" },
    { name: "تقديم إقرار ضريبي" },
    { name: "إصدار شهادة الزكاة والدخل" },
    { name: "التسجيل في الفوترة الإلكترونية (فاتورة)" },
    { name: "تعديل بيانات ضريبية" },
    { name: "فتح ملف ضريبي جديد" },

    // ⚖️ خدمات وزارة العدل (ناجز)
    { name: "توثيق عقد شركة" },
    { name: "إصدار وكالة إلكترونية" },
    { name: "فسخ وكالة إلكترونية" },
    { name: "توثيق عقد زواج" },
    { name: "توثيق عقد طلاق" },
    { name: "توثيق ملكية عقار" },

    // 📦 خدمات البريد (سبل)
    { name: "إصدار عنوان وطني" },
    { name: "تعديل العنوان الوطني" },
    { name: "إصدار صندوق بريد تجاري" },
    { name: "تحديث بيانات سبل" },

    // 🧠 خدمات استشارية وتجارية عامة
    { name: "فتح ملف ضريبي للمؤسسة" },
    { name: "إصدار سجل ضريبي إلكتروني" },
    { name: "إعداد عقود تأسيس الشركات" },
    { name: "إصدار سجل منشأة أجنبية" },
    { name: "إلغاء نشاط تجاري" },
    { name: "تحويل مؤسسة إلى شركة" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState(Servcies);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const filtered = Servcies.filter((service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
  }, [searchTerm]);

  return (
    <>
      <section className="bg-gray-50 py-40 bg-[url('../../../public/bg2.png')] sm:bg-[url('../../../public/bg1.png')] bg-fixed sm:bg-cover bg-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#fac337] mb-10">
            خدماتنا في شركة <span className="text-white">سند</span>
          </h2>
          <p className="text-center text-white w-[80%] sm:w-[40%]  mx-auto text-lg mb-10">
            نحن لا نقدم خدمات فقط... بل نقدم حلولًا تصنع الفارق.
          </p>

          {/* 🟩 مربع البحث */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500"
                placeholder="بحث عن خدمة ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* 🟨 عرض الخدمات */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-5 pt-16">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  className={`relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center border border-[#fac337] group bg-white ${style.main}`}
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 508 508"
                    xmlSpace="preserve"
                    width="80px"
                    height="80px"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <circle
                        style={{ fill: "#07543a" }}
                        cx={254}
                        cy={254}
                        r={254}
                      />{" "}
                      <path
                        style={{ fill: "#CED5E0" }}
                        d="M388,410.7H120c-1.7,0-3-1.4-3-3V100.4c0-1.7,1.4-3,3-3h268c1.7,0,3,1.4,3,3v307.3 C391,409.3,389.7,410.7,388,410.7z"
                      />{" "}
                      <path
                        style={{ fill: "#FFFFFF" }}
                        d="M117,109.4v289.2c0,6.7,5.4,12,12,12h214v-36c0-6.6,5.4-12,12-12h36V109.4c0-6.7-5.4-12-12-12H129 C122.3,97.3,117,102.7,117,109.4z"
                      />{" "}
                      <path
                        style={{ fill: "#E6E9EE" }}
                        d="M343,410.7l48-48h-36c-6.6,0-12,5.4-12,12V410.7z"
                      />{" "}
                      <rect
                        x="129.3"
                        y="110.8"
                        style={{ fill: "#CED5E0" }}
                        width="16.1"
                        height="7.5"
                      />{" "}
                      <rect
                        x="132.3"
                        y="82.3"
                        style={{ fill: "#324A5E" }}
                        width="10.1"
                        height="32.3"
                      />{" "}
                      <rect
                        x="162.6"
                        y="110.8"
                        style={{ fill: "#CED5E0" }}
                        width="16.1"
                        height="7.5"
                      />{" "}
                      <rect
                        x="165.6"
                        y="82.3"
                        style={{ fill: "#324A5E" }}
                        width="10.1"
                        height="32.3"
                      />{" "}
                      <rect
                        x={196}
                        y="110.8"
                        style={{ fill: "#CED5E0" }}
                        width="16.1"
                        height="7.5"
                      />{" "}
                      <rect
                        x="198.9"
                        y="82.3"
                        style={{ fill: "#324A5E" }}
                        width="10.1"
                        height="32.3"
                      />{" "}
                      <rect
                        x="229.3"
                        y="110.8"
                        style={{ fill: "#CED5E0" }}
                        width="16.1"
                        height="7.5"
                      />{" "}
                      <rect
                        x="232.3"
                        y="82.3"
                        style={{ fill: "#324A5E" }}
                        width="10.1"
                        height="32.3"
                      />{" "}
                      <rect
                        x="262.6"
                        y="110.8"
                        style={{ fill: "#CED5E0" }}
                        width="16.1"
                        height="7.5"
                      />{" "}
                      <rect
                        x="265.6"
                        y="82.3"
                        style={{ fill: "#324A5E" }}
                        width="10.1"
                        height="32.3"
                      />{" "}
                      <rect
                        x={296}
                        y="110.8"
                        style={{ fill: "#CED5E0" }}
                        width="16.1"
                        height="7.5"
                      />{" "}
                      <rect
                        x="298.9"
                        y="82.3"
                        style={{ fill: "#324A5E" }}
                        width="10.1"
                        height="32.3"
                      />{" "}
                      <rect
                        x="329.3"
                        y="110.8"
                        style={{ fill: "#CED5E0" }}
                        width="16.1"
                        height="7.5"
                      />{" "}
                      <rect
                        x="332.3"
                        y="82.3"
                        style={{ fill: "#324A5E" }}
                        width="10.1"
                        height="32.3"
                      />{" "}
                      <rect
                        x="362.6"
                        y="110.8"
                        style={{ fill: "#CED5E0" }}
                        width="16.1"
                        height="7.5"
                      />{" "}
                      <rect
                        x="365.6"
                        y="82.3"
                        style={{ fill: "#324A5E" }}
                        width="10.1"
                        height="32.3"
                      />{" "}
                      <g>
                        {" "}
                        <path
                          style={{ fill: "#E6E9EE" }}
                          d="M177,214.4h-31.1c-4.1,0-7.5-3.4-7.5-7.5v-31.1c0-4.1,3.4-7.5,7.5-7.5H177c4.1,0,7.5,3.4,7.5,7.5 V207C184.4,211.1,181.1,214.4,177,214.4z M146.4,206.5h30.2v-30.2h-30.2V206.5z"
                        />{" "}
                        <path
                          style={{ fill: "#E6E9EE" }}
                          d="M177,288.7h-31.1c-4.1,0-7.5-3.4-7.5-7.5v-31.1c0-4.1,3.4-7.5,7.5-7.5H177c4.1,0,7.5,3.4,7.5,7.5 v31.1C184.4,285.3,181.1,288.7,177,288.7z M146.4,280.7h30.2v-30.2h-30.2V280.7z"
                        />{" "}
                        <path
                          style={{ fill: "#E6E9EE" }}
                          d="M177,362.9h-31.1c-4.1,0-7.5-3.4-7.5-7.5v-31.1c0-4.1,3.4-7.5,7.5-7.5H177c4.1,0,7.5,3.4,7.5,7.5 v31.1C184.4,359.5,181.1,362.9,177,362.9z M146.4,355h30.2v-30.2h-30.2V355z"
                        />{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <path
                          style={{ fill: "#fac337" }}
                          d="M159.5,198.3c0.7,0.9,1.7,1.5,2.9,1.6c0.1,0,0.2,0,0.3,0c1.1,0,2.1-0.4,2.8-1.2l41.1-41.1 c1.6-1.6,1.6-4.1,0-5.6c-1.6-1.6-4.1-1.6-5.6,0l-37.9,37.9l-5.6-7.7c-1.3-1.8-3.8-2.2-5.5-0.9c-1.8,1.3-2.1,3.8-0.9,5.5 L159.5,198.3z"
                        />{" "}
                        <path
                          style={{ fill: "#fac337" }}
                          d="M201,226.2l-37.9,37.9l-5.6-7.7c-1.3-1.8-3.8-2.2-5.5-0.9c-1.8,1.3-2.1,3.8-0.9,5.5l8.4,11.4 c0.7,0.9,1.7,1.5,2.9,1.6c0.1,0,0.2,0,0.3,0c1.1,0,2.1-0.4,2.8-1.2l41.1-41.1c1.6-1.6,1.6-4.1,0-5.6 C205.1,224.7,202.6,224.7,201,226.2z"
                        />{" "}
                        <path
                          style={{ fill: "#fac337" }}
                          d="M201,300.5l-37.9,37.9l-5.6-7.7c-1.3-1.8-3.8-2.2-5.5-0.9c-1.8,1.3-2.1,3.8-0.9,5.5l8.4,11.4 c0.7,0.9,1.7,1.5,2.9,1.6c0.1,0,0.2,0,0.3,0c1.1,0,2.1-0.4,2.8-1.2l41.1-41.1c1.6-1.6,1.6-4.1,0-5.6 C205.1,298.9,202.6,298.9,201,300.5z"
                        />{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <rect
                          x="216.6"
                          y="175.4"
                          style={{ fill: "#00c951" }}
                          width="116.9"
                          height="9.1"
                        />{" "}
                        <rect
                          x="216.6"
                          y="198.4"
                          style={{ fill: "#00c951" }}
                          width="70.6"
                          height="9.1"
                        />{" "}
                        <rect
                          x="216.6"
                          y="249.6"
                          style={{ fill: "#00c951" }}
                          width="116.9"
                          height="9.1"
                        />{" "}
                        <rect
                          x="216.6"
                          y="272.6"
                          style={{ fill: "#00c951" }}
                          width="70.6"
                          height="9.1"
                        />{" "}
                        <rect
                          x="216.6"
                          y="323.8"
                          style={{ fill: "#00c951" }}
                          width="116.9"
                          height="9.1"
                        />{" "}
                        <rect
                          x="216.6"
                          y="346.8"
                          style={{ fill: "#00c951" }}
                          width="70.6"
                          height="9.1"
                        />{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <h3 className="text-2xl font-bold text-black my-5">
                    {service.name}
                  </h3>
                  <div
                    className={`bg-green-900/80 ${style.child} rounded-lg m-4 absolute inset-0 flex flex-col justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    
                    <Link className="mt-6 bg-[#fac337] hover:bg-white text-black hover:text-black px-5 py-2 text-sm rounded-lg transition-colors duration-200 ease-in-out">
                      طلب الخدمة
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-white text-xl">
                لا توجد نتائج مطابقة.
              </p>
            )}
          </div>
        </div>
      </section>
      <hr className="border-0 h-1 bg-[#fac337]  w-full" />
    </>
  );
}
