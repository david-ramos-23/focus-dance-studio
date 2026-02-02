import React from 'react';
import { MapPin, Mail, Instagram, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-carbonBlack text-warmWhite relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-deepGreen/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">ÚNETE AL <br/>MOVIMIENTO</h2>
            <p className="font-sans text-neutralGrey mb-10 max-w-md">
              ¿Tienes dudas sobre qué nivel escoger? Escríbenos o pásate por la escuela. Estamos aquí para guiarte.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-deepGreen mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Ubicación</h4>
                  <p className="text-neutralGrey text-sm">Carrer de Pavia 50–52,<br/>08028 Barcelona</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-deepGreen mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:hola@focusdancestudio.com" className="text-neutralGrey text-sm hover:text-white transition-colors">hola@focusdancestudio.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-deepGreen mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Teléfono</h4>
                  <p className="text-neutralGrey text-sm">+34 93 123 45 67</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Síguenos</h4>
                <a href="#" className="inline-block p-3 border border-neutralGrey/30 rounded-full hover:bg-deepGreen hover:border-deepGreen transition-colors">
                    <Instagram size={20} />
                </a>
            </div>
          </div>

          <div className="relative h-full min-h-[400px]">
            {/* Embedded Google Map */}
            <div className="w-full h-full bg-neutral-900 rounded-sm border border-neutralGrey/20 overflow-hidden relative group grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.0804873767843!2d2.1278248772299477!3d41.372335996926985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4988e09b24823%3A0x6ab0d52847fe829a!2sCarrer%20de%20Pavia%2C%2050%2C%2052%2C%20Sants-Montju%C3%AFc%2C%2008028%20Barcelona!5e0!3m2!1ses!2ses!4v1769997428649!5m2!1ses!2ses" 
                  className="w-full h-full border-0 absolute inset-0" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Focus Dance Studio Location"
                ></iframe>
                
                {/* Overlay text that disappears on hover */}
                <div className="absolute inset-0 bg-carbonBlack/50 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                    <span className="font-display font-bold text-white tracking-widest bg-carbonBlack/80 px-4 py-2 backdrop-blur-sm rounded-sm">VER MAPA</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Strip */}
      <div className="border-t border-white/10 py-8 text-center text-xs text-neutralGrey font-sans">
        <p>&copy; {new Date().getFullYear()} Focus Dance Studio. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Política de Privacidad</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;