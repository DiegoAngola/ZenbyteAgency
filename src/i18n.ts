import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      navbar: {
        home: "Home",
        team: "Team",
        services: "Servicios",
        chat: "Escríbenos "
      },
      hero: {
        title_part1: "Soluciones digitales que",
        title_highlight1: "conectan",
        title_part2: "crean valor y generan",
        title_highlight2: "impacto",
        subtitle: "Consultoría UX/UI, desarrollo tecnológico y estrategias de crecimiento para marcas que buscan liderar el futuro.",
        cta: "Contáctanos"
      },
      services: {
        section_title: "Premium Digital Solutions",
        ux_ui: {
          title: "UX/UI & Product Design",
          desc: "Diseño centrado en el usuario que convierte visitantes en clientes leales.",
          details: [
            "Research & análisis de usuario",
            "Arquitectura de información",
            "Diseño de interfaces",
            "Prototipado y testing"
          ]
        },
        web_dev: {
          title: "Desarrollo Web & Tecnología",
          desc: "Sitios y aplicaciones robustas, escalables y de alto rendimiento.",
          details: [
            "Web corporativas",
            "Landing pages de alto rendimiento",
            "E-commerce",
            "Integraciones y performance"
          ]
        },
        branding: {
          title: "Branding & Identidad",
          desc: "Construimos marcas memorables con identidad visual impactante.",
          details: [
            "Estrategia de marca",
            "Identidad visual",
            "Sistemas gráficos",
            "Brand guidelines"
          ]
        },
        marketing: {
          title: "Marketing & Growth",
          desc: "Estrategias de crecimiento basadas en datos y resultados tangibles.",
          details: [
            "Gestión de redes sociales",
            "Meta Ads",
            "Google Ads",
            "SEO"
          ]
        },
        ai: {
          title: "IA & Automatización",
          desc: "Optimizamos procesos integrando inteligencia artificial avanzada.",
          details: [
            "Chatbots",
            "Automatización CRM",
            "Flujos inteligentes",
            "Integraciones con IA"
          ]
        },
        consulting: {
          title: "Consultoría Digital Estratégica",
          desc: "Asesoramiento experto para la transformación digital de tu negocio.",
          details: [
            "Auditoría digital",
            "Definición de stack tecnológico",
            "Estrategia de escalabilidad"
          ]
        }
      },
      team: {
        section_title: "Nuestro Equipo",
        subtitle: "Mentes creativas detrás de cada proyecto",
        roles: {
          lead_designer: "Lead Designer",
          marketing_specialist: "Marketing Specialist",
          data_analytics: "Data Analytics",
          web_developer: "Web Developer"
        },
        descriptions: {
          kristina: "Diseñadora multidisciplinaria y Co-fundadora de una agencia creativa. Trabaja en diseño gráfico, UX/UI, branding, redes sociales y desarrollo web, creando soluciones digitales centradas en las personas que fortalecen marcas y mejoran experiencias. Su enfoque abarca desde identidades visuales y contenido multimedia hasta sitios web responsive y estrategias digitales, acompañando a empresas en la construcción de una presencia online clara, actual y auténtica.",
          mehedi: "Especialista en marketing digital enfocada en contenido, redes sociales y estrategia. Desarrolla campañas orientadas a comunicación de marca, engagement y posicionamiento, integrando análisis, creatividad y gestión en distintos canales digitales. Acompaña a empresas en procesos de visibilidad y crecimiento, estructurando líneas editoriales, calendarios y narrativas que conectan con audiencias reales y objetivos comerciales.",
          carla: "Consultora en Business Intelligence y análisis de datos con experiencia en SQL, Power BI y reporting. Se especializa en transformar información en visualizaciones claras, métricas clave e insights accionables para apoyar toma de decisiones, rendimiento y crecimiento. Ha trabajado con equipos internos y clientes en procesos de análisis, dashboards y estrategias basadas en datos, acompañando objetivos comerciales y operativos con claridad y enfoque.",
          diego: "Desarrollador web con experiencia en Webflow, Ruby on Rails y construcción de interfaces digitales. Trabaja en implementación de sitios web, optimización de performance y adaptación responsive, integrando aspectos técnicos con necesidades de diseño y producto. Colabora con equipos interdisciplinarios para llevar experiencias digitales del concepto a la ejecución, priorizando funcionalidad, accesibilidad y mejoras continuas."
        },
        read_more: "Ver más",
        read_less: "Ver menos"
      },
      contact: {
        title: "¿Listo para escalar tu negocio?",
        subtitle: "Hablemos sobre cómo podemos transformar tu presencia digital y generar resultados reales.",
        location_label: "Ubicación",
        phone_label: "Teléfono",
        email_label: "Email",
        form: {
          title: "Envíanos un mensaje",
          name: "Nombre",
          name_placeholder: "Tu nombre",
          lastname: "Apellido",
          lastname_placeholder: "Tu apellido",
          email: "Correo",
          email_placeholder: "nombre@ejemplo.com",
          phone: "Teléfono",
          phone_placeholder: "11 1234 5678",
          message: "Mensaje",
          message_placeholder: "¿Cómo podemos ayudarte?",
          submit: "Enviar Mensaje por WhatsApp"
        }
      },
      footer: {
        desc: "Transformamos ideas en experiencias digitales excepcionales. Innovación, diseño y tecnología al servicio de tu crecimiento.",
        explore: "Explorar",
        services: "Servicios",
        contact: "Contacto",
        copyright: "© 2026 Zenbyte Agency. Todos los derechos reservados.",
        privacy: "Privacidad",
        terms: "Términos"
      }
    }
  },
  en: {
    translation: {
      navbar: {
        home: "Home",
        team: "Team",
        services: "Services",
        chat: "Chat with us"
      },
      hero: {
        title_part1: "Digital solutions that",
        title_highlight1: "connect",
        title_part2: "create value and generate",
        title_highlight2: "impact",
        subtitle: "UX/UI consulting, technological development, and growth strategies for brands looking to lead the future.",
        cta: "Contact Us"
      },
      services: {
        section_title: "Premium Digital Solutions",
        ux_ui: {
          title: "UX/UI & Product Design",
          desc: "User-centered design that converts visitors into loyal customers.",
          details: [
            "User research & analysis",
            "Information architecture",
            "Interface design",
            "Prototyping and testing"
          ]
        },
        web_dev: {
          title: "Web Development & Technology",
          desc: "Robust, scalable, and high-performance websites and applications.",
          details: [
            "Corporate websites",
            "High-performance landing pages",
            "E-commerce",
            "Integrations and performance"
          ]
        },
        branding: {
          title: "Branding & Identity",
          desc: "We build memorable brands with impactful visual identity.",
          details: [
            "Brand strategy",
            "Visual identity",
            "Graphic systems",
            "Brand guidelines"
          ]
        },
        marketing: {
          title: "Marketing & Growth",
          desc: "Growth strategies based on data and tangible results.",
          details: [
            "Social media management",
            "Meta Ads",
            "Google Ads",
            "SEO"
          ]
        },
        ai: {
          title: "AI & Automation",
          desc: "We optimize processes by integrating advanced artificial intelligence.",
          details: [
            "Chatbots",
            "CRM automation",
            "Smart workflows",
            "AI integrations"
          ]
        },
        consulting: {
          title: "Strategic Digital Consulting",
          desc: "Expert advice for the digital transformation of your business.",
          details: [
            "Digital audit",
            "Tech stack definition",
            "Scalability strategy"
          ]
        }
      },
      team: {
        section_title: "Our Team",
        subtitle: "Creative minds behind every project",
        roles: {
          lead_designer: "Lead Designer",
          marketing_specialist: "Marketing Specialist",
          data_analytics: "Data Analytics",
          web_developer: "Web Developer"
        },
        descriptions: {
          kristina: "Multidisciplinary designer and Co-founder of a creative agency. Works in graphic design, UX/UI, branding, social media, and web development, creating people-centered digital solutions that strengthen brands and improve experiences. Her approach ranges from visual identities and multimedia content to responsive websites and digital strategies, accompanying companies in building a clear, current, and authentic online presence.",
          mehedi: "Digital marketing specialist focused on content, social media, and strategy. Develops campaigns oriented towards brand communication, engagement, and positioning, integrating analysis, creativity, and management across different digital channels. Accompanies companies in visibility and growth processes, structuring editorial lines, calendars, and narratives that connect with real audiences and business objectives.",
          carla: "Business Intelligence and data analysis consultant with experience in SQL, Power BI, and reporting. Specializes in transforming information into clear visualizations, key metrics, and actionable insights to support decision-making, performance, and growth. Has worked with internal teams and clients on analysis processes, dashboards, and data-driven strategies, accompanying commercial and operational objectives with clarity and focus.",
          diego: "Web developer with experience in Webflow, Ruby on Rails, and digital interface construction. Works on website implementation, performance optimization, and responsive adaptation, integrating technical aspects with design and product needs. Collaborates with interdisciplinary teams to take digital experiences from concept to execution, prioritizing functionality, accessibility, and continuous improvements."
        },
        read_more: "Read more",
        read_less: "Read less"
      },
      contact: {
        title: "Ready to scale your business?",
        subtitle: "Let's talk about how we can transform your digital presence and generate real results.",
        location_label: "Location",
        phone_label: "Phone",
        email_label: "Email",
        form: {
          title: "Send us a message",
          name: "Name",
          name_placeholder: "Your name",
          lastname: "Last Name",
          lastname_placeholder: "Your last name",
          email: "Email",
          email_placeholder: "name@example.com",
          phone: "Phone",
          phone_placeholder: "11 1234 5678",
          message: "Message",
          message_placeholder: "How can we help you?",
          submit: "Send Message via WhatsApp"
        }
      },
      footer: {
        desc: "We transform ideas into exceptional digital experiences. Innovation, design, and technology at the service of your growth.",
        explore: "Explore",
        services: "Services",
        contact: "Contact",
        copyright: "© 2026 Zenbyte Agency. All rights reserved.",
        privacy: "Privacy",
        terms: "Terms"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
