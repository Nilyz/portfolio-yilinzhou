
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">
      <Hero />
      {/* El resto de secciones irán debajo del Hero conforme hagas scroll */}
    </main>
  );
}