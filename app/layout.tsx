import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const nunito = Nunito({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["600", "700", "800"],
});

const geistSans = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Yilin Zhou | Data & AI Portfolio",
    description:
        "Portfolio profesional de Yilin Zhou, desarrolladora multiplataforma y estudiante de Big Data e IA",
    icons: {
        icon: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C5E284' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z'/><path d='M5 3v4'/><path d='M19 17v4'/><path d='M3 5h4'/><path d='M17 19h4'/></svg>`,
    },
    openGraph: {
        title: "Yilin Zhou | Data & AI Portfolio",
        description: "Portfolio profesional de Yilin Zhou, desarrolladora multiplataforma y estudiante de Big Data e IA",
        url: "https://yilinzhou.vercel.app/",
        images: [
            {
                url: "https://yilinzhou.vercel.app/hero_miniature.png",
                width: 1200,
                height: 630,
                alt: "Portfolio de Yilin Zhou",
            },
        ],
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased bg-background text-foreground`}
            >
                <Cursor />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
