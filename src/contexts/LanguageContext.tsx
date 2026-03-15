import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.about": { es: "Nosotros", en: "About" },
  "nav.projects": { es: "Proyectos", en: "Projects" },
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.contact": { es: "Contacto", en: "Contact" },

  // Hero
  "hero.eyebrow": { es: "Interior Design Studio", en: "Interior Design Studio" },
  "hero.line1": { es: "Todo espacio tiene", en: "Every space has" },
  "hero.line2": { es: "el potencial", en: "the potential" },
  "hero.line3": { es: "de inspirar.", en: "to inspire." },
  "hero.scroll": { es: "Scroll", en: "Scroll" },

  // Floating Collage
  "collage.label": { es: "Forma Studio", en: "Forma Studio" },
  "collage.line1": { es: "La fusión perfecta de", en: "The perfect fusion of" },
  "collage.design": { es: "DISEÑO ", en: "DESIGN " },
  "collage.and": { es: "y", en: "&" },
  "collage.line3": { es: "funcionalidad", en: "functionality" },
  "collage.imgAlt": { es: "Diseño interior", en: "Interior design" },

  // Marquee
  "marquee.items": {
    es: "Diseño Residencial · Remodelaciones · Espacios Comerciales · Home Styling · Consultoría · ",
    en: "Residential Design · Renovations · Commercial Spaces · Home Styling · Consulting · ",
  },

  // Selected Projects
  "projects.label": { es: "Proyectos seleccionados", en: "Selected projects" },
  "projects.titlePrefix": { es: "Nuestro ", en: "Our " },
  "projects.titleAccent": { es: "trabajo", en: "work" },
  "projects.prev": { es: "Anterior", en: "Previous" },
  "projects.next": { es: "Siguiente", en: "Next" },
  "projects.p1.name": { es: "Casa Palermo", en: "Casa Palermo" },
  "projects.p1.type": { es: "Proyecto Residencial · 2024", en: "Residential Project · 2024" },
  "projects.p2.name": { es: "Loft Recoleta", en: "Loft Recoleta" },
  "projects.p2.type": { es: "Remodelación · 2024", en: "Renovation · 2024" },
  "projects.p3.name": { es: "Estudio Belgrano", en: "Estudio Belgrano" },
  "projects.p3.type": { es: "Espacio Comercial · 2023", en: "Commercial Space · 2023" },
  "projects.p4.name": { es: "Suite Núñez", en: "Suite Núñez" },
  "projects.p4.type": { es: "Proyecto Residencial · 2023", en: "Residential Project · 2023" },

  // Design Philosophy
  "philosophy.label": { es: "Filosofía de diseño", en: "Design philosophy" },
  "philosophy.imgAlt": { es: "Filosofía de diseño Forma Studio", en: "Forma Studio design philosophy" },
  "philosophy.line1": { es: "Creamos", en: "We create" },
  "philosophy.accent": { es: "ESPACIOS", en: "SPACES" },
  "philosophy.line3": { es: "para vivir", en: "for living" },
  "philosophy.p1": {
    es: "Cada proyecto comienza con una conversación. Escuchamos, observamos y traducimos deseos en espacios que reflejan la identidad de quienes los habitan. No seguimos fórmulas; diseñamos experiencias.",
    en: "Every project starts with a conversation. We listen, observe, and translate desires into spaces that reflect the identity of those who inhabit them. We don't follow formulas; we design experiences.",
  },
  "philosophy.p2": {
    es: "Trabajamos con materiales nobles, luz natural y proporciones que generan calma. La funcionalidad y la estética no compiten — conviven en cada decisión.",
    en: "We work with noble materials, natural light, and proportions that generate calm. Functionality and aesthetics don't compete — they coexist in every decision.",
  },
  "philosophy.cta": { es: "Conocé el estudio", en: "Meet the studio" },

  // Services
  "services.label": { es: "Descubrí", en: "Discover" },
  "services.titlePrefix": { es: "Nuestros ", en: "Our " },
  "services.titleAccent": { es: "Servicios.", en: "Services." },
  "services.s1.name": { es: "Proyecto interior nuevo", en: "New interior project" },
  "services.s1.desc": {
    es: "Diseño completo de viviendas desde cero. Planos, materiales, iluminación y mobiliario para una experiencia de vida excepcional.",
    en: "Complete home design from scratch. Plans, materials, lighting, and furniture for an exceptional living experience.",
  },
  "services.s2.name": { es: "Remodelación", en: "Renovation" },
  "services.s2.desc": {
    es: "Transformamos espacios existentes respetando la estructura original pero elevando cada rincón con criterio contemporáneo.",
    en: "We transform existing spaces while respecting the original structure, elevating every corner with contemporary criteria.",
  },
  "services.s3.name": { es: "Espacios comerciales", en: "Commercial spaces" },
  "services.s3.desc": {
    es: "Diseño de locales, oficinas y espacios de trabajo que comunican la identidad de tu marca.",
    en: "Design of stores, offices, and workspaces that communicate your brand identity.",
  },
  "services.s4.name": { es: "Consultoría puntual", en: "One-time consulting" },
  "services.s4.desc": {
    es: "Una sesión estratégica para orientarte sobre materiales, distribución o estilo sin encarar un proyecto completo.",
    en: "A strategic session to guide you on materials, layout, or style without undertaking a full project.",
  },
  "services.cta": { es: "Solicitar presupuesto", en: "Request a quote" },

  // Instagram
  "instagram.handle": { es: "@forma.studio", en: "@forma.studio" },
  "instagram.titlePrefix": { es: "Seguinos en ", en: "Follow us on " },
  "instagram.titleAccent": { es: "Instagram.", en: "Instagram." },
  "instagram.imgAlt": { es: "Instagram Forma Studio", en: "Instagram Forma Studio" },

  // Contact
  "contact.label": { es: "Contacto", en: "Contact" },
  "contact.titleLine1": { es: "Hagamos", en: "Let's make" },
  "contact.titleLine2": { es: "un gran cambio.", en: "a big change." },
  "contact.subtitle": { es: "Mi proyecto necesita...", en: "My project needs..." },
  "contact.pill1": { es: "Proyecto residencial", en: "Residential project" },
  "contact.pill2": { es: "Remodelación", en: "Renovation" },
  "contact.pill3": { es: "Espacio comercial", en: "Commercial space" },
  "contact.pill4": { es: "Consultoría puntual", en: "One-time consulting" },
  "contact.name": { es: "Nombre completo", en: "Full name" },
  "contact.email": { es: "Email", en: "Email" },
  "contact.phone": { es: "Teléfono", en: "Phone" },
  "contact.budget": { es: "Presupuesto estimado", en: "Estimated budget" },
  "contact.message": { es: "Contanos sobre tu proyecto", en: "Tell us about your project" },
  "contact.submit": { es: "Enviar solicitud", en: "Send request" },

  // Footer
  "footer.home": { es: "Inicio", en: "Home" },
  "footer.about": { es: "Nosotros", en: "About" },
  "footer.projects": { es: "Proyectos", en: "Projects" },
  "footer.services": { es: "Servicios", en: "Services" },
  "footer.contact": { es: "Contacto", en: "Contact" },
  "footer.copyright": {
    es: "© 2025 Forma Studio. Buenos Aires, Argentina.",
    en: "© 2025 Forma Studio. Buenos Aires, Argentina.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
