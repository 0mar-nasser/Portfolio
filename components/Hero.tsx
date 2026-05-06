"use client";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      id="home"
      className="my-20 max-w-300 mx-auto px-6 pt-12 pb-32 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-1/2">
        <div className="mb-8">
          <motion.h1
            className="font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="text-[56px] md:text-[64px] block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Omar Nasser
            </motion.span>

            <motion.span
              className="text-[28px] md:text-[32px] text-green-300 block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Frontend Developer
            </motion.span>

            <motion.span
              className="text-[28px] md:text-[32px] block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              & UI/Ux Designer
            </motion.span>
          </motion.h1>
        </div>

        <div className="flex gap-4 pt-4">
          <motion.button
            className="relative px-6 py-3 rounded-full text-white font-medium overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
          >
            {/* Glass Background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full" />

            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0"
              variants={{
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <motion.div
              className="relative flex items-center gap-2"
              variants={{
                hover: { x: 5 },
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <a href="#projects" className="tracking-wide">
                View Projects
              </a>

              {/* Arrow */}
              <motion.span
                variants={{
                  hover: { x: 5 },
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                →
              </motion.span>
            </motion.div>
          </motion.button>
          {/* Start */}
          <motion.button
            className="relative z-10 text-white text-sm font-medium rounded-full cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-green-400/20 to-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Main Layer */}
            <motion.div
              className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
              variants={{
                hover: {
                  scale: 1.05,
                  borderColor: "#4ade80",
                },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <span className="tracking-wide">Download CV</span>
            </motion.div>

            {/* Sliding Download Layer */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold"
              initial={{ y: "100%" }}
              variants={{
                hover: { y: "0%" },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <a href="/CV/web-dev_resume.pdf" download>
                  Download
                </a>{" "}
              </motion.div>
            </motion.div>
          </motion.button>
          {/* End */}
        </div>
      </div>

      {/* Floating Background Symbols */}
      <motion.div
        className="md:block absolute -top-0 -left-0 text-green-400/20 text-6xl font-mono select-none pointer-events-none"
        animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {"{ }"}
      </motion.div>
      <motion.div
        className="md:block absolute -right-0 text-green-400/20 text-6xl font-mono select-none pointer-events-none"
        animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        {"</>"}
      </motion.div>
      <div className="w-full md:w-[50%] h-[400px] md:h-[600px] relative md:absolute right-0 top-0 pointer-events-none flex items-center justify-center overflow-hidden mt-10 md:mt-20">
        <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
          {/* --- Main Profile Hub --- */}
          <motion.div
            className="relative z-40 w-72 h-90 glass-card p-4 flex flex-col gap-4 border-white/20 shadow-[0_0_50px_rgba(74,222,128,0.1)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 10 }}
            transition={{ duration: 10, ease: "easeOut" }}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-auto w-full rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/assets/me1.png"
                alt="Omar Nasser"
                className="w-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f17] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* --- Orbiting Elements --- */}

          {/* Tech Orbit 1: React */}
          <motion.div
            className="absolute z-30 w-12 h-12 glass-card flex items-center justify-center border-emerald-400/30"
            animate={{
              x: [180, 200, 180],
              y: [-120, -100, -120],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-blue-400 font-bold text-xs">React</span>
          </motion.div>

          {/* Tech Orbit 2: Node.js */}
          <motion.div
            className="absolute z-30 w-12 h-12 glass-card flex items-center justify-center border-emerald-400/30"
            animate={{
              x: [-160, -180, -160],
              y: [100, 120, 100],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-green-500 font-bold text-[10px]">Node</span>
          </motion.div>

          {/* Tech Orbit 3: Next.js */}
          <motion.div
            className="absolute z-30 w-12 h-12 glass-card flex items-center justify-center border-emerald-400/30"
            animate={{
              x: [-160, -180, -160],
              y: [-120, -140, -120],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white/80 font-bold text-[10px]">Next</span>
          </motion.div>

          {/* Tech Orbit 4: TypeScript */}
          <motion.div
            className="absolute z-30 w-10 h-10 glass-card flex items-center justify-center border-emerald-400/30"
            animate={{
              x: [170, 190, 180],
              y: [120, 140, 120],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-blue-500 font-bold text-[10px]">TS</span>
          </motion.div>

          {/* Tech Orbit 5: JavaScript */}
          <motion.div
            className="absolute z-30 w-10 h-10 glass-card flex items-center justify-center border-emerald-400/30"
            animate={{
              x: [220, 240, 220],
              y: [0, 20, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-yellow-400 font-bold text-[10px]">JS</span>
          </motion.div>

          {/* Tech Orbit 6: Tailwind */}
          <motion.div
            className="absolute z-30 w-14 h-14 glass-card flex items-center justify-center border-emerald-400/30"
            animate={{
              x: [-220, -200, -210],
              y: [-20, 0, -20],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-cyan-400 font-bold text-[8px]">Tailwind</span>
          </motion.div>

          {/* Tech Orbit 7: MongoDB */}
          <motion.div
            className="absolute z-30 w-12 h-12 glass-card flex items-center justify-center border-emerald-400/30"
            animate={{
              x: [0, 20, 0],
              y: [-220, -200, -220],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-green-400 font-bold text-[9px]">MongoDB</span>
          </motion.div>

          {/* Decorative Data Lines */}
          <svg
            className="absolute w-[600px] h-[600px] opacity-20 pointer-events-none"
            viewBox="0 0 600 600"
          >
            <circle
              cx="300"
              cy="300"
              r="220"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              strokeDasharray="10 20"
            />
            <circle
              cx="300"
              cy="300"
              r="180"
              fill="none"
              stroke="rgba(74,222,128,0.5)"
              strokeWidth="1"
              strokeDasharray="5 15"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
