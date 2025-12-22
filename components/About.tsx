"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="py-24 px-6 bg-dark relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20"
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-beige tracking-tighter">
                        <span className="text-lime font-mono text-2xl mr-2">
                            01.
                        </span>
                        Sobre Mí
                    </h2>
                    <div className="h-[1px] bg-sage/10 flex-grow" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Columna Izquierda: Imagen */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative group max-w-[380px] mx-auto md:mx-0"
                    >
                        {/* Marco decorativo */}
                        <div className="absolute top-6 left-6 w-full h-full border-2 border-sage/10 rounded-[3rem] -z-10 group-hover:top-4 group-hover:left-4 transition-all duration-500"></div>

                        {/* Contenedor de imagen con sombra Sage estilo glow */}
                        <div className="relative overflow-hidden rounded-[2.8rem] border border-sage/20 bg-card aspect-[4/5] shadow-2xl shadow-sage/20 hover:shadow-sage/50 transition-all duration-500">
                            <Image
                                src="/yilin_photo.jpg"
                                alt="Yilin Zhou"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Columna Derecha*/}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <motion.h3
                            className="font-heading text-5xl md:text-6xl font-bold text-lime mb-8 tracking-tighter"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            ¡Hola!
                        </motion.h3>

                        <div className="space-y-6">
                            <p className="text-beige/90 text-lg leading-relaxed">
                                Mi nombre es{" "}
                                <span className="text-beige font-bold">
                                    Yilin Zhou
                                </span>{" "}
                                y mi formación como desarrolladora comenzó en
                                <span className="text-sage font-semibold ">
                                    {" "}
                                    Desarrollo de Aplicaciones Multiplataforma
                                </span>
                                . Para mí, crear software no es solo escribir
                                código que funcione; es el arte de construir
                                interfaces bonitas, intuitivas y navegables.
                                Creo firmemente que la experiencia del usuario
                                es lo que realmente da vida a un proyecto.
                            </p>

                            <p className="text-beige/90 text-lg leading-relaxed">
                                Actualmente, estoy llevando esa sensibilidad por
                                lo visual y la usabilidad al fascinante campo
                                del
                                <span className="text-sage font-semibold">
                                    {" "}
                                    Big Data y la IA
                                </span>
                                . Mi meta es demostrar que el análisis de datos
                                masivos no tiene por qué ser frío o complejo;
                                puede transformarse en soluciones inteligentes
                                que sigan siendo amables para quien las utiliza.
                            </p>

                            <div className="pt-4">
                                <p className="text-beige/60 italic border-l-2 border-lime/30 pl-6 py-2">
                                    "Para mí, la tecnología perfecta es aquella
                                    que equilibra una lógica robusta con una
                                    estética que invita a quedarse."
                                </p>
                            </div>

                            <div className="flex gap-3 pt-4 flex-wrap">
                                <span className="px-4 py-1.5 rounded-full border border-sage/20 bg-sage/5 text-sage text-xs font-mono">
                                    + Multiplatform Dev
                                </span>
                                <span className="px-4 py-1.5 rounded-full border border-sage/20 bg-lime/5 text-sage text-xs font-mono">
                                    + AI Solutions
                                </span>
                                <span className="px-4 py-1.5 rounded-full border border-sage/20 bg-lime/5 text-sage text-xs font-mono">
                                    + Data Engineering
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}