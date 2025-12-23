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
                    className="flex items-center gap-4 mb-10 md:mb-20"
                >
                    <h2 className="font-heading text-2xl md:text-4xl font-bold text-beige tracking-tighter">
                        <span className="text-lime font-mono text-xl md:text-2xl mr-2">
                            01.
                        </span>
                        Sobre Mí
                    </h2>
                    <div className="h-[1.5px] bg-sage/10 flex-grow" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
                    {/* Columna Izquierda: Imagen */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative group w-full max-w-[320px] md:max-w-[380px] mx-auto md:mx-0"
                    >
                        <div className="absolute top-6 left-6 w-full h-full border-2 border-sage/10 rounded-[2.5rem] -z-10 group-hover:top-4 group-hover:left-4 transition-all duration-500"></div>

                        <div className="group relative w-full h-full aspect-square md:aspect-[4/5] overflow-hidden rounded-[2rem] bg-dark border border-sage/10 shadow-2xl shadow-black/50">
                            {/* Imagen*/}
                            <Image
                                src="/yilin_photo.jpg"
                                alt="Yilin Zhou"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top opacity-100 md:opacity-80 md:group-hover:opacity-100 md:group-hover:scale-105 transition-all duration-700"
                                priority
                            />

                            {/* Esquinas del visor*/}
                            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-lime/50 transition-all duration-500 md:group-hover:w-12 md:group-hover:h-12 md:group-hover:border-lime rounded-tl-lg"></div>
                            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-lime/50 transition-all duration-500 md:group-hover:w-12 md:group-hover:h-12 md:group-hover:border-lime rounded-tr-lg"></div>
                            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-lime/50 transition-all duration-500 md:group-hover:w-12 md:group-hover:h-12 md:group-hover:border-lime rounded-bl-lg"></div>
                            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-lime/50 transition-all duration-500 md:group-hover:w-12 md:group-hover:h-12 md:group-hover:border-lime rounded-br-lg"></div>
                            {/* Línea animada superior} */}
                            <div className="hidden md:block absolute top-0 left-0 w-full h-[2px] bg-lime/80 shadow-[0_0_15px_rgba(197,226,132,0.8)] translate-y-[-100%] group-hover:translate-y-[500px] transition-transform duration-0 group-hover:duration-[2s] ease-linear"></div>

                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-dark/70 backdrop-blur-md border border-lime/30 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                <p className="text-[10px] font-mono text-lime uppercase tracking-widest whitespace-nowrap">
                                    Target: Developer
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Columna Derecha */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <motion.h3
                            className="font-heading text-4xl md:text-6xl font-bold text-lime mb-6 md:mb-8 tracking-tighter"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            ¡Hola!
                        </motion.h3>

                        <div className="space-y-6">
                            <p className="text-beige/90 text-base md:text-lg leading-relaxed">
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
                                código que funcione, es el arte de construir
                                interfaces bonitas, intuitivas y navegables.
                                Creo firmemente que la experiencia del usuario
                                es lo que realmente da vida a un proyecto.
                            </p>

                            <p className="text-beige/90 text-base md:text-lg leading-relaxed">
                                Esa misma curiosidad me ha llevado ahora al
                                mundo del{" "}
                                <span className="text-sage font-semibold">
                                    Big Data y la Inteligencia Artificial
                                </span>
                                . Me fascina descubrir qué esconden los datos,
                                pero siempre manteniendo el foco en las
                                personas. Mi reto es fusionar la lógica fría de
                                los algoritmos con interfaces cálidas,
                                demostrando que la tecnología más potente
                                también puede ser fácil de usar.
                            </p>

                            <div className="pt-4">
                                <p className="text-beige/60 italic border-l-2 border-lime/30 pl-6 py-2 text-sm md:text-base">
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
