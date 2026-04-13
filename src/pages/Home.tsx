
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Philosophy from "@/components/sections/Philosophy";
import Products from "@/components/sections/Products";
import Subscription from "@/components/sections/Subscription";
import Process from "@/components/sections/Process";
import Distribution from "@/components/sections/Distribution";
import Testimonials from "@/components/sections/Testimonials";
import CTAFinal from "@/components/sections/CTAFinal";

interface HomeProps {
  targetSection?: string;
}

export default function Home({ targetSection }: HomeProps) {
  useEffect(() => {
    if (targetSection) {
      setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to ensure rendering
    } else {
      window.scrollTo(0, 0);
    }
  }, [targetSection]);

  return (
    <div className="min-h-screen bg-background font-body text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Education />
        <Philosophy />
        <Products />
        <Subscription />
        <Process />
        <Testimonials />
        <Distribution />
        <CTAFinal />
      </main>

      <Footer />
    </div>
  );
}
