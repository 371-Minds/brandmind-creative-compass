import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Activity,
  Zap,
  Globe,
  Database,
  Settings,
  TrendingUp,
  Wifi,
  WifiOff,
  Clock,
  BarChart3,
  Webhook,
  Code,
  CheckCircle,
  AlertCircle,
  XCircle,
  RefreshCw,
  Download
} from "lucide-react";

interface ApiIntegration {
  id: string;
  name: string;
  status: "online" | "warning" | "offline";
  uptime: number;
  responseTime: number;
  requestsToday: number;
  quota: number;
  lastSync: string;
  icon: React.ReactNode;
}

const integrations: ApiIntegration[] = [
  {
    id: "adobe",
    name: "Adobe Creative SDK",
    status: "online",
    uptime: 99.8,
    responseTime: 145,
    requestsToday: 2847,
    quota: 10000,
    lastSync: "2 minutes ago",
    icon: <Code className="w-5 h-5" />
  },
  {
    id: "figma",
    name: "Figma API",
    status: "online",
    uptime: 99.5,
    responseTime: 89,
    requestsToday: 1253,
    quota: 5000,
    lastSync: "5 minutes ago",
    icon: <Database className="w-5 h-5" />
  },
  {
    id: "slack",
    name: "Slack Webhooks",
    status: "warning",
    uptime: 98.2,
    responseTime: 234,
    requestsToday: 567,
    quota: 1000,
    lastSync: "12 minutes ago",
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: "dropbox",
    name: "Dropbox Business",
    status: "online",
    uptime: 99.9,
    responseTime: 102,
    requestsToday: 892,
    quota: 2500,
    lastSync: "1 minute ago",
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: "gsuite",
    name: "Google Workspace",
    status: "offline",
    uptime: 95.4,
    responseTime: 0,
    requestsToday: 0,
    quota: 3000,
    lastSync: "2 hours ago",
    icon: <Settings className="w-5 h-5" />
  }
];

const sampleApiCalls = [
  {
    title: "Get Template Metadata",
    endpoint: "GET /api/templates/{id}/metadata",
    request: `{
  "templateId": "brand-flyer-2024",
  "includeAssets": true,
  "format": "json"
}`,
    response: `{
  "id": "brand-flyer-2024",
  "name": "Corporate Event Flyer",
  "brandCompliance": {
    "score": 98,
    "issues": [],
    "approvedAssets": ["logo-primary", "color-scheme-1"]
  },
  "lastModified": "2024-01-15T10:30:00Z",
  "usage": {
    "downloads": 156,
    "variations": 23
  }
}`
  },
  {
    title: "Sync Brand Assets",
    endpoint: "POST /api/sync/brand-assets",
    request: `{
  "source": "adobe-creative-cloud",
  "assetTypes": ["logos", "fonts", "colors"],
  "autoApprove": false
}`,
    response: `{
  "syncId": "sync-789123",
  "status": "processing",
  "assetsFound": 47,
  "estimated": "2-3 minutes",
  "webhook": "https://api.brandmind.com/hooks/sync-complete"
}`
  }
];

const ApiIntegrations = () => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [selectedIntegration, setSelectedIntegration] = useState<string>("adobe");
  const [syncAnimation, setSyncAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSyncAnimation(true);
      setTimeout(() => setSyncAnimation(false), 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "warning":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case "offline":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "offline":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            API Integrations Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor and manage your external service integrations in real-time
          </p>
        </div>

        <Tabs defaultValue="status" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="status">Live Status</TabsTrigger>
            <TabsTrigger value="api-calls">API Explorer</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="status" className="space-y-6">
            {/* Real-time Sync Visualization */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Real-time Data Sync
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-64 bg-muted/20 rounded-lg p-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Central Hub */}
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Database className="w-8 h-8 text-primary-foreground" />
                      </div>
                      
                      {/* Connection Lines */}
                      {integrations.slice(0, 4).map((integration, index) => {
                        const angle = (index * 90) - 45;
                        const x = Math.cos(angle * Math.PI / 180) * 120;
                        const y = Math.sin(angle * Math.PI / 180) * 120;
                        
                        return (
                          <div key={integration.id}>
                            {/* Animated Connection Line */}
                            <div
                              className={`absolute w-24 h-0.5 origin-left transition-all duration-1000 ${
                                syncAnimation ? getStatusColor(integration.status) : "bg-border"
                              }`}
                              style={{
                                transform: `translate(32px, 32px) rotate(${angle}deg)`,
                                opacity: syncAnimation ? 1 : 0.3
                              }}
                            />
                            
                            {/* Service Node */}
                            <div
                              className={`absolute w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                                syncAnimation ? `border-${integration.status === 'online' ? 'green' : integration.status === 'warning' ? 'yellow' : 'red'}-500 bg-background` : "border-border bg-muted"
                              }`}
                              style={{
                                transform: `translate(${32 + x - 24}px, ${32 + y - 24}px)`
                              }}
                            >
                              {integration.icon}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Status Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {integrations.map((integration) => (
                <Card key={integration.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {integration.icon}
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(integration.status)}
                        <Badge 
                          variant={integration.status === "online" ? "default" : 
                                 integration.status === "warning" ? "secondary" : "destructive"}
                        >
                          {integration.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <TrendingUp className="w-3 h-3" />
                          Uptime
                        </div>
                        <div className="font-semibold">{integration.uptime}%</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          Response
                        </div>
                        <div className="font-semibold">{integration.responseTime}ms</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">API Usage Today</span>
                        <span>{integration.requestsToday}/{integration.quota}</span>
                      </div>
                      <Progress 
                        value={(integration.requestsToday / integration.quota) * 100} 
                        className="h-2"
                      />
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      Last sync: {integration.lastSync}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="api-calls" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {sampleApiCalls.map((call, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      {call.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {call.endpoint}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Request</Label>
                      <div className="bg-muted rounded-lg p-3">
                        <pre className="text-xs text-foreground overflow-x-auto">
                          <code>{call.request}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Response</Label>
                      <div className="bg-muted rounded-lg p-3">
                        <pre className="text-xs text-foreground overflow-x-auto">
                          <code>{call.response}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      Try in API Explorer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Webhook className="w-5 h-5" />
                  Webhook Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="webhook-url">Webhook URL</Label>
                      <Input
                        id="webhook-url"
                        placeholder="https://your-app.com/webhooks/brandmind"
                        value={webhookUrl}
                        onChange={(e) => setWebhookUrl(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="webhook-events">Event Types</Label>
                      <div className="space-y-2 mt-2">
                        {[
                          "template.created",
                          "template.updated", 
                          "brand.asset.uploaded",
                          "compliance.violation",
                          "sync.completed"
                        ].map((event) => (
                          <label key={event} className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span className="text-sm">{event}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      Save Webhook Configuration
                    </Button>
                  </div>
                  
                  <div>
                    <Label>Webhook Payload Example</Label>
                    <div className="bg-muted rounded-lg p-3 mt-2">
                      <pre className="text-xs text-foreground overflow-x-auto">
                        <code>{`{
  "event": "template.updated",
  "timestamp": "2024-01-15T14:30:00Z",
  "data": {
    "templateId": "brand-flyer-2024",
    "changes": ["colors", "fonts"],
    "complianceScore": 96,
    "userId": "user_123"
  },
  "webhook": {
    "id": "wh_456",
    "attempts": 1
  }
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Requests</p>
                      <p className="text-2xl font-bold">124,856</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Avg Response Time</p>
                      <p className="text-2xl font-bold">147ms</p>
                    </div>
                    <Clock className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    -8ms from last week
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Error Rate</p>
                      <p className="text-2xl font-bold">0.3%</p>
                    </div>
                    <AlertCircle className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-green-600 mt-2">
                    -0.1% improvement
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Integrations</p>
                      <p className="text-2xl font-bold">4/5</p>
                    </div>
                    <Wifi className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    1 integration offline
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Integration Health Over Time</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Health monitoring chart would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ApiIntegrations;