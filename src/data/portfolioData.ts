import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Moisés",
    title: "Ingeniero Informático & Full Stack Developer",
    roleDescription: "Especializado en diseñar y construir arquitecturas escalables, aplicaciones web modernas y soluciones de software eficientes.",
    location: "Chile",
    avatarUrl: "/avatar.jpg", // Ruta a tu imagen de perfil
    availableForWork: true,
    resumeUrl: "#", // Enlace a tu CV en PDF
    email: "contacto@tudominio.com",
    bio: [
      "¡Hola! Soy Ingeniero en Informática apasionado por el desarrollo de software de alto impacto y la arquitectura de sistemas.",
      "Tengo experiencia creando aplicaciones web completas desde el frontend interactivo y responsive hasta backends robustos, APIs RESTful y modelos de datos relacionales y no relacionales.",
      "Me enfoco en escribir código limpio, mantenible, con buenas prácticas y una experiencia de usuario (UX) cuidada al detalle."
    ],
    socials: {
      github: "https://github.com/DevMoisesM",
      linkedin: "https://linkedin.com",
      email: "contacto@tudominio.com",
      twitter: "https://twitter.com"
    }
  },
  experiences: [
    {
      id: "exp-1",
      role: "Desarrollador Full Stack Senior / Líder Técnico",
      company: "Tech Solutions Inc.",
      companyUrl: "https://example.com",
      period: "2023 - Presente",
      location: "Remoto",
      current: true,
      description: [
        "Liderazgo en el diseño y desarrollo de una plataforma web SaaS escalable utilizada por más de 10,000 usuarios activos mensuales.",
        "Implementación de arquitectura basada en microservicios, optimizando el tiempo de respuesta de las APIs en un 35%.",
        "Coordinación de equipo técnico, code reviews y definición de estándares de calidad con TypeScript y CI/CD."
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"]
    },
    {
      id: "exp-2",
      role: "Ingeniero de Software / Desarrollador Web",
      company: "Digital Innovations Lab",
      companyUrl: "https://example.com",
      period: "2021 - 2023",
      location: "Híbrido",
      current: false,
      description: [
        "Desarrollo de módulos core para aplicaciones empresariales utilizando React, Next.js y bases de datos relacionales.",
        "Automatización de procesos de integración y despliegue continuo reduciendo el tiempo de entrega de releases.",
        "Refactorización y migración de código legado a TypeScript, mejorando la confiabilidad y mantenibilidad."
      ],
      technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Redis", "Git"]
    },
    {
      id: "exp-3",
      role: "Desarrollador Frontend Junior",
      company: "StartUp Studio",
      companyUrl: "https://example.com",
      period: "2020 - 2021",
      location: "Presencial",
      current: false,
      description: [
        "Construcción de interfaces de usuario modernas, accesibles y adaptables a dispositivos móviles.",
        "Consumo e integración de APIs REST y optimización de rendimiento de carga web."
      ],
      technologies: ["JavaScript", "React", "CSS3 / Sass", "Tailwind CSS", "REST APIs"]
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
