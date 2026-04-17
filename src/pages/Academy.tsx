
import { useEffect } from "react";
import "../components/academy/academy.css";
import { Toaster as ShadcnToaster } from "@/components/ui/toaster";
import HeroSection from "@/components/academy/HeroSection";
import BenefitsSection from "@/components/academy/BenefitsSection";
import AccessibilitySection from "@/components/academy/AccessibilitySection";
import ComparisonSection from "@/components/academy/ComparisonSection";
import TestimonialsSection from "@/components/academy/TestimonialsSection";
import CourseContentSection from "@/components/academy/CourseContentSection";
import BonusSection from "@/components/academy/BonusSection";
import PricingSection from "@/components/academy/PricingSection";
import FAQSection from "@/components/academy/FAQSection";
import FooterSection from "@/components/academy/FooterSection";

export default function AcademyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="academy-page min-h-screen">
      <ShadcnToaster />
      <HeroSection />
      <BenefitsSection />
      <AccessibilitySection />
      <ComparisonSection />
      <TestimonialsSection />
      <CourseContentSection />
      <BonusSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
