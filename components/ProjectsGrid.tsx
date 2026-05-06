"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  repo: string;
}

const projects: Project[] = [
  {
    title: "React Academy",
    description:
      "A modern and responsive educational platform UI for showcasing programming courses and learning content.",
    image: "/assets/Cover.png",
    tags: ["React", "Bootstrap", "Framer Motion", "i18next"],
    link: "https://0mar-nasser.github.io/react-academy-website/",
    repo: "https://github.com/0mar-nasser/react-academy-website",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application that provides real-time weather data for any city using external APIs.",
    image: "/assets/Weather-App.png",
    tags: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Leaflet",
      "OpenWeatherMap API",
    ],
    link: "https://modern-weather-app-sandy.vercel.app/",
    repo: "https://github.com/0mar-nasser/Modern-Weather-App",
  },
  {
    title: "Sport Dashboard",
    description:
      "A modern sports dashboard interface that visualizes data, statistics, and user activities in an organized and interactive layout.",
    image: "/assets/Mockup.png",
    tags: ["React", "Tailwind", "Framer Motion", "GSAP"],
    link: "https://sport-dashboard-eosin.vercel.app/",
    repo: "https://github.com/0mar-nasser/Sport-Dashboard",
  },
  {
    title: "CRUD System",
    description:
      "My first Project, A web application that performs full CRUD operations for managing data using pure JavaScript.",
    image: "/assets/CRUD.png",
    tags: ["Html", "CSS", "JavaScript", "Local Storage"],
    link: "https://0mar-nasser.github.io/CRUD-js/",
    repo: "https://github.com/0mar-nasser/CRUD-js",
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-5 relative inline-block text-white">
          Projects
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-green-400 rounded-full" />
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-[1200px] mx-auto relative z-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative glass-card overflow-hidden border-white/10 hover:border-green-400/30 transition-all duration-500"
          >
            {/* Project Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-auto h-auto object-cover p-4 transition-transform duration-700 group-hover:scale-101"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f17] via-transparent to-transparent opacity-80" />

              {/* Floating Link Icon */}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-[#0b1f17]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill={"currentColor"}
                      viewBox={"0 0 24 24"}
                    >
                      {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                      <path
                        fillRule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </a>
              )}
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-green-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white group/btn relative"
              >
                <span className="relative z-10">EXPLORE PROJECT</span>
                <span className="w-0 h-[2px] bg-green-400 absolute bottom-[-4px] left-0 group-hover/btn:w-full transition-all duration-300" />
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
