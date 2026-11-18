"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import LegalPolicyModal, { type PolicyKey } from "@/components/modals/LegalPolicyModal";
import Hero from "@/components/sections/Hero";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ColdPlungeSection from "@/components/sections/ColdPlungeSection";
import SelfDiscoverySection from "@/components/sections/SelfDiscoverySection";
import StepsSection from "@/components/sections/StepsSection";
import FaqAndTeamSection from "@/components/sections/FaqAndTeamSection";
import ClosingCtaBanner from "@/components/sections/ClosingCtaBanner";

export default function Home() {
  const [activePolicy, setActivePolicy] = useState<PolicyKey | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface pt-20">
        <Hero />
        <ExperienceSection />
        <ColdPlungeSection />
        <SelfDiscoverySection />
        <StepsSection />
        <FaqAndTeamSection />
        <ClosingCtaBanner openPolicy={setActivePolicy} />
      </main>
      <Footer openPolicy={setActivePolicy} />
      <WhatsAppFloatingButton />
      <LegalPolicyModal active={activePolicy} onClose={() => setActivePolicy(null)} />
    </>
  );
}
