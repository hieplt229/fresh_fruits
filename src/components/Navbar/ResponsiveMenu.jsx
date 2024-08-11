import React from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { MenuList } from "@/constant";

const ResponsiveMenu = ({ visible, onClose }) => {
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 bottom-0 left-0 w-full h-screen z-20"
        >
          <div className="font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col items-center gap-10">
              {MenuList.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="hover:cursor-pointer"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
