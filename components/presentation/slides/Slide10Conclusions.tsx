"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";

const achieved = [
  "Flujo principal de entrenamiento (planes, rutinas, Modo Zen)",
  "JWT Auth + BCrypt + Multilingual (EN/ES/CA)",
  "Analíticas avanzadas (10+ gráficas)",
  "Panel personalizable (offline-first)",
  "Google OAuth + Correos post-entrenamiento",
  "Colección Postman (38 peticiones / 120+ aserciones)",
  "Inserción de datos de prueba SQL",
  "PoC de IA con Flask",
];

const notAchieved = [
  { text: "CI/CD Pipeline", note: "sustituido por automatización en Postman" },
  { text: "Temas personalizables", note: "previsto para V3" },
  { text: "Integración nativa de IA", note: "intencional — el Flask PoC demuestra el concepto" },
];

const problemsSolved = [
  {
    problem: "Desajuste de client ID en Google OAuth",
    fix: "Corregido con Web Client ID en Android Credential Manager",
  },
  {
    problem: "Datos desactualizados en el panel después de entrenar",
    fix: "Sincronización en segundo plano con WorkManager al restaurar conectividad",
  },
  {
    problem: "Confusión en la navegación de entrenamientos",
    fix: "Rediseño del estado vacío con creación guiada paso a paso",
  },
];

export default function Slide10Conclusions() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col px-12 py-10 pb-14 relative overflow-hidden">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-oswald font-bold text-[44px] text-white tracking-tight mb-6"
      >
        CONCLUSIONES
      </motion.h2>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* LEFT — Achieved */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="flex flex-col"
          style={{ flex: 1 }}
        >
          <h3 className="font-oswald font-bold text-[22px] text-malachite mb-3 flex items-center gap-2">
            <span style={{ textShadow: "0 0 12px rgba(0,230,118,0.4)" }}>LOGRADO</span>
          </h3>
          <motion.div
            className="flex flex-col gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {achieved.map((item) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="bg-shadow-grey border-l-[3px] border-malachite rounded-r-lg px-3 py-2 flex items-center gap-2"
              >
                <span className="text-malachite text-[10px]">✓</span>
                <span className="font-inter text-[12px] text-alabaster-grey/75">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Not Achieved + Problems */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="flex flex-col gap-4"
          style={{ flex: 1 }}
        >
          {/* Not achieved */}
          <div>
            <h3 className="font-oswald font-bold text-[22px] text-blazing-flame mb-3">
              NO LOGRADO
            </h3>
            <motion.div
              className="flex flex-col gap-2"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {notAchieved.map(({ text, note }) => (
                <motion.div
                  key={text}
                  variants={staggerItem}
                  className="bg-shadow-grey border-l-[3px] border-blazing-flame rounded-r-lg px-3 py-2 flex items-center gap-2"
                >
                  <span className="text-blazing-flame text-[10px]">✕</span>
                  <div>
                    <span className="font-inter text-[13px] text-white">{text}</span>
                    <span className="font-inter text-[11px] text-white/35 ml-2">— {note}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="border-t border-white/[0.07]" />

          {/* Problems solved */}
          <div>
            <h3 className="font-oswald font-bold text-[18px] text-crayola-blue mb-3 tracking-wide">
              PROBLEMAS RESUELTOS
            </h3>
            <motion.div
              className="flex flex-col gap-2"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {problemsSolved.map(({ problem, fix }) => (
                <motion.div
                  key={problem}
                  variants={staggerItem}
                  className="bg-shadow-grey border-l-[3px] border-crayola-blue rounded-r-lg px-3 py-2 flex flex-col gap-0.5"
                >
                  <span className="font-inter text-[12px] text-white font-medium">{problem}</span>
                  <span className="font-inter text-[11px] text-alabaster-grey/45">→ {fix}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
