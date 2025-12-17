// src/components/Hero.tsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h2 className="text-blue-400 font-mono mb-4">
                    Hola, mi nombre es
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-500 bg-clip-text text-transparent">
                    Tu Nombre Aquí
                </h1>
                <p className="text-gray-400 max-w-2xl text-lg md:text-xl mb-10">
                    Estudiante de{" "}
                    <span className="text-blue-300">Big Data e IA</span> con
                    base en desarrollo multiplataforma. Especializado en crear
                    soluciones inteligentes y escalables.
                </p>

                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all">
                        Ver Proyectos
                    </button>
                    <button className="px-8 py-3 border border-gray-700 hover:bg-gray-800 rounded-full font-medium transition-all">
                        Contactar
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
