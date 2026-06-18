import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react"; // 🎯 Tambah import useEffect
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { industries } from "@/data/industries";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const navigate = useNavigate();
  
  // 🎯 FIX UTAMA: Setiap kali halaman detail dibuka / id industry berubah, paksa scroll reset ke paling atas (0,0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industryId]);

  const industry = industries.find(i => i.id === industryId);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Industry Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section with Image */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={industry.image}
            alt={industry.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="container mx-auto"
            >
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mb-6 text-white hover:text-white/80 gap-2"
              >
                <ArrowLeft size={16} />
                Back
              </Button>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
                {industry.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {industry.details.overview}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Project Gallery
            </h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {industry.galleryImages.map((item) => (
                <motion.div
                  key={item.id}
                  variants={item as any}
                  className="relative overflow-hidden rounded-[28px] bg-slate-100 group cursor-pointer"
                  onClick={() => {
                    // Map gallery IDs to project database keys
                    const projectMap: Record<string, string> = {
                      "printing-packaging-1": "food-packaging",
                      "plastic-coating-1": "electronics",
                      "plastic-coating-4": "automotive-body",
                    };
                    const projectId = projectMap[item.id] || item.id;
                    navigate(`/project/${projectId}`);
                  }}
                >
                  <div className="relative h-[320px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Detail Sections */}
        <div className="container mx-auto px-6 pb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Our Services</h2>
              <ul className="space-y-3">
                {industry.details.services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Key Benefits</h2>
              <ul className="space-y-3">
                {industry.details.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-8 lg:col-span-2"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Applications</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {industry.details.applications.map((application, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    {application}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Interested in {industry.title} Solutions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us to discuss how we can help with your specific needs.
              </p>
              
              <Button 
                variant="ocean" 
                size="lg" 
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
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IndustryDetail;