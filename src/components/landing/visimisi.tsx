import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const VisiMisi = () => {
  const { t } = useLanguage();

  return (
    <section
      id="visi-misi"
      className="py-28 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* SMALL LABEL */}
          <span
            className="
              inline-block
              text-sm
              font-semibold
              tracking-[0.25em]
              uppercase
              text-blue-600
              mb-6
            "
          >
            {t("visimisiLabel")}
          </span>

          {/* TITLE */}
          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              leading-[1]
              tracking-tight
              text-slate-900
              mb-8
            "
          >
            {t("visimisiVisionTitle")}
          </h2>

          {/* DESCRIPTION */}
          <div
            className="
              space-y-6
              text-lg
              leading-relaxed
              text-slate-600
              max-w-3xl
              mx-auto
            "
          >
            <p>{t("visimisiVisionDesc")}</p>
            <h2
              className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                leading-[1]
                tracking-tight
                text-slate-900
                mb-8
              "
            >
              {t("visimisiMissionTitle")}
            </h2>

            <p>{t("visimisiMissionDesc")}</p>

            <h2
              className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                leading-[1]
                tracking-tight
                text-slate-900
                mb-8
              "
            >
              {t("visimisiCoreValueTitle")}
            </h2>

            <p>{t("visimisiCoreValueDesc")}</p>





          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default VisiMisi;