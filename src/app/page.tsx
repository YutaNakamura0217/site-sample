"use client"; // Add this directive for client-side components

import { ParallaxProvider } from 'react-scroll-parallax';
import HeroSection from "@/components/home/HeroSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ClientsSection from "@/components/home/ClientsSection";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import NewsSection from "@/components/home/NewsSection";
import CareersSection from "@/components/home/CareersSection";
import NextLinkSection from "@/components/home/NextLinkSection";
import ServicesSection from "@/components/home/ServicesSection";
import CtaSection from "@/components/home/CtaSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <ParallaxProvider>
      <main className="flex flex-col items-center justify-between min-h-screen">
        <HeroSection />
        <WhoWeAreSection />
      <ProjectsSection />
      <ClientsSection />
      <TechnologiesSection />
      <NewsSection />
      <CareersSection />
      <NextLinkSection />
      <ServicesSection />
        <CtaSection />
        <Footer />
      </main>
    </ParallaxProvider>
  );
}
