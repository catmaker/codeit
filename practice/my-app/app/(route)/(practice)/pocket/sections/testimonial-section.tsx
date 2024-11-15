"use client";

import { ReviewBox } from "../components/testimonial/review-box";
import {
  TESTIMONIALS1,
  TESTIMONIALS2,
  TESTIMONIALS3,
} from "@/constants/testimonial";
const TestimonialSection = () => {
  return (
    <section className="pb-16 pt-20 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl font-medium tracking-tight text-gray-900">
          Everyone is changing their life with Pocket.
        </h3>
        <p className="text-center text-base text-gray-600 mt-4 mx-auto line-clamp-3">
          Thousands of people have doubled their net-worth in the last 30 days.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10 animate-fade-in" />

          <div className="animate-scroll-slow flex flex-col gap-6">
            {TESTIMONIALS1.map((testimonial) => (
              <ReviewBox
                key={testimonial.title}
                rating={testimonial.rating}
                title={testimonial.title}
                content={testimonial.content}
                author={testimonial.author}
              />
            ))}
            {TESTIMONIALS1.map((testimonial) => (
              <ReviewBox
                key={testimonial.title}
                rating={testimonial.rating}
                title={testimonial.title}
                content={testimonial.content}
                author={testimonial.author}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 animate-fade-in" />
        </div>
        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10 animate-fade-in" />

          <div className="animate-scroll-fast flex flex-col gap-6">
            {TESTIMONIALS2.map((testimonial) => (
              <ReviewBox
                key={testimonial.title}
                rating={testimonial.rating}
                title={testimonial.title}
                content={testimonial.content}
                author={testimonial.author}
              />
            ))}
            {TESTIMONIALS2.map((testimonial) => (
              <ReviewBox
                key={testimonial.title}
                rating={testimonial.rating}
                title={testimonial.title}
                content={testimonial.content}
                author={testimonial.author}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 animate-fade-in" />
        </div>
        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10 animate-fade-in" />

          <div className="animate-scroll-medium flex flex-col gap-6">
            {TESTIMONIALS3.map((testimonial) => (
              <ReviewBox
                key={testimonial.title}
                rating={testimonial.rating}
                title={testimonial.title}
                content={testimonial.content}
                author={testimonial.author}
              />
            ))}
            {TESTIMONIALS3.map((testimonial) => (
              <ReviewBox
                key={testimonial.title}
                rating={testimonial.rating}
                title={testimonial.title}
                content={testimonial.content}
                author={testimonial.author}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 animate-fade-in" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
