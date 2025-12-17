"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bot, User, Code2, Terminal, Mail } from "lucide-react";

const navItems = [
    { name: "Sobre mí", href: "#about", icon: <User className="w-4 h-4" /> },
    {
        name: "Proyectos",
        href: "#projects",
        icon: <Code2 className="w-4 h-4" />,
    },
    {
        name: "Tecnologías",
        href: "#tech",
        icon: <Terminal className="w-4 h-4" />,
    },
    { name: "Contacto", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 inset-x-0 z-[50] w-full"
        >
            <nav className="flex items-center justify-between w-full px-6 py-4 bg-slate-950/80 backdrop-blur-md shadow-xl">
                {/* Lado Izquierdo: Tu Nombre */}
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white tracking-tight">
                        Yilin Zhou
                    </span>
                </div>

                {/* Lado Derecho: Enlaces */}
                <ul className="flex items-center gap-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                            >
                                {/* Ocultamos el icono en pantallas pequeñas para que no sature */}
                                <span className="hidden md:block text-blue-500/50">
                                    {item.icon}
                                </span>
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}
