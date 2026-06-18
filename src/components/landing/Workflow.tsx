import { motion } from "framer-motion";
import { MessageSquare, FlaskConical, ClipboardCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
    title: "1. Konsultasi Teknis",
    desc: "Diskusikan spesifikasi material, area pengaplikasian, dan standarisasi ketahanan yang proyek Anda butuhkan."
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-purple-600" />,
    title: "2. Formulasi Lab & Sampel",
    desc: "Tim ahli kimia kami meracik formula khusus dan menyediakan sampel gratis untuk divalidasi oleh tim internal Anda."
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-emerald-600" />,
    title: "3. Uji Coba Aplikasi",
    desc: "Pendampingan teknis saat trial aplikasi untuk memastikan performa pelapisan bekerja 100% sempurna di lapangan."
  },
  {
    icon: <Truck className="w-6 h-6 text-amber-600" />,
    title: "4. Produksi & Pengiriman",
    desc: "Produksi massal dengan QC ketat dan pengiriman terjadwal langsung ke lokasi pabrik atau area proyek Anda."
  }
];

const Workflow = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
            Alur Kerja Mitra
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-3">
            4 Langkah Solusi Pelapisan Industri
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 relative group hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform mb-4">
                {step.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
