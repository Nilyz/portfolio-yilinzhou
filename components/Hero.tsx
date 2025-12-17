"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">

            {/* Título Principal */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
            >
                Hola, soy <span className="text-blue-500">Yilin Zhou</span>
            </motion.h1>

            {/* Descripción técnica */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed mb-10"
            >
                Desarrolladora{" "}
                <span className="text-slate-200 font-semibold">
                    Multiplataforma
                </span>{" "}
                especializada en la intersección entre el software robusto y el{" "}
                <span className="text-blue-400 font-semibold">
                    Big Data & IA
                </span>
                . Transformando datos en soluciones inteligentes.
            </motion.p>

            {/* Botón de acción */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <a
                    href="#contact"
                    className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                >
                    Get in touch
                    <svg
                        className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </a>
            </motion.div>
        </div>
    );
}
