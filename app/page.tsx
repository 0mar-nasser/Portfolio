import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectsGrid from "@/components/ProjectsGrid";
import Contact from "@/components/Contact";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectsGrid />
      <Contact />
    </main>
  );
}