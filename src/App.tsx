import React from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { HeroSection } from './components/HeroSection';
import { KitCarouselSection } from './components/KitCarouselSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyCtaBar } from './components/StickyCtaBar';

export default function App() {
  const scrollToPricing = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F9] text-[#1a1a1a]">
      {/* 1. Top Urgency Banner */}
      <HeaderBanner />

      {/* 2. Hero Section with Responsive 16:9 Video (max-w 700-800px) */}
      <HeroSection onCtaClick={() => scrollToPricing()} />

      {/* 3. Kits Carousel Section */}
      <KitCarouselSection />

      {/* 4. What You Will Receive */}
      <WhatYouGetSection />

      {/* 5. Benefits & Pillars */}
      <BenefitsSection onCtaClick={() => scrollToPricing()} />

      {/* 6. Bonus Section */}
      <BonusSection />

      {/* 7. Pricing Section with Plans & Downsell Modal */}
      <PricingSection />

      {/* 8. Testimonials Section */}
      <TestimonialsSection />

      {/* 9. Guarantee Section */}
      <GuaranteeSection onCtaClick={() => scrollToPricing()} />

      {/* 10. FAQ Accordion */}
      <FaqSection />

      {/* 11. Footer */}
      <Footer />

      {/* 12. Sticky Mobile/Desktop Quick CTA Bar */}
      <StickyCtaBar onCtaClick={() => scrollToPricing()} />
    </div>
  );
}
