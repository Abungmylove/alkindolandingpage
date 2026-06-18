import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Shield, CheckCircle, Droplets } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const isoStandards = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    icon: Award,
    description: "Our quality management system ensures consistent products and services that meet customer and regulatory requirements. We continuously improve our processes to enhance customer satisfaction.",
    benefits: [
      "Consistent quality control",
      "Customer satisfaction focus",
      "Continuous improvement",
      "Risk-based thinking",
      "Process optimization"
    ]
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    icon: Shield,
    description: "We are committed to environmental sustainability through systematic management of environmental responsibilities. Our processes minimize environmental impact and promote eco-friendly practices.",
    benefits: [
      "Environmental compliance",
      "Waste reduction",
      "Energy efficiency",
      "Sustainable practices",
      "Pollution prevention"
    ]
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    icon: CheckCircle,
    description: "We prioritize workplace safety with a comprehensive occupational health and safety management system. Our commitment ensures a safe working environment for all employees and stakeholders.",
    benefits: [
      "Zero accident culture",
      "Risk identification",
      "Employee safety training",
      "Compliance with regulations",
      "Continuous safety improvement"
    ]
  },
  {
    id: "iso-12944",
    title: "ISO 12944",
    subtitle: "Corrosion Protection",
    icon: Droplets,
    description: "We follow international standards for corrosion protection of steel structures. Our coating systems are designed and applied according to ISO 12944 specifications for optimal durability.",
    benefits: [
      "Extended asset life",
      "Cost-effective protection",
      "Industry-standard coatings",
      "Corrosion prevention",
      "Technical compliance"
    ]
  }
];

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

const IsoStandards = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Award size={40} className="text-primary" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
              International Standards
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence is validated by globally recognized ISO certifications, 
              ensuring the highest quality, environmental responsibility, and safety standards.
            </p>
          </div>

          {/* ISO Standards Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {isoStandards.map((standard) => (
              <motion.div
                key={standard.id}
                variants={item}
                className="glass-card rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <standard.icon size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                      {standard.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold">
                      {standard.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {standard.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {standard.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Committed to Excellence
              </h3>
              <p className="text-muted-foreground mb-6">
                Our ISO certifications demonstrate our dedication to quality, environmental responsibility, 
                and safety in every aspect of our operations.
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
                Contact Us for More Information
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default IsoStandards;
