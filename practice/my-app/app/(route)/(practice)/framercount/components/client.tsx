"use client";

import {
  animate,
  useMotionValue,
  useTransform,
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion";

const FramerMotionClient = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const animateCount = () => {
    animate(count, 100, {
      duration: 1,
      ease: "easeOut",
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.button
        onClick={animateCount}
        className="bg-blue-500 text-white p-2 rounded-md w-20 h-10"
      >
        {rounded}
      </m.button>
    </LazyMotion>
  );
};

export default FramerMotionClient;
