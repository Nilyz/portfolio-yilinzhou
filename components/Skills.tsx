"use client";
import React from "react";
import { motion } from "framer-motion";
import { Database, Code2, BrainCircuit, Layout } from "lucide-react";

const skillCategories = [
    {
        title: "Data Science & IA",
        icon: <BrainCircuit className="w-5 h-5" />,
        skills: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-Learn",
            "TensorFlow",
            "Gemini API",
        ],
        className: "md:col-span-2",
        styles: "bg-sage text-dark", 
    },
    {
        title: "Big Data & DB",
        icon: <Database className="w-5 h-5" />,
        skills: ["SQL", "PostgreSQL", "MongoDB", "PySpark", "Hadoop"],
        className: "md:col-span-1",
        styles: "bg-beige text-dark", 
    },
    {
        title: "Development (DAM)",
        icon: <Code2 className="w-5 h-5" />,
        skills: ["Java", "Kotlin", "JavaScript", "TypeScript", "C#"],
        className: "md:col-span-1",
        styles: "bg-beige text-dark", 
    },
    {
        title: "Frontend & Tools",
        icon: <Layout className="w-5 h-5" />,
        skills: ["React", "Next.js", "Tailwind CSS", "Git", "Docker"],
        className: "md:col-span-2",
        styles: "bg-sage text-dark", 
    },
];

export default function Skills() {
    return (
        <section id="tech" className="py-24 px-6 bg-dark">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-beige tracking-tighter">
                        <span className="text-lime font-mono text-2xl mr-2">
                            03.
                        </span>
                        Tecnologías y Habilidades
                    </h2>
                    <div className="h-[1px] bg-sage/10 flex-grow" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] ${cat.className} ${cat.styles}`}
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-dark/10 backdrop-blur-sm rounded-2xl text-dark">
                                        {cat.icon}
                                    </div>
                                    <h3 className="font-black text-xl tracking-tight leading-none">
                                        {cat.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-1.5 bg-dark/5 border border-dark/10 text-dark/80 text-xs font-mono font-bold rounded-xl"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
