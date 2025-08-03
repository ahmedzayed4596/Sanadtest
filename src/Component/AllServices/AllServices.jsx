import React, { useState, useEffect } from "react";
import style from "./AllServices.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Partner() {
  const Services = [
    // 🏢 خدمات وزارة التجارة
    { category: "وزارة التجارة", name: "إصدار سجل تجاري" },
    { category: "وزارة التجارة", name: "شطب سجل تجاري" },
    { category: "وزارة التجارة", name: "تعديل بيانات السجل التجاري" },
    { category: "وزارة التجارة", name: "تحويل سجل فردي إلى شركة" },
    { category: "وزارة التجارة", name: " تأكيد السنوي للسجل التجاري" },
    { category: "وزارة التجارة", name: "إصدار شهادة السجل التجاري" },
    { category: "وزارة التجارة", name: "حجز اسم تجاري" },
    { category: "وزارة التجارة", name: "تحويل ملكية السجل التجاري" },
    { category: "وزارة التجارة", name: "إصدار سجل تجاري مهني" },
    { category: "وزارة التجارة", name: "إصدار سجل تجاري للمستثمر الأجنبي" },
    { category: "وزارة التجارة", name: "نقل اسم تجاري" },
    {
      category: "وزارة التجارة",
      name: "إصدار سجل تجاري إلكتروني (منصة معروف)",
    },
    { category: "وزارة التجارة", name: "تصفية شركة عملت" },
    { category: "وزارة التجارة", name: "موائمة عقد التأسيس" },
    { category: "وزارة التجارة", name: "تصفية شركة لم تعمل" },
    // 🏛️ خدمات البلدية (بلدي)
    { category: "البلدية", name: "إصدار رخصة بلدية (رخصة محل)" },
    { category: "البلدية", name: "تجديد رخصة بلدية" },
    { category: "البلدية", name: "نقل ملكية رخصة بلدية" },
    { category: "البلدية", name: "إلغاء رخصة بلدية" },
    { category: "البلدية", name: "تعديل نشاط في رخصة بلدية" },
    { category: "البلدية", name: "إصدار رخصة بناء" },
    { category: "البلدية", name: "تجديد رخصة بناء" },
    { category: "البلدية", name: "إصدار رخصة تسوير أرض" },
    { category: "البلدية", name: "إصدار تصريح لوحات إعلانية" },
    { category: "البلدية", name: "تحديث موقع النشاط التجاري" },

    // 👷‍♂️ خدمات وزارة الموارد البشرية
    { category: "الموارد البشرية", name: "فتح ملف منشأة في وزارة العمل" },
    { category: "الموارد البشرية", name: "إصدار رخص عمل" },
    { category: "الموارد البشرية", name: "تجديد رخص عمل" },
    { category: "الموارد البشرية", name: "نقل كفالة عامل" },
    { category: "الموارد البشرية", name: "خروج نهائي لعامل" },
    { category: "الموارد البشرية", name: "تحديث بيانات المنشأة" },
    { category: "الموارد البشرية", name: "إصدار شهادة سعودة" },
    { category: "الموارد البشرية", name: "تسجيل موظف سعودي" },
    { category: "الموارد البشرية", name: "إلغاء عقد عامل" },
    { category: "الموارد البشرية", name: "دعم توظيف السعوديين (هدف)" },
    { category: "الموارد البشرية", name: "برنامج تمهير / دعم التدريب" },
    { category: "الموارد البشرية", name: "دعم العمل عن بعد" },
    { category: "الموارد البشرية", name: "دعم ريادة الأعمال" },

    // 🧾 خدمات التأمينات الاجتماعية
    { category: "التأمينات الاجتماعية", name: "تسجيل منشأة في التأمينات" },
    { category: "التأمينات الاجتماعية", name: "تسجيل موظف في التأمينات" },
    { category: "التأمينات الاجتماعية", name: "تعديل أجر موظف في التأمينات" },
    { category: "التأمينات الاجتماعية", name: "إلغاء اشتراك موظف" },
    { category: "التأمينات الاجتماعية", name: "استخراج شهادة التأمينات" },
    { category: "التأمينات الاجتماعية", name: "تقديم بلاغ إصابة عمل" },

    // 🛂 خدمات الجوازات (أبشر / مقيم)
    { category: "أبشر و مقيم", name: "إصدار إقامة جديدة" },
    { category: "أبشر و مقيم", name: "تجديد إقامة" },
    { category: "أبشر و مقيم", name: "إصدار تأشيرة خروج وعودة" },
    { category: "أبشر و مقيم", name: "إصدار تأشيرة خروج نهائي" },
    { category: "أبشر و مقيم", name: "نقل خدمات (نقل كفالة)" },
    { category: "أبشر و مقيم", name: "طباعة إقامة" },
    { category: "أبشر و مقيم", name: "إلغاء تأشيرة خروج وعودة" },
    { category: "أبشر و مقيم", name: "نقل معلومات جواز" },
    { category: "أبشر و مقيم", name: "إصدار تفويض سفر" },
    { category: "أبشر و مقيم", name: "إسقاط المركبة" },
    { category: "أبشر و مقيم", name: "إصدار أو تجديد رخصة قيادة" },
    { category: "أبشر و مقيم", name: "نقل ملكية مركبة" },
    { category: "أبشر و مقيم", name: "الاستعلام عن المخالفات" },
    { category: "أبشر و مقيم", name: "حجز موعد مرور" },

    // 💰 خدمات الزكاة والضريبة (ZATCA)
    { category: "الزكاة و الضريبة", name: "تسجيل في ضريبة القيمة المضافة" },
    {
      category: "الزكاة و الضريبة",
      name: "إلغاء تسجيل في ضريبة القيمة المضافة",
    },
    { category: "الزكاة و الضريبة", name: "تقديم إقرار ضريبي" },
    { category: "الزكاة و الضريبة", name: "إصدار شهادة الزكاة والدخل" },
    {
      category: "الزكاة و الضريبة",
      name: "التسجيل في الفوترة الإلكترونية (فاتورة)",
    },
    { category: "الزكاة و الضريبة", name: "تعديل بيانات ضريبية" },
    { category: "الزكاة و الضريبة", name: "فتح ملف ضريبي جديد" },
    { category: "الزكاة و الضريبة", name: "إصدار سجل ضريبي إلكتروني" },
    { category: "الزكاة و الضريبة", name: "فتح ملف ضريبي للمؤسسة" },

    // ⚖️ خدمات وزارة العدل (ناجز)
    { category: "وزارة العدل (ناجز)", name: "توثيق عقد شركة" },
    { category: "وزارة العدل (ناجز)", name: "إصدار وكالة إلكترونية" },
    { category: "وزارة العدل (ناجز)", name: "فسخ وكالة إلكترونية" },
    { category: "وزارة العدل (ناجز)", name: "توثيق عقد زواج" },
    { category: "وزارة العدل (ناجز)", name: "توثيق عقد طلاق" },
    { category: "وزارة العدل (ناجز)", name: "توثيق ملكية عقار" },
    { category: "وزارة العدل (ناجز)", name: "الاستعلام عن القضايا" },
    { category: "وزارة العدل (ناجز)", name: "تقديم طلب تنفيذ" },
    { category: "وزارة العدل (ناجز)", name: "إصدار صك بدل فاقد" },

    // 📦 خدمات البريد (سبل)
    { category: "سبل", name: "إصدار عنوان وطني" },
    { category: "سبل", name: "تعديل العنوان الوطني" },
    { category: "سبل", name: "إصدار صندوق بريد تجاري" },
    { category: "سبل", name: "تحديث بيانات سبل" },

    // 🧠 خدمات استشارية وتجارية عامة
    { category: "خدمات عامة", name: "إعداد عقود تأسيس الشركات" },
    { category: "خدمات عامة", name: "إصدار سجل منشأة أجنبية" },
    { category: "خدمات عامة", name: "إلغاء نشاط تجاري" },
    { category: "خدمات عامة", name: "تحويل مؤسسة إلى شركة" },

    // 🧪 خدمات هيئة الغذاء والدواء
    { category: "الغذاء و الدواء", name: "تسجيل منتج تجميلي" },
    { category: "الغذاء و الدواء", name: "تسجيل منشأة غذائية" },
    { category: "الغذاء و الدواء", name: "ترخيص مستودع دوائي" },
    { category: "الغذاء و الدواء", name: "تسجيل دواء مستورد" },

    // 🌾 خدمات وزارة البيئة والمياه والزراعة
    { category: "البيئة و الزراعة", name: "إصدار ترخيص زراعي" },
    { category: "البيئة و الزراعة", name: "إصدار ترخيص نحال" },
    { category: "البيئة و الزراعة", name: "إصدار سجل بيطري" },
    { category: "البيئة و الزراعة", name: "إصدار رخصة حفر بئر" },
    { category: "البيئة و الزراعة", name: "التقديم على دعم ريف" },

    // 🏫 خدمات وزارة التعليم
    { category: "وزارة التعليم", name: "معادلة الشهادات" },
    { category: "وزارة التعليم", name: "التقديم على الابتعاث" },
    { category: "وزارة التعليم", name: "إصدار شهادة بدل فاقد" },

    // 📈 خدمات هيئة السوق المالية / الاستثمار
    { category: "هيئة الاستثمار", name: "التقديم على ترخيص منشأة مالية" },
    { category: "هيئة الاستثمار", name: "التقديم على ترخيص استثمار أجنبي" },
    { category: "هيئة الاستثمار", name: "تقديم تقارير الإفصاح" },

    // 👮‍♂️ خدمات النيابة العامة / الأمن العام
    { category: "وزارة التعليم", name: "تقديم بلاغ إلكتروني" },
    { category: "وزارة التعليم", name: "الاستعلام عن البلاغات" },
    { category: "وزارة التعليم", name: "تقديم اعتراض" },
    { category: "وزارة التعليم", name: "متابعة منع السفر" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filtered = Services.filter((service) => {
    const matchesCategory =
      selectedCategory === "" || service.category === selectedCategory;
    const matchesSearch = service.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  const [isTouched, setIsTouched] = useState(false);

  const toggleTouch = () => setIsTouched(!isTouched);
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
          <div className="max-w-md mx-auto space-y-4">
            {/* قائمة الفئات */}
            <select
              className="block w-full p-3 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">الكل</option>
              <option value="وزارة التعليم">وزارة التعليم</option>
              <option value="هيئة الاستثمار">هيئة الاستثمار</option>
              <option value="البيئة و الزراعة">البيئة و الزراعة</option>
              <option value="الغذاء و الدواء">الغذاء و الدواء</option>
              <option value="خدمات عامة">خدمات عامة</option>
              <option value="سبل">سبل</option>
              <option value="وزارة العدل (ناجز)">وزارة العدل (ناجز)</option>
              <option value="الزكاة و الضريبة">الزكاة و الضريبة</option>
              <option value="أبشر و مقيم">أبشر و مقيم</option>
              <option value="التأمينات الاجتماعية">التأمينات الاجتماعية</option>
              <option value="الموارد البشرية">الموارد البشرية</option>
              <option value="البلدية">البلدية</option>
              <option value="وزارة التجارة">وزارة التجارة</option>
            </select>

            {/* مربع البحث */}
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
            {filtered.length > 0 ? (
              filtered.map((service, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  className={`relative rounded-xl overflow-hidden shadow-md p-4 flex flex-col justify-between items-center text-center border border-[#fac337] group bg-white ${style.main}`}
                  onClick={toggleTouch}
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 508 508"
                    xmlSpace="preserve"
                    className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
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
                  <h3 className="text-sm sm:text-2xl font-bold text-black my-5">
                    {service.name}
                  </h3>

                  <Link
                    to={""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 bg-[#fac337] hover:bg-[#07543a] text-black font-bold hover:text-white px-5 py-2 text-sm rounded-lg transition-colors duration-200 ease-in-out"
                    onClick={() =>
                      window.open("https://wa.me/966506794692", "_blank")
                    }
                  >
                    طلب الخدمة
                  </Link>
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
