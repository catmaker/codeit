"use client";
import HeroSection from "./hero-section";
import TabsSection from "./tabs-section";
import FeaturesSection from "./features-section";
import CTASection from "./cta-section";
import TestimonialSection from "./testimonial-section";
import PricingSection from "./pricing-section";
import FAQSection from "./faq-section";
import FooterSection from "./footer-section";
import AnimatedSection from "./animated-section";
const sections = [
  TabsSection,
  FeaturesSection,
  CTASection,
  TestimonialSection,
  PricingSection,
  FAQSection,
  FooterSection,
];
const Section = () => {
  return (
    <main className="flex-auto">
      <HeroSection />
      {sections.map((Section, index) => (
        <AnimatedSection key={index}>
          <Section />
        </AnimatedSection>
      ))}
    </main>
  );
};

export default Section;
