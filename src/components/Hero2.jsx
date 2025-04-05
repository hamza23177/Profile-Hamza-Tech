import React from "react";
import { selfpro } from "../constants";
import "../index.css";
import photo from "../assets/photo.jpg";

const Hero2 = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.download = "hamza-tech-profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-custom text-white pt-32 px-5" dir="rtl">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between pr-1 lg:pr-28">
        {/* النصوص */}
        <div className="lg:w-1/2 mb-6 lg:mb-0 p-0 md:p-20 text-right">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-[#ffffff]">
            👋 أهلاً بك
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            أنا <span className="text-[#8A2BE2]">حمزة</span>
          </h1>
          <p className="text-lg lg:text-xl mb-4 leading-relaxed text-right space-y-6 animate-fade-in">
  أنا مطوّر مواقع وتطبيقات موبايل، ومؤسس  
  <span className="text-[#8A2BE2] font-bold hover:underline transition duration-300">منصة حمزة التقنية</span>، المنصة التي تهدف إلى نقل أعمالك إلى مستوى احترافي من خلال خدمات رقمية مبتكرة، تشمل:
  
  <ul className="list-disc pr-6 mt-4 space-y-4 text-base lg:text-lg">
    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
      <i className="fas fa-laptop-code text-blue-500"></i> 
      <span className="animate-typewriter">تصميم مواقع إلكترونية ديناميكية عالية الجودة.</span>
    </li>
    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
      <i className="fas fa-bullhorn text-green-500"></i> 
      <span className="animate-typewriter">تسويق إعلاني احترافي للمحلات، المطاعم، والشركات.</span>
    </li>
    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
      <i className="fas fa-mobile-alt text-purple-500"></i> 
      <span className="animate-typewriter">تطوير تطبيقات موبايل بأداء سريع وسلس.</span>
    </li>
    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
      <i className="fas fa-cogs text-orange-500"></i> 
      <span className="animate-typewriter">أنظمة إدارية ذكية تسهّل إدارة أعمالك بكل احتراف.</span>
    </li>
  </ul>
</p>



          {/* أزرار التواصل */}
          <div className="flex flex-wrap gap-4 mt-6 justify-start">
            <a
              href="https://wa.me/963951255464"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              واتساب
            </a>

            <a
              href="https://www.instagram.com/hamzaaltobaje/profilecard/?igsh=YTh6NW5qYjQ4eGEy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white px-5 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
            >
              <i className="fab fa-instagram text-xl"></i>
              انستغرام
            </a>

            <a
              href="https://www.facebook.com/share/18uRQmnNdW/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
            >
              <i className="fab fa-facebook-f text-xl"></i>
              فيسبوك
            </a>
          </div>
        </div>

        {/* الصور */}
        <div className="lg:w-1/2 pl-5 flex items-start justify-between relative mt-10 lg:mt-0">
          <img
            src={photo}
            alt="Hamza Personal"
            className="w-40 md:w-52 lg:w-56 rounded-full border-4 border-[#8A2BE2] shadow-lg transition-transform duration-500 hover:scale-105 relative z-10"
          />

          <img
            src={selfpro.image1}
            alt="Hamza Tech Computer"
            className="w-52 md:w-64 lg:w-72 rounded-2xl shadow-[0_10px_40px_rgba(138,43,226,0.3)] transition-transform duration-500 hover:scale-105 absolute right-1/2 transform translate-x-1/2 translate-y-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
