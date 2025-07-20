import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onStartOnboarding?: () => void;
}

export const HeroSection = ({ onStartOnboarding }: HeroSectionProps) => {
  return (
    <section className="relative gradient-hero py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors scale-in">
                Brand Guardrails, Not Brand Jail
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="block slide-up">BrandMind</span>
                <span className="block text-primary gradient-primary bg-clip-text text-transparent slide-up" style={{ animationDelay: '0.2s' }}>
                  Intelligent Templates
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg slide-up" style={{ animationDelay: '0.4s' }}>
                Maintain brand integrity while enabling creative freedom. Smart template systems 
                with real-time compliance checking and role-based permissions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="text-lg px-8 glow hover:shadow-glow transition-all duration-300 hover:scale-105" 
                onClick={onStartOnboarding}
              >
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 hover:scale-105 transition-transform" asChild>
                <a href="/editor">Try Template Editor</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                <span className="group-hover:text-success transition-colors">Real-time Validation</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                <span className="group-hover:text-primary transition-colors">Role-based Access</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-warning rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <span className="group-hover:text-warning transition-colors">Smart Compliance</span>
              </div>
            </div>
          </div>

          <div className="relative slide-in-right">
            <div className="relative z-10 group">
              <img 
                src={heroImage} 
                alt="BrandMind Template System Interface" 
                className="w-full rounded-2xl shadow-lg border border-border transition-all duration-500 group-hover:shadow-glow group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-10 transition-all duration-500 group-hover:bg-primary/20"></div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="absolute top-1/2 -right-2 w-6 h-6 bg-success rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-2 left-1/4 w-4 h-4 bg-warning rounded-full opacity-25 animate-bounce" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};