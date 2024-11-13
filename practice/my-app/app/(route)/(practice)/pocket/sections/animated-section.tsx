"use client";

import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
