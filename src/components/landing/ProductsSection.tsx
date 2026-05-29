import { motion } from "framer-motion";
import { FlaskConical, Layers, Pipette, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: FlaskConical,
    title: "Polyethylene (PE)",
    description: "High-density and low-density polyethylene resins for packaging, piping, and industrial applications.",
    tags: ["HDPE", "LDPE", "LLDPE"],
  },
  {
    icon: Layers,
    title: "Polypropylene (PP)",
    description: "Versatile polypropylene compounds for automotive, textiles, and consumer goods manufacturing.",
    tags: ["Homopolymer", "Copolymer", "Impact Modified"],
  },
  {
    icon: Pipette,
    title: "PVC Compounds",
    description: "Custom-formulated PVC compounds with precise specifications for construction and electrical industries.",
    tags: ["Rigid", "Flexible", "Specialty"],
  },
  {
    icon: ShieldCheck,
    title: "Engineering Plastics",
    description: "High-performance engineering polymers for demanding applications requiring superior mechanical properties.",
    tags: ["ABS", "Nylon", "Polycarbonate"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Premium Polymer Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive range of high-quality polymer products engineered for 
            performance across diverse industrial applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={item}
              className="glass-card rounded-xl p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg gradient-ocean-light flex items-center justify-center mb-5">
                <product.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{product.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="ocean" size="lg" asChild>
            <a href="#contact">Request Product Catalog</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
