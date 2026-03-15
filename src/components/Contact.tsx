import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const projectTypes = ["Proyecto residencial", "Remodelación", "Espacio comercial", "Consultoría puntual"];

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  presupuesto: string;
  mensaje: string;
}

const Contact = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const { register, handleSubmit } = useForm<FormData>();

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const onSubmit = (data: FormData) => {
    console.log({ ...data, projectTypes: selectedTypes });
  };

  const stagger = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
  };

  const inputClass = "w-full bg-transparent border-b border-white/12 py-3 text-white font-body text-[14px] outline-none placeholder-transparent focus:border-white/30 transition-colors duration-300";

  return (
    <section id="contacto" className="bg-charcoal py-24 md:py-32">
      <div className="px-[5%] max-w-[1440px] mx-auto">
        <motion.p {...stagger} transition={{ duration: 0.5 }} className="label-text text-muted-stone mb-6">
          Contacto
        </motion.p>
        <motion.h2
          {...stagger}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-light uppercase text-white leading-[1.1] mb-12"
          style={{ fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "0.03em" }}
        >
          Hagamos
          <br />
          un gran cambio.
        </motion.h2>

        <motion.p {...stagger} transition={{ delay: 0.2, duration: 0.5 }} className="font-body text-[14px] text-muted-stone mb-6">
          Mi proyecto necesita...
        </motion.p>

        {/* Pills */}
        <motion.div {...stagger} transition={{ delay: 0.25, duration: 0.5 }} className="flex flex-wrap gap-3 mb-14">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`rounded-full border px-5 py-2.5 text-[12px] uppercase tracking-[0.1em] font-body transition-all duration-300 ${
                selectedTypes.includes(type)
                  ? "border-white text-white bg-white/8"
                  : "border-white/20 text-white/50 hover:border-white/50 hover:text-white/80"
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...stagger} transition={{ delay: 0.3, duration: 0.5 }}>
              <label className="label-text text-muted-stone block mb-2">Nombre completo</label>
              <input {...register("nombre")} className={inputClass} />
            </motion.div>
            <motion.div {...stagger} transition={{ delay: 0.35, duration: 0.5 }}>
              <label className="label-text text-muted-stone block mb-2">Email</label>
              <input {...register("email")} type="email" className={inputClass} />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...stagger} transition={{ delay: 0.4, duration: 0.5 }}>
              <label className="label-text text-muted-stone block mb-2">Teléfono</label>
              <input {...register("telefono")} className={inputClass} />
            </motion.div>
            <motion.div {...stagger} transition={{ delay: 0.45, duration: 0.5 }}>
              <label className="label-text text-muted-stone block mb-2">Presupuesto estimado</label>
              <input {...register("presupuesto")} className={inputClass} />
            </motion.div>
          </div>
          <motion.div {...stagger} transition={{ delay: 0.5, duration: 0.5 }}>
            <label className="label-text text-muted-stone block mb-2">Contanos sobre tu proyecto</label>
            <textarea {...register("mensaje")} rows={3} className={`${inputClass} resize-none`} />
          </motion.div>
          <motion.div {...stagger} transition={{ delay: 0.55, duration: 0.5 }}>
            <button
              type="submit"
              className="font-body text-[12px] uppercase tracking-[0.16em] bg-white text-charcoal px-10 py-4 hover:bg-terracotta hover:text-white transition-all duration-500 mt-4"
            >
              Enviar solicitud
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
