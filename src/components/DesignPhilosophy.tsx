import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const DesignPhilosophy = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-warm-white py-24 md:py-32">
      <div className="px-[5%] max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
          data-cursor-view
        >
          <motion.img
            src="https://images.unsplash.com/photo-1615529162924-f8605388461d?w=900&q=85"
            alt={t("philosophy.imgAlt")}
            className="w-full h-[400px] md:h-[600px] object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            loading="lazy"
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-text text-stone mb-6"
          >
            {t("philosophy.label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-light uppercase leading-[1.1] mb-8"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "0.04em" }}
          >
            {t("philosophy.line1")}
            <br />
            <span className="text-terracotta">{t("philosophy.accent")}</span>
            <br />
            {t("philosophy.line3")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-[15px] text-stone leading-[1.85] mb-5"
          >
            {t("philosophy.p1")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-[15px] text-stone leading-[1.85] mb-10"
          >
            {t("philosophy.p2")}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-body text-[12px] uppercase tracking-[0.16em] border border-charcoal text-charcoal px-8 py-3.5 hover:bg-charcoal hover:text-warm-white transition-all duration-500"
          >
            {t("philosophy.cta")}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
