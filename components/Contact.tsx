"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

export default function Contact() {
  const contactLinks = [
    {
      name: "Email",
      value: "omaraboghazi192002@gmail.com",
      href: "mailto:omaraboghazi192002@gmail.com",
      icon: <FaEnvelope className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      value: "Omar Nasser",
      href: "https://www.linkedin.com/in/omar-naser-3607a725b/",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      value: "0mar-nasser",
      href: "https://github.com/0mar-nasser",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "WhatsApp",
      value: "+971 50 340 7065",
      href: "https://wa.me/971503407065",
      icon: <FaWhatsapp className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
              Connect <br /> 
              <span className="text-white/30 italic font-light">With Me.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              I’m always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions.
            </p>
          </motion.div>

          {/* Minimal Links Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-green-400/30 hover:bg-green-400/[0.02] transition-all duration-500 flex flex-col justify-between h-40"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-2xl bg-white/5 text-gray-400 group-hover:text-green-400 group-hover:bg-green-400/10 transition-all duration-500">
                    {link.icon}
                  </div>
                  <FiArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                </div>
                
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                    {link.name}
                  </p>
                  <p className="text-white text-sm font-medium truncate">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Very subtle background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/[0.02] blur-[120px] rounded-full -z-10" />
    </section>
  );
}
