import NavbarSection from "./sections/navbar-section";
import HeroSection from "./sections/hero-section";
import TabsSection from "./sections/tabs-section";
import FeaturesSection from "./sections/features-section";
import CTASection from "./sections/cta-section";
import TestimonialSection from "./sections/testimonial-section";
import PricingSection from "./sections/pricing-section";
import FAQSection from "./sections/faq-section";
import FooterSection from "./sections/footer-section";

const PocketPage = () => {
  return (
    <main className="flex-auto">
      <HeroSection />
      <TabsSection />
      <FeaturesSection />
      <CTASection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default PocketPage;
