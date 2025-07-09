import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TemplateEditor from "./pages/TemplateEditor";
import Dashboard from "./pages/Dashboard";
import Permissions from "./pages/Permissions";
import BrandAssets from "./pages/BrandAssets";
import Analytics from "./pages/Analytics";
import ApiIntegrations from "./pages/ApiIntegrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/editor" element={<TemplateEditor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/assets" element={<BrandAssets />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/integrations" element={<ApiIntegrations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
