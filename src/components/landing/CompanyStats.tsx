import { motion } from "framer-motion";
import { Factory, Globe2, Building2, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Factory,
    label: "Kapasitas Manufaktur",
    value: "12.500+",
    unit: "Ton / Tahun",
  },
  {
    icon: Globe2,
    label: "Jangkauan Distribusi",
    value: "6",
    unit: "Negara Regional",
  },
  {
    icon: Building2,
    label: "Kemitraan Aktif",
    value: "340+",
    unit: "Klien Korporat",
  },
  {
    icon: ShieldCheck,
    label: "Standar Formulasi",
    value: "100%",
    unit: "QC Pass",
  },
];

const CompanyStats = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-ocean opacity-[0.03]" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">
              Operational Scale
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Kapabilitas & Skala Operasional
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kapasitas produksi dan jangkauan distribusi kami memastikan kebutuhan pelapisan industri Anda terpenuhi dengan konsistensi dan kualitas terbaik.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <stat.icon size={24} className="text-primary" />
                </div>

                <div className="mb-2">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.unit}</div>
                </div>

                <div className="text-sm font-medium text-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStats;
