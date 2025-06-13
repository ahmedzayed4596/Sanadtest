import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about1 from "../../assets/about1.jpeg";
import about2 from "../../assets/about2.jpeg";
import { FaBriefcase, FaHandshake, FaSmile } from "react-icons/fa";
import CountUp from "react-countup";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animates only once when in view
    });
    AOS.refresh(); // Refresh to catch new elements
  }, []);

  return (
    <>
      <div className="pt-20 px-4 bg-[url('../../../public/bg2.png')] sm:bg-[url('../../../public/bg1.png')] bg-cover bg-center">
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="w-full grid gap-12 lg:grid-cols-2 grid-cols-1 items-center">
              <div className="lg:grid sm:grid-cols-2 grid-cols-1 gap-6 order-last lg:order-first hidden sm:grid">
                <div className="pt-12 sm:pt-24 flex justify-start sm:justify-end">
                  <img
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                    className="rounded-xl object-cover w-full max-w-[320px]"
                    src={about1}
                    alt="About Us"
                  />
                </div>
                <div className="sm:ml-0 ml-auto">
                  <img
                    data-aos="flip-right"
                    data-aos-duration="1000"
                    data-aos-delay="700"
                    className="rounded-xl object-cover w-full max-w-[320px]"
                    src={about2}
                    alt="About Us"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-10">
                <div className="flex flex-col gap-6 text-center lg:text-start">
                  <h2
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    className="text-[#f0bb35] text-2xl sm:text-3xl md:text-4xl font-bold leading-snug"
                  >
                    شركة <span className="text-[#828c8b]">"سند"</span> للخدمات
                    العامة
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="700"
                    className="text-gray-100 text-base sm:text-lg leading-relaxed"
                  >
                    في مسيرتنا كمزوّد خدمات متكامل للشركات، لم نكن مجرّد جهة
                    تنفيذ، بل شركاء حقيقيين في بناء النجاح. كل خدمة قدمناها كانت
                    نابعة من فهم عميق لاحتياجات عملائنا، وحرص دائم على تقديم
                    حلول فعالة ومخصصة تُسهم في رفع كفاءة أعمالهم. نؤمن أن النجاح
                    لا يُبنى وحدنا، بل بصناعة علاقات متينة قائمة على الثقة
                    والاحترافية والاستمرارية. ومن خلال فرقنا المتخصصة وخبراتنا
                    المتراكمة، نسعى دائماً لتقديم قيمة مضافة حقيقية، تُمكّن
                    عملاءنا من التركيز على أهدافهم، بينما نتولى نحن دعمهم
                    بكفاءة، في كل خطوة من خطواتهم نحو النمو والتميّز.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="900"
                  className="flex flex-wrap justify-center lg:justify-start gap-10"
                >
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                    <h3 className="text-[#f0bb35] text-3xl sm:text-4xl font-bold">
                      <CountUp end={8} duration={4} />+
                    </h3>
                    <p className="text-white text-sm sm:text-base">
                      سنوات من الخبرة
                    </p>
                    <hr className="w-full mt-2 text-[#f0bb35]"></hr>
                    <FaBriefcase className="text-[#f0bb35] text-4xl mt-2" />
                  </div>

                  <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                    <h4 className="text-[#f0bb35] text-3xl sm:text-4xl font-bold">
                      <CountUp end={60} duration={4} />+
                    </h4>
                    <p className="text-white text-sm sm:text-base">
                      من شركاء النجاح
                    </p>
                    <hr className="w-full mt-2 text-[#f0bb35]"></hr>
                    <FaHandshake className="text-[#f0bb35] text-4xl mt-2" />
                  </div>

                  <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                    <h4 className="text-[#f0bb35] text-3xl sm:text-4xl font-bold">
                      <CountUp end={52} duration={4} />+
                    </h4>
                    <p className="text-white text-sm sm:text-base">عميل سعيد</p>
                    <hr className="w-full mt-2 text-[#f0bb35]"></hr>
                    <FaSmile className="text-[#f0bb35] text-4xl mt-2" />
                  </div>
                </div>
                <button
                  data-aos="fade-up"
                  data-aos-delay="800"
                  data-aos-duration="1100"
                  className="w-fit sm:w-fit px-5 py-2 bg-green-500 hover:bg-[#fac337] font-bold hover:text-black hover:cursor-pointer active:opacity-75 transition-colors duration-200 ease-in-out rounded-lg shadow justify-center items-center flex"
                >
                  تواصل معنا
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr className="border-0 h-1 bg-[#fac337]  w-full" />
    </>
  );
}
