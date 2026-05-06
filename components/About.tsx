"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full mx-auto px-6 py-24 relative overflow-hidden"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-10 relative flex justify-center">
        About Me
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-green-400 rounded-full" />
      </h2>

      <div className="flex justify-center items-center w-full relative z-10">
        {/* Floating Background Symbols */}
        <motion.div
          className="md:block absolute -top-10 -left-10 text-green-400/20 text-6xl font-mono select-none pointer-events-none"
          animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          {"{ }"}
        </motion.div>
        <motion.div
          className="md:block absolute -bottom-10 -right-10 text-green-400/20 text-6xl font-mono select-none pointer-events-none"
          animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          {"</>"}
        </motion.div>

        <motion.div
          className="w-full md:w-[80%] lg:w-[70%] glass-card p-5 md:p-10 border-white/10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-400/30 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-400/30 rounded-br-2xl" />

          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto relative z-10">
            <p>
              I'm{" "}
              <span className="text-green-300 font-semibold">Omar Nasser</span>,
              a Web Developer with{" "}
              <span className="text-green-300 font-semibold">+2 years</span> of
              experience developing responsive and user-friendly web
              applications.
            </p>
            <p>
              Proficient in front-end technologies and junior in back-end
              development using Node.js, Express.js, and MongoDB. I focus on
              designing and implementing scalable APIs, with a strong commitment
              to clean code, high performance, and exceptional user experience.
            </p>

            {/* Stats Grid */}
            <div className="pt-5 grid grid-cols-2 gap-6 max-w-md mx-auto">
              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-green-400/30 transition-all relative group"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
              >
                <h4 className="text-green-400 font-bold text-4xl mb-3 mt-4">2+</h4>
                <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">
                  Years Experience
                </p>
              </motion.div>

              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-green-400/30 transition-all relative group"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
              >
                <h4 className="text-green-400 font-bold text-4xl mb-3 mt-5">10+</h4>
                <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">
                  Projects Done
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
