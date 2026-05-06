"use client";

import { motion } from "framer-motion";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center mt-6 sticky top-0 z-50 px-4 md:px-2"
    >
      <div
        className="
        flex items-center gap-5 md:gap-10
        bg-white/5 backdrop-blur-xl
        border border-white/10
        px-8 py-4
        rounded-bl-3xl rounded-br-3xl
        shadow-[1px_10px_30px_rgba(0,0,0,0.1)]
        hover:shadow-[1px_15px_40px_rgba(0,0,0,0.3)]
        transition-shadow duration-300
      "
      >
        {links.map((link) => (
          <motion.a
            key={link}
            href={link === "Contact" ? "#contact" : `#${link.toLowerCase()}`}
            className="text-gray-300 relative cursor-pointer"
            whileHover={{ scale: 1.05 , color: "#00ff88ff" }}
          >
            {link}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
