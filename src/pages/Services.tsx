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
      details: t('services.ux_ui.details', { returnObjects: true }) as string[],
      borderColor: "border-[#00E5FF]", // Cyan
      icon: <Palette className="w-8 h-8 text-[#00E5FF]" />
    },
    {
      title: t('services.web_dev.title'),
      desc: t('services.web_dev.desc'),
      details: t('services.web_dev.details', { returnObjects: true }) as string[],
      borderColor: "border-blue-600", // Royal Blue
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      title: t('services.branding.title'),
      desc: t('services.branding.desc'),
      details: t('services.branding.details', { returnObjects: true }) as string[],
      borderColor: "border-pink-500", // Pink/Magenta
      icon: <Lightbulb className="w-8 h-8 text-pink-500" />
    },
    {
      title: t('services.marketing.title'),
      desc: t('services.marketing.desc'),
      details: t('services.marketing.details', { returnObjects: true }) as string[],
      borderColor: "border-emerald-400", // Mint Green
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />
    },
    {
      title: t('services.ai.title'),
      desc: t('services.ai.desc'),
      details: t('services.ai.details', { returnObjects: true }) as string[],
      borderColor: "border-orange-500", // Red/Orange
      icon: <Cpu className="w-8 h-8 text-orange-500" />
    },
    {
      title: t('services.consulting.title'),
      desc: t('services.consulting.desc'),
      details: t('services.consulting.details', { returnObjects: true }) as string[],
      borderColor: "border-yellow-400", // Yellow
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />
    }
  ];

  return (
    <section id="services" className="py-32 bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">{t('services.section_title')}</h2>
          <div className="w-24 h-1 bg-[#00E5FF] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className={`bg-gray-50 dark:bg-white/5 p-8 border-t-4 ${service.borderColor} hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 group shadow-sm dark:shadow-none`}
            >
              <div className="mb-6 bg-white dark:bg-black/50 w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300 shadow-sm dark:shadow-none border border-gray-100 dark:border-transparent">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-4">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-500 dark:text-gray-500 text-sm flex items-start">
                    <span className="mr-2 text-[#00E5FF]">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
