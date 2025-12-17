"use client";
import { motion } from "framer-motion";
import { Boxes } from "@/components/ui/background-boxes";

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 bg-dark">
            {/* Máscara de fondo para suavizar los cuadros */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:radial-gradient(transparent,white)]" />

            <Boxes />

            {/* Gradiente de profundidad para fundir con el fondo dark */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-gradient-to-t from-dark via-transparent to-transparent" />

            <div className="relative z-10 flex flex-col items-center">
                {/* 1. "Hola, soy" (Pequeño y en fuente mono para el toque tech) */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lime md:text-sm uppercase tracking-[0.4em] mb-4"
                >
                    Hola, soy
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl md:text-9xl font-black tracking-tighter text-beige mb-4"
                >
                    Yilin Zhou
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl md:text-4xl font-bold text-lime/90 tracking-tight mb-6"
                >
                    Desarrolladora Full Stack{" "}
                    <span className="text-beige">·</span> IA & Big Data
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-lg text-base md:text-lg text-beige/60 leading-relaxed mb-10"
                >
                    Desarrolladora{" "}
                    <span className="text-sage/90 font-semibold ">
                        multiplataforma
                    </span>{" "}
                    con pasión por el diseño UX/UI, actualmente especializándome
                    como estudiante de
                    <span className="text-sage font-semibold">
                        {" "}
                        Big Data e Inteligencia Artificial
                    </span>
                    .
                </motion.p>

                {/* Botón de acción con sombra Lime */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-dark transition-all duration-300 bg-lime rounded-full hover:scale-105 shadow-[0_0_30px_rgba(197,226,132,0.25)]"
                    >
                        Explorar mi trabajo
                        <svg
                            className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>

            {/* Indicador de scroll animado */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-[1px] h-14 rounded-full bg-gradient-to-b from-sage to-transparent" />
            </motion.div>
        </div>
    );
}
