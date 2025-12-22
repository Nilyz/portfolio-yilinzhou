"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Code2, Terminal, Mail } from "lucide-react";

const navItems = [
    {
        name: "Sobre mí",
        href: "#about",
        icon: <User className="w-5 h-5 md:w-4 md:h-4" />,
    },
    {
        name: "Tecnologías",
        href: "#tech",
        icon: <Terminal className="w-5 h-5 md:w-4 md:h-4" />,
    },
    {
        name: "Proyectos",
        href: "#projects",
        icon: <Code2 className="w-5 h-5 md:w-4 md:h-4" />,
    },
    {
        name: "Contacto",
        href: "#contact",
        icon: <Mail className="w-5 h-5 md:w-4 md:h-4" />,
    },
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
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: isScrolled ? 0 : -100,
                opacity: isScrolled ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 inset-x-0 z-[100] w-full"
        >
            <nav className="flex items-center justify-between w-full px-4 py-3 md:px-6 md:py-4 bg-dark/80 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-dark/50">
                {/* Lado Izquierdo*/}
                <a href="#" className="flex items-center gap-2 cursor-pointer">
                    <span className="font-heading text-base md:text-lg font-bold text-beige tracking-tighter hover:text-sage transition-colors duration-300">
                        <span className="text-lime">{"<"}</span> Yilin Zhou{" "}
                        <span className="text-lime">{"/>"}</span>
                    </span>
                </a>

                {/* Lado Derecho*/}
                <ul className="flex items-center gap-1 md:gap-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="font-heading flex items-center gap-2 p-2 md:px-3 md:py-2 text-sm font-medium text-beige/80 hover:text-sage transition-all duration-300 group rounded-lg"
                            >
                                <span className="text-lime group-hover:text-lime transition-colors">
                                    {item.icon}
                                </span>
                                <span className="hidden md:block">
                                    {item.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}
