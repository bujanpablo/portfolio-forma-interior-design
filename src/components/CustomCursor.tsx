import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };

      const el = e.target as HTMLElement;
      const isImg = el.tagName === "IMG" || el.closest("[data-cursor-view]") !== null;
      const isLnk = el.tagName === "A" || el.tagName === "BUTTON" || el.closest("a") !== null || el.closest("button") !== null;

      setIsHovering(isImg);
      setIsLink(isLnk && !isImg);
    };

    const lerp = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(lerp);
    };

    window.addEventListener("mousemove", onMouseMove);
    const raf = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const size = isHovering ? 64 : isLink ? 48 : 12;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: isHovering ? "rgba(28,28,26,0.6)" : isLink ? "rgba(28,28,26,0.4)" : "#1C1C1A",
        mixBlendMode: isHovering || isLink ? "normal" : "multiply",
        transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isHovering && (
        <span
          ref={labelRef}
          className="font-body text-warm-white text-[11px] uppercase tracking-[0.16em] font-medium"
        >
          Ver
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
