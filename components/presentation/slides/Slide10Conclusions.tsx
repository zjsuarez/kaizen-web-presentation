"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";

const achieved = [
  "Core training loop (plans, routines, Zen Mode)",
  "JWT Auth + BCrypt + Multilingual (EN/ES/CA)",
  "Advanced analytics (10+ charts)",
  "Customizable dashboard (offline-first)",
  "Google OAuth + Post-workout emails",
  "Postman collection (38 req / 120+ assertions)",
  "SQL dummy data seeding",
  "AI Flask PoC",
];

const notAchieved = [
  { text: "CI/CD Pipeline", note: "replaced by Postman automation" },
  { text: "Customizable themes", note: "planned V3" },
  { text: "Native AI integration", note: "intentional — Flask PoC proves concept" },
];

const problemsSolved = [
  {
    problem: "Google OAuth client ID mismatch",
    fix: "Fixed with Web Client ID in Android Credential Manager",
  },
  {
    problem: "Dashboard stale data after workout",
    fix: "WorkManager background sync on connectivity restore",
  },
  {
    problem: "Workouts navigation confusion",
    fix: "Empty state redesign with step-by-step guided creation",
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
        CONCLUSIONS
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
            <span style={{ textShadow: "0 0 12px rgba(0,230,118,0.4)" }}>ACHIEVED</span>
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
              NOT ACHIEVED
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
              PROBLEMS SOLVED
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
