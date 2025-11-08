export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Gilberto Gil',
      iAmA: 'I´m',
      roles: [
        'a Customer Service Expert',
        'an Automation Specialist',
        'a Customer Success Manager',
        'a Virtual Asisstant',
      ],
      description: 'Specialist in Customer Success and process automation with experience in CRM, AI assistants, and conversion optimization. I transform the customer experience into measurable results.',
      buttonProjects: 'View My Projects',
      buttonCV: 'Download CV',
      cvUrl: '/gilberto-gil-cv.pdf', // Placeholder URL for the CV
    },
    about: {
      title: 'About Me',
      // FIX: Added missing subtitle property to match the spanish translation and fix type error.
      subtitle: 'My introduction',
      experience: '5+ Years',
      automations: '80+ Completed',
      csat: '92% CSAT',
      description: 'A professional with over 4 years of proven experience at the intersection of Customer Success and Operations Optimization within high-tech environments like fintech, e-commerce, and SaaS. Expert in designing and automating solutions that not only enhance the customer experience but also drive internal efficiency, achieving up to a 20% increase in conversion rates and a 35% boost in operational efficiency. With a strong technical profile including proficiency in AI, automation tools (Zapier/Make), and data analysis, I have led teams and projects to ensure regulatory compliance, manage logistics, and support the sustainable growth of client accounts.',
      button: 'Connect on LinkedIn',
      linkedinUrl: 'https://www.linkedin.com/in/gilberto-gil-3476a8190/',
      githubUrl: 'https://github.com',
    },
    skills: {
      title: 'Skills',
      subtitle: 'My technical level',
      categories: [
        {
          id: 'customer-success',
          title: 'Customer Success',
          icon: 'CustomerSuccessIcon',
          skills: ['Account Management', 'Metrics Analysis', 'Conversion Optimization', 'Customer Support', 'Customer Experience'] ,
        },
        {
          id: 'automation-crm',
          title: 'Automation & CRM',
          icon: 'AutomationIcon',
          skills: ['Zapier', 'Make', 'Go High Level', 'Airtable', 'Zendesk' , 'Intercom', 'Zendesk'],
        },
        {
          id: 'tech-tools',
          title: 'Technologies & Tools',
          icon: 'TechIcon',
          skills: ['HTML/CSS', 'JavaScript', 'ChatGPT', 'AI Studio', 'Claude AI', 'SQL & JSON', 'Selenium', 'Manual Testing', 'Excel', 'Spreadsheets', 'Google Apps'],
        },
        {
          id: 'project-management',
          title: 'Project Management & Collaboration',
          icon: 'BriefcaseIcon',
          skills: ['Asana', 'Jira', 'Trello', 'Notion', 'Slack', 'Agile Methodologies'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'My recent work',
      viewMore: 'View more',
      projects: [

        {
          title: 'Proactive Churn Detection',
          category: 'Data Analysis',
          image: 'https://images.unsplash.com/photo-1551288049-43a1a95a8e32?q=80&w=1470&auto=format&fit=crop',
          description: 'Created a health score system in Gainsight by analyzing product usage data, which helped identify at-risk accounts 30 days earlier.',
          link: 'https://github.com',
        },
        {
          title: 'CSAT Analysis Dashboard',
          category: 'Reporting',
          image: 'https://images.unsplash.com/photo-1560415755-bd80d06eda60?q=80&w=1374&auto=format&fit=crop',
          description: 'Built a real-time CSAT dashboard using SQL and Tableau to track feedback trends and provide actionable insights to the product team.',
          link: 'https://github.com',
        },
        {
          title: 'Interactive Knowledge Base',
          category: 'Customer Experience',
          image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop',
          description: 'Led the revamp of the company knowledge base, introducing interactive guides and video tutorials. This reduced support ticket volume by 25%.',
          link: 'https://github.com',
        },
        {
          title: 'Football Management Platform',
          category: 'Automation',
          image: 'https://i.postimg.cc/ZqHDrsw5/proyecto-voleyball.png',
          description: 'Complete sports management system with integrated calculator, tournaments and FIFA-style player cards.',
          link: 'https://github.com',
        },
        {
          title: 'Volleyball Team Calculator App',
          category: 'App Web',
          image: 'https://i.postimg.cc/Gpx6XmhV/Projecto-voleyball.png',
          description: 'Management system for volleyball teams with integrated account calculator and exchange rate APIs.',
          link: 'https://github.com',
        },
      ],
    },




    experience: {
      title: 'Experience',
      subtitle: 'My professional journey',
      jobs: [
        {
          role: 'Customer Success Manager',
          company: 'Ventux',
          date: '02/2025 - Present',
          location: 'USA (Remote)',
          duties: [
            'Drove conversion rates by up to 20% for a portfolio of over 20 key clients by strategically optimizing sales funnels and tailoring CRM automations.',
            'Spearheaded the redesign and optimization of 30+ AI assistants, applying advanced prompt engineering techniques and re-architecting training content to improve end-user interaction efficiency and accuracy dramatically.',
            'Proactively managed account health by designing and executing over 30 customised improvements for more than 50 different customers, based on continuous analysis of key metrics. This led to increased feature adoption and new upselling opportunities.',
            'Leveraged a technical stack including ChatGPT, Google AI Studio, GoHighLevel, and Make to build custom automation solutions, with working knowledge of JSON and Java for advanced platform customization.',
          ],
        },
        {
          role: 'Customer Service and Logistic Operator',
          company: 'BambooWork',
          date: '10/2023 - 01/2025',
          location: 'Spain (Remote)',
          duties: [
            'Supervised a team responsible for order processing, logistics, and customer support, ensuring alignment with company goals and maintaining high performance standards. Conducted regular team meetings, provided training, and fostered a collaborative environment to enhance productivity',
            'Demonstrated expertise in enhancing logistics, customer support, and vendor account expansion on Amazon, Temu, Aliexpress, Shein, and Miravia. Proficient in managing orders, transportation, verifying information, providing customer service, analyzing data, and collaborating across departments.',
            'Coordinated and monitored order fulfillment at warehouses for over 1000 daily orders, ensuring proper preparation, packaging, and shipping of products.',
            'Identified opportunities for improvement and implemented strategies to increase product visibility and sales using various tools and techniques.',
          ],
        },
        {
          role: 'Crypto Operator and Customer Service Agent',
          company: 'Reserve',
          date: '(04/2022 - 08/2023)',
          location: 'USA (Remote)',
          duties: [
            'Oversaw the review and approval of compliance-related documents for cryptocurrency operations, ensuring alignment with internal policies and external regulations.',
            'Conducted daily quality assurance and compliance checks for over 100 cryptocurrency operations, including Bitcoin, Ethereum, and Tether transactions, ensuring adherence to company standards.',
            'Provided excellent service to over 200 customers per week using Intercom online chat, efficiently resolving inquiries and issues while consistently exceeding customer expectations.',
            'Automated over 20 workflows using tools like Airtable, Slack, and Zapier, resulting in a 35% increase in operational efficiency.',
            'Analyzed and documented product malfunctions, fraud issues, and AML compliance concerns.',
          ],
        },
        {
          role: 'Operations and Customer Service Agent',
          company: 'SB Medical',
          date: '(11/2020 - 12/2021)',
          location: 'USA (Remote)',
          duties: [
            'Managed over 35 customer claims per day via email, resolving 95% within 24 hours. Demonstrated effective communication skills, problem-solving abilities, and a commitment to customer satisfaction',
            'Monitored and addressed potential fraud across various platforms, identifying and resolving fraudulent transactions promptly and efficiently.',
            'Guided product use, offered options such as refunds, replacements, or credits, and collaborated with suppliers to resolve product issues.',
            'Contributed to the internal knowledge base.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Get in touch',
      email: {
        title: 'Email',
        value: 'gilbertov08@gmail.com',
        link: 'mailto:gilbertov08@gmail.com',
      },
      phone: {
        title: 'Phone',
        value: '+58 412 531 9078',
        link: 'tel:+584125319078',
      },

      location: {
        title: 'Location',
        value: 'Venezuela',
      },


      form: {
        name: 'Name',
        email: 'Email',
        project: 'Project',
        message: 'Message',
        sending: 'Sending...',
        successTitle: 'Message Sent!',
        successMessage: 'Thank you! Your message has been sent. I will get back to you soon.',
        errorMessage: 'Oops! Something went wrong. Please try again later.',
      },
      send: 'Send Message',
    },
    footer: {
      rights: '© Gilberto Gil. All rights reserved.',
    },

  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Gilberto Gil',
      iAmA: 'Soy',
      roles: [
        'Experto en Customer Service',
        'Especialista en Automatización',
        'Customer Success Manager',
      ],
      description: 'Especialista en Customer Success y automatización de procesos con experiencia en CRM, AI assistants y optimización de conversiones. Transformo la experiencia del cliente en resultados medibles.',
      buttonProjects: 'Ver Mis Proyectos',
      buttonCV: 'Descargar CV',
      cvUrl: '/gilberto-gil-cv-es.pdf', // Placeholder URL for the CV in Spanish
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Mi introducción',
      experience: '5+ Años',
      automations: '50+ Completadas',
      csat: '98% CSAT',
      description: 'Profesional con más de 4 años de experiencia demostrada en la intersección del Customer Success y la Optimización de Operaciones en entornos de alta tecnología como fintech, e-commerce y SaaS. Experto en diseñar y automatizar soluciones que no solo mejoran la experiencia del cliente, sino que también impulsan la eficiencia interna, logrando aumentos de hasta un 20% en tasas de conversión y un 35% en eficiencia operativa. Con un perfil técnico sólido que incluye el dominio de IA, automatización (Zapier/Make) y análisis de datos, he liderado equipos y proyectos para garantizar el cumplimiento normativo, la gestión logística y el crecimiento sostenible de las cuentas de cliente.',
      button: 'Conectar en LinkedIn',
      linkedinUrl: 'https://www.linkedin.com/in/gilberto-gil-3476a8190/',
      githubUrl: 'https://github.com',
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Mi nivel técnico',
      categories: [
        {
          id: 'customer-success',
          title: 'Éxito del Cliente',
          icon: 'CustomerSuccessIcon',
          skills: ['Gestión de Cuentas', 'Análisis de Métricas', 'Optimización de Conversión', 'Soporte al Cliente'],
        },
        {
          id: 'automation-crm',
          title: 'Automatización y CRM',
          icon: 'AutomationIcon',
          skills: ['Zapier', 'Make', 'Go High Level', 'Airtable', 'Zendesk & Intercom'],
        },
        {
          id: 'tech-tools',
          title: 'Tecnologías y Herramientas',
          icon: 'TechIcon',
          skills: ['HTML/CSS', 'JavaScript', 'ChatGPT', 'AI Studio', 'Claude AI', 'SQL & JSON', 'Selenium', 'Manual Testing', 'Excel', 'Spreadsheets', 'Google Apps'],
        },
        {
          id: 'project-management',
          title: 'Gestión de Proyectos y Colaboración',
          icon: 'BriefcaseIcon',
          skills: ['Asana', 'Jira', 'Trello', 'Notion', 'Slack', 'Metodologias Agiles'],
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Mi trabajo reciente',
      viewMore: 'Ver más',
      projects: [
        {
          title: 'Detección Proactiva de Churn',
          category: 'Análisis de Datos',
          image: 'https://images.unsplash.com/photo-1551288049-43a1a95a8e32?q=80&w=1470&auto=format&fit=crop',
          description: 'Creé un sistema de puntuación de salud en Gainsight analizando datos de uso del producto, lo que ayudó a identificar cuentas en riesgo 30 días antes.',
          link: 'https://github.com',
        },
        {
          title: 'Extraccion de datos bancarios usando apps scripts',
          category: 'Reportes',
          image: 'https://images.unsplash.com/photo-1560415755-bd80d06eda60?q=80&w=1374&auto=format&fit=crop',
          description: 'Construí un dashboard de CSAT en tiempo real usando SQL y Tableau para rastrear tendencias de retroalimentación y proporcionar información procesable al equipo de producto.',
          link: 'https://github.com',
        },
        {
          title: 'Mejora de tiempo de entregas usando Excel',
          category: 'Experiencia del Cliente',
          image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop',
          description: 'Lideré la renovación de la base de conocimientos de la empresa, introduciendo guías interactivas y tutoriales en video. Esto redujo el volumen de tickets de soporte en un 25%.',
          link: 'https://github.com',
        },
        {
          title: 'Plataforma de Gestión de Fútbol',
          category: 'Automatización',
          image: 'https://i.postimg.cc/ZqHDrsw5/proyecto-voleyball.png',
          description: 'Sistema completo de gestión deportiva con calculadora integrada, torneos y tarjetas de jugador estilo FIFA.',
          link: 'https://github.com',
        },
        {
          title: 'App de Calculadora para Equipo de Voleibol',
          category: 'App Web',
          image: 'https://i.postimg.cc/Gpx6XmhV/Projecto-voleyball.png',
          description: 'Sistema de gestión para equipos de voleibol con calculadora de cuentas integrada y APIs de tasas de cambio.',
          link: 'https://github.com',
        },
      ],
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Mi trayectoria profesional',
      jobs: [
        {
          role: 'Customer Success Manager',
          company: 'Ventux',
          date: '02/2025 - Presente',
          location: 'EE. UU. (Remoto)',
          duties: [
            'Impulsé las tasas de conversión hasta en un 20% para una cartera de más de 20 clientes clave mediante la optimización estratégica de embudos de ventas y la personalización de automatizaciones de CRM.',
            'Lideré el rediseño y la optimización de más de 30 asistentes de IA, aplicando técnicas avanzadas de ingeniería de prompts y reestructurando el contenido de capacitación para mejorar drásticamente la eficiencia y precisión de la interacción del usuario final.',
            'Gestioné proactivamente la salud de las cuentas diseñando y ejecutando más de 30 mejoras personalizadas para más de 50 clientes diferentes, basándome en el análisis continuo de métricas clave. Esto condujo a una mayor adopción de funciones y nuevas oportunidades de venta adicional.',
            'Aproveché un stack técnico que incluye ChatGPT, Google AI Studio, GoHighLevel y Make para crear soluciones de automatización personalizadas, con conocimiento práctico de JSON y Java para la personalización avanzada de la plataforma.',
          ],
        },
        {
          role: 'Operador de Servicio al Cliente y Logística',
          company: 'BambooWork',
          date: '10/2023 - 01/2025',
          location: 'España (Remoto)',
          duties: [
            'Supervisé a un equipo responsable del procesamiento de pedidos, logística y soporte al cliente, asegurando la alineación con los objetivos de la empresa y manteniendo altos estándares de rendimiento. Realicé reuniones de equipo regulares, proporcioné capacitación y fomenté un entorno de colaboración para mejorar la productividad.',
            'Demostré experiencia en la mejora de la logística, el soporte al cliente y la expansión de cuentas de proveedores en Amazon, Temu, Aliexpress, Shein y Miravia. Competente en la gestión de pedidos, transporte, verificación de información, prestación de servicio al cliente, análisis de datos y colaboración entre departamentos.',
            'Coordiné y supervisé el cumplimiento de pedidos en almacenes para más de 1000 pedidos diarios, asegurando la preparación, embalaje y envío adecuados de los productos.',
            'Identifiqué oportunidades de mejora e implementé estrategias para aumentar la visibilidad del producto y las ventas utilizando diversas herramientas y técnicas.',
          ],
        },
        {
          role: 'Operador de Criptomonedas y Agente de Servicio al Cliente',
          company: 'Reserve',
          date: '(04/2022 - 08/2023)',
          location: 'EE. UU. (Remoto)',
          duties: [
            'Supervisé la revisión y aprobación de documentos relacionados con el cumplimiento para operaciones con criptomonedas, asegurando la alineación con las políticas internas y las regulaciones externas.',
            'Realicé controles diarios de aseguramiento de la calidad y cumplimiento para más de 100 operaciones con criptomonedas, incluidas transacciones de Bitcoin, Ethereum y Tether, garantizando el cumplimiento de los estándares de la empresa.',
            'Proporcioné un servicio excelente a más de 200 clientes por semana utilizando el chat en línea de Intercom, resolviendo consultas y problemas de manera eficiente y superando constantemente las expectativas de los clientes.',
            'Automaticé más de 20 flujos de trabajo utilizando herramientas como Airtable, Slack y Zapier, lo que resultó en un aumento del 35% en la eficiencia operativa.',
            'Analicé y documenté fallos de productos, problemas de fraude y preocupaciones de cumplimiento AML.',
          ],
        },
        {
          role: 'Agente de Operaciones y Servicio al Cliente',
          company: 'SB Medical',
          date: '(11/2020 - 12/2021)',
          location: 'EE. UU. (Remoto)',
          duties: [
            'Gestioné más de 35 reclamaciones de clientes por día por correo electrónico, resolviendo el 95% en 24 horas. Demostré habilidades de comunicación efectivas, capacidades de resolución de problemas y un compromiso con la satisfacción del cliente.',
            'Monitoreé y abordé posibles fraudes en diversas plataformas, identificando y resolviendo transacciones fraudulentas de manera rápida y eficiente.',
            'Guié sobre el uso del producto, ofrecí opciones como reembolsos, reemplazos o créditos, y colaboré con los proveedores para resolver problemas de productos.',
            'Contribuí a la base de conocimientos interna.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contáctame',
      subtitle: 'Ponte en contacto',
      email: {
        title: 'Correo Electrónico',
        value: 'gilbertov08@gmail.com',
        link: 'mailto:gilbertov08@gmail.com',
      },
      phone: {
        title: 'Teléfono',
        value: '+58 412 531 9078',
        link: 'tel:+584125319078',
      },
      location: {
        title: 'Ubicación',
        value: 'Venezuela',
      },
      form: {
        name: 'Nombre',
        email: 'Correo Electrónico',
        project: 'Proyecto',
        message: 'Mensaje',
        sending: 'Enviando...',
        successTitle: '¡Mensaje Enviado!',
        successMessage: '¡Gracias! Tu mensaje ha sido enviado. Te responderé pronto.',
        errorMessage: '¡Uy! Algo salió mal. Por favor, inténtalo de nuevo más tarde.',
      },
      send: 'Enviar Mensaje',
    },
    footer: {
      rights: '© Gilberto Gil. Todos los derechos reservados.',
    },
  },
};