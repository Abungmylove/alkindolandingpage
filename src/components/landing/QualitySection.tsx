import { motion } from "framer-motion";
import shivaImg from "@/assets/shiva.jpeg";
import alkImg from "@/assets/alk.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const industries = [
  {
    image: shivaImg,
  },
  {
    image: alkImg,
  },
];

const IndustriesSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="partners"
      className="py-24 bg-white"
    >

      {/* HEADER */}
      <div className="text-center mb-16 px-6">


        <h2
          className="
            text-4xl
            md:text-5xl
            font-black
            text-slate-900
            mb-5
          "
        >
          {t("qualityPartnersTitlePrefix")}
          <span className="text-blue-600">
            {" "}{t("qualityPartnersTitleAccent")}
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
          {t("qualityPartnersDesc")}
        </p>

      </div>

      {/* IMAGE LIST */}
      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-8
          px-8"
      >

        {industries.map((ind, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="
              relative
              overflow-hidden"
          >

            {/* IMAGE */}
            <div className="relative inline-block overflow-hidden">

              <motion.img
                src={ind.image}
                
                loading="lazy"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                className="
                  block
                  w-auto
                  h-auto
                  max-w-full
                "
              />

              {/* TITLE */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  p-6
                "
              >
                <h3
                  className="
                    text-white
                    text-2xl
                    md:text-3xl
                    font-bold
                    drop-shadow-lg
                  "
                >
                 
                </h3>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default IndustriesSection;