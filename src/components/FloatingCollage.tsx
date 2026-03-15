import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const photos = [
  { src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&q=80", w: 240, h: 300, top: "5%", left: "3%", speed: 0.04 },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", w: 160, h: 200, top: "50%", left: "8%", speed: 0.07 },
  { src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=450&q=80", w: 200, h: 240, top: "30%", left: "18%", speed: 0.05 },
  { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&q=80", w: 220, h: 280, top: "3%", right: "5%", speed: 0.06 },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80", w: 160, h: 200, top: "55%", right: "8%", speed: 0.08 },
  { src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=450&q=80", w: 190, h: 230, top: "28%", right: "20%", speed: 0.04 },
];

const FloatingCollage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section id="nosotros" ref={ref} className="relative bg-warm-white py-32 md:py-48 overflow-hidden min-h-[90vh]">
      {/* Center text */}
      <div className="relative z-10 text-center px-[5%]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="label-text text-stone mb-6"
        >
          Forma Studio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-light uppercase leading-[1.1]"
          style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "0.04em" }}
        >
          La fusión perfecta de
          <br />
          <span>DISEÑO </span>
          <span className="text-terracotta">y</span>
          <br />
          funcionalidad
        </motion.h2>
      </div>

      {/* Floating photos - hidden on mobile */}
      <div className="hidden lg:block">
        {photos.map((photo, i) => (
          <ParallaxPhoto key={i} photo={photo} scrollYProgress={scrollYProgress} />
        ))}
      </div>

      {/* Mobile photo grid */}
      <div className="lg:hidden grid grid-cols-2 gap-3 px-[5%] mt-12">
        {photos.slice(0, 4).map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="overflow-hidden"
          >
            <img
              src={photo.src}
              alt="Diseño interior"
              className="w-full h-48 object-cover hover:scale-[1.04] transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

interface ParallaxPhotoProps {
  photo: typeof photos[0];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

const ParallaxPhoto = ({ photo, scrollYProgress }: ParallaxPhotoProps) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, photo.speed * -400]);

  return (
    <motion.div
      className="absolute overflow-hidden"
      style={{
        width: photo.w,
        height: photo.h,
        top: photo.top,
        left: photo.left,
        right: (photo as any).right,
        y,
      }}
      data-cursor-view
    >
      <motion.img
        src={photo.src}
        alt="Diseño interior"
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        loading="lazy"
      />
    </motion.div>
  );
};

export default FloatingCollage;
