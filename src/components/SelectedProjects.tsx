import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projectKeys = [
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80", nameKey: "projects.p1.name", typeKey: "projects.p1.type" },
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80", nameKey: "projects.p2.name", typeKey: "projects.p2.type" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", nameKey: "projects.p3.name", typeKey: "projects.p3.type" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80", nameKey: "projects.p4.name", typeKey: "projects.p4.type" },
];

const SelectedProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  const scrollTo = (dir: number) => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.scrollWidth / projectKeys.length;
    const next = Math.max(0, Math.min(projectKeys.length - 1, current + dir));
    setCurrent(next);
    containerRef.current.scrollTo({ left: cardWidth * next, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.scrollWidth / projectKeys.length;
    const idx = Math.round(containerRef.current.scrollLeft / cardWidth);
    setCurrent(idx);
  };

  const progress = (current + 1) / projectKeys.length;

  const arrowBtnClass =
    "absolute top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border border-white/40 hover:border-white/70"
  ;

  return (
    <section id="proyectos" className="bg-charcoal py-24 md:py-32">
      <div className="px-[5%] max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label-text text-muted-stone mb-4"
            >
              {t("projects.label")}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-light uppercase text-white leading-[1.1]"
              style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "0.04em" }}
            >
              {t("projects.titlePrefix")}<span className="italic text-terracotta">{t("projects.titleAccent")}</span>
            </motion.h2>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/40 font-body text-sm mt-4 md:mt-0"
          >
            {current + 1} ——— {projectKeys.length}
          </motion.span>
        </div>

        {/* Carousel wrapper with overlaid arrows */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scrollTo(-1)}
            className={arrowBtnClass}
            style={{
              left: 16,
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(4px)",
            }}
            aria-label={t("projects.prev")}
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollTo(1)}
            className={arrowBtnClass}
            style={{
              right: 16,
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(4px)",
            }}
            aria-label={t("projects.next")}
          >
            <ChevronRight size={20} className="text-white" />
          </button>

          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projectKeys.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="snap-start flex-shrink-0 w-[85%] md:w-[42%]"
                data-cursor-view
              >
                <div className="overflow-hidden mb-4 h-[400px] md:h-[500px]">
                  <motion.img
                    src={project.src}
                    alt={t(project.nameKey)}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-white text-xl uppercase tracking-[0.06em] font-light mb-1">
                  {t(project.nameKey)}
                </h3>
                <p className="text-terracotta text-[12px] uppercase tracking-[0.12em] font-body">
                  {t(project.typeKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress bar only */}
        <div className="flex justify-end mt-6">
          <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
