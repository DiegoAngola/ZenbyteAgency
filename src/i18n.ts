import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      navbar: {
        home: "Home",
        team: "Team",
        services: "Servicios",
        chat: "Chat with us"
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
          desc: "Diseño centrado en el usuario que convierte visitantes en clientes leales."
        },
        web_dev: {
          title: "Desarrollo Web & Tecnología",
          desc: "Sitios y aplicaciones robustas, escalables y de alto rendimiento."
        },
        branding: {
          title: "Branding & Identidad",
          desc: "Construimos marcas memorables con identidad visual impactante."
        },
        marketing: {
          title: "Marketing & Growth",
          desc: "Estrategias de crecimiento basadas en datos y resultados tangibles."
        },
        ai: {
          title: "IA & Automatización",
          desc: "Optimizamos procesos integrando inteligencia artificial avanzada."
        },
        consulting: {
          title: "Consultoría Digital Estratégica",
          desc: "Asesoramiento experto para la transformación digital de tu negocio."
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
        }
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
          desc: "User-centered design that converts visitors into loyal customers."
        },
        web_dev: {
          title: "Web Development & Technology",
          desc: "Robust, scalable, and high-performance websites and applications."
        },
        branding: {
          title: "Branding & Identity",
          desc: "We build memorable brands with impactful visual identity."
        },
        marketing: {
          title: "Marketing & Growth",
          desc: "Growth strategies based on data and tangible results."
        },
        ai: {
          title: "AI & Automation",
          desc: "We optimize processes by integrating advanced artificial intelligence."
        },
        consulting: {
          title: "Strategic Digital Consulting",
          desc: "Expert advice for the digital transformation of your business."
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
        }
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
