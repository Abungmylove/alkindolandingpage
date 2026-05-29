import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import IndustriesSection from "@/components/landing/IndustriesSection";
import ProductHighlight from "@/components/landing/ProductHighlight";
import QualitySection from "@/components/landing/QualitySection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import VisiMisi from "@/components/landing/visimisi";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisiMisi />
      <IndustriesSection />
      <QualitySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
