"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Database,
    Code2,
    BrainCircuit,
    Layout,
} from "lucide-react";

const skillCategories = [
    {
        title: "Data Science & IA",
        icon: <BrainCircuit className="text-purple-500" />,
        skills: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-Learn",
            "TensorFlow",
            "Gemini API",
        ],
        className: "md:col-span-2 bg-purple-500/5 border-purple-500/20",
    },
    {
        title: "Big Data & DB",
        icon: <Database className="text-emerald-500" />,
        skills: ["SQL", "PostgreSQL", "MongoDB", "PySpark", "Hadoop"],
        className: "md:col-span-1 bg-emerald-500/5 border-emerald-500/20",
    },
    {
        title: "Development (DAM)",
        icon: <Code2 className="text-blue-500" />,
        skills: ["Java", "Kotlin", "JavaScript", "TypeScript", "C#"],
        className: "md:col-span-1 bg-blue-500/5 border-blue-500/20",
    },
    {
        title: "Frontend & Tools",
        icon: <Layout className="text-amber-500" />,
        skills: ["React", "Next.js", "Tailwind CSS", "Git", "Docker"],
        className: "md:col-span-2 bg-amber-500/5 border-amber-500/20",
    },
];

export default function Skills() {
    return (
        <section id="tech" className="py-24 px-6 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex items-center gap-2 mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Skills & Tools
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-3xl border backdrop-blur-sm ${cat.className} hover:scale-[1.01] transition-all duration-300`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-slate-900 rounded-lg">
                                    {cat.icon}
                                </div>
                                <h3 className="text-white font-bold text-lg">
                                    {cat.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-slate-900/50 border border-slate-800 text-slate-400 text-xs font-mono rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
