"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre mí</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative group max-w-[350px] mx-auto"
                    >
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-blue-00/20 rounded-2xl -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
                        
                        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 aspect-[4/5]">
                            <Image 
                                src="/tu-foto.jpg" 
                                alt="Yilin Zhou"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-slate-300 text-lg leading-relaxed">
                            ¡Hola! Soy <span className="text-white font-semibold">Yilin Zhou</span>. Mi camino en la tecnología comenzó con un Grado Superior en <span className="text-blue-400">Desarrollo de Aplicaciones Multiplataforma</span>, donde forjé mi base en lógica de programación y arquitectura de software.
                        </p>
                        
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Actualmente, estoy expandiendo mis horizontes en el mundo del <span className="text-blue-400 font-semibold">Big Data y la IA</span>. Me apasiona la idea de tomar aplicaciones robustas y potenciarlas con modelos inteligentes capaces de procesar y entender grandes volúmenes de información.
                        </p>

                        <p className="text-slate-400 text-lg leading-relaxed">
                            Mi enfoque combina la disciplina del desarrollo de software con la visión analítica del científico de datos, buscando siempre crear soluciones que no solo sean funcionales, sino también <span className="text-white italic">inteligentes</span>.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}