import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Team() {
  const { t } = useTranslation();
  // Estado para manejar qué miembro está expandido de forma individual
  const [expandedMembers, setExpandedMembers] = useState({});

  const toggleMember = (index) => {
    setExpandedMembers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const team = [
    {
      name: "Kristina Berrios",
      role: t('team.roles.lead_designer'),
      desc: t('team.descriptions.kristina'),
      img: "https://zenbyteagency.com.ar/wp-content/uploads/2026/01/envato-labs-image-edit-4.png",
      linkedin: "https://www.linkedin.com/in/kristina-berrios-esteller/"
    },
    {
      name: "Barbara Hronim",
      role: t('team.roles.marketing_specialist'),
      desc: t('team.descriptions.mehedi'),
      img: "https://zenbyteagency.com.ar/wp-content/uploads/2026/01/envato-labs-image-edit-2.png",
      linkedin: "https://www.linkedin.com/in/b%C3%A1rbara-hromin-ciccone-1728531a1/"
    },
    {
      name: "Carla Ríos",
      role: t('team.roles.data_analytics'),
      desc: t('team.descriptions.carla'),
      img: "https://zenbyteagency.com.ar/wp-content/uploads/2026/01/envato-labs-image-edit-1-2.png",
      linkedin: "https://www.linkedin.com/in/carla-rios-0366b868/"
    },
    {
      name: "Diego Angola",
      role: t('team.roles.web_developer'),
      desc: t('team.descriptions.diego'),
      img: "https://zenbyteagency.com.ar/wp-content/uploads/2026/01/envato-labs-image-edit-8-2048x2048.png",
      linkedin: "https://www.linkedin.com/in/diegodavidangola/"
    }
  ];

  return (
    <section id="team" className="py-32 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {t('team.section_title')}
          </h2>
          <p className="text-gray-400">{t('team.subtitle')}</p>
        </div>

        {/* IMPORTANTE: 'items-start' es lo que evita que todas las tarjetas 
            de la misma fila crezcan cuando una sola se expande.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-black border border-white/5 p-6 text-center group hover:border-[#00E5FF]/50 transition-all duration-300 flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-full border-2 border-gray-800 group-hover:border-[#00E5FF] transition-colors duration-300 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="absolute bottom-0 right-0 bg-[#00E5FF] p-1.5 rounded-full text-black hover:bg-white transition-colors"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <Linkedin size={14} />
                </a>
              </div>

              <div className="w-full">
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-[#00E5FF] text-sm font-medium mb-3">{member.role}</p>
                
                <div className="relative">
                  {/* Animación de la descripción */}
                  <motion.div
                    initial={false}
                    animate={{ height: expandedMembers[index] ? 'auto' : '4.5rem' }} // '4.5rem' equivale a ~3 líneas
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.desc}
                    </p>
                  </motion.div>
                  
                  <button 
                    onClick={() => toggleMember(index)}
                    className="text-[#00E5FF] text-xs font-bold uppercase tracking-wider flex items-center justify-center hover:text-white transition-colors mt-4 mx-auto"
                  >
                    {expandedMembers[index] ? (
                      <>
                        {t('team.read_less')} <ChevronUp size={14} className="ml-1" />
                      </>
                    ) : (
                      <>
                        {t('team.read_more')} <ChevronDown size={14} className="ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}