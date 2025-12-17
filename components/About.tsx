"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        /* bg-dark para el fondo base */
        <section
            id="about"
            className="py-24 px-6 bg-dark relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                {/* Cabecera de sección: 01. Sobre mí */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-beige tracking-tighter">
                        <span className="text-lime font-mono text-2xl mr-2">
                            01.
                        </span>
                        Sobre Mí
                    </h2>
                    <div className="h-[1px] bg-sage/10 flex-grow" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Columna Izquierda: Imagen con detalles cuidados */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative group max-w-[380px] mx-auto md:mx-0"
                    >
                        {/* Marco decorativo en Sage */}
                        <div className="absolute top-6 left-6 w-full h-full border-2 border-sage/10 rounded-[3rem] -z-10 group-hover:top-4 group-hover:left-4 transition-all duration-500"></div>

                        <div className="relative overflow-hidden rounded-[2.8rem] border border-sage/20 bg-card aspect-[4/5] shadow-2xl shadow-sage/5">
                            <Image
                                src="/tu-foto.jpg"
                                alt="Yilin Zhou"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                            />
                        </div>
                    </motion.div>

                    {/* Columna Derecha: Contenido con el nuevo título grande */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        {/* El Saludo Grande y Alegre */}
                        <motion.h3
                            className="text-5xl md:text-6xl font-bold text-lime mb-8 tracking-tighter"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            ¡Hola!
                        </motion.h3>

                        <div className="space-y-6">
                            <p className="text-beige/90 text-lg leading-relaxed">
                                Mi camino en la tecnología comenzó con un Grado
                                Superior en
                                <span className="text-sage font-semibold italic">
                                    {" "}
                                    Desarrollo de Aplicaciones Multiplataforma
                                </span>
                                . Desde el primer día, me cautivó la posibilidad
                                de crear herramientas que no solo funcionen,
                                sino que cuiden cada detalle de la experiencia.
                            </p>

                            <p className="text-beige/70 text-lg leading-relaxed">
                                Actualmente, me sumerjo en el fascinante mundo
                                del{" "}
                                <span className="text-lime font-bold">
                                    Big Data y la IA
                                </span>
                                . Mi objetivo es dotar al software de "alma"
                                analítica, transformando datos complejos en
                                historias y soluciones que resulten{" "}
                                <span className="text-beige font-medium underline decoration-sage/40 underline-offset-4">
                                    humanas y eficientes
                                </span>
                                .
                            </p>

                            <div className="pt-4">
                                <p className="text-beige/70 text-lg leading-relaxed italic border-l-2 border-sage/20 pl-6 py-2">
                                    "Para mí, programar es el arte de equilibrar
                                    la lógica robusta con una sensibilidad
                                    especial por lo que el usuario siente."
                                </p>
                            </div>

                            {/* Tags de detalle final usando Sage y Lime */}
                            <div className="flex gap-3 pt-4">
                                <span className="px-4 py-1.5 rounded-full border border-sage/20 bg-sage/5 text-sage text-xs font-mono">
                                    + Data Scientist
                                </span>
                                <span className="px-4 py-1.5 rounded-full border border-lime/20 bg-lime/5 text-lime text-xs font-mono">
                                    + AI Enthusiast
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
