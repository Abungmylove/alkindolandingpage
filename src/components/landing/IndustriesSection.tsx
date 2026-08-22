import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import constructionImg from "@/assets/industry-construction.jpg";
import packagingImg from "@/assets/industry-packaging.jpg";
import plasticCoatingImg from "@/assets/industry-plastic-coating.jpg";
import metalCoatingImg from "@/assets/industry-metal-coating.jpg";
import woodCoatingImg from "@/assets/industry-wood-coating.jpg";
import additives from "@/assets/additives.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const IndustriesSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleIndustryClick = (industryId: string) => {
    navigate(`/industry/${industryId}`);
  };

  // Buat industries array dengan id dan image saja, title di-render dengan t()
  const industries = [
    {
      id: "construction",
      translationKey: "industryConstruction",
      image: constructionImg,
    },
    {
      id: "printing-packaging",
      translationKey: "industryPrintingPackaging",
      image: packagingImg,
    },
    {
      id: "plastic-coating",
      translationKey: "industryPlasticCoating",
      image: plasticCoatingImg,
    },
    {
      id: "metal-coating",
      translationKey: "industryMetalCoating",
      image: metalCoatingImg,
    },
    {
      id: "wood-coating",
      translationKey: "industryWoodCoating",
      image: woodCoatingImg,
    },
    {
      id: "additives",
      translationKey: "industryAdditives",
      image: additives,
    },
  ];

  return (
    <section
      id="industries"
      className="py-28 bg-white"
    >
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >

          <span
            className="
              text-sm
              font-semibold
              tracking-[0.25em]
              uppercase
              text-blue-600
              mb-4
              block
            "
          >
            {t("industriesLabel")}
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              tracking-tight
              text-slate-900
              mb-5
            "
          >
            {t("industriesTitle1")}
            <span className="text-blue-600">
              {" "}{t("industriesTitle2")}
            </span>
          </h2>

          <p
            className="
              text-slate-600
              max-w-2xl
              mx-auto
              text-lg
              leading-relaxed
            "
          >
            {t("industriesDesc")}
          </p>

        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {industries.map((ind) => (
            <motion.div
              key={ind.id}
              variants={item}
              onClick={() => handleIndustryClick(ind.id)}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                bg-slate-100
                cursor-pointer
              "
            >

              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">

                <img
                  src={ind.image}
                  alt={t(ind.translationKey)}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                  "
                />

                {/* TITLE */}
                <h3
                  className="
                    absolute
                    bottom-6
                    left-6
                    text-2xl
                    font-bold
                    text-white
                    tracking-tight
                  "
                >
                  {t(ind.translationKey)}
                </h3>

              </div>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
