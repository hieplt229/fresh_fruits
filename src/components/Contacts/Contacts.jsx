import React from "react";
import { ConstScroll, ContactInfo } from "@/constant";
import { motion } from "framer-motion";
import { FadeUp } from "@/utility/animation";

import {
  MdLocationOn,
  MdLocalPhone,
  MdEmail,
  MdFacebook,
} from "react-icons/md";

import Icon_Logo from "@assets/icon_logo.png";

const Contacts = () => {
  return (
    <section id={ConstScroll.contact} className="container">
      <div className="h-[800px]">
        <motion.h2
          variants={FadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl font-bold text-primary text-center mt-20"
        >
          Liên hệ với chúng tôi
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
          <div>
            <motion.div
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl flex items-center font-bold justify-center md:justify-start"
            >
              <span className="text-primary">New</span>
              <span className="text-secondary">Farm</span>
              <div className="w-12 h-12 ml-2 ">
                <img src={Icon_Logo} />
              </div>
            </motion.div>

            <div className="mt-8 mr-0 md:mr-5">
              {[
                {
                  icon: <MdLocationOn className="text-primary w-6 h-6" />,
                  info: ContactInfo.address,
                },
                {
                  icon: <MdLocalPhone className="text-primary w-6 h-6" />,
                  info: ContactInfo.phone,
                  link: `tel:${ContactInfo.phone}`,
                },
                {
                  icon: <MdEmail className="text-primary w-6 h-6" />,
                  info: ContactInfo.mail,
                  link: `mailto:${ContactInfo.mail}`,
                },
                {
                  icon: <MdFacebook className="text-primary w-6 h-6" />,
                  info: ContactInfo.messenger,
                  // link: `mailto:${ContactInfo.mail}`,
                  link: `https://www.facebook.com/profile.php?id=61557781107859`,
                },
              ]
                .filter(({ info }) => info)
                .map(({ icon, info, link }, index) => (
                  <motion.div
                    variants={FadeUp(0.7 + index * 0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    key={index}
                    className="flex items-center gap-5 mb-3"
                  >
                    <span className="text-primary w-6 h-6">{icon}</span>
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        className="text-secondary font-semibold"
                      >
                        {info}
                      </a>
                    ) : (
                      <span className="text-secondary font-semibold">
                        {info}
                      </span>
                    )}
                  </motion.div>
                ))}
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3920.88793813731!2d107.18650837504038!3d10.665805589476351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDM5JzU2LjkiTiAxMDfCsDExJzIwLjciRQ!5e0!3m2!1svi!2s!4v1723287005792!5m2!1svi!2s"
            className="w-full max-h-[500px] h-[400px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
