"use client";

import { useState } from "react";
import { PricingToggle } from "../components/pricing/pricing-toggle-button";
import { pricingPlans } from "@/constants/pricing";
import { PriceCard } from "../components/pricing/price-card";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const calculatePrice = (basePrice: number) => {
    return isAnnual ? basePrice * 10 : basePrice;
  };

  return (
    <section className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Flat pricing, no management fees.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Whether you&apos;re one person trying to get ahead or a big firm
            trying to take over the world, we&apos;ve got a plan for you.
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8">
            <PricingToggle onChange={setIsAnnual} />
          </div>
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-3 mt-10">
            {pricingPlans.map((plan) => (
              <PriceCard
                key={plan.type}
                {...plan}
                price={calculatePrice(plan.price)} // 계산된 가격 전달
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
