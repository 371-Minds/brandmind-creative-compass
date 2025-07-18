import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onStartOnboarding?: () => void;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Editor", href: "/editor" },
  { name: "Preview", href: "/preview" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Permissions", href: "/permissions" },
  { name: "Assets", href: "/assets" },
  { name: "Analytics", href: "/analytics" },
  { name: "Integrations", href: "/integrations" },
];

export const Header = ({ onStartOnboarding }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300 relative overflow-hidden">
              <img 
                src="/lovable-uploads/f903e1d0-775e-4937-abc3-17119ca65e40.png" 
                alt="BrandMind Logo" 
                className="w-full h-full object-contain group-hover:rotate-12 transition-transform"
              />
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                BrandMind
              </span>
              <p className="text-xs text-muted-foreground hidden sm:block">Intelligent Templates</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium rounded-lg hover:bg-accent/50 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Badge variant="secondary" className="hidden lg:flex">Admin</Badge>
            <Button 
              variant="outline" 
              size="sm"
              className="text-sm hover:scale-105 transition-transform"
              onClick={onStartOnboarding}
            >
              Get Started
            </Button>
            <Button 
              size="sm" 
              className="text-sm glow hover:shadow-glow hover:scale-105 transition-all"
              asChild
            >
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:scale-110 transition-transform"
            >
              <div className="relative w-5 h-5">
                <Menu className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-border/50">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-background/95 backdrop-blur-sm">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground transition-all duration-300 text-base font-medium rounded-lg hover:bg-accent/50 slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 slide-in-right" style={{ animationDelay: '0.4s' }}>
                <Badge variant="secondary" className="w-fit">Admin</Badge>
                <Button 
                  variant="outline" 
                  className="w-full hover:scale-105 transition-transform"
                  onClick={() => {
                    onStartOnboarding?.();
                    setIsMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
                <Button 
                  className="w-full glow hover:shadow-glow hover:scale-105 transition-all"
                  asChild
                >
                  <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};