import { motion } from "framer-motion";
import { MessageSquare, FlaskConical, ClipboardCheck, Truck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Workflow = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      title: t("workflowStep1Title"),
      desc: t("workflowStep1Desc"),
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-purple-600" />,
      title: t("workflowStep2Title"),
      desc: t("workflowStep2Desc"),
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-emerald-600" />,
      title: t("workflowStep3Title"),
      desc: t("workflowStep3Desc"),
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-600" />,
      title: t("workflowStep4Title"),
      desc: t("workflowStep4Desc"),
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
            {t("workflowLabel")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-3">
            {t("workflowTitle")}
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
