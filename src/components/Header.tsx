import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">BrandMind</h1>
              <p className="text-xs text-muted-foreground">Intelligent Template Systems</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="/editor" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Template Editor
            </a>
            <a href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="/permissions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Permissions
            </a>
            <a href="#assets" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Assets
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Badge variant="secondary">Admin</Badge>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};