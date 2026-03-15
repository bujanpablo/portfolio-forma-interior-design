import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceKeys = [
  { num: "01", nameKey: "services.s1.name", descKey: "services.s1.desc" },
  { num: "02", nameKey: "services.s2.name", descKey: "services.s2.desc" },
  { num: "03", nameKey: "services.s3.name", descKey: "services.s3.desc" },
  { num: "04", nameKey: "services.s4.name", descKey: "services.s4.desc" },
];

const Services = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="servicios" className="bg-warm-white py-24 md:py-32">
      <div className="px-[5%] max-w-[1440px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label-text text-stone mb-4"
        >
          {t("services.label")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-light uppercase leading-[1.1] mb-16"
          style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "0.04em" }}
        >
          {t("services.titlePrefix")}<span className="text-terracotta">{t("services.titleAccent")}</span>
        </motion.h2>

        <div className="border-t border-charcoal/10">
          {serviceKeys.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border-b border-charcoal/10"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 group"
              >
                <div className="flex items-center gap-6 transition-all duration-300 group-hover:pl-2">
                  <span className="text-terracotta text-[12px] font-body">{service.num}</span>
                  <span className="font-display uppercase text-[22px] md:text-[26px] tracking-[0.04em] font-light text-charcoal">
                    {t(service.nameKey)}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-charcoal/20 flex items-center justify-center transition-all duration-300">
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-charcoal text-lg leading-none"
                  >
                    +
                  </motion.span>
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-[13px] text-stone leading-[1.8] pb-6 pl-[52px] max-w-xl">
                      {t(service.descKey)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12"
        >
          <button className="font-body text-[12px] uppercase tracking-[0.16em] bg-charcoal text-warm-white px-8 py-3.5 hover:bg-terracotta transition-colors duration-500">
            {t("services.cta")}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
