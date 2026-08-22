import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import IndustriesSection from "@/components/landing/IndustriesSection";
import ProductHighlight from "@/components/landing/ProductHighlight";
import QualitySection from "@/components/landing/QualitySection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import VisiMisi from "@/components/landing/visimisi";
import ProductSection from "@/components/landing/ProductsSection";
import Workflow from "@/components/landing/Workflow";
import LabShowcase from "@/components/landing/LabShowcase";
import CompanyStats from "@/components/landing/CompanyStats";
import FaqSection from "@/components/landing/FaqSection";
import { Button } from "@/components/ui/button";




const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LabShowcase />
      <IndustriesSection />
      
      <ProductSection />
      <CompanyStats />
      
      
      {/* ISO Standards Promotion Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-padding relative overflow-hidden"
      >
        <div className="absolute inset-0 gradient-ocean opacity-[0.05]" />
        <div className="container mx-auto relative z-10">
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award size={40} className="text-primary" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                  {t("isoBannerTitle")}
                </h3>
                <p className="text-muted-foreground mb-0">
                  {t("isoBannerDesc")}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button
                  variant="ocean"
                  size="lg"
                  onClick={() => navigate("/iso-standards")}
                  className="whitespace-nowrap"
                >
                  {t("viewISO")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
