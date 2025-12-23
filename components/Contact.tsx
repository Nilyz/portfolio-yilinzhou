"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, Send, Sparkles } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-12 md:py-24 px-6 bg-dark">
            <div className="max-w-6xl mx-auto">
                {/* TÍTULO */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-10 md:mb-16"
                >
                    <h2 className="font-heading text-2xl md:text-4xl font-bold text-beige tracking-tighter">
                        <span className="text-lime font-mono text-xl md:text-2xl mr-2">
                            05.
                        </span>
                        Contacta Conmigo
                    </h2>
                    <div className="h-[1.5px] bg-sage/10 flex-grow" />
                </motion.div>

                {/* Tarjeta Principal de Contacto */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-card/60 border border-sage/10 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-sage/3 relative overflow-hidden"
                >
                    <Sparkles className="absolute top-6 right-6 text-sage/10 w-8 h-8 md:w-12 md:h-12" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="text-left space-y-6">
                            <h3 className="font-heading text-2xl font-bold text-beige tracking-tight">
                                ¿Hablamos?
                            </h3>
                            <p className="text-beige/50 text-sm leading-relaxed">
                                Estoy abierta a oportunidades profesionales,
                                prácticas y proyectos colaborativos relacionados
                                con desarrollo web, multiplataforma o datos e
                                inteligencia artificial.
                            </p>

                            {/* Botón de enviar email*/}
                            <a
                                href="mailto:tu-email@ejemplo.com"
                                className="font-heading inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-lime text-dark font-black rounded-full hover:scale-105 shadow-lg shadow-lime/20 transition-all group hover:bg-beige hover:shadow-beige/20 text-sm md:text-base"
                            >
                                Enviar Email
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>

                        {/* Columna de Enlaces Sociales */}
                        <div className="flex flex-col gap-3">
                            <SocialLink
                                href="https://www.linkedin.com/in/yilinzzhou/"
                                icon={<Linkedin className="w-5 h-5" />}
                                label="LinkedIn"
                                sub="Conectemos profesionalmente"
                                hoverClass="hover:bg-sage"
                            />
                            <SocialLink
                                href="https://github.com/Nilyz"
                                icon={<Github className="w-5 h-5" />}
                                label="GitHub"
                                sub="Mira mis repositorios"
                                hoverClass="hover:bg-beige"
                            />
                            <SocialLink
                                href="/YilinZhou_cv.pdf"
                                icon={<FileText className="w-5 h-5" />}
                                label="Descargar CV"
                                sub="Versión detallada en PDF"
                                hoverClass="hover:bg-soft-grey"
                                isDownload={true}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({
    href,
    icon,
    label,
    sub,
    hoverClass,
    isDownload = false,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
    sub: string;
    hoverClass: string;
    isDownload?: boolean;
}) {
    return (
        <a
            href={href}
            target={isDownload ? "_self" : "_blank"}
            rel="noopener noreferrer"
            download={isDownload}
            className={`flex items-center gap-4 p-3 md:p-4 bg-card/80 border border-white/3 rounded-2xl transition-all duration-300 group text-left ${hoverClass} hover:scale-[1.02]`}
        >
            <div className="p-2.5 bg-white/5 rounded-xl text-lime group-hover:text-dark group-hover:bg-dark/10 transition-colors">
                {icon}
            </div>
            <div>
                <p className="font-heading text-beige font-bold text-sm group-hover:text-dark transition-colors">
                    {label}
                </p>
                <p className="text-beige/30 text-[10px] uppercase tracking-wider font-mono group-hover:text-dark/60 transition-colors">
                    {sub}
                </p>
            </div>
        </a>
    );
}