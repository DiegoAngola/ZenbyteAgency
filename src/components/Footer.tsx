import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center mb-6">
              <span className="font-display font-bold text-2xl tracking-wider text-gray-900 dark:text-white">ZENBYTE</span>
              <span className="font-display font-light text-2xl tracking-wider text-gray-500 dark:text-gray-400 ml-2">AGENCY</span>
            </div>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest mb-6 text-sm">{t('footer.explore')}</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/" className="hover:text-[#00E5FF] transition-colors">{t('navbar.home')}</Link></li>
              <li><Link to="/services" className="hover:text-[#00E5FF] transition-colors">{t('navbar.services')}</Link></li>
              <li><Link to="/team" className="hover:text-[#00E5FF] transition-colors">{t('navbar.team')}</Link></li>
              <li><Link to="/contact" className="hover:text-[#00E5FF] transition-colors">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest mb-6 text-sm">{t('footer.services')}</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/services" className="hover:text-[#00E5FF] transition-colors">UX/UI Design</Link></li>
              <li><Link to="/services" className="hover:text-[#00E5FF] transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-[#00E5FF] transition-colors">Marketing Digital</Link></li>
              <li><Link to="/services" className="hover:text-[#00E5FF] transition-colors">Consultoría IT</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest mb-6 text-sm">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-[#00E5FF]" />
                <span>Ciudad Autónoma de Buenos Aires</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-[#00E5FF]" />
                <span>(+54) 9 11 7067-0047</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-[#00E5FF]" />
                <span>hello@zenbyteagency.com.ar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-600 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 dark:text-gray-600 hover:text-black dark:hover:text-white transition-colors text-sm">{t('footer.privacy')}</a>
            <a href="#" className="text-gray-500 dark:text-gray-600 hover:text-black dark:hover:text-white transition-colors text-sm">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
