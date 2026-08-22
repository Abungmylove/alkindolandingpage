import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Eye } from "lucide-react";
import Navbar from "@/components/landing/Navbar";

// Data Foto Fasilitas Company Profile yang Menggantikan Card Lama
const PRESTIGE_PHOTOS = [
  {
    titleKey: "qualitySectionPhoto1",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    className: "col-span-2 h-44"
  },
  {
    titleKey: "qualitySectionPhoto2",
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?w=800&auto=format&fit=crop&q=60",
    className: "col-span-1 h-44"
  },
  {
    titleKey: "qualitySectionPhoto3",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
    className: "col-span-1 h-44"
  },
  {
    titleKey: "qualitySectionPhoto4",
    image: "https://images.unsplash.com/photo-1605235904827-2bc403612f0c?w=800&auto=format&fit=crop&q=60",
    className: "col-span-2 h-44"
  }
];

const AboutUs = () => {
  const { t } = useLanguage();

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
            {t("aboutPageLabel")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight">
            {t("aboutPageTitle")}
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            {t("aboutPageDesc")}
          </p>
        </div>
      </section>

      {/* 2. MAIN SECTION: TEXT & IMAGE GALLERY SIDE-BY-SIDE */}
      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* SISI KIRI: Narasi Dedikasi (Tetap dipertahankan sesuai image_8b6b07.png) */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 font-heading leading-tight">
              {t("aboutSectionTitle")}
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>{t("aboutParagraph1")}</p>
              <p>{t("aboutParagraph2")}</p>
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
                  alt={t(photo.titleKey)} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-50 transition-all duration-500"
                />
                {/* Gradasi Gelap Pelindung Teks */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                
                {/* Teks Mini di Pojok Kiri Bawah Card */}
                <div className="absolute bottom-0 left-0 p-4 w-full text-white">
                  <span className="flex items-center gap-1 text-[10px] text-blue-400 font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-0.5">
                    <Eye size={10} /> {t("qualityOperationalLabel")}
                  </span>
                  <p className="text-xs font-bold font-heading tracking-wide truncate">{t(photo.titleKey)}</p>
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