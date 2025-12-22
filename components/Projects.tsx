"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-background"> {/* Fondo unificado */}
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-beige tracking-tighter">
                        <span className="text-lime font-mono text-2xl mr-2">04.</span>
                        Proyectos Destacados
                    </h2>
                    <div className="h-[1px] bg-sage/10 flex-grow" />
                </motion.div>

                {/* Grid con espaciado suave */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}