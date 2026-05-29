import { motion } from "framer-motion";
import constructionImg from "@/assets/industry-construction.jpg";
import packagingImg from "@/assets/industry-packaging.jpg";
import plasticCoatingImg from "@/assets/industry-plastic-coating.jpg";
import metalCoatingImg from "@/assets/industry-metal-coating.jpg";
import woodCoatingImg from "@/assets/industry-wood-coating.jpg";
import additives from "@/assets/additives.jpg";

const industries = [
  {
    title: "Construction",
    image: constructionImg,
  },
  {
    title: "Printing & Packaging",
    image: packagingImg,
  },
  {
    title: "Plastic Coating",
    image: plasticCoatingImg,
  },
  {
    title: "Metal Coating",
    image: metalCoatingImg,
  },
  {
    title: "Wood Coating",
    image: woodCoatingImg,
  },
  {
    title: "Additives",
    image: additives,
  },
];

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
            Industries & Services
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
            Serving Various
            <span className="text-blue-600">
              {" "}Industry Sectors
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
            We provide high-quality coating and component
            solutions for various industrial needs.
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
              key={ind.title}
              variants={item}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                bg-slate-100
              "
            >

              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">

                <img
                  src={ind.image}
                  alt={ind.title}
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
                  {ind.title}
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