import { Button } from "@/components/ui/button";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import heroBg from "@/assets/wb.jpeg";
import secondImg from "@/assets/Alkindo.png";

const HeroSection = () => {
  const { t } = useLanguage();

  const { scrollY } = useScroll();

  // BACKGROUND PARALLAX
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);

  // LOGO PARALLAX
  const imageY = useTransform(scrollY, [0, 500], [0, -40]);

  // TEXT PARALLAX
  const textY = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
      "
    >

      {/* BACKGROUND & OVERLAY */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt=""
          className="
            w-full
            h-[120%]
            object-cover
          "
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
      </motion.div>

      {/* LOGO SEBELAH KANAN (HIDDEN DI MOBILE) */}
      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          hidden 
          lg:absolute 
          lg:flex
          lg:mt-0
          lg:right-[-80px]   
          lg:top-[20%]        
          lg:-translate-y-1/2
          lg:w-[50vw]        
          lg:max-w-[950px]   
          lg:justify-end
          z-10
          pointer-events-none 
        "
      >
        <img
          src={secondImg}
          alt="Alkindo Mitraraya Logo"
          className="
            w-full 
            h-auto
            object-contain
            drop-shadow-sm
            lg:scale-[1.4] 
            xl:scale-[1.5]
            origin-right 
          "
        />
      </motion.div>

      {/* KONTEN TEKS SEBELAH KIRI */}
      <div 
        className="
          container 
          mx-auto 
          px-6 
          md:px-12
          relative 
          z-20 
          py-20
        "
      >
        <motion.div
          style={{ y: textY }}
          className="max-w-2xl md:max-w-3xl lg:max-w-2xl xl:max-w-3xl"
        >
          {/* 🎯 UPGRADE DI SINI: Di HP berubah dari text-4xl jadi text-5xl biar lebih besar & mantap */}
          <h1
            className="
              text-5xl
              sm:text-6xl
              md:text-6xl
              lg:text-7xl
              font-extrabold 
              leading-[1.15]
              md:leading-[1.1]
              tracking-tight
              text-slate-900
            "
          >
            {t("heroTitle1")} <br />
            <span className="text-amber-500">
              {t("heroTitle2")}
            </span>
            <br />
            {t("heroTitle3")}
          </h1>
          
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;