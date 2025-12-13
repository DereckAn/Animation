"use client";

import { AboutSection } from "@/components/hero/AboutSection";
import { ContactSection } from "@/components/hero/ContactSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesSection } from "@/components/hero/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}
