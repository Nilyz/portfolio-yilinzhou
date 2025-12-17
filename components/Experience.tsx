"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Star, Sparkles } from "lucide-react";

const events = [
    {
        year: "2024",
        title: "Desarrollo Web",
        desc: "Fundamentos de programación y arquitectura de software.",
        icon: <Star className="w-5 h-5" />,
        styles: "bg-soft-grey text-dark shadow-soft-grey/10",
        accent: "text-dark/60",
    },
    {
        year: "2025",
        title: "Desarrollo Multiplataforma",
        desc: "Inmersión en Big Data, modelos predictivos y Python.",
        icon: <GraduationCap className="w-5 h-5" />,
        styles: "bg-beige text-dark shadow-beige/10",
        accent: "text-dark/60",
    },
    {
        year: "Hoy",
        title: "Especialización IA & Big Data",
        desc: "Soluciones que unen desarrollo robusto con datos.",
        icon: <Sparkles className="w-5 h-5" />,
        styles: "bg-sage text-dark shadow-sage/10",
        accent: "text-dark/60",
    },
];

export default function Journey() {
    return (
        <section className="py-24 px-6 bg-dark overflow-hidden">
            {" "}
            <div className="max-w-6xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-beige tracking-tighter">
                        <span className="text-lime font-mono text-2xl mr-2">
                            02.
                        </span>
                        Mi Trayectoria
                    </h2>
                    <div className="h-[2px] bg-sage/10 flex-grow" />
                </motion.div>

                <div className="relative flex flex-col md:flex-row gap-12 md:gap-14 justify-center items-stretch">
                    <div className="absolute top-1/2 left-0 w-full hidden md:flex items-center -translate-y-1/2 z-0 pointer-events-none">
                        <div className="h-[4px] bg-sage flex-grow" />
                        <div
                            className="w-5 h-8 bg-sage ]"
                            style={{
                                clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                            }}
                        />
                    </div>

                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative z-10 w-full md:max-w-[320px] p-8 rounded-[2.5rem] shadow-xl border-none transition-all hover:scale-[1.05] duration-300 flex flex-col ${event.styles}`}
                        >
                            <div className="w-12 h-12 bg-dark/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-dark">
                                {event.icon}
                            </div>

                            <span
                                className={`font-mono text-[11px] font-bold uppercase tracking-widest ${event.accent}`}
                            >
                                {event.year}
                            </span>

                            <h3 className="text-dark font-black text-lg mt-1 tracking-tight leading-tight">
                                {event.title}
                            </h3>

                            <p className="text-dark/70 text-sm mt-3 leading-relaxed font-medium">
                                {event.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
