import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed z-50 flex items-center justify-center rounded-full border border-terracotta bg-transparent hover:bg-terracotta group transition-all duration-300"
      style={{
        width: 44,
        height: 44,
        bottom: 78,
        right: 24,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease, background-color 0.3s ease",
      }}
      aria-label="Scroll to top"
    >
      <ChevronUp size={18} className="text-terracotta group-hover:text-white transition-colors duration-300" />
    </button>
  );
};

export default ScrollToTopButton;
