import { motion } from "framer-motion";
import { Beaker, ShieldCheck, Zap } from "lucide-react";

const LabShowcase = () => {
  const capabilities = [
    {
      icon: Beaker,
      title: "Custom Formulation",
      description: "Our expert chemists develop tailored chemical solutions to meet your specific industrial requirements and performance specifications."
    },
    {
      icon: ShieldCheck,
      title: "Rigorous QC Testing",
      description: "Every batch undergoes comprehensive quality control testing to ensure consistency, safety, and compliance with international standards."
    },
    {
      icon: Zap,
      title: "Advanced R&D Facility",
      description: "State-of-the-art laboratory equipped with modern analytical instruments for precise formulation development and testing."
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-ocean opacity-[0.03]" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          {/* Left side - Lab Image with overlapping card accent */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              {/* Accent card behind */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-2xl -z-10" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1000"
                  alt="R&D Laboratory Facility"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Right side - R&D Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3 block">
                Research & Development
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                Innovation at Our Core
              </h2>
              <p className="text-muted-foreground text-lg">
                Our dedicated R&D team combines scientific expertise with cutting-edge technology 
                to deliver superior chemical solutions that drive your business forward.
              </p>
            </div>

            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <capability.icon size={28} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LabShowcase;
