import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&q=80",
    hover: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=500&q=80",
    w: 220, h: 280, top: 40, left: "2%", right: undefined, rotate: -2, speed: 0.04,
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    hover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80",
    w: 155, h: 195, top: 280, left: "10%", right: undefined, rotate: 1.5, speed: 0.07,
  },
  {
    src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=450&q=80",
    hover: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=450&q=80",
    w: 190, h: 235, top: 80, left: "20%", right: undefined, rotate: 2.5, speed: 0.05,
  },
  {
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&q=80",
    hover: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=80",
    w: 210, h: 270, top: 30, left: undefined, right: "2%", rotate: 2, speed: 0.06,
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    hover: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&q=80",
    w: 155, h: 195, top: 270, left: undefined, right: "10%", rotate: -1.5, speed: 0.08,
  },
  {
    src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=450&q=80",
    hover: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=450&q=80",
    w: 185, h: 225, top: 70, left: undefined, right: "20%", rotate: -2.5, speed: 0.04,
  },
];

const CrossfadePhoto = ({ src, hoverSrc, className = "" }: { src: string; hoverSrc: string; className?: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt="Interior design"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <img
        src={hoverSrc}
        alt="Interior design"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[400ms] ease-in-out"
        style={{ opacity: hovered ? 1 : 0 }}
        loading="lazy"
      />
    </div>
  );
};

const FloatingCollage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const { t } = useLanguage();

  const titleBlock = (
    <>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="label-text text-stone mb-6"
      >
        {t("collage.label")}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display font-normal uppercase leading-[1.1]"
        style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "0.04em" }}
      >
        {t("collage.line1")}
        <br />
        <span>{t("collage.design")}</span>
        <span className="text-terracotta">{t("collage.and")}</span>
        <br />
        {t("collage.line3")}
      </motion.h2>
    </>
  );

  return (
    <section id="nosotros" ref={ref} className="bg-warm-white overflow-hidden">
      {/* Desktop — absolute floating layout */}
      <div className="hidden lg:block relative" style={{ minHeight: 700 }}>
        <div
          className="absolute z-10 text-center px-[5%]"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          {titleBlock}
        </div>
        {photos.map((photo, i) => (
          <ParallaxPhoto key={i} photo={photo} scrollYProgress={scrollYProgress} />
        ))}
      </div>

      {/* Mobile — stacked vertical layout */}
      <div className="lg:hidden">
        <div className="text-center px-6 pt-10 pb-6">
          {titleBlock}
        </div>
        <div className="grid grid-cols-2 gap-2 px-6 pb-10">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <CrossfadePhoto
                src={photo.src}
                hoverSrc={photo.hover}
                className="h-[200px] w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ParallaxPhotoProps {
  photo: (typeof photos)[0];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

const ParallaxPhoto = ({ photo, scrollYProgress }: ParallaxPhotoProps) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, photo.speed * -400]);

  return (
    <motion.div
      className="absolute"
      style={{
        width: photo.w,
        height: photo.h,
        top: photo.top,
        left: photo.left,
        right: photo.right,
        rotate: photo.rotate,
        y,
      }}
      data-cursor-view
    >
      <CrossfadePhoto src={photo.src} hoverSrc={photo.hover} className="w-full h-full" />
    </motion.div>
  );
};

export default FloatingCollage;
