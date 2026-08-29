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
      id: "proj-1",
      title: "Plataforma de Gestión Empresarial (ERP / SaaS)",
      description: "Sistema integral en la nube para administración de inventario, facturación electrónica y métricas en tiempo real con dashboards analíticos.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "proj-2",
      title: "E-Commerce Full Stack con Pagos Seguros",
      description: "Tienda online completa con catálogo reactivo, carrito de compras sincronizado, panel de administración e integración de pasarela de pagos.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Express", "Stripe API", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "proj-3",
      title: "API REST de Microservicios & Auth JWT",
      description: "Servidor backend de alto rendimiento con autenticación basada en tokens JWT, roles y permisos, validación de esquemas y documentación Swagger.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "Redis", "Swagger"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "proj-4",
      title: "Task Manager Colaborativo en Tiempo Real",
      description: "Aplicación de gestión de proyectos y tareas estilo Kanban con sincronización de estado en tiempo real vía WebSockets.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Socket.io", "Node.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
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
    { name: "Redux / Zustand", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "NestJS", category: "Backend" },
    { name: "RESTful APIs", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "PostgreSQL", category: "Bases de Datos" },
    { name: "MySQL", category: "Bases de Datos" },
    { name: "MongoDB", category: "Bases de Datos" },
    { name: "Redis", category: "Bases de Datos" },
    { name: "Docker", category: "DevOps & Herramientas" },
    { name: "Git & GitHub", category: "DevOps & Herramientas" },
    { name: "Linux / Bash", category: "DevOps & Herramientas" },
    { name: "CI / CD Pipelines", category: "DevOps & Herramientas" },
    { name: "AWS (S3, EC2)", category: "DevOps & Herramientas" }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Ingeniería en Informática / Computación",
      institution: "Universidad / Instituto Profesional",
      period: "2017 - 2022",
      description: "Especialización en Ingeniería de Software, Algoritmos, Estructuras de Datos, Arquitectura de Sistemas y Gestión de Proyectos Tecnológicos."
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "2023",
      credentialUrl: "#"
    },
    {
      id: "cert-2",
      title: "Full Stack Web Development & Modern Architecture",
      issuer: "Plataforma de Certificación Tech",
      date: "2022",
      credentialUrl: "#"
    }
  ]
};
