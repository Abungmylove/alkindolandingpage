import constructionImg from "@/assets/industry-construction.jpg";
import packagingImg from "@/assets/industry-packaging.jpg";
import plasticCoatingImg from "@/assets/industry-plastic-coating.jpg";
import metalCoatingImg from "@/assets/industry-metal-coating.jpg";
import woodCoatingImg from "@/assets/industry-wood-coating.jpg";
import additives from "@/assets/additives.jpg";

export interface GalleryImage {
  id: string;
  image: string;
  title: string;
  description: string;
  specs: string[];
}

export interface Industry {
  id: string;
  galleryImages: GalleryImage[];
  title: string;
  image: string;
  details: {
    overview: string;
    services: string[];
    benefits: string[];
    applications: string[];
  };
}

export const industries: Industry[] = [
  {
    id: "construction",
    galleryImages: [
      {
        id: "construction-wall",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
        title: "Wall",
        description: "High-performance protective coating applied to exterior walls of a commercial building in Jakarta, providing excellent weather resistance and UV protection for long-term durability.",
        specs: ["Location: Jakarta", "Product: Epoxy Coating", "Duration: 5 Days", "Area: 2,500 sqm"]
      },
      {
        id: "construction-flooring",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
        title: "Flooring",
        description: "Industrial epoxy flooring system installed in a manufacturing facility, featuring anti-slip properties and chemical resistance to withstand heavy machinery and daily operations.",
        specs: ["Location: Tangerang", "Product: Industrial Epoxy", "Duration: 7 Days", "Area: 5,000 sqm"]
      },
      {
        id: "construction-wp",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        title: "WP",
        description: "Comprehensive waterproofing solution applied to a high-rise building's foundation and basement, ensuring complete protection against water ingress and structural damage.",
        specs: ["Location: Surabaya", "Product: Polyurethane WP", "Duration: 10 Days", "Area: 3,200 sqm"]
      }
    ],
    title: "Construction",
    image: constructionImg,
    details: {
      overview: "We provide specialized coating solutions for the construction industry, offering protection and durability for various building materials and structures.",
      services: [
        "Protective coatings for concrete and steel structures",
        "Waterproofing solutions for roofs and foundations",
        "Anti-corrosion treatments for metal components",
        "Decorative and functional wall coatings",
        "Floor coating systems for industrial and commercial spaces"
      ],
      benefits: [
        "Enhanced durability and weather resistance",
        "Protection against corrosion and degradation",
        "Improved aesthetic appeal",
        "Cost-effective maintenance solutions",
        "Environmentally friendly formulations"
      ],
      applications: [
        "Residential and commercial buildings",
        "Infrastructure projects (bridges, tunnels)",
        "Industrial facilities",
        "Parking structures",
        "Water treatment plants"
      ]
    }
  },
  {
    id: "printing-packaging",
    title: "Printing & Packaging",
    image: packagingImg,
    galleryImages: [
      {
        id: "printing-packaging-1",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800",
        title: "Food Packaging",
        description: "Food-grade coating applied to flexible packaging materials for a major snack manufacturer, ensuring product safety and extended shelf life while maintaining print quality.",
        specs: ["Location: Bandung", "Product: Food-Grade Coating", "Duration: 3 Days", "Volume: 50,000 units"]
      },
      {
        id: "printing-packaging-2",
        image: "https://images.unsplash.com/photo-1563241527-3041966c7f2b?w=800",
        title: "Label Enhancement",
        description: "Print enhancement coating applied to premium product labels, providing gloss finish and protection against smudging, water damage, and UV fading.",
        specs: ["Location: Jakarta", "Product: Gloss Varnish", "Duration: 2 Days", "Volume: 100,000 labels"]
      },
      {
        id: "printing-packaging-3",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        title: "Barrier Coating",
        description: "Advanced barrier coating for pharmaceutical packaging, providing superior moisture and oxygen protection to maintain medication efficacy and stability.",
        specs: ["Location: Bekasi", "Product: Barrier Coating", "Duration: 5 Days", "Volume: 25,000 units"]
      }
    ],
    details: {
      overview: "Our coating solutions for the printing and packaging industry ensure product protection, visual appeal, and compliance with food safety standards.",
      services: [
        "Food-grade coatings for packaging materials",
        "Print enhancement coatings for labels and packaging",
        "Barrier coatings for moisture and oxygen protection",
        "Anti-slip and anti-fog coatings",
        "Specialty coatings for flexible packaging"
      ],
      benefits: [
        "Food safety compliance",
        "Enhanced product shelf life",
        "Superior print quality",
        "Customizable finishes (gloss, matte, satin)",
        "Sustainable and recyclable options"
      ],
      applications: [
        "Food and beverage packaging",
        "Pharmaceutical packaging",
        "Cosmetic packaging",
        "Industrial packaging",
        "Labels and stickers"
      ]
    }
  },
  {
    id: "plastic-coating",
    title: "Plastic Coating",
    image: plasticCoatingImg,
    galleryImages: [
      {
        id: "plastic-coating-1",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
        title: "Electronics",
        description: "UV-curable coating applied to consumer electronics casings, providing scratch resistance and premium soft-touch finish for enhanced user experience.",
        specs: ["Location: Batam", "Product: UV-Curable Coating", "Duration: 4 Days", "Volume: 200,000 units"]
      },
      {
        id: "plastic-coating-2",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        title: "Automotive",
        description: "Anti-fingerprint and metallic finish coating for automotive interior components, delivering premium aesthetics and durability against daily wear.",
        specs: ["Location: Karawang", "Product: Metallic Finish", "Duration: 6 Days", "Volume: 150,000 parts"]
      },
      {
        id: "plastic-coating-4",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
        title: "Automotive Body",
        description: "Premium automotive body coating system providing exceptional gloss retention, color depth, and long-term protection against UV radiation and environmental contaminants.",
        specs: ["Location: Karawang", "Product: Automotive Basecoat", "Duration: 7 Days", "Volume: 500 vehicles"]
      },
      {
        id: "plastic-coating-3",
        image: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?w=800",
        title: "Appliances",
        description: "Abrasion-resistant coating for household appliance surfaces, providing long-lasting protection against scratches, chemicals, and UV exposure.",
        specs: ["Location: Cikarang", "Product: Anti-Scratch Coating", "Duration: 5 Days", "Volume: 80,000 units"]
      }
    ],
    details: {
      overview: "We offer advanced plastic coating solutions that enhance surface properties, improve durability, and provide aesthetic finishes for various plastic products.",
      services: [
        "UV-curable coatings for plastic surfaces",
        "Anti-scratch and abrasion-resistant coatings",
        "Anti-fingerprint coatings",
        "Metallic and pearlescent finishes",
        "Soft-touch and rubberized coatings"
      ],
      benefits: [
        "Enhanced surface durability",
        "Improved scratch and chemical resistance",
        "Premium aesthetic finishes",
        "Custom texture and feel options",
        "Fast curing and high productivity"
      ],
      applications: [
        "Consumer electronics",
        "Automotive interior components",
        "Consumer goods and appliances",
        "Toys and sporting goods",
        "Medical devices"
      ]
    }
  },
  {
    id: "metal-coating",
    title: "Metal Coating",
    image: metalCoatingImg,
    galleryImages: [
      {
        id: "metal-coating-1",
        image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800",
        title: "Steel Structure",
        description: "Anti-corrosion coating applied to industrial steel structures, providing long-term protection against rust and environmental degradation in harsh conditions.",
        specs: ["Location: Jakarta", "Product: Anti-Corrosion Coating", "Duration: 14 Days", "Area: 8,000 sqm"]
      },
      {
        id: "metal-coating-2",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
        title: "Powder Coating",
        description: "Powder coating finish for metal furniture and fixtures, delivering durable, chip-resistant finish with excellent color retention and environmental compliance.",
        specs: ["Location: Surabaya", "Product: Powder Coating", "Duration: 7 Days", "Volume: 5,000 items"]
      },
      {
        id: "metal-coating-3",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800",
        title: "High-Temp",
        description: "High-temperature resistant coating for industrial equipment and exhaust systems, maintaining performance and protection under extreme heat conditions.",
        specs: ["Location: Medan", "Product: High-Temp Coating", "Duration: 5 Days", "Area: 1,200 sqm"]
      }
    ],
    details: {
      overview: "Our metal coating solutions provide superior protection against corrosion, wear, and environmental factors while offering attractive finishes for various metal applications.",
      services: [
        "Anti-corrosion coatings for steel and aluminum",
        "Powder coating solutions",
        "Galvanizing and zinc plating",
        "High-temperature resistant coatings",
        "Decorative metal finishes"
      ],
      benefits: [
        "Long-lasting corrosion protection",
        "Enhanced wear resistance",
        "Wide range of color and finish options",
        "Environmentally compliant formulations",
        "Cost-effective protection solutions"
      ],
      applications: [
        "Automotive components",
        "Industrial machinery",
        "Construction materials",
        "Metal furniture and fixtures",
        "Aerospace components"
      ]
    }
  },
  {
    id: "wood-coating",
    title: "Wood Coating",
    image: woodCoatingImg,
    galleryImages: [
      {
        id: "wood-coating-1",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        title: "Furniture",
        description: "Clear wood finish applied to premium furniture pieces, enhancing natural wood grain while providing protection against scratches, stains, and UV damage.",
        specs: ["Location: Jepara", "Product: Clear Wood Finish", "Duration: 3 Days", "Volume: 500 pieces"]
      },
      {
        id: "wood-coating-2",
        image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=800",
        title: "Flooring",
        description: "UV-resistant outdoor wood coating for decking and flooring, ensuring long-lasting protection against weathering, moisture, and color fading.",
        specs: ["Location: Bali", "Product: UV-Resistant Coating", "Duration: 6 Days", "Area: 4,000 sqm"]
      },
      {
        id: "wood-coating-3",
        image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800",
        title: "Architectural",
        description: "Fire-retardant wood treatment for architectural woodwork in commercial buildings, meeting safety standards while maintaining aesthetic appeal.",
        specs: ["Location: Jakarta", "Product: Fire-Retardant Treatment", "Duration: 8 Days", "Area: 2,800 sqm"]
      }
    ],
    details: {
      overview: "We provide comprehensive wood coating solutions that protect and enhance the natural beauty of wood while ensuring durability and resistance to environmental factors.",
      services: [
        "Clear and pigmented wood finishes",
        "UV-resistant outdoor wood coatings",
        "Fire-retardant wood treatments",
        "Waterproof and moisture-resistant coatings",
        "Stain and varnish applications"
      ],
      benefits: [
        "Enhanced natural wood beauty",
        "Protection against UV damage and weathering",
        "Improved durability and lifespan",
        "Custom color and finish options",
        "Low-VOC and eco-friendly formulations"
      ],
      applications: [
        "Furniture and cabinetry",
        "Flooring and decking",
        "Architectural woodwork",
        "Outdoor structures",
        "Musical instruments"
      ]
    }
  },
  {
    id: "additives",
    title: "Additives",
    image: additives,
    galleryImages: [
      {
        id: "additives-1",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
        title: "Coating Additives",
        description: "Performance-enhancing additives formulated for industrial coatings, improving adhesion, durability, and overall product performance in harsh environments.",
        specs: ["Location: Jakarta", "Product: Adhesion Promoter", "Duration: R&D Phase", "Volume: Custom"]
      },
      {
        id: "additives-2",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800",
        title: "Plastic Modifiers",
        description: "Custom plastic additives and modifiers for polymer manufacturing, enhancing material properties such as flexibility, strength, and UV resistance.",
        specs: ["Location: Tangerang", "Product: UV Stabilizer", "Duration: R&D Phase", "Volume: Custom"]
      },
      {
        id: "additives-3",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
        title: "Custom Formulation",
        description: "Specialized additive formulations developed for specific industrial applications, providing tailored solutions to meet unique performance requirements.",
        specs: ["Location: Jakarta", "Product: Custom Formulation", "Duration: 4 Weeks", "Volume: Custom"]
      }
    ],
    details: {
      overview: "Our comprehensive range of chemical additives enhances the performance and properties of various industrial products, from coatings to plastics and beyond.",
      services: [
        "Performance-enhancing additives for coatings",
        "Plastic additives and modifiers",
        "Adhesion promoters and coupling agents",
        "UV stabilizers and antioxidants",
        "Custom additive formulations"
      ],
      benefits: [
        "Improved product performance",
        "Enhanced durability and lifespan",
        "Cost-effective solutions",
        "Custom formulations for specific needs",
        "Technical support and expertise"
      ],
      applications: [
        "Paints and coatings",
        "Plastics and polymers",
        "Rubber products",
        "Adhesives and sealants",
        "Construction materials"
      ]
    }
  }
];
