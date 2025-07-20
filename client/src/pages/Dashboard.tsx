import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Header } from "@/components/Header";
import { AlertTriangle, CheckCircle, Clock, Users, TrendingUp, Send } from "lucide-react";

const Dashboard = () => {
  // Mock data for demonstration
  const complianceScore = 87;
  
  const recentViolations = [
    { id: 1, issue: "Unauthorized font usage", user: "Sarah Johnson", timestamp: "2 hours ago", severity: "high" },
    { id: 2, issue: "Logo placement violation", user: "Mike Chen", timestamp: "4 hours ago", severity: "medium" },
    { id: 3, issue: "Brand color deviation", user: "Emma Wilson", timestamp: "6 hours ago", severity: "low" },
    { id: 4, issue: "Incorrect spacing", user: "David Kumar", timestamp: "1 day ago", severity: "medium" },
  ];

  const topIssues = [
    { issue: "Font Usage", count: 23, color: "hsl(var(--destructive))" },
    { issue: "Color Violations", count: 18, color: "hsl(var(--warning))" },
    { issue: "Logo Placement", count: 15, color: "hsl(var(--primary))" },
    { issue: "Spacing Issues", count: 12, color: "hsl(var(--secondary))" },
    { issue: "Image Guidelines", count: 8, color: "hsl(var(--accent))" },
  ];

  const guidelineMetrics = [
    { guideline: "Logo Usage", score: 95, status: "excellent" },
    { guideline: "Typography", score: 78, status: "good" },
    { guideline: "Color Palette", score: 92, status: "excellent" },
    { guideline: "Spacing & Layout", score: 65, status: "needs-attention" },
    { guideline: "Image Standards", score: 88, status: "good" },
  ];

  const usageAnalytics = [
    { template: "Product Launch", uses: 45, engagement: 89 },
    { template: "Social Media Post", uses: 78, engagement: 92 },
    { template: "Email Newsletter", uses: 34, engagement: 76 },
    { template: "Event Poster", uses: 23, engagement: 84 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-success";
      case "good": return "text-primary";
      case "needs-attention": return "text-warning";
      default: return "text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent": return "default";
      case "good": return "secondary";
      case "needs-attention": return "destructive";
      default: return "outline";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Brand Compliance Dashboard</h1>
              <p className="text-muted-foreground mt-2">Monitor brand adherence and template usage across your organization</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Send className="w-4 h-4" />
                Send Compliance Reminder
              </Button>
              <Button className="gap-2">
                <CheckCircle className="w-4 h-4" />
                Fix Common Issues
              </Button>
            </div>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Overall Compliance Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="hsl(var(--muted))"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="hsl(var(--primary))"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - complianceScore / 100)}`}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">{complianceScore}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">142</div>
                    <p className="text-xs text-muted-foreground">+12 this week</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">89</div>
                    <p className="text-xs text-muted-foreground">Across 12 teams</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Recent Violations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-warning" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">{recentViolations.length}</div>
                    <p className="text-xs text-muted-foreground">In last 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Violations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Brand Violations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Issue</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Severity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentViolations.map((violation) => (
                      <TableRow key={violation.id}>
                        <TableCell className="font-medium">{violation.issue}</TableCell>
                        <TableCell>{violation.user}</TableCell>
                        <TableCell className="text-muted-foreground">{violation.timestamp}</TableCell>
                        <TableCell>
                          <Badge variant={getSeverityColor(violation.severity)}>
                            {violation.severity}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Top Compliance Issues */}
            <Card>
              <CardHeader>
                <CardTitle>Top Compliance Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    count: {
                      label: "Violations",
                      color: "hsl(var(--primary))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topIssues}>
                      <XAxis 
                        dataKey="issue" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar 
                        dataKey="count" 
                        fill="hsl(var(--primary))"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Brand Guideline Adherence */}
            <Card>
              <CardHeader>
                <CardTitle>Brand Guideline Adherence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {guidelineMetrics.map((metric) => (
                  <div key={metric.guideline} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{metric.guideline}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">{metric.score}%</span>
                        <Badge variant={getStatusBadge(metric.status)}>
                          {metric.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={metric.score} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Template Usage Analytics */}
            <Card>
              <CardHeader>
                <CardTitle>Template Usage Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Template</TableHead>
                      <TableHead className="text-right">Uses</TableHead>
                      <TableHead className="text-right">Engagement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usageAnalytics.map((item) => (
                      <TableRow key={item.template}>
                        <TableCell className="font-medium">{item.template}</TableCell>
                        <TableCell className="text-right">{item.uses}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <span>{item.engagement}%</span>
                            <div className="w-12 h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all duration-500"
                                style={{ width: `${item.engagement}%` }}
                              />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;