import { FeatureIcon } from "@/public/assets/feature-icon-1";
interface FeatureBoxProps {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
  boxClassName?: string;
}

export const FeatureBox = ({ title, description, titleClassName, descriptionClassName, boxClassName }: FeatureBoxProps) => {
  return (
    <div className={`flex flex-col gap-x-4 relative rounded-2xl transition-colors hover:bg-gray-800/30 p-6 w-full ${boxClassName}`}>
      <FeatureIcon />
      <h3 className={`text-base font-semibold tracking-tight text-white mt-6 ${titleClassName}`}>
        {title}
      </h3>
      <p className={`mt-2 text-sm text-gray-400 ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
};
