import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import { KeyboardShortcuts } from "@/components/ui/keyboard-shortcuts";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Route, Switch } from "wouter";
import Index from "./pages/Index";
import TemplateEditor from "./pages/TemplateEditor";
import TemplatePreview from "./pages/TemplatePreview";
import Dashboard from "./pages/Dashboard";
import Permissions from "./pages/Permissions";
import BrandAssets from "./pages/BrandAssets";
import Analytics from "./pages/Analytics";
import ApiIntegrations from "./pages/ApiIntegrations";
import NotFound from "./pages/NotFound";
import AdobeGrant from "./pages/AdobeGrant";



const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <KeyboardShortcuts />
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/editor" component={TemplateEditor} />
          <Route path="/preview" component={TemplatePreview} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/permissions" component={Permissions} />
          <Route path="/assets" component={BrandAssets} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/integrations" component={ApiIntegrations} />
          <Route path="/adobe-grant" component={AdobeGrant} />
          <Route component={NotFound} />
        </Switch>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
