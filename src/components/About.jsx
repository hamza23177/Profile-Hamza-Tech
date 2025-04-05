import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { StarWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// خدمة البطاقات
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-right`}>مقدمة</p>
        <h2 className={`${styles.sectionHeadText} text-right`}>لمحة عامة</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-right"
      >
        🚀 مرحبًا بك في <span className="text-white font-bold">منصة حمزة التقنية</span>، حيث تتحول أفكارك إلى واقع رقمي مبدع. نحن نمتلك خبرة واسعة في تقديم:
        <br />
        <br />
        <div className="text-right">
          <span className="text-white font-bold animate-typewriter">
            تصميم مواقع إلكترونية احترافية
          </span>{" "}
          تجمع بين الأناقة والسرعة وتجربة المستخدم المثالية لجميع الأجهزة.
        </div>
        <br />
        <div className="text-right">
          <span className="text-white font-bold animate-typewriter">
            تطبيقات موبايل
          </span>{" "}
          تعمل بكفاءة عالية ومصممة خصيصًا لتلبية احتياجات عملك وعملائك.
        </div>
        <br />
        <div className="text-right">
          <span className="text-white font-bold animate-typewriter">
            تسويق رقمي وإعلاني
          </span>{" "}
          موجه بذكاء لمتجرك أو شركتك، يضمن لك الوصول السريع والعملاء المثاليين.
        </div>
        <br />
        <div className="text-right">
          <span className="text-white font-bold animate-typewriter">
            أنظمة إدارة مرنة
          </span>{" "}
          تسهل تنظيم أعمالك اليومية وتزيد من كفاءة فريقك.
        </div>
        <br />
        في <span className="text-white font-bold">منصة حمزة التقنية</span>، نمزج بين الإبداع والخبرة التقنية لتقديم حلول رقمية تبهر وتُفضل.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(About, "about");
