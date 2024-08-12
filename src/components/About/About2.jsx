import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "@/utility/animation";
import { FaCheck } from "react-icons/fa6";

const About2 = () => {
  return (
    <section>
      <div className="container space-y-6 md:space-y-0 py-20">
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-left space-y-4">
            <motion.h1
              variants={FadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-primary text-3xl lg:text-4xl font-bold uppercase"
            >
              Công nghệ hiện đại
            </motion.h1>

            <motion.p
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              Hệ thống tưới tiêu tự động, giúp cung cấp lượng nước và dinh dưỡng
              tối ưu cho cây dưa lưới.
            </motion.p>

            <motion.div
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              <div className="p-2">
                <FaCheck className="text-secondary" />
              </div>
              <p>
                Hệ thống tưới tiêu tự động, giúp cung cấp lượng nước và dinh
                dưỡng tối ưu cho cây dưa lưới.
              </p>
            </motion.div>

            <motion.div
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              <div className="p-2">
                <FaCheck className="text-secondary" />
              </div>
              <p>
                Hệ thống nhà kính hiện đại, sạch sẽ giúp kiểm soát nhiệt độ, độ
                ẩm và ánh sáng thích hợp cho sự phát triển của cây dưa lưới.
              </p>
            </motion.div>

            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              <div className="p-2">
                <FaCheck className="text-secondary" />
              </div>
              <p>
                Hệ thống quản lý dịch hại tổng hợp, giúp hạn chế tối đa việc sử
                dụng thuốc trừ sâu và bảo vệ môi trường.
              </p>
            </motion.div>

            {/* ==================================================== */}
            <motion.h1
              variants={FadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-primary text-3xl lg:text-4xl font-bold uppercase"
            >
              Chất lượng tuyệt hảo
            </motion.h1>

            <motion.p
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              Sử dụng phân bón hữu cơ vi sinh, đảm bảo cung cấp đầy đủ dinh
              dưỡng cho cây mà không ảnh hưởng đến môi trường.
            </motion.p>

            <motion.p
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              Dưa lưới được chăm sóc bởi đội ngũ kỹ sư nông nghiệp giàu kinh
              nghiệm, áp dụng các kỹ thuật canh tác tiên tiến, đảm bảo:
            </motion.p>

            <motion.div
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              <div className="p-2">
                <FaCheck className="text-secondary" />
              </div>
              <p>Dưa lưới phát triển khỏe mạnh, đạt năng suất cao.</p>
            </motion.div>

            <motion.div
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              <div className="p-2">
                <FaCheck className="text-secondary" />
              </div>
              <p>Dưa lưới có chất lượng đồng đều, đạt tiêu chuẩn.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
