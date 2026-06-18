import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Layers, Maximize2, Info, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

interface Preset {
  name: string;
  solids: number;
  dft: number;
}

const presets: Preset[] = [
  { name: "Industrial Epoxy", solids: 55, dft: 150 },
  { name: "Polyurethane Topcoat", solids: 60, dft: 75 },
  { name: "Heavy Duty Anti-Corrosion", solids: 65, dft: 200 },
];

const CoatingCalculator = () => {
  const navigate = useNavigate();
  const [area, setArea] = useState<number>(1000);
  const [solids, setSolids] = useState<number>(55);
  const [dft, setDft] = useState<number>(150);
  const [wastage, setWastage] = useState<number>(10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coverage = (solids * 10) / dft;
  const totalLiters = (area / coverage) * (1 + wastage / 100);

  const applyPreset = (preset: Preset) => {
    setSolids(preset.solids);
    setDft(preset.dft);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 gap-2"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Calculator size={40} className="text-primary" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Coating Volume Calculator
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Calculate the exact amount of coating material needed for your industrial projects
              with our professional formulation calculator.
            </p>
          </div>

          {/* Calculator Grid */}
          <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* Input Forms - 7 columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="text-primary" size={24} />
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    Project Parameters
                  </h2>
                </div>

                {/* Preset Formulas */}
                <div className="mb-8">
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Quick Preset Formulas
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {presets.map((preset) => (
                      <Button
                        key={preset.name}
                        variant="outline"
                        size="sm"
                        onClick={() => applyPreset(preset)}
                        className="hover:bg-primary/10"
                      >
                        {preset.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Area Input */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Surface Area (m²)
                  </label>
                  <Input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(parseFloat(e.target.value) || 0)}
                    className="min-h-[48px] text-lg"
                    placeholder="Enter surface area"
                  />
                </div>

                {/* Solids Input */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Volume Solids (%)
                  </label>
                  <Input
                    type="number"
                    value={solids}
                    onChange={(e) => setSolids(parseFloat(e.target.value) || 0)}
                    className="min-h-[48px] text-lg"
                    placeholder="Enter volume solids percentage"
                    min="0"
                    max="100"
                  />
                </div>

                {/* DFT Input */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Dry Film Thickness (microns)
                  </label>
                  <Input
                    type="number"
                    value={dft}
                    onChange={(e) => setDft(parseFloat(e.target.value) || 0)}
                    className="min-h-[48px] text-lg"
                    placeholder="Enter dry film thickness"
                    min="1"
                  />
                </div>

                {/* Wastage Slider */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">
                      Wastage Factor (%)
                    </label>
                    <span className="text-sm font-semibold text-primary">
                      {wastage}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={wastage}
                    onChange={(e) => setWastage(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results Container - 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-slate-900 rounded-2xl p-8 text-white sticky top-8">
                <div className="flex items-center gap-3 mb-6">
                  <Maximize2 className="text-primary" size={24} />
                  <h2 className="text-2xl font-heading font-bold">
                    Calculation Results
                  </h2>
                </div>

                {/* Theoretical Coverage */}
                <div className="bg-slate-800 rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Info size={18} className="text-primary" />
                    <span className="text-sm text-slate-300">Theoretical Coverage</span>
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">
                    {coverage.toFixed(2)}
                  </div>
                  <div className="text-sm text-slate-400">m²/liter</div>
                </div>

                {/* Total Liters */}
                <div className="bg-primary/20 rounded-xl p-6 mb-6 border border-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator size={18} className="text-primary" />
                    <span className="text-sm text-slate-300">Total Required</span>
                  </div>
                  <div className="text-5xl font-bold text-white mb-1">
                    {totalLiters.toFixed(2)}
                  </div>
                  <div className="text-sm text-slate-400">liters</div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-sm text-slate-300">Base Requirement</span>
                    <span className="text-sm font-semibold">
                      {(area / coverage).toFixed(2)} L
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-sm text-slate-300">Wastage Allowance</span>
                    <span className="text-sm font-semibold">
                      +{((area / coverage) * (wastage / 100)).toFixed(2)} L
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-slate-300 font-semibold">Total</span>
                    <span className="text-lg font-bold text-primary">
                      {totalLiters.toFixed(2)} L
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="ocean"
                  size="lg"
                  className="w-full mt-8"
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                >
                  Request Quote for This Project
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Calculation Formula
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-sm font-semibold text-foreground mb-2">
                    Theoretical Coverage
                  </div>
                  <div className="text-lg font-mono text-primary">
                    (Solids × 10) / DFT
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Result in m² per liter
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-sm font-semibold text-foreground mb-2">
                    Total Liters Required
                  </div>
                  <div className="text-lg font-mono text-primary">
                    (Area / Coverage) × (1 + Wastage%)
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Includes wastage allowance
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default CoatingCalculator;
