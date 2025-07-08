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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Enterprise-Grade Brand Management
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for modern teams who need to scale brand consistency 
            across multiple touchpoints and stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader className="pb-4">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};