import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </main>
  );
}