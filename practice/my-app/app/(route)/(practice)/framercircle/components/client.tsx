"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Client = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.16, 1], [0, 0, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.16, 1], [0, 0, 1]);

  // 텍스트를 위한 별도의 opacity 변환
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 0.801], // 0.8에서 0.801 사이에 급격히 변화
    [0, 0, 1]
  );

  return (
    <motion.div className="w-full min-h-[500vh] relative" ref={containerRef}>
      <motion.div className="fixed inset-0 flex items-center justify-center">
        <motion.div
          className="w-[500px] h-[500px] bg-blue-500 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          style={{
            scale,
            opacity,
          }}
        >
          <motion.span
            className="text-black text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: textOpacity }}
          >
            Hello
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Client;
