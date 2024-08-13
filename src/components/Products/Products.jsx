import React from "react";
import { motion } from "framer-motion";
import { ConstScroll, ProductsList } from "@/constant";
import { FadeLeft } from "@/utility/animation";

const Products = () => {
  return (
    <section id={ConstScroll.products}>
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
                  className="w-full h-full object-cover hover:scale-110 duration-200"
                />
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-bold capitalize text-primary">
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
