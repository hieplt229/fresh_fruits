import React, { useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useToggle } from "@uidotdev/usehooks";
import { Link, animateScroll } from "react-scroll";
import ResponsiveMenu from "./ResponsiveMenu";
import { MenuList } from "@/constant";

import Icon_Logo from "@assets/icon_logo.png";

const Navbar = () => {
  const [toggle, handleToggle] = useToggle(false);

  const handleScrollToTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-[1000] bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container flex justify-between items-center py-4 md: pt-4"
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

          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-500">
              {MenuList.map((item, index) => (
                <li key={index}>
                  <Link
                    className="inline-block py-1 px-3 hover:cursor-pointer font-semibold"
                    to={item.link}
                    activeClass="text-primary shadow-[0_3px_0_-1px_#ef4444]"
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            {!toggle ? (
              <MdMenu
                className="text-4xl hover:cursor-pointer"
                onClick={() => handleToggle(true)}
              />
            ) : (
              <MdClose
                className="text-4xl hover:cursor-pointer"
                onClick={() => handleToggle(false)}
              />
            )}
          </div>
        </motion.div>
      </nav>

      <ResponsiveMenu visible={toggle} onClose={() => handleToggle(false)} />
    </>
  );
};

export default Navbar;
