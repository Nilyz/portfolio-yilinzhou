"use client";
import React from "react";
import { Bot, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-dark border-t border-white/5 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                {/* PARTE SUPERIOR: Logo y Navegación */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    {/* Identidad con toque AI */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2 group cursor-default">
                            <span className="text-xl font-bold text-beige tracking-tighter">
                                Yilin Zhou
                            </span>
                        </div>
                        <p className="text-beige/40 text-[11px] font-mono uppercase tracking-widest">
                            Desarrolladora Full Stack · IA & Big Data
                        </p>
                    </div>

                    {/* Navegación Minimalista */}
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-beige/50">
                        <a
                            href="#about"
                            className="hover:text-lime transition-colors duration-300"
                        >
                            Sobre mí
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-lime transition-colors duration-300"
                        >
                            Proyectos
                        </a>
                        <a
                            href="#tech"
                            className="hover:text-lime transition-colors duration-300"
                        >
                            Tecnologías
                        </a>

                        <a
                            href="#contact"
                            className="hover:text-lime transition-colors duration-300"
                        >
                            Contacto
                        </a>
                    </nav>
                </div>

                {/* SEPARADOR ESTILO TRAYECTORIA */}
                <div className="flex items-center gap-4 mb-12 opacity-20">
                    <div className="h-[1px] bg-sage flex-grow" />
                    <div className="w-2 h-2 rounded-full bg-lime" />
                    <div className="h-[1px] bg-sage flex-grow" />
                </div>

                {/* PARTE INFERIOR: RRSS y Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-3">
                        <FooterSocialIcon
                            href="https://github.com/Nilyz"
                            icon={<Github />}
                            hover="hover:bg-sage"
                        />
                        <FooterSocialIcon
                            href="https://www.linkedin.com/in/yilinzzhou/"
                            icon={<Linkedin />}
                            hover="hover:bg-beige"
                        />
                        <FooterSocialIcon
                            href="mailto:tu-email@ejemplo.com"
                            icon={<Mail />}
                            hover="hover:bg-soft-grey"
                        />
                    </div>

                    {/* Credits */}
                    <div className="flex flex-col items-center md:items-end gap-1">
                        <p className="text-beige/30 text-[14px] font-mono uppercase tracking-[0.2em] flex items-center gap-2">
                            Hecho con{" "}
                            <Heart className="w-3 h-3 text-lime animate-pulse fill-lime/20" />{" "}
                            por Yilin Zhou
                        </p>
                        <p className="text-beige/20 text-[12px] font-mono">
                            &copy; Creado y diseñado por Yilin Zhou en{" "}
                            {currentYear}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Sub-componente para iconos sociales limpios
function FooterSocialIcon({
    href,
    icon,
    hover,
}: {
    href: string;
    icon: React.ReactNode;
    hover: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 bg-white/5 border border-white/5 rounded-xl text-beige/40 ${hover} hover:text-dark transition-all duration-300 hover:scale-110`}
        >
            {React.cloneElement(icon as React.ReactElement, {
                className: "w-5 h-5",
            })}
        </a>
    );
}
