import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const navKeys = [
  { key: "nav.about", href: "#nosotros" },
  { key: "nav.projects", href: "#proyectos" },
  { key: "nav.services", href: "#servicios" },
  { key: "nav.contact", href: "#contacto" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100] px-[5%] py-6 flex items-center justify-between"
      style={{
        background: isScrolled ? "#1C1C1A" : "transparent",
        boxShadow: isScrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div className="flex items-center gap-6">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-display text-white text-xl tracking-[0.22em] uppercase font-light"
          style={{ cursor: "none" }}
        >
          Forma
        </a>
        {/* Language toggle */}
        <div className="flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] font-body" style={{ cursor: "none" }}>
          <button
            onClick={() => setLang("es")}
            className="transition-opacity duration-300"
            style={{ color: "white", opacity: lang === "es" ? 1 : 0.4, cursor: "none" }}
          >
            ES
          </button>
          <span className="text-white" style={{ opacity: 0.4 }}>·</span>
          <button
            onClick={() => setLang("en")}
            className="transition-opacity duration-300"
            style={{ color: "white", opacity: lang === "en" ? 1 : 0.4, cursor: "none" }}
          >
            EN
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navKeys.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-white text-[11px] uppercase tracking-[0.16em] font-body font-normal transition-opacity duration-300 hover:opacity-60"
            style={{ cursor: "none" }}
          >
            {t(link.key)}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 z-[110]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <motion.span
          className="block w-6 h-[1px] bg-white"
          animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-6 h-[1px] bg-white"
          animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-charcoal flex flex-col items-center justify-center gap-8 z-[105]"
          >
            {navKeys.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                onClick={() => scrollTo(link.href)}
                className="font-display text-white text-3xl uppercase tracking-[0.1em] font-light"
              >
                {t(link.key)}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
