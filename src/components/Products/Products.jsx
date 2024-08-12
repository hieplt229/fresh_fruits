import React from "react";
import { motion } from "framer-motion";
import { ConstScroll, ProductsList } from "@/constant";
import { FadeLeft } from "@/utility/animation";

const Products = () => {
  return (
    <section id={ConstScroll.products}>
      {/* <div className="container pb-32 mt-20 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl uppercase font-bold  pb-10 text-center"
        >
          Sản phẩm
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ProductsList.map((product, index) => (
            <motion.div
              variants={FadeLeft((index * 0.3).toFixed(1))}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              key={index}
              className=" px-4 py-2 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt=""
                className="w-[60px] h-[60px] mb-4 scale-125 translate-y-6"
              />

              <div>
                <h1 className="text-lg font-semibold">{product.name}</h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      <div className="container my-16 space-y-4">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[rgb(101_101_101)]"
          >
            <span className="text-primary">Sản phẩm</span> của chúng tôi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-base opacity-50"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At earum
            suscipit, similique animi nesciunt nostrum facilis consequuntur
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ProductsList.map((product, index) => (
            <motion.div
              key={index}
              variants={FadeLeft((index * 0.2).toFixed(1))}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-4 text-center space-y-6"
            >
              <div className="h-52 w-52 rounded-xl mx-auto img-shadow2">
                <img
                  src={product.image}
                  alt=""
                  className="max-w-[200px] hover:scale-110 duration-200"
                />
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-primary">
                  {product.name}
                </h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
