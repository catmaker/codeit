import { useState } from "react";

interface PricingToggleProps {
  onChange?: (isAnnual: boolean) => void;
}

export const PricingToggle = ({ onChange }: PricingToggleProps) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = (value: boolean) => {
    setIsAnnual(value);
    onChange?.(value);
  };

  return (
    <div className="inline-flex rounded-lg bg-gray-100 p-0.5">
      <button
        className={`px-8 py-2 text-sm font-medium rounded-md transition-colors ${
          !isAnnual
            ? "bg-cyan-500 text-white"
            : "text-gray-700 hover:text-gray-900"
        }`}
        onClick={() => handleToggle(false)}
      >
        Monthly
      </button>
      <button
        className={`px-8 py-2 text-sm font-medium rounded-md transition-colors ${
          isAnnual
            ? "bg-cyan-500 text-white"
            : "text-gray-700 hover:text-gray-900"
        }`}
        onClick={() => handleToggle(true)}
      >
        Annually
      </button>
    </div>
  );
};
