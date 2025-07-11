import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Loader2 } from "lucide-react";

interface ProgressIndicatorProps {
  value?: number;
  label?: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "destructive";
  size?: "sm" | "md" | "lg";
  showPercentage?: boolean;
  indeterminate?: boolean;
  className?: string;
}

export const ProgressIndicator = ({
  value = 0,
  label,
  description,
  variant = "default",
  size = "md",
  showPercentage = true,
  indeterminate = false,
  className
}: ProgressIndicatorProps) => {
  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  };

  const variantClasses = {
    default: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    destructive: "bg-destructive"
  };

  if (indeterminate) {
    return (
      <div className={cn("space-y-2", className)}>
        {label && (
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{label}</span>
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        )}
        <div className={cn(
          "w-full bg-secondary rounded-full overflow-hidden",
          sizeClasses[size]
        )}>
          <div 
            className={cn(
              "h-full shimmer rounded-full",
              variantClasses[variant]
            )}
            style={{ width: "100%" }}
          />
        </div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div className={cn("space-y-2", className)}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-sm font-medium">{label}</span>}
          {showPercentage && (
            <span className="text-sm text-muted-foreground">{value}%</span>
          )}
        </div>
      )}
      
      <Progress 
        value={value} 
        className={cn(sizeClasses[size])}
      />
      
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
};