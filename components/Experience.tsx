"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Sparkles, ArrowUpRight } from "lucide-react";

const events = [
    {
        year: "2022 - 2024",
        title: "Desarrollo de Aplicaciones Web",
        desc: "Formación en desarrollo web centrada en los fundamentos de HTML, CSS y JavaScript, así como en buenas prácticas de maquetación y lógica de frontend.",
        link: "https://www.linkedin.com/in/yilinzzhou/details/education/",
        icon: <Code2 className="w-5 h-5" />,
        styles: "bg-soft-grey text-dark shadow-soft-grey/10",
        accent: "text-dark/60",
    },
    {
        year: "2023 - 2025",
        title: "Desarrollo Multiplataforma",
        desc: "Grado Superior en Desarrollo Multiplataforma, reforzando la programación orientada a objetos, el desarrollo de aplicaciones y las bases de sistemas y bases de datos.",
        link: "https://www.linkedin.com/in/yilinzzhou/details/education/",
        icon: <GraduationCap className="w-5 h-5" />,
        styles: "bg-beige text-dark shadow-beige/10",
        accent: "text-dark/60",
    },
    {
        year: "Hoy",
        title: "Especialización en IA & Big Data",
        desc: "Formación en Big Data e Inteligencia Artificial, incluyendo modelos de lenguaje, técnicas de recuperación de información (RAG) y procesamiento de grandes volúmenes de datos.",
        link: "https://www.linkedin.com/in/yilinzzhou/details/education/", 
        icon: <Sparkles className="w-5 h-5" />,
        styles: "bg-sage text-dark shadow-sage/10",
        accent: "text-dark/60",
    },
];

export default function Journey() {
    return (
        <section className="py-24 px-6 bg-dark overflow-hidden">
            <div className="max-w-6xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-10 md:mb-16"
                >
                    <h2 className="font-heading text-2xl md:text-4xl font-bold text-beige tracking-tighter">
                        <span className="text-lime font-mono text-xl md:text-2xl mr-2">
                            02.
                        </span>
                        Mi Trayectoria
                    </h2>
                    <div className="h-[1.5px] bg-sage/10 flex-grow" />
                </motion.div>

                <div className="relative flex flex-col md:flex-row gap-8 md:gap-14 justify-center items-stretch">
                    {/* Línea conectora (Solo visible en escritorio) */}
                    <div className="absolute top-1/2 left-0 w-full hidden md:flex items-center -translate-y-1/2 z-0 pointer-events-none">
                        <div className="h-[4px] bg-sage flex-grow" />
                        <div
                            className="w-5 h-8 bg-sage"
                            style={{
                                clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                            }}
                        />
                    </div>

                    {events.map((event, i) => (
                        <motion.a
                            href={event.link}
                            target={
                                event.link.startsWith("http")
                                    ? "_blank"
                                    : "_self"
                            }
                            rel="noopener noreferrer"
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className={`group relative z-10 w-full md:max-w-[320px] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border-none transition-all hover:scale-[1.05] hover:-translate-y-2 duration-300 flex flex-col ${event.styles}`}
                        >
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowUpRight className="w-5 h-5 text-dark/40" />
                            </div>

                            <div className="w-12 h-12 bg-dark/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-dark">
                                {event.icon}
                            </div>

                            <span
                                className={`font-mono text-[11px] font-bold uppercase tracking-widest ${event.accent}`}
                            >
                                {event.year}
                            </span>

                            <h3 className="font-heading text-dark font-black text-lg mt-1 tracking-tight leading-tight">
                                {event.title}
                            </h3>

                            <p className="text-dark/70 text-sm mt-3 leading-relaxed font-medium">
                                {event.desc}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}