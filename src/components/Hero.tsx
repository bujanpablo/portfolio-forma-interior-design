import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook, Linkedin, Music } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();
  const lines = [t("hero.line1"), t("hero.line2"), t("hero.line3")];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with fallback */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/1200x/32/05/98/32059897eb94ae9f116fe98ea09048b6.jpg"
          alt="Interior de diseño moderno"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,9,0.55) 0%, rgba(10,10,9,0.45) 50%, rgba(10,10,9,0.75) 100%)",
          }}
        />
      </div>

      {/* Content — pinned to lower 40% */}
      <div className="relative h-full flex flex-col justify-end px-[5%] pb-16">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="label-text text-white/60 text-center mb-6"
        >
          {t("hero.eyebrow")}
        </motion.p>

        {/* Title — large, impactful */}
        <div className="text-center mb-20">
          {lines.map((line, i) => (
            <motion.h1
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.9, ease: "easeOut" }}
              className="font-display font-normal text-white uppercase leading-[0.95] tracking-[0.02em]"
              style={{ fontSize: "clamp(36px, 5vw, 68px)" }}
            >
              {line}
            </motion.h1>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="hidden md:flex gap-4 text-[11px] uppercase tracking-[0.12em] text-white/60 font-body"
          >
            <a href="#" className="hover:text-white/90 transition-colors duration-300">IG</a>
            <span>·</span>
            <a href="#" className="hover:text-white/90 transition-colors duration-300">LI</a>
            <span>·</span>
            <a href="#" className="hover:text-white/90 transition-colors duration-300">BE</a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="hidden md:flex flex-col items-center gap-3"
          >
            <div className="h-12 w-[1px] bg-white/20 overflow-hidden relative">
              <div className="absolute w-full h-1/2 bg-white animate-scroll-line" />
            </div>
            <span
              className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-body"
              style={{ writingMode: "vertical-rl" }}
            >
              {t("hero.scroll")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
