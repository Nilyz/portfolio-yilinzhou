import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen color-soft-bg">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

    </main>
  );
}