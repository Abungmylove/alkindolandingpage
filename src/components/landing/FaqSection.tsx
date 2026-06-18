import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "custom-formulation",
    question: "Do you offer custom chemical formulation services?",
    answer: "Yes, our R&D team specializes in developing custom chemical formulations tailored to your specific requirements. We work closely with clients to understand their needs and create solutions that meet exact performance specifications, regulatory requirements, and budget constraints."
  },
  {
    id: "moq",
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: "Our MOQ varies depending on the product type and formulation complexity. For standard products, we typically start from 200 liters, while custom formulations may have different requirements. Contact our sales team to discuss your specific needs and get a customized quote."
  },
  {
    id: "documents",
    question: "Can you provide TDS and MSDS documents?",
    answer: "Absolutely. We provide comprehensive Technical Data Sheets (TDS) and Material Safety Data Sheets (MSDS) for all our products. These documents include detailed information about chemical composition, handling procedures, safety precautions, and regulatory compliance data."
  },
  {
    id: "logistics-safety",
    question: "How do you ensure chemical logistics safety?",
    answer: "We follow strict safety protocols for chemical storage, handling, and transportation. Our logistics partners are certified for hazardous material transport, and we provide proper packaging, labeling, and documentation to ensure safe delivery. We also offer guidance on proper storage and handling at your facility."
  }
];

const FaqSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-ocean opacity-[0.03]" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3 block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find answers to common questions about our products, services, and processes. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-accent/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={20} className="text-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Contact our team for more information
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
