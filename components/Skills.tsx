"use client";
import React from "react";
import { motion } from "framer-motion";
import { Database, Code2, BrainCircuit, Layout } from "lucide-react";

const skillCategories = [
    {
        title: "UX/UI & Frontend",
        icon: <Layout className="w-4 h-4" />,
        skills: [
            "HTML5", "CSS3", "JavaScript", "TypeScript", "React", 
            "Next.js", "Angular", "Svelte", "Tailwind CSS", "Bootstrap", "Figma"
        ],
        className: "md:col-span-6",
    },
    {
        title: "Software & Backend",
        icon: <Code2 className="w-4 h-4" />,
        skills: [
            "Java", "Kotlin", "Python", "PHP", "Node.js", 
            "Express", "API REST", "Git", "GitHub", "AWS Foundations", "Docker"
        ],
        className: "md:col-span-4",
    },
    {
        title: "Data Engineering",
        icon: <Database className="w-4 h-4" />,
        skills: [
            "MySQL", "PostgreSQL", "MongoDB", "Firebase", "Power BI", 
            "PySpark", "DataBricks", "Pandas", "NumPy", "Matplotlib", "Seaborn", "R"
        ],
        className: "md:col-span-4",
    },
    {
        title: "AI & Intelligence",
        icon: <BrainCircuit className="w-4 h-4" />,
        skills: [
            "Python", "TensorFlow", "LLMs", "LangChain", "RAG", 
            "Llama 3", "Gemini API", "Prompt Engineering", "Scikit-Learn"
        ],
        className: "md:col-span-6",
    },
];

export default function Skills() {
    return (
        <section id="tech" className="py-24 px-6 bg-background">
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

                {/* Grid de 10 columnas para proporciones 6/4 */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-[2rem] border border-sage/10 bg-card/60 backdrop-blur-sm ${cat.className} transition-colors duration-500 hover:border-sage/30 shadow-xl shadow-sage/3 flex flex-col`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-2.5 bg-background border border-sage/10 rounded-xl text-lime">
                                    {cat.icon}
                                </div>
                                <h3 className="text-beige font-bold text-lg tracking-tight">
                                    {cat.title}
                                </h3>
                            </div>

                            {/* CAMBIO AQUÍ: justify-between para distribuir los tags */}
                            <div className="flex flex-wrap gap-y-3 justify-between">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-1.5 bg-background/50 border border-sage/5 text-beige/70 text-sm font-mono rounded-full hover:border-sage/40 hover:text-sage transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                                {/* Elemento invisible para ayudar a la distribución si la última fila tiene pocos items */}
                                <div className="flex-grow h-0" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}