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
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-mono text-lime text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.4em] mb-4"
                >
                    Hola, soy
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-heading text-5xl md:text-9xl font-black tracking-tighter text-beige mb-4 md:mb-6"
                >
                    Yilin Zhou
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="font-heading text-xl md:text-4xl font-bold text-lime/90 tracking-tight mb-6 leading-tight max-w-md md:max-w-none"
                >
                    Desarrolladora Full Stack{" "}
                    <span className="text-beige hidden md:inline">·</span>{" "}
                    <span className="block md:inline text-beige/80 md:text-lime/90 mt-1 md:mt-0">
                        IA & Big Data
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-xs md:max-w-lg text-sm md:text-lg text-beige/70 leading-relaxed mb-8 md:mb-10"
                >
                    Desarrolladora{" "}
                    <span className="text-sage/90 font-semibold ">
                        Full Stack
                    </span>{" "}
                    con pasión por el diseño UX/UI, actualmente especializándome
                    como estudiante de
                    <span className="text-sage font-semibold">
                        {" "}
                        Big Data e Inteligencia Artificial
                    </span>
                    .
                </motion.p>

                {/* Grupo de Botones */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto"
                >
                    {/* Botón Principal*/}
                    <a
                        href="#projects"
                        className="pointer-events-auto font-heading group relative inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 font-bold text-dark transition-all duration-300 bg-beige rounded-full hover:scale-105 shadow-lg shadow-beige/20 hover:bg-lime hover:shadow-lime/20 text-sm md:text-base"
                    >
                        Explorar mi trabajo
                        <svg
                            className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
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

                    {/*Botón CV*/}
                    <a
                        href="/YilinZhou_cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="w-full md:w-auto pointer-events-auto group inline-flex items-center justify-center px-8 py-3 md:px-6 md:py-4 border border-beige/30 rounded-full text-beige hover:bg-beige/10 hover:border-lime hover:text-lime transition-all duration-300 backdrop-blur-sm"
                        aria-label="Descargar CV"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>

                        <span className="md:hidden ml-2 font-heading font-bold text-sm">
                            Descargar CV
                        </span>
                        <span className="hidden md:inline-block ml-2 font-heading font-bold text-sm">
                            CV
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Indicador de scroll animado*/}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-[1px] h-10 md:h-14 rounded-full bg-gradient-to-b from-lime to-transparent" />
            </motion.div>
        </div>
    );
}
