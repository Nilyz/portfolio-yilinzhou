export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    github: string;
    type: "AI" | "Big Data" | "App" | "Analytic";
    image: string;
}

export const PROJECTS: Project[] = [
    {
        title: "Botzy PDF",
        description:
            "Interactive AI assistant to get context-aware answers from any PDF using Streamlit and Google Gemini.",
        tech: ["Python", "Streamlit ", "Gemini API", "PyPDF2", "Chromadb"],
        link: "https://demo.com",
        github: "https://github.com/tu-usuario/proyecto1",
        type: "AI",
        image: "/projects/botzy-pdf.png",
    },
    {
        title: "Data Pipeline con PySpark",
        description:
            "Procesamiento de grandes volúmenes de datos (ETL) optimizado para entornos distribuidos.",
        tech: ["PySpark", "Hadoop", "SQL"],
        link: "#",
        github: "https://github.com/tu-usuario/proyecto2",
        type: "Big Data",
        image: "/projects/botzy-pdf.png",
    },
    {
        title: "App de Gestión Inteligente",
        description:
            "Aplicación multiplataforma que integra una base de datos local con sincronización en la nube.",
        tech: ["Java", "Firebase", "Android SDK"],
        link: "#",
        github: "https://github.com/tu-usuario/proyecto3",
        type: "App",
        image: "/projects/app-gestion-inteligente.png",
    },
];
