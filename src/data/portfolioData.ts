import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Moisés Muñoz",
    title: "Ingeniero Informático & Full Stack Developer",
    roleDescription: "Especializado en diseñar y construir arquitecturas escalables, aplicaciones web modernas y soluciones de software eficientes.",
    location: "Chile",
    avatarUrl: "/avatar.jpg",
    availableForWork: true,
    resumeUrl: "#",
    bio: [
      "¡Hola! Soy Ingeniero en Informática apasionado por el desarrollo de software de alto impacto y la arquitectura de sistemas.",
      "Tengo experiencia creando aplicaciones web completas desde el frontend interactivo y responsive hasta backends robustos, APIs RESTful y modelos de datos relacionales y no relacionales.",
      "Me enfoco en escribir código limpio, mantenible, con buenas prácticas y una experiencia de usuario (UX) cuidada al detalle."
    ],
    socials: {
      github: "https://github.com/DevMoisesM",
      linkedin: "https://linkedin.com/in/moises-munoz-sanchez",
      email: "moisesmunoz2705@gmail.com",
    }
  },
  experiences: [
    {
      id: "exp-nomall",
      role: "Desarrollador Web (Práctica Profesional)",
      company: "NoMall.cl",
      companyUrl: "https://nomall.cl",
      period: "Ago 2025 - Dic 2025",
      location: "Remoto, Chile",
      current: true,
      description: [
        "Desarrollo, personalización y mantenimiento continuo de la plataforma web de comercio electrónico en Jumpseller.",
        "Implementación y optimización de componentes visuales (HTML5, CSS3, JavaScript y plantillas Liquid), mejorando la experiencia de usuario (UX/UI) y la velocidad de navegación.",
        "Diagnóstico y resolución de incidencias técnicas en el sitio web, asegurando la alta disponibilidad y estabilidad operativa de la tienda digital."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Jumpseller", "Liquid", "E-Commerce",]
    }
  ],
  projects: [
    {
      id: "proj-campus-seguro",
      title: "Campus Seguro — Gestión de Infraestructura & Seguridad",
      description: "Plataforma web integral para reporte geolocalizado de incidentes, matrices de riesgo en terreno, ciclo de vida de tickets, control de inventario de pañol y dashboard analítico BI para campus universitarios. (Proyecto de Título de Ingeniería Informática).",
      image: "",
      technologies: ["Python", "Django", "Angular", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS"],
      githubUrl: "https://github.com/DevMoisesM/Campus-Seguro",
      liveUrl: "https://campus-seguro.vercel.app",
      featured: true
    }
  ],
  skills: [
    { name: "TypeScript", category: "Lenguajes" },
    { name: "JavaScript (ES6+)", category: "Lenguajes" },
    { name: "Python", category: "Lenguajes" },
    { name: "Java", category: "Lenguajes" },
    { name: "SQL", category: "Lenguajes" },
    { name: "React.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "HTML5 & CSS3", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "RESTful APIs", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "PostgreSQL", category: "Bases de Datos" },
    { name: "MySQL", category: "Bases de Datos" },
    { name: "MongoDB", category: "Bases de Datos" },
    { name: "Docker", category: "DevOps & Herramientas" },
    { name: "Git & GitHub", category: "DevOps & Herramientas" },
    { name: "CI / CD Pipelines", category: "DevOps & Herramientas" },
  ],
  education: [
    {
      id: "edu-duoc",
      degree: "Ingeniería en Informática",
      institution: "Duoc UC — Sede San Andrés de Concepción",
      period: "2021 - 2026",
      description: "Formación integral en desarrollo de software full stack, arquitectura de aplicaciones, bases de datos y metodologías ágiles."
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "PCEP – Certified Entry-Level Python Programmer",
      issuer: "OpenEDG Python Institute",
      date: "2025",
      credentialUrl: "https://verify.openedg.org/?id=Q6O4.ODpX.CqnC"
    },
    {
      id: "cert-2",
      title: "Google AI Essentials",
      issuer: "Google",
      date: "2026",
      credentialUrl: "https://coursera.org/verify/specialization/7E7C79AIF999"
    },
    {
      id: "cert-3",
      title: "Crash Course on Python",
      issuer: "Google",
      date: "2026",
      credentialUrl: "https://coursera.org/verify/7EPVK31MOD0O"
    }
  ]
};
