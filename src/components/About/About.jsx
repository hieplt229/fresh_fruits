import React from "react";
import { ConstScroll } from "@/constant";
import { motion } from "framer-motion";
import { FadeUp } from "@/utility/animation";

import BannerImage from "@/assets/fruits-splash.png";

const About = () => {
  return (
    <section id={ConstScroll.about} className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
            src={BannerImage}
            alt=""
          />
        </div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Giới thiệu
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Nông trại dưa lưới New Farm đã sản xuất những trái dưa lưới tươi
              ngon, an toàn, đầy dinh dưỡng và không ngừng lao động để tạo ra
              sản phẩm chất lượng tốt nhất cho khách hàng.
            </motion.p>

            {/* Button */}
            {/* <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Learn More</button>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
