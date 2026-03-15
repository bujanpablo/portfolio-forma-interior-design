import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const footerLinkKeys = ["footer.home", "footer.about", "footer.projects", "footer.services", "footer.contact"];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark py-16 md:py-24">
      <div className="px-[5%] max-w-[1440px] mx-auto">
        <div className="flex flex-wrap gap-6 md:gap-8 mb-12 md:mb-16">
          {footerLinkKeys.map((key) => (
            <span key={key} className="label-text text-muted-stone hover:text-white/80 transition-colors duration-300">
              {t(key)}
            </span>
          ))}
        </div>

        <motion.a
          href="mailto:hola@formastudio.com.ar"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="block font-display font-light uppercase text-white leading-[1.1] mb-12 md:mb-16 hover:text-terracotta transition-colors duration-500 group"
          style={{ fontSize: "clamp(20px, 4vw, 56px)", letterSpacing: "0.02em" }}
        >
          <span className="inline-block border-b border-transparent group-hover:border-terracotta transition-all duration-500">
            HOLA@FORMASTUDIO.COM.AR
          </span>
        </motion.a>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-display text-white/60 text-lg uppercase tracking-[0.22em] font-light">
            Forma
          </span>
          <span className="font-body text-[11px] text-muted-stone tracking-[0.06em]">
            {t("footer.copyright")}
          </span>
          <div className="flex gap-4 text-[11px] uppercase tracking-[0.12em] text-muted-stone font-body">
            <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
            <span className="text-white/20">·</span>
            <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
            <span className="text-white/20">·</span>
            <a href="#" className="hover:text-white transition-colors duration-300">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
