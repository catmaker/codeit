import { PriceIcon } from "@/public/assets/price-icon";
type PlanType = "Starter" | "Investor" | "VIP";
interface Feature {
  text: string;
}

interface PriceCardProps {
  type: PlanType;
  price: number;
  description: string;
  features: Feature[];
  isVIP?: boolean;
}

export const PriceCard = ({
  type,
  price,
  description,
  features,
  isVIP = false,
}: PriceCardProps) => {
  return (
    <div className={`rounded-3xl p-8 ${isVIP ? "bg-black" : "bg-white"}`}>
      <div className="flex items-center gap-2">
        <div className="h-6 w-6">
          <PriceIcon type={type} />
        </div>
        <h3 className={`font-medium ${isVIP ? "text-white" : "text-gray-900"}`}>
          {type}
        </h3>
      </div>

      <p
        className={`mt-4 text-5xl font-bold ${
          isVIP ? "text-white" : "text-gray-900"
        }`}
      >
        ${price}
      </p>

      <p
        className={`mt-4 text-sm ${isVIP ? "text-gray-300" : "text-gray-600"}`}
      >
        {description}
      </p>

      <button
        className={`mt-6 w-full rounded-lg py-2.5 text-sm font-medium ${
          isVIP
            ? "bg-cyan-500 text-white hover:bg-cyan-400"
            : "bg-black text-white hover:bg-gray-900"
        }`}
      >
        {price === 0 ? "Get started for free" : "Subscribe"}
      </button>

      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <svg
              className={`h-6 w-6 flex-none ${
                isVIP ? "text-cyan-500" : "text-cyan-500"
              }`}
              fill="currentColor"
            >
              <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.114 0L11 15.25Zm4.807-5.998a.75.75 0 0 0-1.114-1.004l1.114 1.004ZM8.193 13.252l3.364 3.75 1.114-1.004-3.364-3.75-1.114 1.004Zm4.478 3.75l3.364-3.75-1.114-1.004-3.364 3.75 1.114 1.004Z" />
            </svg>
            <span
              className={`text-sm ${isVIP ? "text-gray-300" : "text-gray-600"}`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
