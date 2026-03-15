import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const lines = [t("hero.line1"), t("hero.line2"), t("hero.line3")];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with fallback */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=85"
          alt="Interior de diseño moderno"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85";
          }}
          loading="eager"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1800&q=85";
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,9,0.85) 0%, rgba(10,10,9,0.45) 50%, rgba(10,10,9,0.3) 100%)",
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
              className="font-display font-bold text-white uppercase leading-[0.95] tracking-[0.02em]"
              style={{ fontSize: "clamp(52px, 8vw, 100px)" }}
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
