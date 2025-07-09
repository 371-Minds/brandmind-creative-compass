import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Wand2, 
  Eye,
  Lightbulb
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ValidationRule {
  id: string;
  type: 'error' | 'warning' | 'success';
  category: string;
  message: string;
  explanation: string;
  autoFixAvailable: boolean;
  currentValue?: string;
  expectedValue?: string;
}

interface LiveValidationPanelProps {
  template?: any;
  onAutoFix?: (ruleId: string) => void;
}

export const LiveValidationPanel = ({ 
  template, 
  onAutoFix 
}: LiveValidationPanelProps) => {
  const [validationRules, setValidationRules] = useState<ValidationRule[]>([
    {
      id: 'brand-colors',
      type: 'error',
      category: 'Brand Colors',
      message: 'Non-brand color detected',
      explanation: 'Logo uses #FF5733 which is not in the approved brand palette. Should use primary brand blue #2563EB.',
      autoFixAvailable: true,
      currentValue: '#FF5733',
      expectedValue: '#2563EB'
    },
    {
      id: 'logo-placement',
      type: 'warning',
      category: 'Logo Guidelines',
      message: 'Logo clearance insufficient',
      explanation: 'Logo needs minimum 20px clearance on all sides. Current clearance: 12px.',
      autoFixAvailable: true,
      currentValue: '12px',
      expectedValue: '20px'
    },
    {
      id: 'typography',
      type: 'success',
      category: 'Typography',
      message: 'Font family compliant',
      explanation: 'Using approved brand font "Inter" correctly.',
      autoFixAvailable: false
    },
    {
      id: 'content-length',
      type: 'warning',
      category: 'Content Guidelines',
      message: 'Headline exceeds recommended length',
      explanation: 'Main headline has 8 words, recommended maximum is 6 words for optimal readability.',
      autoFixAvailable: true,
      currentValue: '8 words',
      expectedValue: '6 words max'
    },
    {
      id: 'contrast-ratio',
      type: 'error',
      category: 'Accessibility',
      message: 'Insufficient color contrast',
      explanation: 'Text contrast ratio is 3.2:1, minimum required is 4.5:1 for WCAG AA compliance.',
      autoFixAvailable: true,
      currentValue: '3.2:1',
      expectedValue: '4.5:1'
    }
  ]);

  const [complianceScore, setComplianceScore] = useState(72);
  const { toast } = useToast();

  const getValidationIcon = (type: ValidationRule['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-destructive" />;
    }
  };

  const getValidationBadgeVariant = (type: ValidationRule['type']) => {
    switch (type) {
      case 'success':
        return 'default';
      case 'warning':
        return 'secondary';
      case 'error':
        return 'destructive';
    }
  };

  const handleAutoFix = (rule: ValidationRule) => {
    // Simulate auto-fix
    setValidationRules(prev => 
      prev.map(r => 
        r.id === rule.id 
          ? { ...r, type: 'success' as const, message: 'Issue resolved automatically' }
          : r
      )
    );
    
    // Update compliance score
    setComplianceScore(prev => Math.min(100, prev + 15));
    
    toast({
      title: "Auto-fix Applied",
      description: `${rule.category}: ${rule.message}`,
    });

    onAutoFix?.(rule.id);
  };

  const calculateComplianceScore = () => {
    const totalRules = validationRules.length;
    const successRules = validationRules.filter(r => r.type === 'success').length;
    const warningRules = validationRules.filter(r => r.type === 'warning').length;
    
    // Success = 100%, Warning = 70%, Error = 0%
    const score = Math.round(
      ((successRules * 100) + (warningRules * 70)) / totalRules
    );
    
    return score;
  };

  useEffect(() => {
    const newScore = calculateComplianceScore();
    setComplianceScore(newScore);
  }, [validationRules]);

  const errorCount = validationRules.filter(r => r.type === 'error').length;
  const warningCount = validationRules.filter(r => r.type === 'warning').length;
  const successCount = validationRules.filter(r => r.type === 'success').length;

  return (
    <div className="space-y-6">
      {/* Compliance Score Header */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Brand Compliance Score</CardTitle>
            <div className="flex items-center space-x-2">
              <Badge 
                variant={complianceScore >= 80 ? "default" : complianceScore >= 60 ? "secondary" : "destructive"}
                className="text-sm font-semibold"
              >
                {complianceScore}%
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <Progress value={complianceScore} className="h-3 mb-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <CheckCircle className="w-3 h-3 text-success" />
                <span>{successCount} passed</span>
              </span>
              <span className="flex items-center space-x-1">
                <AlertTriangle className="w-3 h-3 text-warning" />
                <span>{warningCount} warnings</span>
              </span>
              <span className="flex items-center space-x-1">
                <XCircle className="w-3 h-3 text-destructive" />
                <span>{errorCount} errors</span>
              </span>
            </div>
            <span className="text-xs">Updates in real-time</span>
          </div>
        </CardContent>
      </Card>

      {/* Before/After Comparison */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Before Validation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-3 border border-dashed border-destructive/50 bg-destructive/5 rounded">
                <p className="text-destructive font-medium mb-1">Non-compliant Elements:</p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Logo using incorrect color (#FF5733)</li>
                  <li>• Insufficient clearance around logo</li>
                  <li>• Low contrast text (3.2:1 ratio)</li>
                  <li>• Headline exceeds word limit</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>After Validation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-3 border border-dashed border-success/50 bg-success/5 rounded">
                <p className="text-success font-medium mb-1">Compliant Elements:</p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Logo using brand blue (#2563EB)</li>
                  <li>• Proper 20px logo clearance</li>
                  <li>• WCAG AA compliant contrast (4.5:1)</li>
                  <li>• Optimized headline length</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Live Validation Messages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="w-4 h-4" />
            <span>Live Validation Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {validationRules.map((rule, index) => (
            <div key={rule.id}>
              <div className="flex items-start justify-between space-x-4">
                <div className="flex items-start space-x-3 flex-1">
                  {getValidationIcon(rule.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {rule.category}
                      </Badge>
                      <Badge variant={getValidationBadgeVariant(rule.type)} className="text-xs">
                        {rule.type}
                      </Badge>
                    </div>
                    <p className="font-medium text-sm">{rule.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {rule.explanation}
                    </p>
                    {rule.currentValue && rule.expectedValue && (
                      <div className="flex items-center space-x-2 mt-2 text-xs">
                        <span className="text-muted-foreground">Current:</span>
                        <code className="bg-muted px-1 py-0.5 rounded text-destructive">
                          {rule.currentValue}
                        </code>
                        <span className="text-muted-foreground">→</span>
                        <span className="text-muted-foreground">Expected:</span>
                        <code className="bg-muted px-1 py-0.5 rounded text-success">
                          {rule.expectedValue}
                        </code>
                      </div>
                    )}
                  </div>
                </div>
                {rule.autoFixAvailable && rule.type !== 'success' && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleAutoFix(rule)}
                    className="flex items-center space-x-1"
                  >
                    <Wand2 className="w-3 h-3" />
                    <span>Auto-fix</span>
                  </Button>
                )}
              </div>
              {index < validationRules.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium mb-1">Quick Actions</h3>
              <p className="text-xs text-muted-foreground">
                Apply bulk fixes to common compliance issues
              </p>
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  // Auto-fix all available issues
                  const autoFixableRules = validationRules.filter(r => r.autoFixAvailable && r.type !== 'success');
                  autoFixableRules.forEach(rule => handleAutoFix(rule));
                }}
                disabled={!validationRules.some(r => r.autoFixAvailable && r.type !== 'success')}
              >
                <Wand2 className="w-3 h-3 mr-1" />
                Fix All Issues
              </Button>
              <Button variant="default" size="sm">
                Generate Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};