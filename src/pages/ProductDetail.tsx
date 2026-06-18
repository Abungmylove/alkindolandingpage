import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FlaskConical, Layers, Pipette, ShieldCheck } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const products = [
  {
    id: "polyethylene",
    icon: FlaskConical,
    title: "Polyethylene (PE)",
    description: "High-density and low-density polyethylene resins for packaging, piping, and industrial applications.",
    tags: ["HDPE", "LDPE", "LLDPE"],
    details: {
      overview: "Polyethylene is one of the most widely used thermoplastics globally, known for its excellent chemical resistance, moisture barrier properties, and versatility in processing.",
      applications: [
        "Packaging materials (bottles, containers, films)",
        "Piping systems for water and gas",
        "Wire and cable insulation",
        "Automotive components",
        "Industrial containers and tanks"
      ],
      features: [
        "Excellent chemical resistance",
        "High impact strength",
        "Good moisture barrier properties",
        "Easy to process and mold",
        "Food grade options available",
        "Recyclable material"
      ],
      specifications: [
        "Density range: 0.91 - 0.97 g/cm³",
        "Melting point: 105 - 130°C",
        "Tensile strength: 10 - 40 MPa",
        "Available in various grades for different applications"
      ]
    }
  },
  {
    id: "polypropylene",
    icon: Layers,
    title: "Polypropylene (PP)",
    description: "Versatile polypropylene compounds for automotive, textiles, and consumer goods manufacturing.",
    tags: ["Homopolymer", "Copolymer", "Impact Modified"],
    details: {
      overview: "Polypropylene is a versatile thermoplastic polymer known for its excellent chemical resistance, high melting point, and good fatigue resistance, making it ideal for various industrial applications.",
      applications: [
        "Automotive interior and exterior components",
        "Textile and fiber products",
        "Consumer goods and household items",
        "Medical devices and packaging",
        "Industrial containers and packaging"
      ],
      features: [
        "High heat resistance",
        "Excellent chemical resistance",
        "Good fatigue resistance",
        "Low density (lightweight)",
        "High stiffness and strength",
        "Food contact approved grades"
      ],
      specifications: [
        "Density: 0.90 - 0.91 g/cm³",
        "Melting point: 160 - 170°C",
        "Tensile strength: 25 - 40 MPa",
        "Available in homopolymer and copolymer grades"
      ]
    }
  },
  {
    id: "pvc-compounds",
    icon: Pipette,
    title: "PVC Compounds",
    description: "Custom-formulated PVC compounds with precise specifications for construction and electrical industries.",
    tags: ["Rigid", "Flexible", "Specialty"],
    details: {
      overview: "PVC compounds are custom-formulated materials that combine polyvinyl chloride resin with various additives to achieve specific properties for diverse industrial applications.",
      applications: [
        "Construction materials (pipes, profiles, fittings)",
        "Electrical cable insulation",
        "Medical tubing and devices",
        "Automotive interior components",
        "Flooring and wall coverings"
      ],
      features: [
        "Excellent flame retardancy",
        "Good chemical resistance",
        "Weather and UV stability",
        "Customizable hardness and flexibility",
        "Cost-effective solution",
        "Wide color range available"
      ],
      specifications: [
        "Hardness range: 40 - 95 Shore A",
        "Density: 1.2 - 1.5 g/cm³",
        "Operating temperature: -20°C to 60°C",
        "Custom formulations available"
      ]
    }
  },
  {
    id: "engineering-plastics",
    icon: ShieldCheck,
    title: "Engineering Plastics",
    description: "High-performance engineering polymers for demanding applications requiring superior mechanical properties.",
    tags: ["ABS", "Nylon", "Polycarbonate"],
    details: {
      overview: "Engineering plastics are high-performance polymers designed for applications that require superior mechanical properties, thermal stability, and chemical resistance beyond standard plastics.",
      applications: [
        "Automotive structural components",
        "Electronic housings and connectors",
        "Industrial machinery parts",
        "Medical equipment",
        "Aerospace components"
      ],
      features: [
        "High mechanical strength",
        "Excellent thermal stability",
        "Superior chemical resistance",
        "Low creep and deformation",
        "Dimensional stability",
        "Long service life"
      ],
      specifications: [
        "Tensile strength: 40 - 150 MPa",
        "Operating temperature: -40°C to 150°C",
        "Various grades available (ABS, Nylon, PC, etc.)",
        "Reinforced options with glass/carbon fiber"
      ]
    }
  }
];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const ProductIcon = product.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 rounded-2xl gradient-ocean-light flex items-center justify-center shrink-0">
                <ProductIcon size={40} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                  {product.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-accent text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
              {product.description}
            </p>
          </motion.div>

          {/* Detail Sections */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.details.overview}
              </p>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Applications</h2>
              <ul className="space-y-3">
                {product.details.applications.map((app, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Key Features</h2>
              <ul className="space-y-3">
                {product.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card rounded-xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Technical Specifications</h2>
              <ul className="space-y-3">
                {product.details.specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Interested in {product.title}?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us for more information, pricing, or to request a sample.
              </p>
              <Button variant="ocean" size="lg" onClick={() => navigate("/#contact")}>
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

export default ProductDetail;
