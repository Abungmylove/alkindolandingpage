import { motion } from "framer-motion";
import { Factory, Globe2, Building2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CompanyStats = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Factory,
      labelKey: "statsCapacityLabel",
      value: "12.500+",
      unitKey: "statsCapacityUnit",
    },
    {
      icon: Globe2,
      labelKey: "statsReachLabel",
      value: "6",
      unitKey: "statsReachUnit",
    },
    {
      icon: Building2,
      labelKey: "statsClientsLabel",
      value: "340+",
      unitKey: "statsClientsUnit",
    },
    {
      icon: ShieldCheck,
      labelKey: "statsQcLabel",
      value: "100%",
      unitKey: "statsQcUnit",
    },
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
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">
              {t("companyStatsLabel")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t("companyStatsTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("companyStatsDesc")}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
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
                  <div className="text-sm text-muted-foreground">{t(stat.unitKey)}</div>
                </div>

                <div className="text-sm font-medium text-foreground">
                  {t(stat.labelKey)}
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
