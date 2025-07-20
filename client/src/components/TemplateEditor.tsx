import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Edit, Settings, Check, X } from "lucide-react";

interface Zone {
  id: string;
  type: 'locked' | 'editable' | 'controlled';
  title: string;
  content: string;
  permissions: string[];
}

const mockZones: Zone[] = [
  {
    id: 'logo',
    type: 'locked',
    title: 'Company Logo',
    content: 'ACME Corp Logo',
    permissions: ['Brand Manager Only']
  },
  {
    id: 'headline',
    type: 'editable',
    title: 'Main Headline',
    content: 'Transform Your Business Today',
    permissions: ['All Users']
  },
  {
    id: 'body',
    type: 'controlled',
    title: 'Body Text',
    content: 'Our innovative solutions help businesses...',
    permissions: ['Editors', 'Managers']
  },
  {
    id: 'legal',
    type: 'locked',
    title: 'Legal Disclaimer',
    content: '© 2024 ACME Corp. All rights reserved.',
    permissions: ['Legal Team Only']
  }
];

const getZoneColor = (type: Zone['type']) => {
  switch (type) {
    case 'locked': return 'locked-zone';
    case 'editable': return 'editable-zone';
    case 'controlled': return 'controlled-zone';
    default: return 'muted';
  }
};

const getZoneIcon = (type: Zone['type']) => {
  switch (type) {
    case 'locked': return <Lock className="w-4 h-4" />;
    case 'editable': return <Edit className="w-4 h-4" />;
    case 'controlled': return <Settings className="w-4 h-4" />;
    default: return null;
  }
};

export const TemplateEditor = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Smart Template Architecture
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our intelligent zone system that enforces brand compliance 
            while maximizing creative flexibility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Template Preview */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Marketing Email Template
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    <Check className="w-3 h-3 mr-1" />
                    Compliant
                  </Badge>
                  <Button size="sm" variant="outline">
                    Validate
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockZones.map((zone) => (
                <div 
                  key={zone.id}
                  className={`
                    p-4 rounded-lg border-2 border-dashed transition-all hover:shadow-md
                    ${zone.type === 'locked' ? 'border-locked-zone bg-locked-zone-bg' : ''}
                    ${zone.type === 'editable' ? 'border-editable-zone bg-editable-zone-bg' : ''}
                    ${zone.type === 'controlled' ? 'border-controlled-zone bg-controlled-zone-bg' : ''}
                  `}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`
                        p-1 rounded text-white
                        ${zone.type === 'locked' ? 'bg-locked-zone' : ''}
                        ${zone.type === 'editable' ? 'bg-editable-zone' : ''}
                        ${zone.type === 'controlled' ? 'bg-controlled-zone' : ''}
                      `}>
                        {getZoneIcon(zone.type)}
                      </div>
                      <span className="text-sm font-medium">{zone.title}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {zone.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {zone.content}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {zone.permissions.map((permission, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Zone Legend and Rules */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Zone Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-locked-zone text-locked-zone-foreground rounded">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Locked Zones</h4>
                    <p className="text-sm text-muted-foreground">
                      Protected brand elements that cannot be modified
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-editable-zone text-editable-zone-foreground rounded">
                    <Edit className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Editable Zones</h4>
                    <p className="text-sm text-muted-foreground">
                      Fully customizable content areas for all users
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-controlled-zone text-controlled-zone-foreground rounded">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Controlled Zones</h4>
                    <p className="text-sm text-muted-foreground">
                      Role-restricted editing with brand guidelines
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-time Validation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-success" />
                  <span className="text-sm">Brand colors validated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-success" />
                  <span className="text-sm">Typography compliance passed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-success" />
                  <span className="text-sm">Logo placement approved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <X className="w-4 h-4 text-destructive" />
                  <span className="text-sm">Custom font not in brand palette</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};