import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Search, 
  Upload, 
  Filter, 
  Download, 
  Eye, 
  MoreHorizontal,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Image as ImageIcon,
  Palette,
  Type,
  FileImage,
  ExternalLink,
  History,
  Users,
  Tag
} from "lucide-react";
import { Header } from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

interface BrandAsset {
  id: string;
  name: string;
  type: 'logo' | 'color' | 'font' | 'image' | 'icon';
  url: string;
  thumbnail: string;
  status: 'approved' | 'pending' | 'rejected';
  version: string;
  uploadedBy: string;
  uploadedDate: string;
  lastUsed: string;
  usageCount: number;
  tags: string[];
  fileSize: string;
  dimensions?: string;
  colorValue?: string;
  fontFamily?: string;
  usedIn: string[];
}

const mockAssets: BrandAsset[] = [
  {
    id: '1',
    name: 'Primary Logo',
    type: 'logo',
    url: '/assets/logo-primary.svg',
    thumbnail: '/placeholder.svg',
    status: 'approved',
    version: 'v2.1',
    uploadedBy: 'Sarah Chen',
    uploadedDate: '2024-01-15',
    lastUsed: '2024-01-20',
    usageCount: 156,
    tags: ['primary', 'horizontal', 'dark'],
    fileSize: '24KB',
    dimensions: '300x120px',
    usedIn: ['Email Template A', 'Landing Page', 'Business Card']
  },
  {
    id: '2',
    name: 'Brand Blue',
    type: 'color',
    url: '#2563EB',
    thumbnail: '#2563EB',
    status: 'approved',
    version: 'v1.0',
    uploadedBy: 'Mike Johnson',
    uploadedDate: '2024-01-10',
    lastUsed: '2024-01-21',
    usageCount: 89,
    tags: ['primary', 'blue', 'brand'],
    fileSize: '-',
    colorValue: '#2563EB',
    usedIn: ['All Templates', 'Website', 'Print Materials']
  },
  {
    id: '3',
    name: 'Inter Font Family',
    type: 'font',
    url: 'https://fonts.google.com/specimen/Inter',
    thumbnail: '/placeholder.svg',
    status: 'approved',
    version: 'v3.19',
    uploadedBy: 'Design Team',
    uploadedDate: '2024-01-08',
    lastUsed: '2024-01-21',
    usageCount: 234,
    tags: ['primary', 'sans-serif', 'body'],
    fileSize: '2.1MB',
    fontFamily: 'Inter',
    usedIn: ['All Text', 'Headers', 'Body Content']
  },
  {
    id: '4',
    name: 'Hero Background',
    type: 'image',
    url: '/assets/hero-bg.jpg',
    thumbnail: '/placeholder.svg',
    status: 'pending',
    version: 'v1.0',
    uploadedBy: 'Alex Rivera',
    uploadedDate: '2024-01-21',
    lastUsed: '-',
    usageCount: 0,
    tags: ['hero', 'background', 'landscape'],
    fileSize: '1.8MB',
    dimensions: '1920x1080px',
    usedIn: []
  },
  {
    id: '5',
    name: 'Warning Icon',
    type: 'icon',
    url: '/assets/warning-icon.svg',
    thumbnail: '/placeholder.svg',
    status: 'rejected',
    version: 'v1.0',
    uploadedBy: 'Jamie Smith',
    uploadedDate: '2024-01-19',
    lastUsed: '-',
    usageCount: 0,
    tags: ['warning', 'alert', 'ui'],
    fileSize: '3KB',
    dimensions: '24x24px',
    usedIn: []
  }
];

const integrations = [
  { name: 'Adobe Creative Cloud', status: 'connected', lastSync: '2 hours ago' },
  { name: 'Figma', status: 'connected', lastSync: '1 day ago' },
  { name: 'Canva', status: 'disconnected', lastSync: 'Never' },
  { name: 'Sketch', status: 'pending', lastSync: 'Setting up...' }
];

const BrandAssetsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedAsset, setSelectedAsset] = useState<BrandAsset | null>(null);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const { toast } = useToast();

  const filteredAssets = mockAssets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || asset.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || asset.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getTypeIcon = (type: BrandAsset['type']) => {
    switch (type) {
      case 'logo': return <ImageIcon className="w-4 h-4" />;
      case 'color': return <Palette className="w-4 h-4" />;
      case 'font': return <Type className="w-4 h-4" />;
      case 'image': return <FileImage className="w-4 h-4" />;
      case 'icon': return <ImageIcon className="w-4 h-4" />;
    }
  };

  const getStatusBadge = (status: BrandAsset['status']) => {
    switch (status) {
      case 'approved':
        return <Badge variant="default" className="bg-success text-success-foreground"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'pending':
        return <Badge variant="secondary"><AlertCircle className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
    }
  };

  const handleApprove = (assetId: string) => {
    toast({
      title: "Asset Approved",
      description: "The asset has been approved and is now available for use.",
    });
  };

  const handleReject = (assetId: string) => {
    toast({
      title: "Asset Rejected",
      description: "The asset has been rejected and moved to drafts.",
    });
  };

  const renderAssetCard = (asset: BrandAsset) => (
    <Card key={asset.id} className="group hover:shadow-md transition-all duration-200">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            {getTypeIcon(asset.type)}
            <span className="text-sm font-medium">{asset.name}</span>
          </div>
          {getStatusBadge(asset.status)}
        </div>

        {/* Asset Preview */}
        <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center overflow-hidden">
          {asset.type === 'color' ? (
            <div 
              className="w-full h-full border border-border" 
              style={{ backgroundColor: asset.colorValue }}
            />
          ) : asset.type === 'font' ? (
            <div className="text-center p-4">
              <div style={{ fontFamily: asset.fontFamily }} className="text-lg font-medium">
                Aa Bb Cc
              </div>
              <div className="text-xs text-muted-foreground mt-1">{asset.fontFamily}</div>
            </div>
          ) : (
            <img 
              src={asset.thumbnail} 
              alt={asset.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Asset Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>v{asset.version}</span>
            <span>{asset.fileSize}</span>
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Used {asset.usageCount} times</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedAsset(asset)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Eye className="w-3 h-3" />
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {asset.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {asset.tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{asset.tags.length - 2}
              </Badge>
            )}
          </div>

          {/* Action Buttons for Pending Assets */}
          {asset.status === 'pending' && (
            <div className="flex space-x-2 pt-2">
              <Button size="sm" onClick={() => handleApprove(asset.id)} className="flex-1">
                <CheckCircle className="w-3 h-3 mr-1" />
                Approve
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => handleReject(asset.id)}
                className="flex-1"
              >
                <XCircle className="w-3 h-3 mr-1" />
                Reject
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Brand Asset Library</h1>
            <p className="text-muted-foreground">Manage and organize your brand assets</p>
          </div>
          
          <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Upload Asset
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Upload New Asset</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Drag & drop files or click to browse</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Asset Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select asset type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="logo">Logo</SelectItem>
                      <SelectItem value="color">Color</SelectItem>
                      <SelectItem value="font">Font</SelectItem>
                      <SelectItem value="image">Image</SelectItem>
                      <SelectItem value="icon">Icon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tags</label>
                  <Input placeholder="Enter tags separated by commas" />
                </div>
                <Button className="w-full">Upload & Review</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="assets" className="space-y-6">
          <TabsList>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="usage">Usage Tracking</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>

          <TabsContent value="assets" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search assets..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="logo">Logos</SelectItem>
                      <SelectItem value="color">Colors</SelectItem>
                      <SelectItem value="font">Fonts</SelectItem>
                      <SelectItem value="image">Images</SelectItem>
                      <SelectItem value="icon">Icons</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Assets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAssets.map(renderAssetCard)}
            </div>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Asset Usage Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {mockAssets.filter(a => a.usageCount > 0).map((asset) => (
                  <div key={asset.id} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getTypeIcon(asset.type)}
                        <span className="font-medium">{asset.name}</span>
                        <Badge variant="outline">{asset.type}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{asset.usageCount} uses</span>
                    </div>
                    <Progress value={(asset.usageCount / 250) * 100} className="h-2" />
                    <div className="flex flex-wrap gap-2">
                      {asset.usedIn.map((template) => (
                        <Badge key={template} variant="secondary" className="text-xs">
                          {template}
                        </Badge>
                      ))}
                    </div>
                    {mockAssets.indexOf(asset) < mockAssets.filter(a => a.usageCount > 0).length - 1 && (
                      <Separator />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>External Integrations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {integrations.map((integration) => (
                  <div key={integration.name} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{integration.name}</p>
                        <p className="text-sm text-muted-foreground">Last sync: {integration.lastSync}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={integration.status === 'connected' ? 'default' : 
                               integration.status === 'pending' ? 'secondary' : 'outline'}
                    >
                      {integration.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Asset Detail Modal */}
        {selectedAsset && (
          <Dialog open={!!selectedAsset} onOpenChange={() => setSelectedAsset(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-2">
                  {getTypeIcon(selectedAsset.type)}
                  <span>{selectedAsset.name}</span>
                  {getStatusBadge(selectedAsset.status)}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {/* Asset Preview */}
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  {selectedAsset.type === 'color' ? (
                    <div 
                      className="w-full h-full rounded-lg border border-border" 
                      style={{ backgroundColor: selectedAsset.colorValue }}
                    />
                  ) : (
                    <img 
                      src={selectedAsset.thumbnail} 
                      alt={selectedAsset.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>

                {/* Asset Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Version:</span>
                        <span>v{selectedAsset.version}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">File Size:</span>
                        <span>{selectedAsset.fileSize}</span>
                      </div>
                      {selectedAsset.dimensions && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Dimensions:</span>
                          <span>{selectedAsset.dimensions}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Uploaded:</span>
                        <span>{selectedAsset.uploadedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">By:</span>
                        <span>{selectedAsset.uploadedBy}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Usage</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Times Used:</span>
                        <span>{selectedAsset.usageCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Used:</span>
                        <span>{selectedAsset.lastUsed}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm font-medium mb-1">Used In:</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedAsset.usedIn.map((template) => (
                          <Badge key={template} variant="outline" className="text-xs">
                            {template}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="font-medium mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAsset.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-4 border-t">
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <History className="w-4 h-4 mr-2" />
                    Version History
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Users className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default BrandAssetsPage;