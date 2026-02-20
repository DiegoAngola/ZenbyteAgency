/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useTranslation } from 'react-i18next';
import { 
  Linkedin, 
  Instagram, 
  MessageCircle, 
  ArrowRight, 
  Menu, 
  X, 
  Code, 
  Palette, 
  Smartphone, 
  TrendingUp, 
  Cpu, 
  Lightbulb,
  MapPin,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

export default function App() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, telefono: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, apellido, email, telefono, mensaje } = formData;
    
    const text = `Hola Zenbyte Agency, mi nombre es ${nombre} ${apellido}.
Email: ${email}
Teléfono: +${telefono}

Mensaje:
${mensaje}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5491170670047?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

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

  const team = [
    {
      name: "Kristina Berrios",
      role: t('team.roles.lead_designer'),
      img: "https://zenbyteagency.com.ar/wp-content/uploads/2026/01/envato-labs-image-edit-4.png",
      linkedin: "https://www.linkedin.com/in/kristina-berrios-esteller/"
    },
    {
      name: "Mehedi Hassan",
      role: t('team.roles.marketing_specialist'),
      img: "https://zenbyteagency.com.ar/wp-content/uploads/2026/01/envato-labs-image-edit-2.png",
      linkedin: "https://www.linkedin.com/in/b%C3%A1rbara-hromin-ciccone-1728531a1/"
    },
    {
      name: "Carla Ríos",
      role: t('team.roles.data_analytics'),
      img: "https://zenbyteagency.com.ar/wp-content/uploads/2026/01/envato-labs-image-edit-1-2.png",
      linkedin: "https://www.linkedin.com/in/carla-rios-0366b868/"
    },
    {
      name: "Diego Angola",
      role: t('team.roles.web_developer'),
      img: "https://zenbyteagency.com.ar/wp-content/uploads/2026/01/envato-labs-image-edit-8-2048x2048.png",
      linkedin: "https://www.linkedin.com/in/diegodavidangola/"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00E5FF] selection:text-black overflow-x-hidden">
      
 {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white">ZENBYTE</span>
              <span className="font-display font-light text-xl sm:text-2xl tracking-wider text-gray-400 ml-2">AGENCY</span>
            </div>

            {/* Desktop Menu - Optimizado con lg:flex para evitar amontonamiento en tablet */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-[#00E5FF] transition-colors text-sm uppercase tracking-widest font-medium">{t('navbar.home')}</a>
              <a href="#team" className="text-gray-300 hover:text-[#00E5FF] transition-colors text-sm uppercase tracking-widest font-medium">{t('navbar.team')}</a>
              <a href="#services" className="text-gray-300 hover:text-[#00E5FF] transition-colors text-sm uppercase tracking-widest font-medium">{t('navbar.services')}</a>
            </div>

            {/* Right Actions - Ajustado con lg:space-x-6 y space-x-3 */}
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
              <button className="px-4 lg:px-6 py-2 border border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-all duration-300 text-[10px] lg:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                {t('navbar.chat')}
              </button>
            </div>

            {/* Mobile menu button - Ahora se activa antes de que el menú colisione */}
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
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t('navbar.home')}</a>
              <a href="#team" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t('navbar.team')}</a>
              <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t('navbar.services')}</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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
            <a href="#contact" className="inline-block px-10 py-4 bg-[#00E5FF] text-black font-bold uppercase tracking-widest hover:bg-[#00cce6] transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)]">
              {t('hero.cta')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
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

      {/* Team Section */}
      <section id="team" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{t('team.section_title')}</h2>
            <p className="text-gray-400">{t('team.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-black border border-white/5 p-6 text-center group hover:border-[#00E5FF]/50 transition-colors duration-300">
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
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-[#00E5FF] text-sm font-medium mb-4">{member.role}</p>
                <div className="flex justify-center">
                  <ArrowRight className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00E5FF]/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{t('contact.title')}</h2>
              <p className="text-xl text-gray-400 mb-8 font-light">
                {t('contact.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-lg border border-white/10">
                    <MapPin className="text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t('contact.location_label')}</p>
                    <p className="font-medium">Ciudad Autónoma de Buenos Aires</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-lg border border-white/10">
                    <Phone className="text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t('contact.phone_label')}</p>
                    <p className="font-medium">(+54) 9 11 7067-0047</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-lg border border-white/10">
                    <Mail className="text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t('contact.email_label')}</p>
                    <p className="font-medium">hello@zenbyteagency.com.ar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* White Box Form */}
            <div className="bg-white text-black p-8 md:p-10 shadow-2xl rounded-sm">
              <h3 className="text-2xl font-bold mb-6 font-display">{t('contact.form.title')}</h3>
              <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{t('contact.form.name')}</label>
                    <input 
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all" 
                      placeholder={t('contact.form.name_placeholder')} 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{t('contact.form.lastname')}</label>
                    <input 
                      type="text" 
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all" 
                      placeholder={t('contact.form.lastname_placeholder')} 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{t('contact.form.email')}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all" 
                      placeholder={t('contact.form.email_placeholder')} 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{t('contact.form.phone')}</label>
                    <div className="text-black">
                      <PhoneInput
                        country={'ar'}
                        value={formData.telefono}
                        onChange={handlePhoneChange}
                        inputStyle={{
                          width: '100%',
                          height: '50px',
                          fontSize: '16px',
                          paddingLeft: '48px',
                          backgroundColor: 'rgb(249 250 251)',
                          borderColor: 'rgb(229 231 235)',
                          borderRadius: '0px'
                        }}
                        buttonStyle={{
                          backgroundColor: 'rgb(249 250 251)',
                          borderColor: 'rgb(229 231 235)',
                          borderRadius: '0px'
                        }}
                        dropdownStyle={{
                          color: 'black'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{t('contact.form.message')}</label>
                  <textarea 
                    rows={4} 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all" 
                    placeholder={t('contact.form.message_placeholder')}
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-[#00E5FF] text-black font-bold uppercase tracking-widest py-4 hover:bg-[#00cce6] transition-colors">
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center mb-6">
                <span className="font-display font-bold text-2xl tracking-wider text-white">ZENBYTE</span>
                <span className="font-display font-light text-2xl tracking-wider text-gray-400 ml-2">AGENCY</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('footer.desc')}
              </p>
            </div>

            {/* Column 2: Links */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">{t('footer.explore')}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-[#00E5FF] transition-colors">{t('navbar.home')}</a></li>
                <li><a href="#services" className="hover:text-[#00E5FF] transition-colors">{t('navbar.services')}</a></li>
                <li><a href="#team" className="hover:text-[#00E5FF] transition-colors">{t('navbar.team')}</a></li>
                <li><a href="#contact" className="hover:text-[#00E5FF] transition-colors">{t('footer.contact')}</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">{t('footer.services')}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#00E5FF] transition-colors">UX/UI Design</a></li>
                <li><a href="#" className="hover:text-[#00E5FF] transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-[#00E5FF] transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-[#00E5FF] transition-colors">Consultoría IT</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">{t('footer.contact')}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
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

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-white transition-colors text-sm">{t('footer.privacy')}</a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors text-sm">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

