import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Palette, Lock, Play, CheckCircle, AlertCircle, Clock } from "lucide-react";

const apiExamples = [
  {
    title: "Real-time Document Events",
    description: "Monitor user edits with live validation",
    icon: <FileText className="w-5 h-5" />,
    status: "active",
    code: `addOnUiSdk.app.document.addEventListener('documentChange', (event) => {
  const editedElement = event.target;
  const zoneId = editedElement.getAttribute('data-zone-id');
  
  // Real-time brand compliance check
  if (templateRules.lockedZones.includes(zoneId)) {
    event.preventDefault();
    showComplianceWarning('Protected by brand guidelines');
    return;
  }
  
  validateElementCompliance(editedElement);
});`
  },
  {
    title: "Smart Color Picker",
    description: "Brand-restricted color palette with live preview",
    icon: <Palette className="w-5 h-5" />,
    status: "active",
    code: `addOnUiSdk.app.showColorPicker({
  colors: [
    { hex: '#3B82F6', name: 'Primary Blue', usage: 'headers' },
    { hex: '#10B981', name: 'Success Green', usage: 'CTAs' },
    { hex: '#F59E0B', name: 'Warning Amber', usage: 'alerts' }
  ],
  disableCustomColors: true,
  onColorSelect: (color) => {
    applyColorToSelection(color.hex);
    logBrandUsage('color', color.name);
  }
});`
  },
  {
    title: "Zone Configuration",
    description: "Template rules with automatic enforcement",
    icon: <Lock className="w-5 h-5" />,
    status: "configured",
    code: `const zoneConfig = {
  'logo-zone': { 
    editable: false, 
    required: true,
    assetLibrary: 'approved-logos'
  },
  'headline-zone': { 
    editable: true, 
    maxLength: 80,
    fonts: ['Arial Bold', 'Helvetica Bold']
  }
};

AddOnData.set('templateRules', zoneConfig);`
  }
];

export const ApiShowcase = () => {
  const [testingApi, setTestingApi] = useState<string | null>(null);
  const [connectionHealth, setConnectionHealth] = useState({
    uptime: 99.8,
    responseTime: 145,
    lastSync: "2 minutes ago"
  });

  const handleTestApi = (title: string) => {
    setTestingApi(title);
    setTimeout(() => {
      setTestingApi(null);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "configured":
        return <Clock className="w-4 h-4 text-blue-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Adobe Creative SDK Integration
            </Badge>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">Live Connection</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Live API Integration Status
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring and testing of Adobe Creative Cloud integrations with 
            live response previews and health monitoring.
          </p>
          
          {/* Integration Health Monitor */}
          <div className="flex justify-center gap-6 mt-6 text-sm">
            <div className="text-center">
              <div className="text-lg font-bold text-green-500">{connectionHealth.uptime}%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-500">{connectionHealth.responseTime}ms</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-500">{connectionHealth.lastSync}</div>
              <div className="text-muted-foreground">Last Sync</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {apiExamples.map((example, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {example.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{example.title}</CardTitle>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(example.status)}
                    <Badge variant="secondary" className="text-xs">
                      {example.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {example.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-900 rounded-lg p-4 border">
                  <pre className="text-xs text-green-400 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleTestApi(example.title)}
                    disabled={testingApi === example.title}
                  >
                    {testingApi === example.title ? (
                      <>
                        <Play className="w-3 h-3 mr-1 animate-spin" />
                        Testing...
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 mr-1" />
                        Test API
                      </>
                    )}
                  </Button>
                  <Button variant="ghost" size="sm">
                    Docs
                  </Button>
                </div>
                
                {testingApi === example.title && (
                  <div className="bg-green-950/20 border border-green-500/20 rounded-lg p-3 animate-fade-in">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-green-400">API Response</span>
                    </div>
                    <pre className="text-xs text-green-300">
                      <code>{`{
  "status": "success",
  "event": "${example.title.toLowerCase().replace(/\s+/g, '_')}",
  "timestamp": "${new Date().toISOString()}",
  "compliance": {
    "valid": true,
    "score": 98
  }
}`}</code>
                    </pre>
                  </div>
                )}
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