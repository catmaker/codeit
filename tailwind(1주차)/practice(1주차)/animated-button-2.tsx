import React from "react";

const AnimatedButton2 = () => {
  return (
    <div className="flex items-center flex-nowrap w-[360px] group border-b border-black justify-center">
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        className="w-0 h-0 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-5 group-hover:h-5 transition-all duration-300 mb-3"
      >
        <path
          d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
          fill="currentColor"
        ></path>
      </svg>
      <span className="w-full text-xl font-bold cursor-pointer pb-3 transition-transform duration-300 group-hover:translate-x-3">
        Seize every sale
      </span>
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        className="w-5 h-5 group-hover:opacity-0 group-hover:translate-x-3 transition-all duration-300 mb-3"
      >
        <path
          d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default AnimatedButton2;
