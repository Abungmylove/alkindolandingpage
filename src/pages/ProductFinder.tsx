import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RefreshCw, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

// ==========================================
// 1. DATABASE PRODUK LOKAL (DATA-DRIVEN)
// ==========================================
const PRODUCTS_DATABASE = [
  {
    name: "PrimeShield Zinc-Rich Epoxy EP-200",
    type: "Heavy-Duty Anti-Corrosion Primer",
    code: "EP-200-ZR",
    benefits: [
      "Daya tahan korosi s/d 10 tahun (Standar ISO 12944 C5)",
      "Mengandung 85% Zinc padat untuk perlindungan katodik logam",
      "Sangat direkomendasikan untuk lingkungan kilang minyak & offshore"
    ],
    tags: { material: "steel", env: "marine", challenge: "rust" }
  },
  {
    name: "DuraGloss Polyurethane Topcoat PU-500",
    type: "Weather-Resistant Protective Finish",
    code: "PU-500-UV",
    benefits: [
      "Ketahanan UV tingkat maksimal (warna cat tidak gampang menguning)",
      "Tingkat kilap premium (High Gloss) untuk eksterior industri",
      "Lapisan elastis, tidak pecah akibat pemuaian panas matahari"
    ],
    tags: { material: "steel", env: "outdoor", challenge: "rust" }
  },
  {
    name: "IndoFloor Mastic Epoxy MC-100",
    type: "High-Build Surface Tolerant Coating",
    code: "MC-100-MS",
    benefits: [
      "Dapat diaplikasikan pada besi dengan tingkat kebersihan minimal (St 2)",
      "Ketebalan film ekstra tebal dalam sekali kuas/semprot",
      "Solusi ekonomis untuk maintenance struktur baja indoor pabrik"
    ],
    tags: { material: "steel", env: "indoor", challenge: "abrasion" }
  },
  {
    name: "ChemGuard Novolac Epoxy NV-800",
    type: "Ultra Chemical-Resistant Lining",
    code: "NV-800-CHEM",
    benefits: [
      "Ketahanan ekstrem terhadap tumpahan cairan asam & alkali pekat s/d 98%",
      "Struktur lapisan super rapat mencegah kontaminasi zat ke beton",
      "Sertifikasi ramah lingkungan & food-grade untuk lantai farmasi/makanan"
    ],
    tags: { material: "concrete", env: "indoor", challenge: "chemical" }
  },
  {
    name: "TuffFloor Self-Leveling Epoxy SL-300",
    type: "Industrial Traffic Floor Coating",
    code: "SL-300-FL",
    benefits: [
      "Permukaan lantai mulus tanpa sambungan (seamless) & anti-debu",
      "Sanggup menahan beban gesek lalu lintas Forklift hingga kapasitas 5 Ton",
      "Tampilan mengkilap estetis yang sangat mudah dibersihkan"
    ],
    tags: { material: "concrete", env: "indoor", challenge: "abrasion" }
  }
];

// Produk Cadangan Utama (Fallback) jika tidak ada tag yang cocok sama sekali
const DEFAULT_PRODUCT = {
  name: "NovaCoat Universal Protective Coating",
  type: "Multi-purpose Industrial Protective Paint",
  code: "NV-UNI-100",
  benefits: [
    "Perlindungan standar serbaguna untuk segala jenis permukaan industri",
    "Metode aplikasi fleksibel (bisa menggunakan kuas, roller, maupun spray)",
    "Daya rekat (adhesi) yang kuat dengan formula cepat kering"
  ]
};

// Data Pilihan Kuesioner Wizard
const MATERIALS = [
  { id: "steel", title: "Besi, Baja, & Logam", desc: "Struktur bangunan, pipa, lambung kapal, atau tangki penyimpanan." },
  { id: "concrete", title: "Beton & Semen", desc: "Lantai pabrik, dinding laboratorium, atau fasilitas pengolahan air." }
];

const ENVIRONMENTS = [
  { id: "indoor", title: "Indoor / Dalam Ruangan", desc: "Terlindung dari matahari langsung, fokus pada ketahanan gesek/kimia." },
  { id: "outdoor", title: "Outdoor / Luar Ruangan", desc: "Terpapar sinar matahari, hujan, perubahan suhu, dan cuaca ekstrem." },
  { id: "marine", title: "Marine & Coastal (Pesisir)", desc: "Lingkungan korosif tinggi, air asin, kelembaban tinggi, atau terendam air." }
];

const CHALLENGES = [
  { id: "rust", title: "Karat & Korosi Ekstrem", desc: "Mencegah oksidasi logam akibat kelembaban dan zat asam." },
  { id: "chemical", title: "Tumpahan Zat Kimia", desc: "Menahan paparan cairan asam, alkali, oli, atau pelarut industri." },
  { id: "abrasion", title: "Gesekan & Beban Berat", desc: "Menahan lalu lintas forklift berat, benturan, dan abrasi fisik." }
];

// ==========================================
// 2. ALGORITMA PENCARIAN BERBASIS TAGS (PINTAR)
// ==========================================
const findProductByTags = (material: string, env: string, challenge: string) => {
  // Strategi 1: Cari yang 100% COCOK dengan ketiga kriteria tag
  let matchedProduct = PRODUCTS_DATABASE.find(
    (p) => p.tags.material === material && p.tags.env === env && p.tags.challenge === challenge
  );

  // Strategi 2: Jika tidak ada, cari yang penting Material + Tantangannya sama (Tantangan biasanya lebih krusial)
  if (!matchedProduct) {
    matchedProduct = PRODUCTS_DATABASE.find(
      (p) => p.tags.material === material && p.tags.challenge === challenge
    );
  }

  // Strategi 3: Jika masih tidak ada, cari yang penting Material + Lokasi Lingkungannya sama
  if (!matchedProduct) {
    matchedProduct = PRODUCTS_DATABASE.find(
      (p) => p.tags.material === material && p.tags.env === env
    );
  }

  // Strategi 4: Jika zonk total, ambil produk pertama yang sesuai dengan jenis materialnya
  if (!matchedProduct) {
    matchedProduct = PRODUCTS_DATABASE.find((p) => p.tags.material === material);
  }

  // Jika benar-benar kosong, keluarkan produk universal
  return matchedProduct || DEFAULT_PRODUCT;
};

const ProductFinder = () => {
  const navigate = useNavigate();
  
  // State Wizard Langkah demi Langkah
  const [step, setStep] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedEnv, setSelectedEnv] = useState("");
  const [selectedChallenge, setSelectedChallenge] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resetFinder = () => {
    setSelectedMaterial("");
    setSelectedEnv("");
    setSelectedChallenge("");
    setStep(1);
  };

  // Jalankan fungsi filter tagging pintar
  const recommendation = findProductByTags(selectedMaterial, selectedEnv, selectedChallenge);

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />

      <main className="py-12 container mx-auto px-6 max-w-4xl">
        {/* Tombol Navigasi Atas */}
        <Button variant="ghost" onClick={() => step > 1 ? setStep(step - 1) : navigate("/")} className="mb-6 gap-2">
          <ArrowLeft size={16} /> {step > 1 ? "Kembali" : "Beranda"}
        </Button>

        {/* Indikator Progress Bar */}
        <div className="w-full bg-slate-200 h-1.5 rounded-full mb-12 overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-300" 
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Pembungkus Animasi Transisi */}
        <AnimatePresence mode="wait">
          
          {/* TAHAP 1: FILTER MATERIAL */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">Tahap 1 dari 3</span>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mt-2">Apa jenis permukaan (substrat) yang akan dilapisi?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {MATERIALS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setSelectedMaterial(item.id); setStep(2); }}
                    className={`p-6 rounded-2xl border text-left transition-all ${selectedMaterial === item.id ? "border-primary bg-blue-50/50 ring-2 ring-primary/20" : "border-slate-200 bg-white hover:border-slate-300"}`}
                  >
                    <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAHAP 2: FILTER LINGKUNGAN */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">Tahap 2 dari 3</span>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mt-2">Di mana lokasi pengaplikasian struktur tersebut?</h2>
              </div>
              <div className="grid gap-4">
                {ENVIRONMENTS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setSelectedEnv(item.id); setStep(3); }}
                    className={`p-5 rounded-xl border text-left transition-all flex justify-between items-center ${selectedEnv === item.id ? "border-primary bg-blue-50/50 ring-2 ring-primary/20" : "border-slate-200 bg-white hover:border-slate-300"}`}
                  >
                    <div className="max-w-xl">
                      <h4 className="font-bold text-base text-slate-900">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                    <ArrowRight size={18} className="text-slate-400" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAHAP 3: FILTER TANTANGAN */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">Tahap Terakhir</span>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mt-2">Apa tantangan atau ancaman kerusakan terbesar di lokasi?</h2>
              </div>
              <div className="grid gap-4">
                {CHALLENGES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setSelectedChallenge(item.id); setStep(4); }}
                    className={`p-5 rounded-xl border text-left transition-all flex justify-between items-center ${selectedChallenge === item.id ? "border-primary bg-blue-50/50 ring-2 ring-primary/20" : "border-slate-200 bg-white hover:border-slate-300"}`}
                  >
                    <div className="max-w-xl">
                      <h4 className="font-bold text-base text-slate-900">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                    <ArrowRight size={18} className="text-slate-400" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAHAP 4: MENAMPILKAN HASIL FILTER DATA TAGGING */}
          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-md space-y-8">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm mb-1">
                    <Sparkles size={16} /> Analisis Data Tagging Berhasil
                  </div>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600 font-bold">SKU CODE: {recommendation.code}</span>
                  <h2 className="text-3xl font-bold font-heading text-slate-900 mt-2">{recommendation.name}</h2>
                  <p className="text-sm font-medium text-primary mt-1">{recommendation.type}</p>
                </div>
                <Button variant="outline" onClick={resetFinder} className="gap-2 self-start md:self-center">
                  <RefreshCw size={14} /> Cari Ulang
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <ShieldAlert className="text-amber-500" size={18} /> Mengapa Formula Ini Direkomendasikan?
                </h3>
                <ul className="grid gap-3">
                  {recommendation.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 text-xs text-blue-800 leading-relaxed">
                *Sistem ini mencocokkan tag spesifikasi produk kimia dengan kebutuhan Anda secara otomatis tanpa melalui proses server. Dokumen TDS & SDS komplit tersedia pada folder penawaran.
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-6 text-sm font-bold rounded-xl"
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("contact");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  Minta Contoh Sampel & Penawaran Harga
                </Button>
                <Button 
                  variant="outline" 
                  className="p-6 text-sm font-bold rounded-xl"
                  onClick={() => navigate("/coating-calculator")}
                >
                  Hitung Volume di Kalkulator Cat
                </Button>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default ProductFinder;