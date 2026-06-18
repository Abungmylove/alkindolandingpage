import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

// Data Database Proyek dengan Dynamic Routing Keys
const PROJECTS_DATABASE: Record<string, {
  title: string;
  category: string;
  image: string;
  systems: {
    solvent: {
      overview: string;
      specs: Array<{ label: string; value: string }>;
    };
    water: {
      overview: string;
      specs: Array<{ label: string; value: string }>;
    };
  };
}> = {
  "food-packaging": {
    title: "Food Packaging",
    category: "Printing & Packaging",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    systems: {
      solvent: {
        overview: "Food-grade solvent-based coating applied to flexible packaging materials for a major snack manufacturer, ensuring maximum chemical bonding, ultra-fast drying times on high-speed printing machines, and extended shelf life.",
        specs: [
          { label: "Location", value: "Bandung" },
          { label: "Product", value: "Food-Grade Coating (Solvent-Based)" },
          { label: "Duration", value: "3 Days" },
          { label: "Volume", value: "50,000 units" }
        ]
      },
      water: {
        overview: "Eco-friendly food-grade water-based coating designed for flexible packaging. This system features zero odor and extremely low VOC emissions, making it completely safe for direct food-contact compliance and eco-conscious brand requirements.",
        specs: [
          { label: "Location", value: "Bandung" },
          { label: "Product", value: "Food-Grade Coating (Water-Based / Eco)" },
          { label: "Duration", value: "4 Days" },
          { label: "Volume", value: "50,000 units" }
        ]
      }
    }
  },
  "electronics": {
    title: "Electronics Manufacturing",
    category: "Industrial Coatings",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    systems: {
      solvent: {
        overview: "High-performance solvent-based conformal coating for electronic circuit boards, providing superior protection against moisture, dust, and chemical contaminants in harsh industrial environments.",
        specs: [
          { label: "Location", value: "Jakarta" },
          { label: "Product", value: "Conformal Coating (Solvent-Based)" },
          { label: "Duration", value: "5 Days" },
          { label: "Volume", value: "100,000 units" }
        ]
      },
      water: {
        overview: "Environmentally friendly water-based conformal coating for electronics manufacturing, offering excellent insulation properties while meeting strict environmental regulations and worker safety standards.",
        specs: [
          { label: "Location", value: "Jakarta" },
          { label: "Product", value: "Conformal Coating (Water-Based)" },
          { label: "Duration", value: "6 Days" },
          { label: "Volume", value: "100,000 units" }
        ]
      }
    }
  },
  "automotive-body": {
    title: "Automotive Body Coating",
    category: "Automotive Industry",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=60",
    systems: {
      solvent: {
        overview: "Premium solvent-based automotive body coating system providing exceptional gloss retention, color depth, and long-term protection against UV radiation, road salts, and environmental contaminants for vehicle manufacturing.",
        specs: [
          { label: "Location", value: "Karawang" },
          { label: "Product", value: "Automotive Basecoat (Solvent-Based)" },
          { label: "Duration", value: "7 Days" },
          { label: "Volume", value: "500 vehicles" }
        ]
      },
      water: {
        overview: "Eco-friendly water-based automotive coating system delivering high-performance finish with significantly reduced VOC emissions, meeting strict environmental regulations while maintaining excellent color matching and durability.",
        specs: [
          { label: "Location", value: "Karawang" },
          { label: "Product", value: "Automotive Basecoat (Water-Based)" },
          { label: "Duration", value: "8 Days" },
          { label: "Volume", value: "500 vehicles" }
        ]
      }
    }
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [activeSystem, setActiveSystem] = useState<"solvent" | "water">("solvent");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = projectId ? PROJECTS_DATABASE[projectId] : null;

  if (!projectData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const currentContent = projectData.systems[activeSystem];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Tombol Back sesuai visual */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium mb-8"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* Grid Layout 2 Kolom Persis seperti image_8bccd8.jpg */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* KOLOM KIRI: Gambar Project */}
          <div className="rounded-3xl overflow-hidden shadow-sm aspect-[4/3] md:aspect-auto md:h-[500px]">
            <img 
              src={projectData.image} 
              alt={projectData.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* KOLOM KANAN: Informasi & Sub-Tema */}
          <div className="space-y-6">
            
            {/* Category Badge */}
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
              {projectData.category}
            </span>

            {/* Main Title */}
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight font-heading">
              {projectData.title}
            </h1>

            {/* TAB SELECTOR MINIMALIS (Solvent-Based vs Water-Based) */}
            <div className="flex border-b border-slate-200 w-full">
              <button
                onClick={() => setActiveSystem("solvent")}
                className={`py-3 px-6 text-sm font-bold border-b-2 transition-all ${
                  activeSystem === "solvent" 
                    ? "border-blue-900 text-blue-900" 
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Solvent-Based
              </button>
              <button
                onClick={() => setActiveSystem("water")}
                className={`py-3 px-6 text-sm font-bold border-b-2 transition-all ${
                  activeSystem === "water" 
                    ? "border-blue-900 text-blue-900" 
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Water-Based
              </button>
            </div>

            {/* Box Overview (Dinamis) */}
            <div className="bg-slate-50/60 border border-slate-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Overview</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {currentContent.overview}
              </p>
            </div>

            {/* Box Specifications (Dinamis) */}
            <div className="bg-slate-50/60 border border-slate-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Specifications</h3>
              <div className="space-y-3">
                {currentContent.specs.map((spec, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-slate-700">
                    <Check size={16} className="text-blue-900 shrink-0" />
                    <span className="font-medium text-slate-500">{spec.label}:</span>
                    <span className="text-slate-800 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

           {/* Button CTA Utama - Sekarang Sudah Aktif */}
<Button 
  className="w-full md:w-auto bg-blue-900 hover:bg-blue-950 text-white font-bold py-6 px-8 rounded-xl shadow-sm transition-colors text-sm"
  onClick={() => {
    // 1. Tendang user kembali ke halaman beranda
    navigate("/");
    
    // 2. Kasih jeda 100ms agar halaman loading dulu, lalu otomatis scroll mulus ke form kontak
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
>
  Inquire About This Project
</Button>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;