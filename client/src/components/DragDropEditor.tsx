import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Edit, Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Zone } from "@/pages/TemplateEditor";

interface DragDropEditorProps {
  zones: Zone[];
  selectedZone: Zone | null;
  onZoneSelect: (zone: Zone | null) => void;
  onZoneUpdate: (zone: Zone) => void;
  previewMode: boolean;
  userRole: string;
  canEditZone: (zone: Zone) => boolean;
}

export const DragDropEditor = ({
  zones,
  selectedZone,
  onZoneSelect,
  onZoneUpdate,
  previewMode,
  userRole,
  canEditZone
}: DragDropEditorProps) => {
  const [draggedZone, setDraggedZone] = useState<Zone | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const editorRef = useRef<HTMLDivElement>(null);

  const getZoneIcon = (type: Zone['type']) => {
    switch (type) {
      case 'locked': return <Lock className="w-3 h-3" />;
      case 'editable': return <Edit className="w-3 h-3" />;
      case 'controlled': return <Settings className="w-3 h-3" />;
    }
  };

  const getZoneColor = (type: Zone['type']) => {
    switch (type) {
      case 'locked': return 'locked-zone';
      case 'editable': return 'editable-zone';
      case 'controlled': return 'controlled-zone';
    }
  };

  const getZoneDescription = (type: Zone['type']) => {
    switch (type) {
      case 'locked': return 'Protected brand elements that cannot be modified';
      case 'editable': return 'Fully customizable content areas for all users';
      case 'controlled': return 'Role-restricted editing with brand guidelines';
    }
  };

  const handleMouseDown = (e: React.MouseEvent, zone: Zone) => {
    if (previewMode || !canEditZone(zone)) return;
    
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setDraggedZone(zone);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedZone || !editorRef.current) return;
    
    const editorRect = editorRef.current.getBoundingClientRect();
    const newX = e.clientX - editorRect.left - dragOffset.x;
    const newY = e.clientY - editorRect.top - dragOffset.y;
    
    const updatedZone = {
      ...draggedZone,
      x: Math.max(0, Math.min(newX, editorRect.width - draggedZone.width)),
      y: Math.max(0, Math.min(newY, editorRect.height - draggedZone.height))
    };
    
    onZoneUpdate(updatedZone);
    setDraggedZone(updatedZone);
  };

  const handleMouseUp = () => {
    setDraggedZone(null);
  };

  const handleZoneClick = (zone: Zone) => {
    if (selectedZone?.id === zone.id) {
      onZoneSelect(null);
    } else {
      onZoneSelect(zone);
    }
  };

  const isZoneDisabled = (zone: Zone) => {
    return previewMode && !canEditZone(zone);
  };

  return (
    <TooltipProvider>
      <Card className="relative w-full h-[600px] bg-card border-2 border-dashed border-border overflow-hidden">
        <div
          ref={editorRef}
          className="relative w-full h-full bg-gradient-to-br from-muted/20 to-muted/5"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Template Zones */}
          {zones.map((zone) => (
            <Tooltip key={zone.id}>
              <TooltipTrigger asChild>
                <div
                  className={`
                    absolute border-2 border-dashed rounded-lg p-3 cursor-pointer transition-all duration-200
                    ${selectedZone?.id === zone.id ? 'ring-2 ring-ring ring-offset-2' : ''}
                    ${isZoneDisabled(zone) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}
                    ${zone.type === 'locked' ? 'border-locked-zone bg-locked-zone-bg' : ''}
                    ${zone.type === 'editable' ? 'border-editable-zone bg-editable-zone-bg' : ''}
                    ${zone.type === 'controlled' ? 'border-controlled-zone bg-controlled-zone-bg' : ''}
                    ${!previewMode && canEditZone(zone) ? 'hover:scale-105' : ''}
                  `}
                  style={{
                    left: zone.x,
                    top: zone.y,
                    width: zone.width,
                    height: zone.height,
                  }}
                  onMouseDown={(e) => handleMouseDown(e, zone)}
                  onClick={() => handleZoneClick(zone)}
                >
                  {/* Zone Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`
                        p-1 rounded text-white text-xs
                        ${zone.type === 'locked' ? 'bg-locked-zone' : ''}
                        ${zone.type === 'editable' ? 'bg-editable-zone' : ''}
                        ${zone.type === 'controlled' ? 'bg-controlled-zone' : ''}
                      `}>
                        {getZoneIcon(zone.type)}
                      </div>
                      <span className="text-xs font-medium text-foreground">{zone.title}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {zone.type}
                    </Badge>
                  </div>

                  {/* Zone Content */}
                  <div className="text-sm text-muted-foreground line-clamp-3">
                    {zone.content}
                  </div>

                  {/* Preview Mode Overlay */}
                  {isZoneDisabled(zone) && (
                    <div className="absolute inset-0 bg-muted/80 rounded-lg flex items-center justify-center">
                      <Badge variant="secondary" className="text-xs">
                        No Access - {userRole}
                      </Badge>
                    </div>
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <div className="space-y-1">
                  <p className="font-medium">{zone.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {getZoneDescription(zone.type)}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {zone.permissions.map((permission, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}

          {/* Selection Info */}
          {selectedZone && !previewMode && (
            <div className="absolute bottom-4 left-4 bg-background border border-border rounded-lg p-3 shadow-lg">
              <p className="text-sm font-medium">Selected: {selectedZone.title}</p>
              <p className="text-xs text-muted-foreground">
                Position: {Math.round(selectedZone.x)}, {Math.round(selectedZone.y)} | 
                Size: {selectedZone.width} × {selectedZone.height}
              </p>
            </div>
          )}

          {/* Preview Mode Indicator */}
          {previewMode && (
            <div className="absolute top-4 right-4 bg-background border border-border rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Preview Mode - {userRole}</span>
              </div>
            </div>
          )}
        </div>
      </Card>
    </TooltipProvider>
  );
};