"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex items-center gap-2 mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Proyectos Destacados
                    </h2>
                    <div className="h-[1px] bg-slate-800 flex-grow ml-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
