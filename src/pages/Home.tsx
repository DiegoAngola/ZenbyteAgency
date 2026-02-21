import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Megaphone, Layout, BarChart3, Bot } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <CollaborationSection />
    </>
  );
}

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-white dark:bg-black transition-colors duration-300">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200 via-white to-white dark:from-gray-900 dark:via-black dark:to-black opacity-80"></div>
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
        {/* Circuit-like lines (decorative) */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 H 200 V 300 H 500" stroke="#00E5FF" strokeWidth="2" fill="none" />
          <path d="M1000 600 H 800 V 400 H 600" stroke="#00E5FF" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-8 text-gray-900 dark:text-white"
        >
          {t('hero.title_part1')} <span className="text-[#00E5FF]">{t('hero.title_highlight1')}</span>, <br className="hidden md:block" />
          {t('hero.title_part2')} <span className="text-purple-600 dark:text-purple-500">{t('hero.title_highlight2')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 font-light"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <Link to="/contact" className="inline-block px-10 py-4 bg-[#00E5FF] text-black font-bold uppercase tracking-widest hover:bg-[#00cce6] transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
              {t('about.title')}
            </h2>
            <h3 className="text-xl text-[#00E5FF] font-medium mb-6">
              {t('about.subtitle')}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>{t('about.desc1')}</p>
              <p>{t('about.desc2')}</p>
              <p>{t('about.desc3')}</p>
            </div>
          </div>
          <div className="relative h-64 lg:h-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black border border-gray-200 dark:border-white/10 flex items-center justify-center transition-colors duration-300">
             {/* Abstract visual representation */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
             <div className="grid grid-cols-2 gap-4 p-8 relative z-10">
                <div className="w-32 h-32 rounded-xl border border-[#00E5FF]/30 bg-[#00E5FF]/5 flex flex-col items-center justify-center text-center p-4 backdrop-blur-sm hover:bg-[#00E5FF]/10 transition-colors">
                  <Megaphone className="w-10 h-10 text-[#00E5FF] mb-2" />
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-bold uppercase">Marketing</span>
                </div>
                <div className="w-32 h-32 rounded-xl border border-purple-500/30 bg-purple-500/5 flex flex-col items-center justify-center text-center p-4 backdrop-blur-sm hover:bg-purple-500/10 transition-colors">
                  <Layout className="w-10 h-10 text-purple-600 dark:text-purple-500 mb-2" />
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-bold uppercase">Web & UX</span>
                </div>
                <div className="w-32 h-32 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex flex-col items-center justify-center text-center p-4 backdrop-blur-sm hover:bg-emerald-500/10 transition-colors">
                  <BarChart3 className="w-10 h-10 text-emerald-600 dark:text-emerald-500 mb-2" />
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-bold uppercase">Data</span>
                </div>
                <div className="w-32 h-32 rounded-xl border border-orange-500/30 bg-orange-500/5 flex flex-col items-center justify-center text-center p-4 backdrop-blur-sm hover:bg-orange-500/10 transition-colors">
                  <Bot className="w-10 h-10 text-orange-600 dark:text-orange-500 mb-2" />
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-bold uppercase">AI & Auto</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodologySection() {
  const { t } = useTranslation();
  const steps = [
    { key: 'understand', color: 'bg-blue-500' },
    { key: 'design', color: 'bg-purple-500' },
    { key: 'execute', color: 'bg-[#00E5FF]' },
    { key: 'optimize', color: 'bg-emerald-500' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
          {t('methodology.title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          {t('methodology.subtitle')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -z-10 transform -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white dark:bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all shadow-sm dark:shadow-none"
            >
              <div className={`w-12 h-12 ${step.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white dark:text-black font-bold text-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {t(`methodology.steps.${step.key}`)}
              </h3>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-12 text-gray-500 text-sm max-w-2xl mx-auto">
          {t('methodology.desc')}
        </p>
      </div>
    </section>
  );
}

function CollaborationSection() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-950 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-8">
          {t('collaboration.title')}
        </h2>
        <div className="bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {t('collaboration.desc')}
          </p>
          <p className="text-gray-500 dark:text-gray-400 font-light">
            {t('collaboration.flexibility')}
          </p>
        </div>
      </div>
    </section>
  );
}
