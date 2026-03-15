import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const photos = [
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&q=85",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=85",
  "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=600&q=85",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=85",
];

const InstagramGrid = () => {
  const { t } = useLanguage();

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
          {t("instagram.handle")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-light uppercase leading-[1.1] mb-12"
          style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "0.04em" }}
        >
          {t("instagram.titlePrefix")}<span className="text-terracotta">{t("instagram.titleAccent")}</span>
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
                alt={t("instagram.imgAlt")}
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
