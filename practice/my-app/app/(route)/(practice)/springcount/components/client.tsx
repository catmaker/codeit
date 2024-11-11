"use client";

import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const ReactSpringClient = () => {
  const [isClicked, setIsClicked] = useState(false);

  const { count } = useSpring({
    from: { count: 0 },
    to: [
      { count: 120 }, // 먼저 120까지 올라가고
      { count: 100 }, // 다시 100으로 내려옴
    ],
    config: { duration: 1000 },
  });

  return (
    <>
      <animated.button
        className="bg-blue-500 text-white p-2 rounded-md w-20 h-10"
        onClick={() => setIsClicked(!isClicked)}
      >
        {count.to((val) => Math.floor(val))}
      </animated.button>
    </>
  );
};
export default ReactSpringClient;
