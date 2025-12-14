"use client";

import { AboutSection } from "@/components/hero/AboutSection";
import { ContactSection } from "@/components/hero/ContactSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProcessSection } from "@/components/hero/ProcessSection";
import { Separador } from "@/components/hero/Separador";
import { ServicesSection } from "@/components/hero/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      <Separador />

      {/* About Section */}
      <AboutSection />

      <Separador izquierda={false} />

      {/* Process Section */}
      <ProcessSection />

      <Separador />

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}
