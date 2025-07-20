import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { TemplateEditor } from "@/components/TemplateEditor";
import { ApiShowcase } from "@/components/ApiShowcase";
import { Footer } from "@/components/Footer";
import { OnboardingFlow } from "@/components/OnboardingFlow";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onStartOnboarding={() => setShowOnboarding(true)} />
      <HeroSection onStartOnboarding={() => setShowOnboarding(true)} />
      <FeatureGrid />
      <TemplateEditor />
      <ApiShowcase />
      <Footer />
      <OnboardingFlow 
        isOpen={showOnboarding} 
        onClose={() => setShowOnboarding(false)} 
      />
    </div>
  );
};

export default Index;
