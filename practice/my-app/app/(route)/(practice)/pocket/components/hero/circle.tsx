import HeroCircle from "@/public/assets/hero-circle";
import HeroCircle2 from "@/public/assets/hero-circle2";

interface HeroCircleComponentProps {
  className?: string;
}

const HeroCircleComponent = ({ className }: HeroCircleComponentProps) => {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <HeroCircle className="animate-spin-slower" />
      <HeroCircle2 className="animate-spin-reverse-slower" />
    </div>
  );
};

export default HeroCircleComponent;
