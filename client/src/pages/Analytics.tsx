import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, TrendingUp, TrendingDown, Users, FileText, Target, DollarSign, Download, Award, Activity, BarChart3, PieChart, Calendar as CalendarIcon } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell, Area, AreaChart } from 'recharts';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("last30days");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  // Mock data for various analytics
  const complianceTrendData = [
    { month: 'Jan', compliance: 85, usage: 120, engagement: 78 },
    { month: 'Feb', compliance: 88, usage: 145, engagement: 82 },
    { month: 'Mar', compliance: 92, usage: 180, engagement: 85 },
    { month: 'Apr', compliance: 90, usage: 160, engagement: 88 },
    { month: 'May', compliance: 94, usage: 200, engagement: 90 },
    { month: 'Jun', compliance: 96, usage: 220, engagement: 93 },
  ];

  const departmentData = [
    { name: 'Marketing', compliance: 96, usage: 450, employees: 25, score: 94 },
    { name: 'Sales', compliance: 92, usage: 380, employees: 35, score: 89 },
    { name: 'Product', compliance: 88, usage: 320, employees: 20, score: 85 },
    { name: 'HR', compliance: 94, usage: 280, employees: 15, score: 91 },
    { name: 'Engineering', compliance: 82, usage: 150, employees: 40, score: 78 },
    { name: 'Support', compliance: 90, usage: 220, employees: 18, score: 87 },
  ];

  const topCreators = [
    { name: 'Sarah Chen', department: 'Marketing', templates: 28, compliance: 98, avatar: '/placeholder.svg' },
    { name: 'Mike Rodriguez', department: 'Sales', templates: 24, compliance: 95, avatar: '/placeholder.svg' },
    { name: 'Emma Thompson', department: 'Product', templates: 22, compliance: 92, avatar: '/placeholder.svg' },
    { name: 'David Kim', department: 'Marketing', templates: 19, compliance: 96, avatar: '/placeholder.svg' },
    { name: 'Lisa Wang', department: 'HR', templates: 17, compliance: 94, avatar: '/placeholder.svg' },
  ];

  const heatmapData = [
    { department: 'Marketing', week1: 95, week2: 88, week3: 92, week4: 96 },
    { department: 'Sales', week1: 87, week2: 90, week3: 89, week4: 92 },
    { department: 'Product', week1: 82, week2: 85, week3: 88, week4: 88 },
    { department: 'HR', week1: 91, week2: 94, week3: 93, week4: 94 },
    { department: 'Engineering', week1: 78, week2: 80, week3: 82, week4: 82 },
    { department: 'Support', week1: 85, week2: 87, week3: 90, week4: 90 },
  ];

  const templateMetrics = [
    { name: 'Social Media Post', usage: 340, engagement: 92, compliance: 96, trend: 'up' },
    { name: 'Email Newsletter', usage: 285, engagement: 88, compliance: 94, trend: 'up' },
    { name: 'Presentation Slide', usage: 245, engagement: 85, compliance: 90, trend: 'down' },
    { name: 'Product Flyer', usage: 220, engagement: 90, compliance: 92, trend: 'up' },
    { name: 'Brand Guidelines', usage: 180, engagement: 95, compliance: 98, trend: 'stable' },
  ];

  const getHeatmapColor = (value: number) => {
    if (value >= 90) return 'bg-green-500';
    if (value >= 80) return 'bg-yellow-500';
    if (value >= 70) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const calculateROI = () => {
    const brandingCosts = 150000; // Annual branding costs
    const complianceRate = 94; // Current compliance rate
    const potentialSavings = brandingCosts * (complianceRate / 100);
    return potentialSavings;
  };

  const exportReport = (type: string) => {
    // Mock export functionality
    console.log(`Exporting ${type} report...`);
    // In a real app, this would generate and download the report
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Enterprise Analytics</h1>
            <p className="text-muted-foreground">Track brand compliance and template performance across your organization</p>
          </div>
          <div className="flex gap-3">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7days">Last 7 days</SelectItem>
                <SelectItem value="last30days">Last 30 days</SelectItem>
                <SelectItem value="last90days">Last 90 days</SelectItem>
                <SelectItem value="lastyear">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => exportReport('comprehensive')}>
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Compliance</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">94%</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline w-3 h-3 mr-1" />
                +2.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Template Usage</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,847</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline w-3 h-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">153</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline w-3 h-3 mr-1" />
                +8 new this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${calculateROI().toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Annual ROI estimate</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="heatmap">Usage Heatmap</TabsTrigger>
            <TabsTrigger value="trends">Compliance Trends</TabsTrigger>
            <TabsTrigger value="users">User Activity</TabsTrigger>
            <TabsTrigger value="templates">Template Metrics</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Compliance Trends Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Trends</CardTitle>
                  <CardDescription>Brand compliance over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={complianceTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="compliance" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Department Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Department Leaderboard</CardTitle>
                  <CardDescription>Ranked by overall brand compliance score</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departmentData
                      .sort((a, b) => b.score - a.score)
                      .slice(0, 5)
                      .map((dept, index) => (
                        <div key={dept.name} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium">{dept.name}</p>
                              <p className="text-sm text-muted-foreground">{dept.employees} employees</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">{dept.score}%</p>
                            <Progress value={dept.score} className="w-20" />
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="heatmap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Template Usage Heatmap</CardTitle>
                <CardDescription>Weekly template usage across departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-5 gap-2 text-sm font-medium">
                    <div>Department</div>
                    <div className="text-center">Week 1</div>
                    <div className="text-center">Week 2</div>
                    <div className="text-center">Week 3</div>
                    <div className="text-center">Week 4</div>
                  </div>
                  {heatmapData.map((row) => (
                    <div key={row.department} className="grid grid-cols-5 gap-2 items-center">
                      <div className="font-medium">{row.department}</div>
                      <div className={`h-10 rounded flex items-center justify-center text-white font-medium ${getHeatmapColor(row.week1)}`}>
                        {row.week1}%
                      </div>
                      <div className={`h-10 rounded flex items-center justify-center text-white font-medium ${getHeatmapColor(row.week2)}`}>
                        {row.week2}%
                      </div>
                      <div className={`h-10 rounded flex items-center justify-center text-white font-medium ${getHeatmapColor(row.week3)}`}>
                        {row.week3}%
                      </div>
                      <div className={`h-10 rounded flex items-center justify-center text-white font-medium ${getHeatmapColor(row.week4)}`}>
                        {row.week4}%
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center space-x-4 mt-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span>Below 70%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span>70-79%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span>80-89%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span>90%+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Multi-Metric Trends</CardTitle>
                <CardDescription>Compliance, usage, and engagement over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={complianceTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="compliance" stroke="hsl(var(--primary))" strokeWidth={2} name="Compliance %" />
                    <Line type="monotone" dataKey="usage" stroke="hsl(var(--secondary))" strokeWidth={2} name="Usage Count" />
                    <Line type="monotone" dataKey="engagement" stroke="hsl(var(--accent))" strokeWidth={2} name="Engagement %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Template Creators</CardTitle>
                  <CardDescription>Most active users this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topCreators.map((creator, index) => (
                      <div key={creator.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={creator.avatar} />
                            <AvatarFallback>{creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{creator.name}</p>
                            <p className="text-sm text-muted-foreground">{creator.department}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{creator.templates} templates</p>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm">{creator.compliance}%</span>
                            <Badge variant={creator.compliance >= 95 ? "default" : creator.compliance >= 90 ? "secondary" : "destructive"}>
                              {creator.compliance >= 95 ? "Excellent" : creator.compliance >= 90 ? "Good" : "Needs Improvement"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Activity Distribution</CardTitle>
                  <CardDescription>Activity levels across the organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={departmentData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="usage" fill="hsl(var(--primary))" name="Templates Used" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Template Performance Metrics</CardTitle>
                <CardDescription>Usage, engagement, and compliance scores for top templates</CardDescription>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => exportReport('template-metrics')}>
                    <Download className="w-3 h-3 mr-1" />
                    Export Metrics
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {templateMetrics.map((template) => (
                    <div key={template.name} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-lg">{template.name}</h3>
                        <div className="flex items-center space-x-1">
                          {template.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                          {template.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
                          {template.trend === 'stable' && <Activity className="w-4 h-4 text-yellow-500" />}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Usage Count</p>
                          <p className="text-2xl font-bold">{template.usage}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Engagement Rate</p>
                          <p className="text-2xl font-bold">{template.engagement}%</p>
                          <Progress value={template.engagement} className="mt-1" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Compliance Score</p>
                          <p className="text-2xl font-bold">{template.compliance}%</p>
                          <Progress value={template.compliance} className="mt-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Department Comparison</CardTitle>
                  <CardDescription>Brand compliance scores by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={departmentData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="compliance" fill="hsl(var(--primary))" name="Compliance %" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ROI Calculator</CardTitle>
                  <CardDescription>Calculate cost savings from brand compliance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Annual Branding Budget</p>
                      <p className="text-2xl font-bold">$150,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Compliance Rate</p>
                      <p className="text-2xl font-bold">94%</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground">Estimated Annual Savings</p>
                    <p className="text-3xl font-bold text-green-600">${calculateROI().toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Based on reduced design revisions and faster approval cycles
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Time saved per project</span>
                      <span>2.5 hours</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Average designer rate</span>
                      <span>$75/hour</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Projects per month</span>
                      <span>65</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => exportReport('roi-calculation')}>
                    <Download className="w-4 h-4 mr-2" />
                    Export ROI Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;