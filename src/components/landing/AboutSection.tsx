import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Eye } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

// Data Foto Fasilitas Company Profile yang Menggantikan Card Lama
const PRESTIGE_PHOTOS = [
  {
    title: "Laboratorium R&D",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    className: "col-span-2 h-44"
  },
  {
    title: "Fasilitas Produksi",
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?w=800&auto=format&fit=crop&q=60",
    className: "col-span-1 h-44"
  },
  {
    title: "Gudang Logistik",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
    className: "col-span-1 h-44"
  },
  {
    title: "Quality Control",
    image: "https://images.unsplash.com/photo-1605235904827-2bc403612f0c?w=800&auto=format&fit=crop&q=60",
    className: "col-span-2 h-44"
  }
];

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-4">
          <span className="text-xs font-bold text-blue-900 tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
            Company Profile
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight">
            Mengenal PT Alkindo Mitraraya
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            Formulator dan produsen pelapis industri (*industrial coatings*) berkualitas tinggi yang berfokus pada solusi proteksi jangka panjang.
          </p>
        </div>
      </section>

      {/* 2. MAIN SECTION: TEXT & IMAGE GALLERY SIDE-BY-SIDE */}
      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* SISI KIRI: Narasi Dedikasi (Tetap dipertahankan sesuai image_8b6b07.png) */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 font-heading leading-tight">
              Dedikasi Pada Inovasi Polimer Tinggi
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Sejak didirikan, PT Alkindo Mitraraya berkomitmen untuk menyediakan produk lapisan pelindung (*coating*) berbasis teknologi polimer mutakhir. Kami melayani berbagai sektor industri mulai dari manufaktur, farmasi, hingga infrastruktur maritim di seluruh Indonesia.
              </p>
              <p>
                Setiap produk kami dirancang melalui riset laboratorium yang ketat untuk memastikan ketahanan maksimal terhadap korosi, tumpahan zat kimia ekstrem, maupun abrasi fisik.
              </p>
            </div>
            
  
           
          </div>

          {/* SISI KANAN: MEREPLACE CARD REKAYASA LAMA DENGAN PREMIUM FOTO LAB & PABRIK */}
          <div className="grid grid-cols-3 gap-4">
            {PRESTIGE_PHOTOS.map((photo, index) => (
              <div 
                key={index}
                className={`group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-2xs ${photo.className}`}
              >
                {/* Efek Hover Zoom pada Image */}
                <img 
                  src={photo.image} 
                  alt={photo.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-50 transition-all duration-500"
                />
                {/* Gradasi Gelap Pelindung Teks */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                
                {/* Teks Mini di Pojok Kiri Bawah Card */}
                <div className="absolute bottom-0 left-0 p-4 w-full text-white">
                  <span className="flex items-center gap-1 text-[10px] text-blue-400 font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-0.5">
                    <Eye size={10} /> Operational
                  </span>
                  <p className="text-xs font-bold font-heading tracking-wide truncate">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;