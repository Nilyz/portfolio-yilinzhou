export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    github: string;
    type: "AI" | "Big Data" | "Web App" | "Mobile App";
    image: string;
}

export const PROJECTS: Project[] = [
    {
        title: "ClauseWatch AI",
        description:
            "Analizador legal inteligente especializado en Derecho Laboral Español. Utiliza una arquitectura híbrida para detectar cláusulas abusivas con privacidad absoluta y explicaciones jurídicas detalladas.",
        tech: [
            "Next.js",
            "FastAPI",
            "Python",
            "PyTorch",
            "Hugging Face",
            "Google Gemini",
            "Docker",
            "SQLite",
        ],
        link: "https://clause-watch-ia.vercel.app/",
        github: "https://github.com/Nilyz/clause-watch-ia",
        type: "AI",
        image: "/clausewatch_preview.png", 
    },
    {
        title: "TradeCore",
        description:
            "Dashboard financiero inteligente que analiza el precio de Bitcoin en tiempo real, permite simular escenarios de mercado y genera señales de compra/venta mediante Machine Learning para apoyar la identificación de tendencias.",
        tech: [
            "Python",
            "FastAPI",
            "Scikit-Learn",
            "Pandas",
            "Next.js",
            "React",
            "Tailwind CSS",
            "Recharts",
        ],
        link: "https://tradecore-ai.vercel.app/",
        github: "https://github.com/Nilyz/bitcoin-price-predictor",
        type: "AI",
        image: "/tradecore_preview.png",
    },
    {
        title: "Botzy PDF",
        description:
            "Asistente AI interactivo que responde preguntas basadas en el contenido de cualquier PDF utilizando Streamlit y Google Gemini, con un flujo de trabajo RAG para evitar respuestas inventadas.",
        tech: [
            "Python",
            "Streamlit ",
            "Gemini API",
            "PyPDF2",
            "Chromadb",
            "RAG",
        ],
        link: "https://llm-pdf-assistant.streamlit.app/",
        github: "https://github.com/Nilyz/llm-pdf-assistant",
        type: "AI",
        image: "/botzy_preview.png",
    },
    {
        title: "SkillBridge",
        description:
            "Tu asistente de carrera inteligente impulsado por IA que analiza CVs, detecta habilidades, planifica transiciones de carrera y compara perfiles contra ofertas de trabajo en tiempo real.",
        tech: ["Python", "Streamlit", "Llama 3", "Groq API", "PyMuPDF", "RAG"],
        link: "#",
        github: "https://github.com/tu-usuario/skillbridge",
        type: "AI",
        image: "/skillbridge_preview.png",
    },
    {
        title: "OniTime",
        description:
            "Aplicación móvil que combina gestión del tiempo con bienestar emocional, ayudando a planificar tareas, registrar estados de ánimo y desarrollar hábitos saludables de manera gamificada.",
        tech: ["Kotlin", "Jetpack Compose", "Firebase", "Gemini AI"],
        link: "https://tfgonitime.web.app/",
        github: "https://github.com/KokorikoFC/TfgOnitime",
        type: "Mobile App",
        image: "/onitime_preview.png",
    },
    {
        title: "Pastelería con React",
        description:
            "Sitio web para una pastelería en línea, que permite explorar productos y realizar compras con una experiencia de usuario amigable, inspirada en un estilo asiático acogedor y visualmente atractivo.",
        tech: [
            "React",
            "React Context API",
            "Custom Hooks",
            "JSON",
            "HTML",
            "CSS",
        ],
        link: "https://github.com/KokorikoFC/tiendaConReact",
        github: "https://github.com/KokorikoFC/tiendaConReact",
        type: "Web App",
        image: "/tiendareact_preview.png",
    },
    {
        title: "Facturador Web",
        description:
            "Plataforma web complementaria para la aplicación móvil Facturador, que permite gestionar facturas y proyectos, visualizando datos en tiempo real sincronizados con Firebase, con dashboard interactivo y gestión de itinerarios profesionales.",
        tech: ["Angular", "Bootstrap", "Firebase", "D3.js", "jQuery"],
        link: "https://github.com/KokorikoFC/FacturasWebIntermodular",
        github: "https://github.com/KokorikoFC/FacturasWebIntermodular",
        type: "Web App",
        image: "/facturasweb_preview.png",
    },
    {
        title: "Brew & Co",
        description:
            "Aplicación móvil para la gestión interna de cafeterías, centralizando clientes, inventario y eventos, con sincronización en tiempo real a través de Firebase y una interfaz intuitiva y personalizable.",
        tech: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore"],
        link: "https://github.com/KokorikoFC/CRM_Brew-Co",
        github: "https://github.com/KokorikoFC/CRM_Brew-Co",
        type: "Mobile App",
        image: "/brewco_preview.png",
    },
    {
        title: "Genshin Docs",
        description:
            "Página web de fans para Genshin Impact que proporciona información detallada sobre los personajes, con búsqueda y filtros por elemento o nación.",
        tech: ["HTML", "CSS", "JavaScript", " API REST", "BEM"],
        link: "https://nilyz.github.io/genshin-doc/",
        github: "https://github.com/Nilyz/genshin-doc",
        type: "Web App",
        image: "/genshindocs_preview.png",
    },
];
