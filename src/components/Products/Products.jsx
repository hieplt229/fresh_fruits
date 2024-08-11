import React from "react";
import { motion } from "framer-motion";
import { ConstScroll, ProductsList } from "@/constant";
import { FadeLeft } from "@/utility/animation";

const Products = () => {
  return (
    <section id={ConstScroll.products}>
      <div className="container pb-32 mt-20 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl uppercase font-bold  pb-10 text-center"
        >
          Sản phảm
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
              {/* <img
                src={product.image}
                alt=""
                className="w-[60px] h-[60px] mb-4 scale-125 translate-y-6"
              /> */}
              <div className="bg-slate-400 w-[120px] h-[120px]">
                Image Product
              </div>

              <div>
                <h1 className="text-lg font-semibold">{product.name}</h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
