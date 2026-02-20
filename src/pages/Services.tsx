import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Palette, Code, Lightbulb, TrendingUp, Cpu, Smartphone } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.ux_ui.title'),
      desc: t('services.ux_ui.desc'),
      borderColor: "border-[#00E5FF]", // Cyan
      icon: <Palette className="w-8 h-8 text-[#00E5FF]" />
    },
    {
      title: t('services.web_dev.title'),
      desc: t('services.web_dev.desc'),
      borderColor: "border-blue-600", // Royal Blue
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      title: t('services.branding.title'),
      desc: t('services.branding.desc'),
      borderColor: "border-pink-500", // Pink/Magenta
      icon: <Lightbulb className="w-8 h-8 text-pink-500" />
    },
    {
      title: t('services.marketing.title'),
      desc: t('services.marketing.desc'),
      borderColor: "border-emerald-400", // Mint Green
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />
    },
    {
      title: t('services.ai.title'),
      desc: t('services.ai.desc'),
      borderColor: "border-orange-500", // Red/Orange
      icon: <Cpu className="w-8 h-8 text-orange-500" />
    },
    {
      title: t('services.consulting.title'),
      desc: t('services.consulting.desc'),
      borderColor: "border-yellow-400", // Yellow
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />
    }
  ];

  return (
    <section id="services" className="py-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{t('services.section_title')}</h2>
          <div className="w-24 h-1 bg-[#00E5FF] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className={`bg-white/5 p-8 border-t-4 ${service.borderColor} hover:bg-white/10 transition-all duration-300 group`}
            >
              <div className="mb-6 bg-black/50 w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
