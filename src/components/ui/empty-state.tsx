import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
    variant?: "default" | "outline" | "secondary";
  };
  className?: string;
}

export const EmptyState = ({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  className 
}: EmptyStateProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center text-center p-8 space-y-4 fade-in",
      className
    )}>
      {Icon && (
        <div className="p-4 bg-muted rounded-full scale-in">
          <Icon className="h-8 w-8 text-muted-foreground" />
        </div>
      )}
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground max-w-md">{description}</p>
      </div>
      
      {action && (
        <Button 
          onClick={action.onClick}
          variant={action.variant || "default"}
          className="mt-4 bounceIn"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
};