import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80"></div>
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', 
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
          className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-8"
        >
          {t('hero.title_part1')} <span className="text-[#00E5FF]">{t('hero.title_highlight1')}</span>, <br className="hidden md:block" />
          {t('hero.title_part2')} <span className="text-purple-500">{t('hero.title_highlight2')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light"
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
