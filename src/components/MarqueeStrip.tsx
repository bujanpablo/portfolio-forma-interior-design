import { useLanguage } from "@/contexts/LanguageContext";

const MarqueeStrip = () => {
  const { t } = useLanguage();
  const items = t("marquee.items");
  const repeated = items.repeat(6);

  return (
    <section className="bg-warm-white border-t border-b border-subtle py-6 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[0, 1].map((idx) => (
          <span
            key={idx}
            className="font-display font-light uppercase text-charcoal text-[28px] md:text-[32px] tracking-[0.04em]"
          >
            {repeated.split("·").map((part, i) => (
              <span key={i}>
                {part}
                {i < repeated.split("·").length - 1 && (
                  <span className="text-terracotta mx-2">·</span>
                )}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeStrip;
