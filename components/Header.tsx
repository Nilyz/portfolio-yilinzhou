"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code2, Terminal, Mail } from "lucide-react";

const navItems = [
    { name: "Sobre mí", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Proyectos", href: "#projects", icon: <Code2 className="w-4 h-4" /> },
    { name: "Tecnologías", href: "#tech", icon: <Terminal className="w-4 h-4" /> },
    { name: "Contacto", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            // Animación: si isScrolled es true, bajamos el header y lo hacemos opaco
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
                y: isScrolled ? 0 : -100, 
                opacity: isScrolled ? 1 : 0 
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 inset-x-0 z-[100] w-full"
        >
            <nav className="flex items-center justify-between w-full px-6 py-4 bg-dark/80 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-dark/50">
                {/* Lado Izquierdo*/}
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-beige tracking-tighter hover:text-lime transition-colors duration-300">
                        Yilin Zhou
                    </span>
                </div>

                {/* Lado Derecho*/}
                <ul className="flex items-center gap-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-beige/80 hover:text-lime transition-all duration-300 group"
                            >
                                <span className="hidden md:block text-lime group-hover:text-lime transition-colors">
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