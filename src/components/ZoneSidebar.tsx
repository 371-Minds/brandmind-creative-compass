import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lock, Edit, Settings, Users, Shield, FileText } from "lucide-react";
import type { Zone } from "@/pages/TemplateEditor";

interface ZoneSidebarProps {
  selectedZone: Zone | null;
  onZoneUpdate: (zone: Zone) => void;
  previewMode: boolean;
}

export const ZoneSidebar = ({ selectedZone, onZoneUpdate, previewMode }: ZoneSidebarProps) => {
  const [editingContent, setEditingContent] = useState(false);

  if (!selectedZone) {
    return (
      <div className="w-80 bg-muted/30 border-l border-border p-6">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">No Zone Selected</h3>
          <p className="text-sm text-muted-foreground">
            Click on a zone in the editor to view its properties and settings.
          </p>
        </div>
      </div>
    );
  }

  const getZoneIcon = (type: Zone['type']) => {
    switch (type) {
      case 'locked': return <Lock className="w-4 h-4" />;
      case 'editable': return <Edit className="w-4 h-4" />;
      case 'controlled': return <Settings className="w-4 h-4" />;
    }
  };

  const getZoneColor = (type: Zone['type']) => {
    switch (type) {
      case 'locked': return 'locked-zone';
      case 'editable': return 'editable-zone';
      case 'controlled': return 'controlled-zone';
    }
  };

  const handleZoneTypeChange = (newType: Zone['type']) => {
    const updatedPermissions = {
      locked: ['Brand Manager Only'],
      editable: ['All Users'],
      controlled: ['Editors', 'Managers']
    };

    const updatedAllowedUsers = {
      locked: ['Brand Manager'],
      editable: ['Brand Manager', 'Editor', 'User'],
      controlled: ['Brand Manager', 'Editor']
    };

    onZoneUpdate({
      ...selectedZone,
      type: newType,
      permissions: updatedPermissions[newType],
      allowedUsers: updatedAllowedUsers[newType]
    });
  };

  const handleContentUpdate = (newContent: string) => {
    onZoneUpdate({
      ...selectedZone,
      content: newContent
    });
  };

  const handlePositionUpdate = (field: 'x' | 'y' | 'width' | 'height', value: number) => {
    onZoneUpdate({
      ...selectedZone,
      [field]: Math.max(0, value)
    });
  };

  const handleGuidelineUpdate = (index: number, value: string) => {
    const newGuidelines = [...selectedZone.brandGuidelines];
    newGuidelines[index] = value;
    onZoneUpdate({
      ...selectedZone,
      brandGuidelines: newGuidelines
    });
  };

  const addGuideline = () => {
    onZoneUpdate({
      ...selectedZone,
      brandGuidelines: [...selectedZone.brandGuidelines, '']
    });
  };

  const removeGuideline = (index: number) => {
    const newGuidelines = selectedZone.brandGuidelines.filter((_, i) => i !== index);
    onZoneUpdate({
      ...selectedZone,
      brandGuidelines: newGuidelines
    });
  };

  return (
    <div className="w-80 bg-background border-l border-border overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Zone Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className={`
              p-2 rounded text-white
              ${selectedZone.type === 'locked' ? 'bg-locked-zone' : ''}
              ${selectedZone.type === 'editable' ? 'bg-editable-zone' : ''}
              ${selectedZone.type === 'controlled' ? 'bg-controlled-zone' : ''}
            `}>
              {getZoneIcon(selectedZone.type)}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">{selectedZone.title}</h2>
              <Badge variant="outline" className="text-xs mt-1">
                {selectedZone.type} zone
              </Badge>
            </div>
          </div>
        </div>

        {/* Zone Type */}
        {!previewMode && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Zone Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Select value={selectedZone.type} onValueChange={handleZoneTypeChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="locked">
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4" />
                      <span>Locked</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="editable">
                    <div className="flex items-center space-x-2">
                      <Edit className="w-4 h-4" />
                      <span>Editable</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="controlled">
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4" />
                      <span>Controlled</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        )}

        {/* Content */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center justify-between">
              Content
              {!previewMode && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setEditingContent(!editingContent)}
                >
                  <Edit className="w-3 h-3" />
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {editingContent && !previewMode ? (
              <div className="space-y-3">
                <Textarea
                  value={selectedZone.content}
                  onChange={(e) => handleContentUpdate(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button size="sm" onClick={() => setEditingContent(false)}>
                  Save
                </Button>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">{selectedZone.content}</p>
            )}
          </CardContent>
        </Card>

        {/* Position & Size */}
        {!previewMode && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Position & Size</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="x" className="text-xs">X Position</Label>
                  <Input
                    id="x"
                    type="number"
                    value={selectedZone.x}
                    onChange={(e) => handlePositionUpdate('x', parseInt(e.target.value) || 0)}
                    className="h-8"
                  />
                </div>
                <div>
                  <Label htmlFor="y" className="text-xs">Y Position</Label>
                  <Input
                    id="y"
                    type="number"
                    value={selectedZone.y}
                    onChange={(e) => handlePositionUpdate('y', parseInt(e.target.value) || 0)}
                    className="h-8"
                  />
                </div>
                <div>
                  <Label htmlFor="width" className="text-xs">Width</Label>
                  <Input
                    id="width"
                    type="number"
                    value={selectedZone.width}
                    onChange={(e) => handlePositionUpdate('width', parseInt(e.target.value) || 0)}
                    className="h-8"
                  />
                </div>
                <div>
                  <Label htmlFor="height" className="text-xs">Height</Label>
                  <Input
                    id="height"
                    type="number"
                    value={selectedZone.height}
                    onChange={(e) => handlePositionUpdate('height', parseInt(e.target.value) || 0)}
                    className="h-8"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Permissions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Permissions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Label className="text-xs">Allowed Users</Label>
              <div className="flex flex-wrap gap-1">
                {selectedZone.allowedUsers.map((user, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {user}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Access Level</Label>
              <div className="flex flex-wrap gap-1">
                {selectedZone.permissions.map((permission, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {permission}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Brand Guidelines */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Brand Guidelines</span>
              </div>
              {!previewMode && (
                <Button variant="ghost" size="sm" onClick={addGuideline}>
                  Add
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {selectedZone.brandGuidelines.map((guideline, index) => (
              <div key={index} className="flex items-start space-x-2">
                {editingContent && !previewMode ? (
                  <>
                    <Input
                      value={guideline}
                      onChange={(e) => handleGuidelineUpdate(index, e.target.value)}
                      className="h-8 text-xs"
                      placeholder="Enter guideline..."
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeGuideline(index)}
                      className="h-8 w-8 p-0 text-destructive"
                    >
                      ×
                    </Button>
                  </>
                ) : (
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    • {guideline}
                  </p>
                )}
              </div>
            ))}
            {selectedZone.brandGuidelines.length === 0 && (
              <p className="text-xs text-muted-foreground italic">
                No brand guidelines defined
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};