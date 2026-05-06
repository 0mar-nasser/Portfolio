"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "MongoDB",
      "SQL",
      "RESTful API",
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      "Git & GitHub",
      "Figma",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "GSAP",
      "Framer Motion",
      "UI & Animation libraries",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full mx-auto px-6 md:px-12 py-24 relative overflow-hidden"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-5 relative flex justify-center text-white">
        Technical Arsenal
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-green-400 rounded-full" />
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      ></motion.div>

      <div className="grid lg:grid-cols-3 gap-8 relative z-10">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="relative"
          >
            {/* Terminal Window */}
            <div className="glass-card border-white/10 shadow-2xl overflow-hidden group hover:border-green-400/30 transition-all duration-500">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div className="text-[10px] text-white/30 font-mono tracking-widest uppercase">
                  {category.title.toLowerCase().replace(/\s/g, "")}.json
                </div>
              </div>

              {/* Terminal Content (Code Style) */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex gap-3 mb-2">
                  <span className="text-white/20">01</span>
                  <p className="text-blue-400">"{category.title}": [</p>
                </div>
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-white/20">
                      {String(idx + 2).padStart(2, "0")}
                    </span>
                    <p className="pl-6 text-green-300">
                      "{skill}"{idx < category.skills.length - 1 ? "," : ""}
                    </p>
                  </div>
                ))}
                <div className="flex gap-3 mt-2">
                  <span className="text-white/20">
                    {String(category.skills.length + 2).padStart(2, "0")}
                  </span>
                  <p className="text-blue-400">]</p>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-green-500/10 blur-[40px] rounded-full group-hover:bg-green-500/20 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Large Decorative Symbols */}
      <motion.div
        className="absolute top-1/4 -left-10 text-green-400/5 text-9xl font-mono -z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {"{ }"}
      </motion.div>
    </section>
  );
}
