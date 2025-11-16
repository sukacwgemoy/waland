import React from "react";
import HeroProduct from "@/components/smoothui/header-2";
import PricingSimple from "@/components/smoothui/pricing-1";
import StatsCards from "@/components/smoothui/stats-2";
import TestimonialsSection from "@/components/testimonials";
import FaqsAccordion from "@/components/smoothui/faq-2";
import DisclaimerSection from "@/components/disclaimer";
import ContentSection from "@/components/content-1";

export default function Home() {
  return (
    <>
      <HeroProduct />
      <StatsCards />
      <ContentSection />
      <TestimonialsSection />
      <PricingSimple />
      <FaqsAccordion />
      <DisclaimerSection />
    </>
  );
}
