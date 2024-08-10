import React from "react";
import { motion } from "framer-motion";
import { FadeLeft } from "@/utility/animation";

import BannerPng from "@/assets/banner-bg.jpg";

const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const About3 = () => {
  return (
    <section>
      <div className="container">
        <div
          style={bgStyle}
          className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
        >
          {/* Blank div */}
          <div></div>
          {/* Brand Info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                Brand Info
              </motion.h1>

              <motion.p
                variants={FadeLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, quo officiis. Beatae voluptate nemo delectus
                aspernatur. Fuga, porro quis facere cupiditate voluptatem quo
                repudiandae natus, possimus nihil veniam officia nam.
              </motion.p>

              {/* Button */}
              <motion.div
                variants={FadeLeft(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center md:justify-start"
              >
                <button className="primary-btn">Learn More</button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;
