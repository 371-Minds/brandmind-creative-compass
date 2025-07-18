import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Upload, Users, Palette, Rocket, ArrowRight, ArrowLeft, Sparkles, Eye } from "lucide-react";

// Import template preview images
import corporatePresentationImg from "@/assets/template-corporate-presentation.jpg";
import socialMediaKitImg from "@/assets/template-social-media-kit.jpg";
import marketingFlyerImg from "@/assets/template-marketing-flyer.jpg";
import emailNewsletterImg from "@/assets/template-email-newsletter.jpg";
import businessCardImg from "@/assets/template-business-card.jpg";
import websiteBannerImg from "@/assets/template-website-banner.jpg";

interface OnboardingFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS = [
  { id: 1, title: "Welcome", description: "Let's get you started" },
  { id: 2, title: "Brand Setup", description: "Configure your brand" },
  { id: 3, title: "Choose Templates", description: "Select starter templates" },
  { id: 4, title: "Invite Team", description: "Add team members" },
  { id: 5, title: "Upload Guidelines", description: "Add brand assets" },
  { id: 6, title: "Success", description: "You're all set!" }
];

const SAMPLE_TEMPLATES = [
  { 
    id: 1, 
    name: "Corporate Presentation", 
    category: "Presentations", 
    thumbnail: corporatePresentationImg,
    description: "Professional slide templates with brand-compliant layouts"
  },
  { 
    id: 2, 
    name: "Social Media Kit", 
    category: "Social", 
    thumbnail: socialMediaKitImg,
    description: "Instagram, Facebook, and Twitter post templates"
  },
  { 
    id: 3, 
    name: "Marketing Flyer", 
    category: "Print", 
    thumbnail: marketingFlyerImg,
    description: "Eye-catching promotional materials for events and products"
  },
  { 
    id: 4, 
    name: "Email Newsletter", 
    category: "Email", 
    thumbnail: emailNewsletterImg,
    description: "Responsive email templates with automated brand validation"
  },
  { 
    id: 5, 
    name: "Business Card", 
    category: "Print", 
    thumbnail: businessCardImg,
    description: "Professional business cards with consistent brand elements"
  },
  { 
    id: 6, 
    name: "Website Banner", 
    category: "Web", 
    thumbnail: websiteBannerImg,
    description: "Hero sections and promotional banners for websites"
  }
];

const TEAM_ROLES = [
  { value: "admin", label: "Brand Manager", description: "Full access to all features" },
  { value: "editor", label: "Content Creator", description: "Can create and edit templates" },
  { value: "viewer", label: "Reviewer", description: "Can view and comment on templates" }
];

export const OnboardingFlow = ({ isOpen, onClose }: OnboardingFlowProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [brandData, setBrandData] = useState({
    companyName: "",
    industry: "",
    brandDescription: "",
    primaryColor: "#000000"
  });
  const [selectedTemplates, setSelectedTemplates] = useState<number[]>([]);
  const [teamMembers, setTeamMembers] = useState([{ email: "", role: "editor" }]);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const progress = (currentStep / STEPS.length) * 100;

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleTemplateToggle = (templateId: number) => {
    setSelectedTemplates(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    );
  };

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { email: "", role: "editor" }]);
  };

  const updateTeamMember = (index: number, field: string, value: string) => {
    const updated = teamMembers.map((member, i) => 
      i === index ? { ...member, [field]: value } : member
    );
    setTeamMembers(updated);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(files.map(file => file.name));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Welcome to BrandMind</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Let's set up your intelligent template system and get your team ready for brand-compliant creativity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Brand Guardrails</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Real-time Validation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Team Collaboration</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Smart Templates</span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Brand Setup</h2>
              <p className="text-muted-foreground">Tell us about your brand to create personalized templates</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={brandData.companyName}
                  onChange={(e) => setBrandData({...brandData, companyName: e.target.value})}
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select value={brandData.industry} onValueChange={(value) => setBrandData({...brandData, industry: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="description">Brand Description</Label>
                <Textarea
                  id="description"
                  value={brandData.brandDescription}
                  onChange={(e) => setBrandData({...brandData, brandDescription: e.target.value})}
                  placeholder="Describe your brand personality and values..."
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="color">Primary Brand Color</Label>
                <div className="flex items-center space-x-3">
                  <Input
                    id="color"
                    type="color"
                    value={brandData.primaryColor}
                    onChange={(e) => setBrandData({...brandData, primaryColor: e.target.value})}
                    className="w-16 h-10 p-1"
                  />
                  <Input
                    value={brandData.primaryColor}
                    onChange={(e) => setBrandData({...brandData, primaryColor: e.target.value})}
                    placeholder="#000000"
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">Choose Starter Templates</h2>
              <p className="text-muted-foreground">Select templates that match your brand needs</p>
            </div>
            <div className="grid grid-cols-1 gap-4 max-h-80 overflow-y-auto pr-2">
              {SAMPLE_TEMPLATES.map((template) => (
                <Card
                  key={template.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg group ${
                    selectedTemplates.includes(template.id) 
                      ? 'ring-2 ring-primary bg-primary/5 shadow-md' 
                      : 'hover:ring-1 hover:ring-border hover:bg-accent/5'
                  }`}
                  onClick={() => handleTemplateToggle(template.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-16 flex-shrink-0">
                        <img 
                          src={template.thumbnail} 
                          alt={`${template.name} preview`}
                          className="w-full h-full object-cover rounded-md border"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                          <Eye className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1 flex-1">
                            <h3 className="font-semibold text-sm text-foreground">{template.name}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">{template.description}</p>
                            <Badge variant="secondary" className="text-xs">{template.category}</Badge>
                          </div>
                          {selectedTemplates.includes(template.id) && (
                            <div className="flex-shrink-0 ml-2">
                              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-primary-foreground" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                {selectedTemplates.length} template{selectedTemplates.length !== 1 ? 's' : ''} selected
              </p>
              {selectedTemplates.length > 0 && (
                <p className="text-xs text-primary">
                  These templates will be customized with your brand colors and guidelines
                </p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Invite Your Team</h2>
              <p className="text-muted-foreground">Add team members and assign their roles</p>
            </div>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor={`email-${index}`}>Email Address</Label>
                    <Input
                      id={`email-${index}`}
                      type="email"
                      value={member.email}
                      onChange={(e) => updateTeamMember(index, 'email', e.target.value)}
                      placeholder="colleague@company.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`role-${index}`}>Role</Label>
                    <Select value={member.role} onValueChange={(value) => updateTeamMember(index, 'role', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {TEAM_ROLES.map((role) => (
                          <SelectItem key={role.value} value={role.value}>
                            <div>
                              <div className="font-medium">{role.label}</div>
                              <div className="text-xs text-muted-foreground">{role.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
              <Button variant="outline" onClick={addTeamMember} className="w-full">
                Add Another Team Member
              </Button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Upload Brand Guidelines</h2>
              <p className="text-muted-foreground">Upload your brand assets for automatic validation</p>
            </div>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.png,.svg,.zip"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm font-medium">Click to upload files</p>
                  <p className="text-xs text-muted-foreground">PDF, Images, SVG, ZIP files supported</p>
                </Label>
              </div>
              {uploadedFiles.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Uploaded Files:</h4>
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>{file}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <h4 className="font-medium">Automatically Detected:</h4>
                  <p className="text-muted-foreground">• Colors and fonts</p>
                  <p className="text-muted-foreground">• Logo specifications</p>
                  <p className="text-muted-foreground">• Typography rules</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Compliance Rules:</h4>
                  <p className="text-muted-foreground">• Spacing guidelines</p>
                  <p className="text-muted-foreground">• Color usage rules</p>
                  <p className="text-muted-foreground">• Layout restrictions</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-br from-success to-success/60 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">🎉 You're All Set!</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Your BrandMind workspace is ready. Start creating brand-compliant templates with your team.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto">
              <Button className="w-full" asChild>
                <a href="/editor">
                  <Rocket className="w-4 h-4 mr-2" />
                  Create Your First Template
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="/dashboard">
                  <Palette className="w-4 h-4 mr-2" />
                  Visit Dashboard
                </a>
              </Button>
              <Button variant="ghost" className="w-full" asChild>
                <a href="/assets">
                  View Brand Assets
                </a>
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Getting Started</span>
            <Badge variant="outline">
              Step {currentStep} of {STEPS.length}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{STEPS[currentStep - 1].title}</span>
              <span className="text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="min-h-[400px]">
            {renderStepContent()}
          </div>

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentStep < STEPS.length ? (
              <Button onClick={handleNext}>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={onClose}>
                Start Using BrandMind
                <Rocket className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};