import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950">
      <Hero />
      <About />
      <Skills />
    </main>
  );
}