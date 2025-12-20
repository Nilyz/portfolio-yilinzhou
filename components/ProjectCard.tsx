"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    link: string;
    type: string;
}

export function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-card border border-sage/10 rounded-[2rem] overflow-hidden flex flex-col h-full shadow-2xl hover:border-sage/40 transition-all duration-500 shadow-xl shadow-sage/3"
        >
            {/* CABECERA ESTILO TERMINAL */}
            <div className="bg-background/50 px-5 py-4 border-b border-sage/5 flex items-center justify-between backdrop-blur-sm ">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/30 group-hover:bg-red-400/70 transition-colors duration-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/30 group-hover:bg-amber-400/70 transition-colors duration-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-lime/30 group-hover:bg-lime/70 transition-colors duration-300" />
                </div>

                <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-sage/40 group-hover:text-sage transition-colors" />
                    <span className="text-[10px] font-mono text-sage/40 lowercase tracking-tight group-hover:text-sage/70 transition-colors">
                        yilin_zhou@projects: ~/
                        {project.title.toLowerCase().replace(/\s+/g, "_")}.py
                    </span>
                </div>
            </div>
            {/* CONTENEDOR DE IMAGEN PREVIEW */}
            <div className="relative h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10 opacity-80" />

                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Enlaces flotantes con estilo Sage */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                        href={project.github}
                        target="_blank"
                        className="p-2.5 bg-background/90 backdrop-blur-md border border-sage/10 rounded-xl text-sage hover:bg-lime hover:text-background transition-all shadow-xl"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href={project.link}
                        target="_blank"
                        className="p-2.5 bg-background/90 backdrop-blur-md border border-sage/10 rounded-xl text-sage hover:bg-lime hover:text-background transition-all shadow-xl"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* CONTENIDO DE LA TARJETA */}
            <div className="p-7 flex-grow flex flex-col">
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-sage text-[10px] font-bold uppercase tracking-widest bg-sage/5 px-2 py-0.5 rounded border border-sage/10">
                            {project.type}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-beige group-hover:text-lime transition-colors duration-300">
                        {project.title}
                    </h3>
                </div>

                <p className="text-beige/60 text-sm leading-relaxed mb-8 border-l border-sage/10 pl-4 py-1 italic">
                    {project.description}
                </p>

                {/* TECNOLOGÍAS*/}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-[9px] font-mono text-sage/60 bg-background/40 border border-sage/10 px-2.5 py-1 rounded-lg group-hover:border-sage/30 group-hover:text-lime/70 transition-colors"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
