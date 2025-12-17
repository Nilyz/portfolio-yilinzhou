import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-0 pointer-events-none" />
      <Boxes />
      <div className="relative z-10 pointer-events-none select-none">
        <h1 className="text-4xl md:text-7xl font-bold text-white">
          Data & AI Portfolio
        </h1>
        <p className="text-center mt-2 text-neutral-300">
          Desliza el ratón para interactuar con el fondo
        </p>
      </div>
    </main>
  );
}