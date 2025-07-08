import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Palette, Lock } from "lucide-react";

const apiExamples = [
  {
    title: "AddOnData Class",
    description: "Store template configuration and metadata",
    icon: <FileText className="w-5 h-5" />,
    code: `// Store template rules as metadata
const templateRules = {
  lockedZones: ['logo', 'legal'],
  editableZones: ['headline', 'body'],
  brandColors: ['#3B82F6', '#10B981'],
  approvedFonts: ['Arial', 'Helvetica']
};

addOnUiSdk.app.document.setMetadata(templateRules);`
  },
  {
    title: "Document Change Detection",
    description: "Monitor user edits in real-time",
    icon: <Lock className="w-5 h-5" />,
    code: `// React to user changes
addOnUiSdk.app.document.addEventListener('documentChange', (event) => {
  const editedElement = event.target;
  
  if (isInLockedZone(editedElement)) {
    revertChange(editedElement);
    showComplianceWarning();
  }
  
  validateBrandCompliance(editedElement);
});`
  },
  {
    title: "Color Picker Integration",
    description: "Restrict to brand-approved color palette",
    icon: <Palette className="w-5 h-5" />,
    code: `// Show only brand-approved colors
addOnUiSdk.app.showColorPicker({
  colors: brandColors,
  disableCustomColors: true,
  onColorSelect: (color) => {
    if (validateBrandColor(color)) {
      applyColor(color);
    } else {
      showComplianceError('Color not in brand palette');
    }
  }
});`
  }
];

export const ApiShowcase = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Adobe Creative SDK Integration
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Core API Demonstrations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built on Adobe's powerful platform with deep integration into Creative Cloud workflows 
            and document management systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {apiExamples.map((example, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {example.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {example.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4 border">
                  <pre className="text-xs text-foreground overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Ready to Integrate?</h3>
              <p className="text-muted-foreground mb-6">
                Get started with our comprehensive SDK and detailed documentation 
                for seamless Adobe Creative Cloud integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Download SDK
                </Button>
                <Button variant="outline" size="lg">
                  API Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};