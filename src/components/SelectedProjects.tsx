import { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const projects = [
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80", name: "Casa Palermo", type: "Proyecto Residencial · 2024" },
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80", name: "Loft Recoleta", type: "Remodelación · 2024" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", name: "Estudio Belgrano", type: "Espacio Comercial · 2023" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80", name: "Suite Núñez", type: "Proyecto Residencial · 2023" },
];

const SelectedProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [current, setCurrent] = useState(0);

  const scrollTo = (dir: number) => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.scrollWidth / projects.length;
    const next = Math.max(0, Math.min(projects.length - 1, current + dir));
    setCurrent(next);
    containerRef.current.scrollTo({ left: cardWidth * next, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.scrollWidth / projects.length;
    const idx = Math.round(containerRef.current.scrollLeft / cardWidth);
    setCurrent(idx);
  };

  const progress = (current + 1) / projects.length;

  return (
    <section id="proyectos" className="bg-charcoal py-24 md:py-32">
      <div className="px-[5%] max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label-text text-muted-stone mb-4"
            >
              Proyectos seleccionados
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-light uppercase text-white leading-[1.1]"
              style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "0.04em" }}
            >
              Nuestro <span className="italic text-terracotta">trabajo</span>
            </motion.h2>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/40 font-body text-sm mt-4 md:mt-0"
          >
            {current + 1} ——— {projects.length}
          </motion.span>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
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
                  alt={project.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-white text-xl uppercase tracking-[0.06em] font-light mb-1">
                {project.name}
              </h3>
              <p className="text-terracotta text-[12px] uppercase tracking-[0.12em] font-body">
                {project.type}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-3">
            <button
              onClick={() => scrollTo(-1)}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white transition-colors duration-300"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={() => scrollTo(1)}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white transition-colors duration-300"
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
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
