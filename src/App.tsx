import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import IndustryDetail from "./pages/IndustryDetail.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import IsoStandards from "./pages/IsoStandards.tsx";
import CoatingCalculator from "./pages/CoatingCalculator.tsx";
import ProductFinder from "./pages/ProductFinder.tsx";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Index />} />
      <Route path="/industry/:industryId" element={<IndustryDetail />} />
      <Route path="/project/:projectId" element={<ProjectDetail />} />
      <Route path="/iso-standards" element={<IsoStandards />} />
      <Route path="/coating-calculator" element={<CoatingCalculator />} />
      <Route path="/product-finder" element={<ProductFinder />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* 🎯 KUNCI KEMENANGAN: Kita kasih tahu React Router nama sub-folder GitHub-mu */}
      <BrowserRouter basename="/nsrlandingpage">
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
