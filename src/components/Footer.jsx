import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-[#151030] text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center pl-10 pr-10">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">تواصل معي | </h2>
        </div>

        {/* أزرار التواصل */}
        <div className="flex flex-wrap gap-6 mt-6 justify-center">
          <a
            href="https://wa.me/963951255464"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            واتساب
          </a>

          <a
            href="https://www.instagram.com/hamzaaltobaje/profilecard/?igsh=YTh6NW5qYjQ4eGEy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white px-6 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <i className="fab fa-instagram text-2xl"></i>
            انستغرام
          </a>

          <a
            href="https://www.facebook.com/share/18uRQmnNdW/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
            فيسبوك
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
