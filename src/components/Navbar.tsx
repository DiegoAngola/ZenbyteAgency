import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Linkedin, 
  Instagram, 
  MessageCircle, 
  Menu, 
  X, 
  Globe
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `text-sm uppercase tracking-widest font-medium transition-colors ${isActive ? 'text-[#00E5FF]' : 'text-gray-300 hover:text-[#00E5FF]'}`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white">ZENBYTE</span>
            <span className="font-display font-light text-xl sm:text-2xl tracking-wider text-gray-400 ml-2">AGENCY</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>{t('navbar.home')}</NavLink>
            <NavLink to="/team" className={navLinkClass}>{t('navbar.team')}</NavLink>
            <NavLink to="/services" className={navLinkClass}>{t('navbar.services')}</NavLink>
            <NavLink to="/contact" className={navLinkClass}>{t('footer.contact')}</NavLink>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center lg:space-x-6 space-x-3">
            <button 
              onClick={toggleLanguage}
              className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center space-x-1"
            >
              <Globe size={18} />
              <span className="text-xs font-bold uppercase">{i18n.language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <div className="flex space-x-3 lg:space-x-4">
              <a href="https://www.linkedin.com/company/zenbyte-agency/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00E5FF] transition-colors"><Linkedin size={18} /></a>
              <a href="https://wa.me/5491170670047" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00E5FF] transition-colors"><MessageCircle size={18} /></a>
              <a href="https://www.instagram.com/zenbyte_agency/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00E5FF] transition-colors"><Instagram size={18} /></a>
            </div>
            <Link to="/contact" className="px-4 lg:px-6 py-2 border border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-all duration-300 text-[10px] lg:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
              {t('navbar.chat')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center space-x-1"
            >
              <Globe size={24} />
              <span className="text-xs font-bold uppercase">{i18n.language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-black border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t('navbar.home')}</Link>
            <Link to="/team" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t('navbar.team')}</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t('navbar.services')}</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t('footer.contact')}</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
