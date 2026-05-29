import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
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
            About Us
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
            Your Partner in
              Chemicals
          
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
            <p>
              PT Nova Sindo Raya is a professional chemical trading company in Indonesia, that is dedicated to bridge the gap between global manufacturers and dynamic local industries.
We are the trusted, strategic supplier of a diverse range of high-quality products tailored to maintain customer satisfaction across various industrial segments and applications that are driven by our vision.
            </p>

            <p>
              
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;