"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";

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
            className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full hover:border-blue-500/50 transition-all duration-300"
        >
            {/* CONTENEDOR DE IMAGEN PREVIEW */}
            <div className="relative h-48 w-full overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10 opacity-60" />

                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-3 right-3 z-20 flex gap-2">
                    <a
                        href={project.github}
                        className="p-2 bg-slate-950/60 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href={project.link}
                        className="p-2 bg-slate-950/60 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* CONTENIDO DE LA TARJETA */}
            <div className="p-6 flex-grow flex flex-col">
                <div className="mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">
                        {project.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* TECNOLOGÍAS UTILIZADAS*/}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="px-2 py-1 text-[10px] font-mono text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
