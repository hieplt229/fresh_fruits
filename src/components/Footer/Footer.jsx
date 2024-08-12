import React from "react";
import { motion } from "framer-motion";
import Icon_Logo from "@assets/icon_logo.png";
import { animateScroll } from "react-scroll";

import { FaFacebookMessenger } from "react-icons/fa";
import { Socical } from "@/constant";

const Footer = () => {
  const handleScrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <footer className="bg-secondary/10 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="container flex justify-between items-center"
      >
        <div
          className="text-2xl flex items-center font-bold hover:cursor-pointer"
          onClick={handleScrollToTop}
        >
          <span className="text-primary">New</span>
          <span className="text-secondary">Farm</span>
          <div className="w-8 h-8 ml-2 ">
            <img src={Icon_Logo} />
          </div>
        </div>

        <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
          <FaFacebookMessenger />
          <FaFacebookMessenger />
          <FaFacebookMessenger />
          <FaFacebookMessenger />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
