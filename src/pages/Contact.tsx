import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

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

  return (
    <section id="contact" className="py-32 relative overflow-hidden min-h-screen flex items-center bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00E5FF]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">{t('contact.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 font-light">
              {t('contact.subtitle')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                <div className="w-12 h-12 bg-white dark:bg-white/5 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
                  <MapPin className="text-[#00E5FF]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t('contact.location_label')}</p>
                  <p className="font-medium">Ciudad Autónoma de Buenos Aires</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                <div className="w-12 h-12 bg-white dark:bg-white/5 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
                  <Phone className="text-[#00E5FF]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t('contact.phone_label')}</p>
                  <p className="font-medium">(+54) 9 11 7067-0047</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                <div className="w-12 h-12 bg-white dark:bg-white/5 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
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
          <div className="bg-white text-black p-8 md:p-10 shadow-xl dark:shadow-2xl rounded-sm border border-gray-100 dark:border-transparent">
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
  );
}
