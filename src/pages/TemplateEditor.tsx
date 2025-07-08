import { useState } from "react";
import { DragDropEditor } from "@/components/DragDropEditor";
import { ZoneSidebar } from "@/components/ZoneSidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Edit } from "lucide-react";

export interface Zone {
  id: string;
  type: 'locked' | 'editable' | 'controlled';
  title: string;
  content: string;
  permissions: string[];
  x: number;
  y: number;
  width: number;
  height: number;
  allowedUsers: string[];
  brandGuidelines: string[];
}

const TemplateEditorPage = () => {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [userRole, setUserRole] = useState<'Brand Manager' | 'Editor' | 'User'>('Brand Manager');
  const [zones, setZones] = useState<Zone[]>([
    {
      id: 'logo',
      type: 'locked',
      title: 'Company Logo',
      content: 'ACME Corp Logo',
      permissions: ['Brand Manager Only'],
      x: 50,
      y: 50,
      width: 200,
      height: 80,
      allowedUsers: ['Brand Manager'],
      brandGuidelines: ['Maintain 20px minimum clearance', 'Use only on white or brand blue backgrounds']
    },
    {
      id: 'headline',
      type: 'editable',
      title: 'Main Headline',
      content: 'Transform Your Business Today',
      permissions: ['All Users'],
      x: 50,
      y: 150,
      width: 400,
      height: 60,
      allowedUsers: ['Brand Manager', 'Editor', 'User'],
      brandGuidelines: ['Max 6 words', 'Use sentence case', 'Avoid superlatives']
    },
    {
      id: 'body',
      type: 'controlled',
      title: 'Body Text',
      content: 'Our innovative solutions help businesses grow and succeed in today\'s competitive market.',
      permissions: ['Editors', 'Managers'],
      x: 50,
      y: 230,
      width: 500,
      height: 100,
      allowedUsers: ['Brand Manager', 'Editor'],
      brandGuidelines: ['Keep under 50 words', 'Use active voice', 'Include benefit statement']
    },
    {
      id: 'cta',
      type: 'controlled',
      title: 'Call to Action',
      content: 'Get Started Now',
      permissions: ['Managers Only'],
      x: 50,
      y: 350,
      width: 150,
      height: 40,
      allowedUsers: ['Brand Manager'],
      brandGuidelines: ['Use action verbs', 'Maximum 3 words', 'Include urgency when appropriate']
    }
  ]);

  const updateZone = (updatedZone: Zone) => {
    setZones(zones.map(zone => zone.id === updatedZone.id ? updatedZone : zone));
    setSelectedZone(updatedZone);
  };

  const canEditZone = (zone: Zone) => {
    if (userRole === 'Brand Manager') return true;
    if (zone.type === 'locked') return false;
    if (zone.type === 'editable') return true;
    if (zone.type === 'controlled') return zone.allowedUsers.includes(userRole);
    return false;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex h-[calc(100vh-80px)]">
        {/* Main Editor Area */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Template Editor</h1>
              <p className="text-muted-foreground">Design and configure your brand template</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Viewing as:</span>
                <select 
                  value={userRole} 
                  onChange={(e) => setUserRole(e.target.value as any)}
                  className="text-sm border border-input rounded px-2 py-1 bg-background"
                >
                  <option value="Brand Manager">Brand Manager</option>
                  <option value="Editor">Editor</option>
                  <option value="User">User</option>
                </select>
              </div>
              
              <Button
                variant={previewMode ? "default" : "outline"}
                onClick={() => setPreviewMode(!previewMode)}
                size="sm"
              >
                {previewMode ? <Edit className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                {previewMode ? 'Edit Mode' : 'Preview Mode'}
              </Button>
            </div>
          </div>

          <DragDropEditor
            zones={zones}
            selectedZone={selectedZone}
            onZoneSelect={setSelectedZone}
            onZoneUpdate={updateZone}
            previewMode={previewMode}
            userRole={userRole}
            canEditZone={canEditZone}
          />
        </div>

        {/* Sidebar */}
        <ZoneSidebar
          selectedZone={selectedZone}
          onZoneUpdate={updateZone}
          previewMode={previewMode}
        />
      </div>
    </div>
  );
};

export default TemplateEditorPage;