import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Settings, User, Search } from "lucide-react";

const features = [
  {
    icon: <Lock className="w-8 h-8 text-locked-zone" />,
    title: "Brand Guardrails",
    description: "Intelligent zone locking that protects critical brand elements while enabling creative freedom in designated areas."
  },
  {
    icon: <Settings className="w-8 h-8 text-controlled-zone" />,
    title: "Smart Validation",
    description: "Real-time compliance checking with Adobe Creative SDK integration for colors, fonts, and layout validation."
  },
  {
    icon: <User className="w-8 h-8 text-primary" />,
    title: "Role-Based Access",
    description: "Granular permission system with different editing levels for team members, from basic users to brand managers."
  },
  {
    icon: <Search className="w-8 h-8 text-editable-zone" />,
    title: "Template Discovery",
    description: "AI-powered template recommendations based on brand guidelines, project requirements, and compliance rules."
  }
];

export const FeatureGrid = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Enterprise-Grade Brand Management
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Powerful features designed for modern teams who need to scale brand consistency 
            across multiple touchpoints and stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-500 border-l-4 border-l-primary hover:border-l-primary-glow bg-card/50 backdrop-blur-sm hover:bg-card scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 p-3 bg-primary/5 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                  {feature.description}
                </p>
              </CardContent>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};