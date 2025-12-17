"use client";
import React from "react";
import { Bot, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-950 border-t border-slate-900 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2">
                        <Bot className="w-6 h-6 text-blue-500" />
                        <span className="text-xl font-bold text-white tracking-tight">
                            Yilin Zhou
                        </span>
                    </div>
                    <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                        Especialista en desarrollo multiplataforma e
                        Inteligencia Artificial.
                    </p>
                </div>

                <nav className="flex gap-6 text-sm font-medium text-slate-400">
                    <a
                        href="#about"
                        className="hover:text-blue-400 transition-colors"
                    >
                        Sobre mí
                    </a>
                    <a
                        href="#tech"
                        className="hover:text-blue-400 transition-colors"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-blue-400 transition-colors"
                    >
                        Proyectos
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-blue-400 transition-colors"
                    >
                        Contacto
                    </a>
                </nav>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:tu-email@ejemplo.com"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                    <p className="text-slate-600 text-xs font-mono">
                        <p>Diseñado y desarrollado por Yilin Zhou &copy; {currentYear}</p>
                    </p>
                </div>
            </div>
        </footer>
    );
}
