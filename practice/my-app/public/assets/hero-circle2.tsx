interface HeroCircle2Props {
  className?: string;
}

const HeroCircle2 = ({ className }: HeroCircle2Props) => {
  return (
    <svg
      viewBox="0 0 1026 1026"
      fill="none"
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full animate-spin ${className}`}
    >
      <path
        d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
        stroke="#D4D4D4"
        strokeOpacity="0.7"
      />
      <path
        d="M913 513c0 220.914-179.086 400-400 400"
        stroke="url(#:S1:-gradient-2)"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id=":S1:-gradient-2"
          x1="913"
          y1="513"
          x2="913"
          y2="913"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06b6d4" />
          <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeroCircle2;
