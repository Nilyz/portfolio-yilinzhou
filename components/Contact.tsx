"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-slate-950 relative">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-blue-500 font-mono text-xl block mb-2">
                        04. ¿Hablamos?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ponte en contacto
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Actualmente estoy abierta a nuevas oportunidades y
                        colaboraciones en proyectos de{" "}
                        <span className="text-blue-400">
                            Desarrollo e Inteligencia Artificial
                        </span>
                        .
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl backdrop-blur-sm"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-left space-y-4">
                            <h3 className="text-2xl font-bold text-white">
                                ¿Tienes una idea en mente?
                            </h3>
                            <p className="text-slate-400">
                                Ya sea para una vacante, un proyecto freelance o
                                simplemente para saludar, mi bandeja de entrada
                                siempre está abierta.
                            </p>
                            <a
                                href="mailto:tu-email@ejemplo.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all group"
                            >
                                Enviar Email
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>

                        <div className="flex flex-col gap-4">
                            <SocialLink
                                href="https://linkedin.com/in/tu-usuario"
                                icon={<Linkedin className="w-5 h-5" />}
                                label="LinkedIn"
                                sub="Conectemos profesionalmente"
                            />
                            <SocialLink
                                href="https://github.com/tu-usuario"
                                icon={<Github className="w-5 h-5" />}
                                label="GitHub"
                                sub="Mira mis repositorios"
                            />
                            <SocialLink
                                href="/mi-cv.pdf"
                                icon={<FileText className="w-5 h-5" />}
                                label="Descargar CV"
                                sub="Versión en PDF"
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
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
    sub: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-800 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group text-left"
        >
            <div className="p-2 bg-slate-900 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <p className="text-white font-bold text-sm">{label}</p>
                <p className="text-slate-500 text-xs">{sub}</p>
            </div>
        </a>
    );
}
