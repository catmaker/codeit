"use client";

import { FeatureBox } from "../components/feature-box";
import { features } from "@/constants/features-section";

const Features = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-black">
            Now is the time to build your portfolio.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            With typical market returns, you have to start young to secure your
            future. With Pocket, it&apos;s never too late to build your nest
            egg.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-16">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              {...feature}
              titleClassName="!text-black"
              descriptionClassName="text-gray-700"
              boxClassName="border border-gray-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
