import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { StarWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Use emailjs to send the form data to your email
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        formRef.current,
        "YOUR_USER_ID" // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          toast("تم إرسال الرسالة بنجاح. سأعود إليك قريبًا.", {
            icon: <i className="fa-regular fa-paper-plane text-white"></i>,
            style: {
              borderRadius: "10px",
              background: "#874CCC",
              color: "#ffffff",
            },
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          toast.error("حدث خطأ أثناء إرسال الرسالة.");
          setLoading(false);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      style={{ direction: "rtl" }} // Set text direction to right-to-left for Arabic
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>اتصل بي</p>
        <h3 className={styles.sectionHeadText}>التواصل.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">اسمك</span>
            <input
              type="text"
              name="name"
              required={true}
              value={form.name}
              onChange={handleChange}
              placeholder="ما اسمك؟"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">بريدك الإلكتروني</span>
            <input
              type="email"
              name="email"
              required={true}
              value={form.email}
              onChange={handleChange}
              placeholder="ما هو عنوان بريدك الإلكتروني؟"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">رسالتك</span>
            <textarea
              rows={7}
              name="message"
              required={true}
              value={form.message}
              onChange={handleChange}
              placeholder="ماذا تريد أن تقول؟"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={loading}
          >
            {loading ? "جاري الإرسال..." : "إرسال"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default StarWrapper(Contact, "contact");
