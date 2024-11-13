interface HeroCircleProps {
  className?: string;
}

const HeroCircle = ({ className }: HeroCircleProps) => {
  return (
    <>
      {/* 첫 번째 SVG (기존 코드) */}
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full animate-spin ${className}`}
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke="url(#:S1:-gradient-1)"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id=":S1:-gradient-1"
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default HeroCircle;
