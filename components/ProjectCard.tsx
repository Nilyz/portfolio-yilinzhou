"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal } from "lucide-react";
import Image from "next/image";
import { Project } from "@/constants/projects"; // Verifica que la ruta sea correcta

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
            className="group relative bg-slate-950 border border-slate-800 rounded-lg overflow-hidden flex flex-col h-full shadow-2xl hover:border-blue-500/50 transition-all duration-300"
        >
            {/* CABECERA ESTILO TERMINAL */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/50 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500/50 transition-colors" />
                </div>
                <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-slate-500" />
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        project_v1.0.exe
                    </span>
                </div>
            </div>

            {/* CONTENEDOR DE IMAGEN PREVIEW */}
            <div className="relative h-44 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent z-10 opacity-60" />

                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                />

                {/* Enlaces flotantes */}
                <div className="absolute top-3 right-3 z-20 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                        href={project.github}
                        target="_blank"
                        className="p-2 bg-slate-950 border border-slate-800 rounded-md text-white hover:bg-blue-600 transition-colors"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href={project.link}
                        target="_blank"
                        className="p-2 bg-slate-950 border border-slate-800 rounded-md text-white hover:bg-blue-600 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* CONTENIDO DE LA TARJETA */}
            <div className="p-5 flex-grow flex flex-col font-mono">
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-green-500 text-xs">➜</span>
                        <span className="text-[10px] text-blue-400 font-bold uppercase tracking-tighter">
                            {project.type}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed mb-6 border-l-2 border-slate-800 pl-4 py-1 italic">
                    {project.description}
                </p>

                {/* TECNOLOGÍAS (Estilo Tags de Sistema) */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-900">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-[9px] text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
