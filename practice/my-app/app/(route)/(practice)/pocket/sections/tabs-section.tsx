"use client";

import Image from "next/image";
import { FeatureBox } from "../components/feature-box";
import { features } from "@/constants/features";

const Tabs = () => {
  return (
    <section className="bg-gray-900 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Every feature you need to win. Try it for yourself.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Pocket was built for investors like you who play by their own rules
            and aren’t going to let SEC regulations get in the way of their
            dreams. If other investing tools are afraid to build it, Pocket has
            it.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden md:mt-20 md:block">
        <div className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24">
          <div className="col-span-7 mt-16 relative">
            <div className="-mb-4 flex justify-center snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden">
              <Image
                src="/assets/tabs.png"
                alt="tabs"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
          <div className="col-span-5 mt-16 z-10 p-8 space-y-8">
            {features.map((feature, index) => (
              <FeatureBox key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
