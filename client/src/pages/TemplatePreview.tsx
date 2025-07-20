import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Printer, 
  Download, 
  Eye, 
  Layers,
  Maximize2,
  RefreshCw,
  Settings,
  FileImage,
  FileText,
  Mail,
  Palette,
  Grid3X3,
  ArrowLeftRight
} from "lucide-react";

interface TemplateZone {
  id: string;
  title: string;
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'locked' | 'editable' | 'controlled';
}

const mockTemplate: TemplateZone[] = [
  {
    id: 'logo',
    title: 'Company Logo',
    content: 'ACME Corp',
    x: 20,
    y: 20,
    width: 120,
    height: 60,
    type: 'locked'
  },
  {
    id: 'headline',
    title: 'Main Headline',
    content: 'Transform Your Business Today',
    x: 20,
    y: 100,
    width: 300,
    height: 40,
    type: 'editable'
  },
  {
    id: 'body',
    title: 'Body Text',
    content: 'Our innovative solutions help businesses grow and succeed in today\'s competitive market.',
    x: 20,
    y: 160,
    width: 280,
    height: 80,
    type: 'controlled'
  },
  {
    id: 'cta',
    title: 'Call to Action',
    content: 'Get Started Now',
    x: 20,
    y: 260,
    width: 120,
    height: 40,
    type: 'controlled'
  }
];

const deviceSizes = {
  desktop: { width: 1200, height: 800, label: 'Desktop' },
  tablet: { width: 768, height: 1024, label: 'Tablet' },
  mobile: { width: 375, height: 667, label: 'Mobile' }
};

const paperSizes = {
  a4: { width: 210, height: 297, label: 'A4 (210×297mm)' },
  letter: { width: 216, height: 279, label: 'Letter (8.5×11")' },
  a3: { width: 297, height: 420, label: 'A3 (297×420mm)' },
  tabloid: { width: 279, height: 432, label: 'Tabloid (11×17")' }
};

const exportFormats = [
  { id: 'pdf', label: 'PDF Document', icon: FileText },
  { id: 'jpg', label: 'JPEG Image', icon: FileImage },
  { id: 'png', label: 'PNG Image', icon: FileImage },
  { id: 'email', label: 'Email Template', icon: Mail }
];

const TemplatePreview = () => {
  const [activeDevice, setActiveDevice] = useState<keyof typeof deviceSizes>('desktop');
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [paperSize, setPaperSize] = useState<keyof typeof paperSizes>('a4');
  const [showBleed, setShowBleed] = useState(true);
  const [comparisonSlider, setComparisonSlider] = useState([50]);
  const [currentVariation, setCurrentVariation] = useState(0);
  const [previewFormat, setPreviewFormat] = useState('pdf');
  const [zoom, setZoom] = useState([100]);

  const variations = [
    { id: 0, name: 'Original Layout', description: 'Standard corporate template' },
    { id: 1, name: 'Modern Variant', description: 'Clean, minimalist design' },
    { id: 2, name: 'Creative Layout', description: 'Bold, artistic approach' },
    { id: 3, name: 'Compact Version', description: 'Space-efficient layout' }
  ];

  const DeviceFrame = ({ device, children }: { device: keyof typeof deviceSizes; children: React.ReactNode }) => {
    const size = deviceSizes[device];
    
    return (
      <div className="flex items-center justify-center p-8">
        <div 
          className={`
            relative border-8 rounded-lg shadow-2xl
            ${device === 'desktop' ? 'border-muted bg-muted' : ''}
            ${device === 'tablet' ? 'border-muted-foreground bg-muted-foreground rounded-2xl' : ''}
            ${device === 'mobile' ? 'border-foreground bg-foreground rounded-3xl' : ''}
          `}
          style={{ 
            width: size.width * 0.4 + 16, 
            height: size.height * 0.4 + 16 
          }}
        >
          {device === 'mobile' && (
            <>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-muted rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-muted rounded-full"></div>
            </>
          )}
          <div 
            className="bg-background overflow-hidden"
            style={{ 
              width: size.width * 0.4, 
              height: size.height * 0.4,
              borderRadius: device === 'desktop' ? '4px' : device === 'tablet' ? '12px' : '20px'
            }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  };

  const TemplateCanvas = ({ interactive = false, scale = 1 }: { interactive?: boolean; scale?: number }) => (
    <div 
      className="relative bg-card border border-border overflow-hidden"
      style={{ 
        width: 400 * scale, 
        height: 320 * scale,
        transform: `scale(${zoom[0] / 100})`
      }}
    >
      {mockTemplate.map((zone) => (
        <div
          key={zone.id}
          className={`
            absolute border-2 border-dashed p-2 transition-all cursor-pointer
            ${selectedZone === zone.id ? 'ring-2 ring-ring ring-offset-2' : ''}
            ${zone.type === 'locked' ? 'border-locked-zone bg-locked-zone-bg' : ''}
            ${zone.type === 'editable' ? 'border-editable-zone bg-editable-zone-bg' : ''}
            ${zone.type === 'controlled' ? 'border-controlled-zone bg-controlled-zone-bg' : ''}
            ${interactive ? 'hover:shadow-md hover:scale-105' : ''}
          `}
          style={{
            left: zone.x * scale,
            top: zone.y * scale,
            width: zone.width * scale,
            height: zone.height * scale,
          }}
          onClick={() => interactive && setSelectedZone(zone.id === selectedZone ? null : zone.id)}
        >
          <div className="text-xs font-medium mb-1">{zone.title}</div>
          <div className="text-xs text-muted-foreground line-clamp-2">{zone.content}</div>
        </div>
      ))}
      
      {/* Grid overlay for design mode */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Template Preview Studio</h1>
          <p className="text-muted-foreground">Preview your templates across devices, formats, and variations</p>
        </div>

        <Tabs defaultValue="device-preview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="device-preview" className="flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              Device Preview
            </TabsTrigger>
            <TabsTrigger value="print-preview" className="flex items-center gap-2">
              <Printer className="w-4 h-4" />
              Print Preview
            </TabsTrigger>
            <TabsTrigger value="interactive" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Interactive
            </TabsTrigger>
            <TabsTrigger value="comparison" className="flex items-center gap-2">
              <ArrowLeftRight className="w-4 h-4" />
              Comparison
            </TabsTrigger>
            <TabsTrigger value="variations" className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Variations
            </TabsTrigger>
            <TabsTrigger value="export" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Preview
            </TabsTrigger>
          </TabsList>

          {/* Device Preview */}
          <TabsContent value="device-preview">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Multi-Device Preview</CardTitle>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">Zoom:</span>
                      <div className="w-32">
                        <Slider
                          value={zoom}
                          onValueChange={setZoom}
                          max={200}
                          min={25}
                          step={25}
                          className="w-full"
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-12">{zoom[0]}%</span>
                    </div>
                    <div className="flex border border-border rounded-lg">
                      {Object.entries(deviceSizes).map(([key, device]) => (
                        <Button
                          key={key}
                          variant={activeDevice === key ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setActiveDevice(key as keyof typeof deviceSizes)}
                          className="rounded-none first:rounded-l-lg last:rounded-r-lg"
                        >
                          {key === 'desktop' && <Monitor className="w-4 h-4" />}
                          {key === 'tablet' && <Tablet className="w-4 h-4" />}
                          {key === 'mobile' && <Smartphone className="w-4 h-4" />}
                          <span className="ml-2">{device.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <DeviceFrame device={activeDevice}>
                  <TemplateCanvas scale={activeDevice === 'mobile' ? 0.6 : activeDevice === 'tablet' ? 0.8 : 1} />
                </DeviceFrame>
                <div className="mt-4 text-center">
                  <Badge variant="outline">
                    {deviceSizes[activeDevice].width} × {deviceSizes[activeDevice].height}px
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Print Preview */}
          <TabsContent value="print-preview">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Print Preview</CardTitle>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">Paper Size:</span>
                      <Select value={paperSize} onValueChange={(value) => setPaperSize(value as keyof typeof paperSizes)}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(paperSizes).map(([key, size]) => (
                            <SelectItem key={key} value={key}>{size.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">Show Bleed:</span>
                      <Switch checked={showBleed} onCheckedChange={setShowBleed} />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div className="relative">
                    <div 
                      className="bg-white border border-border shadow-lg"
                      style={{ 
                        width: paperSizes[paperSize].width * 1.5, 
                        height: paperSizes[paperSize].height * 1.5 
                      }}
                    >
                      {showBleed && (
                        <div className="absolute inset-0 border-2 border-dashed border-destructive opacity-50">
                          <div className="absolute -top-6 left-0 text-xs text-destructive">Bleed Area</div>
                        </div>
                      )}
                      <div className="p-8">
                        <TemplateCanvas scale={0.8} />
                      </div>
                      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                        {paperSizes[paperSize].label}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interactive Preview */}
          <TabsContent value="interactive">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Template Editor</CardTitle>
                    <p className="text-sm text-muted-foreground">Click on any zone to edit its properties</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center">
                      <TemplateCanvas interactive={true} />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Zone Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedZone ? (
                    <div className="space-y-4">
                      {(() => {
                        const zone = mockTemplate.find(z => z.id === selectedZone);
                        return zone ? (
                          <>
                            <div>
                              <label className="text-sm font-medium">Zone Title</label>
                              <div className="mt-1 p-2 bg-muted rounded text-sm">{zone.title}</div>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Content</label>
                              <div className="mt-1 p-2 bg-muted rounded text-sm">{zone.content}</div>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Type</label>
                              <Badge 
                                variant="outline" 
                                className={`mt-1 ${
                                  zone.type === 'locked' ? 'border-locked-zone text-locked-zone' : 
                                  zone.type === 'editable' ? 'border-editable-zone text-editable-zone' : 
                                  'border-controlled-zone text-controlled-zone'
                                }`}
                              >
                                {zone.type}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="text-muted-foreground">X:</span> {zone.x}px
                              </div>
                              <div>
                                <span className="text-muted-foreground">Y:</span> {zone.y}px
                              </div>
                              <div>
                                <span className="text-muted-foreground">W:</span> {zone.width}px
                              </div>
                              <div>
                                <span className="text-muted-foreground">H:</span> {zone.height}px
                              </div>
                            </div>
                            <Button size="sm" className="w-full">
                              <Settings className="w-4 h-4 mr-2" />
                              Edit Zone
                            </Button>
                          </>
                        ) : null;
                      })()}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Eye className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>Select a zone to view its properties</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Comparison */}
          <TabsContent value="comparison">
            <Card>
              <CardHeader>
                <CardTitle>Before & After Comparison</CardTitle>
                <p className="text-muted-foreground">Slide to compare original vs optimized template</p>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-hidden rounded-lg border border-border">
                  <div className="flex">
                    <div 
                      className="relative"
                      style={{ width: `${comparisonSlider[0]}%` }}
                    >
                      <div className="bg-muted/50 p-4">
                        <div className="text-center mb-2">
                          <Badge variant="outline">Before</Badge>
                        </div>
                        <TemplateCanvas />
                      </div>
                    </div>
                    <div 
                      className="relative bg-background"
                      style={{ width: `${100 - comparisonSlider[0]}%` }}
                    >
                      <div className="bg-primary/10 p-4">
                        <div className="text-center mb-2">
                          <Badge variant="default">After</Badge>
                        </div>
                        <TemplateCanvas />
                      </div>
                    </div>
                  </div>
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-primary z-10 cursor-col-resize"
                    style={{ left: `${comparisonSlider[0]}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <ArrowLeftRight className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Slider
                    value={comparisonSlider}
                    onValueChange={setComparisonSlider}
                    max={100}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Variations */}
          <TabsContent value="variations">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Template Variations</CardTitle>
                    <p className="text-muted-foreground">Explore different layout options for your template</p>
                  </div>
                  <Button variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Generate New Variations
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {variations.map((variation) => (
                    <Card 
                      key={variation.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        currentVariation === variation.id ? 'ring-2 ring-ring' : ''
                      }`}
                      onClick={() => setCurrentVariation(variation.id)}
                    >
                      <CardContent className="p-3">
                        <div className="aspect-video bg-muted rounded mb-2 flex items-center justify-center">
                          <Grid3X3 className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <h4 className="font-medium text-sm">{variation.name}</h4>
                        <p className="text-xs text-muted-foreground">{variation.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="inline-block p-4 border border-border rounded-lg">
                    <div className="mb-2">
                      <Badge variant="default">{variations[currentVariation].name}</Badge>
                    </div>
                    <TemplateCanvas />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Export Preview */}
          <TabsContent value="export">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Export Preview</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Select value={previewFormat} onValueChange={setPreviewFormat}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {exportFormats.map((format) => (
                          <SelectItem key={format.id} value={format.id}>
                            <div className="flex items-center">
                              <format.icon className="w-4 h-4 mr-2" />
                              {format.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button>
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-4">Preview</h3>
                    <div className="border border-border rounded-lg p-4 bg-muted/30">
                      <TemplateCanvas />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Export Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Quality</label>
                        <Select defaultValue="high">
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low (72 DPI)</SelectItem>
                            <SelectItem value="medium">Medium (150 DPI)</SelectItem>
                            <SelectItem value="high">High (300 DPI)</SelectItem>
                            <SelectItem value="print">Print Ready (600 DPI)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">Color Profile</label>
                        <Select defaultValue="srgb">
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="srgb">sRGB (Web)</SelectItem>
                            <SelectItem value="cmyk">CMYK (Print)</SelectItem>
                            <SelectItem value="rgb">Adobe RGB</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <span className="text-sm">Include bleed marks</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch />
                        <span className="text-sm">Embed fonts</span>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-sm font-medium mb-2">File Info</div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <div>Format: {exportFormats.find(f => f.id === previewFormat)?.label}</div>
                          <div>Estimated size: 2.1 MB</div>
                          <div>Dimensions: 1200×800px</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TemplatePreview;