"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Star } from "lucide-react";

const events = [
    {
        year: "2022",
        title: "Inicio en DAM",
        desc: "Fundamentos de programación y bases de datos.",
        icon: <GraduationCap className="text-blue-500" />,
    },
    {
        year: "2024",
        title: "Especialización IA",
        desc: "Enfoque en Big Data, Python y Machine Learning.",
        icon: <Star className="text-purple-500" />,
    },
    {
        year: "Hoy",
        title: "Full Stack & Data",
        desc: "Buscando soluciones que unan software e inteligencia.",
        icon: <Briefcase className="text-emerald-500" />,
    },
];

export default function Journey() {
    return (
        <section className="py-24 px-6 bg-slate-950 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-16 text-center">
                    Mi Trayectoria
                </h2>

                <div className="relative flex flex-col md:flex-row gap-8 justify-between">
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 hidden md:block -translate-y-1/2 z-0" />

                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative z-10 flex-1 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm"
                        >
                            <div className="w-12 h-12 bg-slate-950 border border-slate-700 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                {event.icon}
                            </div>
                            <span className="text-blue-500 font-mono text-sm">
                                {event.year}
                            </span>
                            <h3 className="text-white font-bold text-lg mt-1">
                                {event.title}
                            </h3>
                            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                                {event.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
