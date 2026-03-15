import { motion } from "framer-motion";

const photos = [
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", tall: true },
  { src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=400&q=80", tall: true },
];

const InstagramGrid = () => {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="px-[5%] max-w-[1440px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label-text text-stone mb-4"
        >
          @forma.studio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-light uppercase leading-[1.1] mb-12"
          style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "0.04em" }}
        >
          Seguinos en <span className="text-terracotta">Instagram.</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`overflow-hidden ${photo.tall ? "row-span-1 md:row-span-1" : ""}`}
              data-cursor-view
            >
              <motion.img
                src={photo.src}
                alt="Instagram Forma Studio"
                className={`w-full object-cover ${i % 2 === 0 ? "h-[260px] md:h-[360px]" : "h-[200px] md:h-[280px]"}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
