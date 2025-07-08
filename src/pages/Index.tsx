import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { TemplateEditor } from "@/components/TemplateEditor";
import { ApiShowcase } from "@/components/ApiShowcase";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeatureGrid />
      <TemplateEditor />
      <ApiShowcase />
      <Footer />
    </div>
  );
};

export default Index;
